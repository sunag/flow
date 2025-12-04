import { Serializer } from './Serializer.js';
import { numberToPX, numberToHex, draggableDOM, dispatchEventList } from './Utils.js';
import { Link } from './Link.js';

let selected = null;

const getBaseElement = ( nodeElement ) => nodeElement.baseElement || nodeElement;

export class Element extends Serializer {

	static get type() {

		return 'Element';

	}

	constructor( draggable = false ) {

		super();

		this.isElement = true;

		const dom = document.createElement( 'f-element' );
		dom.element = this;

		const onSelect = ( e ) => {

			let element = this;

			if ( e.changedTouches && e.changedTouches.length > 0 ) {

				const touch = e.changedTouches[ 0 ];

				let overDOM = document.elementFromPoint( touch.clientX, touch.clientY );

				while ( overDOM && ( ! overDOM.element || ! overDOM.element.isElement ) ) {

					overDOM = overDOM.parentNode;

				}

				element = overDOM ? overDOM.element : null;

			}

			const type = e.type;

			if ( ( type === 'mouseout' ) && selected === element ) {

				selected = null;

			} else {

				selected = element;

			}

		};

		if ( draggable === false ) {

			dom.ontouchstart = dom.onmousedown = ( e ) => {

				e.stopPropagation();

			};

		}

		dom.addEventListener( 'mouseup', onSelect, true );
		dom.addEventListener( 'mouseover', onSelect );
		dom.addEventListener( 'mouseout', onSelect );
		dom.addEventListener( 'touchmove', onSelect );
		dom.addEventListener( 'touchend', onSelect );

		this._bounds = {
			x: 0, y: 0, width: 0, height: 0,
			_x: 0, _y: 0, _width: 0, _height: 0 // cached values
		};

		this.inputs = [];

		this.links = [];

		this.dom = dom;

		this.lioLength = 0;
		this.rioLength = 0;

		this.events = {
			'connect': [],
			'connectChildren': [],
			'valid': []
		};

		this.node = null;

		this.style = '';
		this.color = null;

		this.object = null;
		this.objectCallback = null;

		this.enabledInputs = true;

		this.multiConnections = false;

		this.visible = true;

		this.inputsDOM = dom;

		this.connections = null;

		this.lioDOM = this._createIO( 'lio' );
		this.rioDOM = this._createIO( 'rio' );

		this.dom.classList.add( `input-${ Link.InputDirection }` );

		this.addEventListener( 'connect', ( ) => {

			dispatchEventList( this.events.connect, this );

		} );

		this.addEventListener( 'connectChildren', ( ) => {

			dispatchEventList( this.events.connectChildren, this );

		} );

		this.setHeight( 24 );

	}

	setAttribute( name, value ) {

		this.dom.setAttribute( name, value );

		return this;

	}

	onValid( callback ) {

		this.events.valid.push( callback );

		return this;

	}

	onConnect( callback, childrens = false ) {

		this.events.connect.push( callback );

		if ( childrens ) {

			this.events.connectChildren.push( callback );

		}

		return this;

	}

	setObjectCallback( callback ) {

		this.objectCallback = callback;

		return this;

	}

	setObject( value ) {

		this.object = value;

		return this;

	}

	getObject( output = null ) {

		return this.objectCallback ? this.objectCallback( output ) : this.object;

	}

	setVisible( value ) {

		this.visible = value;

		this.dom.style.display = value ? '' : 'none';

		return this;

	}

	getVisible() {

		return this.visible;

	}

	setEnabledInputs( value ) {

		const dom = this.dom;

		if ( ! this.enabledInputs ) dom.classList.remove( 'inputs-disable' );

		if ( ! value ) dom.classList.add( 'inputs-disable' );

		this.enabledInputs = value;

		return this;

	}

	getEnabledInputs() {

		return this.enabledInputs;

	}

	setColor( color ) {

		this.dom.style[ 'background-color' ] = numberToHex( color );
		this.color = null;

		return this;

	}

	getColor() {

		if ( this.color === null ) {

			const css = window.getComputedStyle( this.dom );

			this.color = css.getPropertyValue( 'background-color' );

		}

		return this.color;

	}

	setStyle( style ) {

		const dom = this.dom;

		if ( this.style ) dom.classList.remove( this.style );

		if ( style ) dom.classList.add( style );

		this.style = style;
		this.color = null;

		return this;

	}

	setMultiConnections( value ) {

		this.multiConnections = value;

		return this;

	}

	getMultiConnections() {

		return this.multiConnections;

	}

	setInput( length ) {

		if ( Link.InputDirection === 'left' ) {

			return this.setLIO( length );

		} else {

			return this.setRIO( length );

		}

	}

	setInputColor( color ) {

		if ( Link.InputDirection === 'left' ) {

			return this.setLIOColor( color );

		} else {

			return this.setRIOColor( color );

		}

	}

	setOutput( length ) {

		if ( Link.InputDirection === 'left' ) {

			return this.setRIO( length );

		} else {

			return this.setLIO( length );

		}

	}

	setOutputColor( color ) {

		if ( Link.InputDirection === 'left' ) {

			return this.setRIOColor( color );

		} else {

			return this.setLIOColor( color );

		}

	}

	get inputLength() {

		if ( Link.InputDirection === 'left' ) {

			return this.lioLength;

		} else {

			return this.rioLength;

		}

	}

	get outputLength() {

		if ( Link.InputDirection === 'left' ) {

			return this.rioLength;

		} else {

			return this.lioLength;

		}

	}

	setLIOColor( color ) {

		this.lioDOM.style[ 'border-color' ] = numberToHex( color );

		return this;

	}

	setLIO( length ) {

		this.lioLength = length;

		this.lioDOM.style.visibility = length > 0 ? '' : 'hidden';

		if ( length > 0 ) {

			this.dom.classList.add( 'lio' );
			this.dom.prepend( this.lioDOM );

		} else {

			this.dom.classList.remove( 'lio' );
			this.lioDOM.remove();

		}

		return this;

	}

	getLIOColor() {

		return this.lioDOM.style[ 'border-color' ];

	}

	setRIOColor( color ) {

		this.rioDOM.style[ 'border-color' ] = numberToHex( color );

		return this;

	}

	getRIOColor() {

		return this.rioDOM.style[ 'border-color' ];

	}

	setRIO( length ) {

		this.rioLength = length;

		this.rioDOM.style.visibility = length > 0 ? '' : 'hidden';

		if ( length > 0 ) {

			this.dom.classList.add( 'rio' );
			this.dom.prepend( this.rioDOM );

		} else {

			this.dom.classList.remove( 'rio' );
			this.rioDOM.remove();

		}

		return this;

	}

	add( input ) {

		this.inputs.push( input );

		input.element = this;

		this.inputsDOM.append( input.dom );

		return this;

	}

	setHeight( val ) {

		this.dom.style.height = numberToPX( val );

		this._bounds._height = val;

		this.dispatchEvent( new Event( 'resize' ) );

		return this;

	}

	getHeight() {

		return this._bounds._height;

	}

	getBounds() {

		const bounds = this._bounds;
		bounds.x = this._bounds._x;
		bounds.y = this._bounds._y;
		bounds.width = this._bounds._width;
		bounds.height = this._bounds._height;

		if ( this.node !== null ) {

			const nodeBounds = this.node.getBounds();
			bounds.x += nodeBounds.x;
			bounds.y += nodeBounds.y;
			bounds.width = nodeBounds.width;

		}

		return bounds;

	}

	getConnections() {

		return this.connections || ( this.connections = new Map() );

	}

	clear() {

		for ( const element of this.getConnections().keys() ) {

			this.disconnect( element );

		}

		return this;

	}

	disconnect( element ) {

		const connections = this.getConnections();

		element = getBaseElement( element );

		if ( ! connections.has( element ) ) return this;

		const { disconnectDOM } = connections.get( element );

		// remove the current input

		disconnectDOM.dispatchEvent( new Event( 'disconnect' ) );

		// re-update the connections

		this.dispatchEvent( new Event( 'connect' ) );

	}

	connect( element = null ) {

		if ( element === null ) return this.clear();

		element = getBaseElement( element );

		const connections = this.getConnections();

		if( this.multiConnections === false && connections.size > 0 ) this.clear();

		if ( connections.has( element ) ) {

			return this;

		}

		//

		if ( dispatchEventList( this.events.valid, this, element, 'connect' ) === false ) {

			return false;

		}

		//

		const disconnectDOM = document.createElement( 'f-disconnect' );
		disconnectDOM.innerHTML = Element.icons.unlink ? `<i class='${ Element.icons.unlink }'></i>` : '✖';

		this.dom.append( disconnectDOM );

		//

		const link = new Link( this, element, disconnectDOM );

		this.links.push( link );

		//

		connections.set( element, { disconnectDOM } );

		//

		const onDisconnect = () => {

			connections.delete( element );

			this.links.splice( this.links.indexOf( link ), 1 );

			this.dom.removeChild( disconnectDOM );

			disconnectDOM.removeEventListener( 'mousedown', onClick, true );
			disconnectDOM.removeEventListener( 'touchstart', onClick, true );
			disconnectDOM.removeEventListener( 'disconnect', onDisconnect, true );

			element.removeEventListener( 'connect', onConnect );
			element.removeEventListener( 'connectChildren', onConnect );
			element.removeEventListener( 'nodeConnect', onConnect );
			element.removeEventListener( 'nodeConnectChildren', onConnect );
			element.removeEventListener( 'dispose', onDispose );

		};

		const onConnect = () => {

			this.dispatchEvent( new Event( 'connectChildren' ) );

		};

		const onDispose = () => {

			this.disconnect( element );

		};

		const onClick = ( e ) => {

			e.stopPropagation();

			this.disconnect( element );

		};

		disconnectDOM.addEventListener( 'mousedown', onClick, true );
		disconnectDOM.addEventListener( 'touchstart', onClick, true );
		disconnectDOM.addEventListener( 'disconnect', onDisconnect, true );

		element.addEventListener( 'connect', onConnect );
		element.addEventListener( 'connectChildren', onConnect );
		element.addEventListener( 'nodeConnect', onConnect );
		element.addEventListener( 'nodeConnectChildren', onConnect );
		element.addEventListener( 'dispose', onDispose );

		this.dispatchEvent( new Event( 'connect' ) );

		return true;

	}

	dispose() {

		this.dispatchEvent( new Event( 'dispose' ) );

	}

	getInputByProperty( property ) {

		for ( const input of this.inputs ) {

			if ( input.getProperty() === property ) {

				return input;

			}

		}

	}

	serialize( data ) {

		const inputs = [];
		const properties = [];
		const links = [];

		for ( const input of this.inputs ) {

			const id = input.toJSON( data ).id;
			const property = input.getProperty();

			inputs.push( id );

			if ( property !== null ) {

				properties.push( { property, id } );

			}

		}

		for ( const link of this.links ) {

			if ( link.inputElement !== null && link.outputElement !== null ) {

				links.push( link.outputElement.toJSON( data ).id );

			}

		}

		if ( this.inputLength > 0 ) data.inputLength = this.inputLength;
		if ( this.outputLength > 0 ) data.outputLength = this.outputLength;

		if ( inputs.length > 0 ) data.inputs = inputs;
		if ( properties.length > 0 ) data.properties = properties;
		if ( links.length > 0 ) data.links = links;

		if ( this.style !== '' ) {

			data.style = this.style;

		}

		data.height = this.getHeight();

	}

	deserialize( data ) {

		if ( data.inputLength !== undefined ) this.setInput( data.inputLength );
		if ( data.outputLength !== undefined ) this.setOutput( data.outputLength );

		if ( data.properties !== undefined ) {

			for ( const { id, property } of data.properties ) {

				data.objects[ id ] = this.getInputByProperty( property );

			}

		} else if ( data.inputs !== undefined ) {

			const inputs = this.inputs;

			if ( inputs.length > 0 ) {

				let index = 0;

				for ( const id of data.inputs ) {

					data.objects[ id ] = inputs[ index ++ ];

				}

			} else {

				for ( const id of data.inputs ) {

					this.add( data.objects[ id ] );

				}

			}

		}

		if ( data.links !== undefined ) {

			for ( const id of data.links ) {

				this.connect( data.objects[ id ] );

			}

		}

		if ( data.style !== undefined ) {

			this.setStyle( data.style );

		}

		if ( data.height !== undefined ) {

			this.setHeight( data.height );

		}

	}

	getLinkedObject( output = null ) {

		const linkedElement = this.getLinkedElement();

		return linkedElement ? linkedElement.getObject( output ) : null;

	}

	getLinkedObjects( output = null ) {

		return this.getLinkedElements().map( ( element ) => element.getObject( output ) );

	}

	getLinkedElements() {

		return [ ...this.getConnections().keys() ];

	}

	getLinkedElement() {

		const link = this.getLink();

		return link ? link.outputElement : null;

	}

	getLink() {

		return this.links[ 0 ];

	}

	_createIO( type ) {

		const { dom } = this;

		const ioDOM = document.createElement( 'f-io' );
		ioDOM.style.visibility = 'hidden';
		ioDOM.className = type;

		const onConnectEvent = ( e ) => {

			e.preventDefault();

			e.stopPropagation();

			selected = null;

			const nodeDOM = this.node.dom;

			nodeDOM.classList.add( 'io-connect' );

			ioDOM.classList.add( 'connect' );
			dom.classList.add( 'select' );

			const defaultOutput = Link.InputDirection === 'left' ? 'lio' : 'rio';

			const link = type === defaultOutput ? new Link( this ) : new Link( null, this );
			const previewLink = new Link( link.inputElement, link.outputElement );

			this.links.push( link );

			draggableDOM( e, ( data ) => {

				if ( previewLink.outputElement )
					previewLink.outputElement.dom.classList.remove( 'invalid' );

				if ( previewLink.inputElement )
					previewLink.inputElement.dom.classList.remove( 'invalid' );

				previewLink.inputElement = link.inputElement;
				previewLink.outputElement = link.outputElement;

				if ( type === defaultOutput ) {

					previewLink.outputElement = selected;

				} else {

					previewLink.inputElement = selected;

				}

				const isInvalid = previewLink.inputElement !== null && previewLink.outputElement !== null &&
					previewLink.inputElement.inputLength > 0 && previewLink.outputElement.outputLength > 0 &&
					dispatchEventList( previewLink.inputElement.events.valid, previewLink.inputElement, previewLink.outputElement, data.dragging ? 'dragging' : 'dragged' ) === false;

				if ( data.dragging && isInvalid ) {

					if ( type === defaultOutput ) {

						if ( previewLink.outputElement )
							previewLink.outputElement.dom.classList.add( 'invalid' );

					} else {

						if ( previewLink.inputElement )
							previewLink.inputElement.dom.classList.add( 'invalid' );

					}

					return;

				}

				if ( ! data.dragging ) {

					nodeDOM.classList.remove( 'io-connect' );

					ioDOM.classList.remove( 'connect' );
					dom.classList.remove( 'select' );

					this.links.splice( this.links.indexOf( link ), 1 );

					if ( selected !== null && ! isInvalid ) {

						link.inputElement = previewLink.inputElement;
						link.outputElement = previewLink.outputElement;

						// check if is an is circular link

						if ( link.outputElement.node.isCircular( link.inputElement.node ) ) {

							return;

						}

						//

						if ( link.inputElement.inputLength > 0 && link.outputElement.outputLength > 0 ) {

							link.inputElement.connect( link.outputElement );

						}

					}

				}

			}, { className: 'connecting' } );

		};

		ioDOM.addEventListener( 'mousedown', onConnectEvent, true );
		ioDOM.addEventListener( 'touchstart', onConnectEvent, true );

		return ioDOM;

	}

}

Element.icons = { unlink: '' };
