import { Serializer } from './Serializer.js';
import { numberToPX } from './Utils.js';

export class Node extends Serializer {

	static get type() {

		return 'Node';

	}

	constructor() {

		super();

		const dom = document.createElement( 'f-node' );

		const onDown = () => {

			const canvas = this.canvas;

			if ( canvas !== null ) {

				canvas.select( this );

			}

		};

		dom.addEventListener( 'mousedown', onDown, true );
		dom.addEventListener( 'touchstart', onDown, true );

		this._onConnect = ( e ) => {

			const { target } = e;

			for ( const element of this.elements ) {

				if ( element !== target ) {

					element.dispatchEvent( new Event( 'nodeConnect' ) );

				}

			}

		};

		this._onConnectChildren = ( e ) => {

			const { target } = e;

			for ( const element of this.elements ) {

				if ( element !== target ) {

					element.dispatchEvent( new Event( 'nodeConnectChildren' ) );

				}

			}

		};

		this._onResize = () => {

			this.updateSize();

		};

		this.dom = dom;

		this.style = '';

		this.canvas = null;
		this.resizable = false;
		this.serializePriority = 0;

		this.elements = [];

		this.events = {
			'focus': [],
			'blur': []
		};

		this._bounds = {
			x: 0, y: 0, width: 0, height: 0,
			_x: 0, _y: 0, _width: 0, _height: 0 // cached values
		};

		this.setWidth( 300 ).setPosition( 0, 0 );

	}

	get baseElement() {

		return this.elements[ 0 ];

	}

	setAlign( align ) {

		const dom = this.dom;
		const style = dom.style;

		style.left = '';
		style.top = '';
		style.animation = 'none';

		if ( typeof align === 'string' ) {

			dom.classList.add( align );

		} else if ( align ) {

			for ( const name in align ) {

				style[ name ] = align[ name ];

			}

		}

		return this;

	}

	setResizable( val ) {

		this.resizable = val === true;

		if ( this.resizable ) {

			this.dom.classList.add( 'resizable' );

		} else {

			this.dom.classList.remove( 'resizable' );

		}

		this.updateSize();

		return this;

	}

	onFocus( callback ) {

		this.events.focus.push( callback );

		return this;

	}

	onBlur( callback ) {

		this.events.blur.push( callback );

		return this;

	}

	setStyle( style ) {

		const dom = this.dom;

		if ( this.style ) dom.classList.remove( this.style );

		if ( style ) dom.classList.add( style );

		this.style = style;

		return this;

	}

	setPosition( x, y ) {

		const dom = this.dom;

		dom.style.left = numberToPX( x );
		dom.style.top = numberToPX( y );

		this._bounds._x = x;
		this._bounds._y = y;

		return this;

	}

	getPosition() {

		this._bounds.x = this._bounds._x;
		this._bounds.y = this._bounds._y;

		return this._bounds;

	}

	setWidth( val ) {

		this.dom.style.width = numberToPX( val );

		this._bounds._width = val;

		this.updateSize();

		return this;

	}

	getWidth() {

		this._bounds.width = this._bounds._width;

		return this._bounds.width;

	}

	getHeight() {

		return this.getBounds().height;

	}

	getBounds() {

		const bounds = this._bounds;
		bounds.x = bounds._x;
		bounds.y = bounds._y;
		bounds.width = bounds._width;
		bounds.height = bounds._height;

		if ( this.canvas !== null ) {

			const { scrollLeft, scrollTop } = this.canvas;

			bounds.x += scrollLeft;
			bounds.y += scrollTop;

		}

		return bounds;

	}

	add( element ) {

		this.elements.push( element );

		element.node = this;
		element.addEventListener( 'connect', this._onConnect );
		element.addEventListener( 'connectChildren', this._onConnectChildren );
		element.addEventListener( 'resize', this._onResize );

		this.dom.append( element.dom );

		this.updateSize();

		return this;

	}

	remove( element ) {

		this.elements.splice( this.elements.indexOf( element ), 1 );

		element.node = null;
		element.removeEventListener( 'connect', this._onConnect );
		element.removeEventListener( 'connectChildren', this._onConnectChildren );
		element.removeEventListener( 'resize', this._onResize );

		this.dom.removeChild( element.dom );

		this.updateSize();

		return this;

	}

	dispose() {

		const canvas = this.canvas;

		if ( canvas !== null ) canvas.remove( this );

		for ( const element of this.elements ) {

			element.dispose();

		}

		this.dispatchEvent( new Event( 'dispose' ) );

	}

	isCircular( node ) {

		if ( node === this ) return true;

		const links = this.getLinks();

		for ( const link of links ) {

			if ( link.outputElement.node.isCircular( node ) ) {

				return true;

			}

		}

		return false;

	}

	getLinks() {

		const links = [];

		for ( const element of this.elements ) {

			links.push( ...element.links );

		}

		return links;

	}

	getColor() {

		return this.elements.length > 0 ? this.elements[ 0 ].getColor() : null;

	}

	getOuterSize() {

		return 6;

	}

	updateSize() {

		let offsetY = 0;

		for ( const element of this.elements ) {

			element.dom.style.width = '';
			element._bounds._y = offsetY;

			offsetY += element.getHeight() + Node.BORDER;

		}

		this._bounds._height = offsetY;

		//

		if ( this.resizable === true ) {

			const element = this.elements[ this.elements.length - 1 ];

			if ( element !== undefined ) {

				element.dom.style.width = this.dom.style.width;

			}

		}

	}

	serialize( data ) {

		const { x, y } = this.getPosition();

		const elements = [];

		for ( const element of this.elements ) {

			elements.push( element.toJSON( data ).id );

		}

		data.x = x;
		data.y = y;
		data.width = this.getWidth();
		data.elements = elements;
		data.autoResize = this.resizable;

		if ( this.style !== '' ) {

			data.style = this.style;

		}

	}

	deserialize( data ) {

		this.setPosition( data.x, data.y );
		this.setWidth( data.width );
		this.setResizable( data.autoResize );

		if ( data.style !== undefined ) {

			this.setStyle( data.style );

		}

		const elements = this.elements;

		if ( elements.length > 0 ) {

			let index = 0;

			for ( const id of data.elements ) {

				data.objects[ id ] = elements[ index ++ ];

			}

		} else {

			for ( const id of data.elements ) {

				this.add( data.objects[ id ] );

			}

		}

	}

}

Node.prototype.isNode = true;
Node.BORDER = 6;
