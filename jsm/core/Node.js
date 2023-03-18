import { Serializer } from './Serializer.js';
import { numberToPX } from './Utils.js';

export class Node extends Serializer {

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

		this.dom = dom;

		this.style = '';

		this.canvas = null;
		this.resizable = false;

		this.elements = [];

		this.events = {
			'focus': [],
			'blur': []
		};

		this.setWidth( 300 ).setPosition( 0, 0 );

	}

	get baseElement() {

		return this.elements[ 0 ];

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

		return this;

	}

	getPosition() {

		const dom = this.dom;

		return {
			x: parseInt( dom.style.left ),
			y: parseInt( dom.style.top )
		};

	}

	setWidth( val ) {

		this.dom.style.width = numberToPX( val );

		this.updateSize();

		return this;

	}

	getWidth() {

		return parseInt( this.dom.style.width );

	}

	getHeight() {

		return this.dom.offsetHeight;

	}

	getBound() {

		const { x, y } = this.getPosition();
		const { width, height } = this.dom.getBoundingClientRect();

		return { x, y, width, height };

	}

	add( element ) {

		this.elements.push( element );

		element.node = this;
		element.addEventListener( 'connect', this._onConnect );
		element.addEventListener( 'connectChildren', this._onConnectChildren );

		this.dom.append( element.dom );

		this.updateSize();

		return this;

	}

	remove( element ) {

		this.elements.splice( this.elements.indexOf( element ), 1 );

		element.node = null;
		element.removeEventListener( 'connect', this._onConnect );
		element.removeEventListener( 'connectChildren', this._onConnectChildren );

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

	updateSize() {

		for ( const element of this.elements ) {

			element.dom.style.width = '';

		}

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
