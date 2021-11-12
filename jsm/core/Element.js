import { Serializer } from './Serializer.js';
import { toPX, draggableDOM, dispatchEventList } from './Utils.js';
import { Link } from './Link.js';

let selected = null;

export class Element extends Serializer {

	constructor( draggable = false ) {

		super();

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

			selected = element;

		};

		if ( draggable === false ) {

			dom.ontouchstart = dom.onmousedown = ( e ) => {

				e.stopPropagation();

			};

		}

		dom.addEventListener( 'mouseup', onSelect, true );
		dom.addEventListener( 'touchend', onSelect );

		this.inputs = [];

		this.links = [];

		this.dom = dom;

		this.lioLength = 0;
		this.rioLength = 0;

		this.events = {
			'connect': []
		};

		this.node = null;

		this.style = '';

		this.extra = null;

		this.inputsDOM = dom;

		this.disconnectDOM = null;

		this.lioDOM = this._createIO( 'lio' );
		this.rioDOM = this._createIO( 'rio' );

		this.dom.appendChild( this.lioDOM );
		this.dom.appendChild( this.rioDOM );

		this.addEventListener( 'connect', ( ) => {

			dispatchEventList( this.events.connect, this );

		} );

	}

	onConnect( callback ) {

		this.events.connect.push( callback );

		return this;

	}

	setExtra( value ) {
		
		this.extra = value;
		
		return this;
		
	}
	
	getExtra() {
		
		return this.extra;
		
	}

	setStyle( style ) {

		const dom = this.dom;

		if ( this.style ) dom.classList.remove( this.style );

		if ( style ) dom.classList.add( style );

		this.style = style;

		return this;

	}

	setInput( length ) {
		
		return this.setRIO( length );
		
	}
	
	setOutput( length ) {
		
		return this.setLIO( length );
		
	}

	get inputLength() {
		
		return this.rioLength;
		
	}
	
	get outputLength() {
		
		return this.lioLength;
		
	}

	setLIO( length ) {

		this.lioLength = length;

		this.lioDOM.style.visibility = length > 0 ? '' : 'hidden';

		return this;

	}

	setRIO( length ) {

		this.rioLength = length;

		this.rioDOM.style.visibility = length > 0 ? '' : 'hidden';

		return this;

	}

	add( input ) {

		this.inputs.push( input );

		input.element = this;

		this.inputsDOM.appendChild( input.dom );

		return this;

	}

	setHeight( val ) {

		this.dom.style.height = toPX( val );

		return this;

	}

	getHeight() {

		return this.dom.style.height;

	}

	connect( element = null ) {

		if ( this.disconnectDOM !== null ) {

			// remove the current input

			this.disconnectDOM.dispatchEvent( new Event( 'mousedown' ) );

		}

		if ( element !== null ) {

			const link = new Link( this, element );

			this.links.push( link );

			if ( this.disconnectDOM === null ) {

				this.disconnectDOM = document.createElement( 'f-disconnect' );
				this.disconnectDOM.innerText = '✖';
				this.dom.appendChild( this.disconnectDOM );

				const onClick = ( e ) => {

					e.stopPropagation();

					this.links = [];
					this.dom.removeChild( this.disconnectDOM );

					this.disconnectDOM = null;

				};

				this.disconnectDOM.addEventListener( 'mousedown', onClick, true );
				this.disconnectDOM.addEventListener( 'touchstart', onClick, true );

			}

		}

		this.dispatchEvent( new Event( 'connect' ) );

		return this;

	}

	serialize( data ) {

		const height = this.getHeight();

		const inputs = [];
		const links = [];

		for ( const input of this.inputs ) {

			inputs.push( input.toJSON( data ).id );

		}

		for ( const link of this.links ) {

			if ( link.inputElement !== null && link.outputElement !== null ) {

				links.push( link.outputElement.toJSON( data ).id );

			}

		}

		if ( this.inputLength > 0 ) data.inputLength = this.inputLength;
		if ( this.outputLength > 0 ) data.outputLength = this.outputLength;

		if ( inputs.length > 0 ) data.inputs = inputs;
		if ( links.length > 0 ) data.links = links;

		if ( this.style !== '' ) {

			data.style = this.style;

		}

		if ( height !== '' ) {

			data.height = height;

		}

	}

	deserialize( data ) {

		if ( data.inputLength !== undefined ) this.setInput( data.rioLength );
		if ( data.outputLength !== undefined ) this.setOutput( data.lioLength );

		if ( data.inputs !== undefined ) {

			for ( const id of data.inputs ) {

				this.add( data.objects[ id ] );

			}

		}

		if ( data.links !== undefined ) {

			for ( const id of data.links ) {

				this.link( data.objects[ id ] );

			}

		}

		if ( data.style !== undefined ) {

			this.setStyle( data.style );

		}

		if ( data.height !== undefined ) {

			this.setHeight( data.height );

		}

	}

	get linkedElement() {

		return this.links.length > 0 ? this.links[ 0 ].outputElement : null;

	}
	
	get link() {
		
		return this.links[0];
		
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

			const link = type === 'lio' ? new Link( null, this ) : new Link( this );

			this.links.push( link );

			draggableDOM( e, ( data ) => {

				if ( data.dragging === false ) {

					nodeDOM.classList.remove( 'io-connect' );

					ioDOM.classList.remove( 'connect' );
					dom.classList.remove( 'select' );

					this.links.splice( this.links.indexOf( link ), 1 );

					if ( selected !== null ) {

						if ( type === 'lio' ) {

							link.inputElement = selected;

						} else {

							link.outputElement = selected;

						}

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

			}, 'connecting' );

		};

		ioDOM.addEventListener( 'mousedown', onConnectEvent, true );
		ioDOM.addEventListener( 'touchstart', onConnectEvent, true );

		return ioDOM;

	}

}

Element.prototype.isElement = true;
