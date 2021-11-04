import { Serializer } from './Serializer.js';
import { toPX, draggableDOM } from './Utils.js';
import { Link } from './Link.js';

let selected = null;

export class Element extends Serializer {

	constructor() {

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

		dom.addEventListener( 'mouseup', onSelect, true );
		dom.addEventListener( 'touchend', onSelect );

		this.inputs = [];

		this.links = [];

		this.dom = dom;

		this.inputLength = 0;
		this.outputLength = 0;

		this.node = null;

		this.inputsDOM = dom;

		this.disconnectDOM = null;

		this.inputDOM = this._createIO( 'input' );
		this.outputDOM = this._createIO( 'output' );

		this.dom.appendChild( this.inputDOM );
		this.dom.appendChild( this.outputDOM );

	}

	setInput( length ) {

		this.inputLength = length;

		this.inputDOM.style.visibility = length > 0 ? '' : 'hidden';

		return this;

	}

	setOutput( length ) {

		this.outputLength = length;

		this.outputDOM.style.visibility = length > 0 ? '' : 'hidden';

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

		return this.style.height;

	}

	connect( element ) {

		element.link( this );

		return this;

	}

	link( element ) {

		const link = new Link( element, this );

		if ( this.disconnectDOM !== null ) {

			// remove the current input

			this.disconnectDOM.dispatchEvent( new Event( 'mousedown' ) );

		}

		//

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

		this.links.push( link );

		this.dispatchEvent( new Event( 'connect' ) );

		return this;

	}

	serialize( data ) {

		const inputs = [];
		const links = [];

		for ( const input of this.inputs ) {

			inputs.push( input.toJSON( data ).id );

		}

		for ( const link of this.links ) {

			if ( link.targetElement !== null && link.sourceElement !== null ) {

				links.push( link.sourceElement.toJSON( data ).id );

			}

		}

		if ( this.outputLength > 0 ) data.outputLength = this.outputLength;
		if ( this.inputLength > 0 ) data.inputLength = this.inputLength;

		if ( inputs.length > 0 ) data.inputs = inputs;
		if ( links.length > 0 ) data.links = links;

	}

	deserialize( data ) {

		if ( data.outputLength !== undefined ) this.setOutput( data.outputLength );
		if ( data.inputLength !== undefined ) this.setInput( data.inputLength );

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

	}

	get linkedElement() {

		return this.links.length > 0 ? this.links[ 0 ].sourceElement : null;

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

			const link = type === 'output' ? new Link( this ) : new Link( null, this );

			this.links.push( link );

			draggableDOM( e, ( data ) => {

				if ( data.dragging === false ) {

					nodeDOM.classList.remove( 'io-connect' );

					ioDOM.classList.remove( 'connect' );
					dom.classList.remove( 'select' );

					this.links.splice( this.links.indexOf( link ), 1 );

					if ( selected !== null ) {

						if ( type === 'output' ) {

							link.targetElement = selected;

						} else {

							link.sourceElement = selected;

						}

						// check if is an is circular link

						if ( link.sourceElement.node.isCircular( link.targetElement.node ) ) {

							return;

						}

						//

						if ( link.targetElement.inputLength > 0 && link.sourceElement.outputLength > 0 ) {

							link.targetElement.link( link.sourceElement );

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
