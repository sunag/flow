import { toPX, draggableDOM } from './Utils.js';
import { Link } from './Link.js';

let selected = null;

export class Element {

	constructor() {

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

		this.inputDOM = null;
		this.outputDOM = null;

		this.inputsDOM = dom;

		this.disconnectDOM = null;

		this.setInput( 3 );
		this.setOutput( 1 );

	}

	setInput( length ) {

		this.inputLength = length;

		if ( this.inputDOM === null ) {

			this.inputDOM = this._createIO( 'input' );

			this.dom.appendChild( this.inputDOM );

		}

		return this;

	}

	setOutput( length ) {

		this.outputLength = length;

		if ( this.outputDOM === null ) {

			this.outputDOM = this._createIO( 'output' );

			this.dom.appendChild( this.outputDOM );

		}

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

	_createIO( type ) {

		const { dom } = this;

		const ioDOM = document.createElement( 'f-io' );
		ioDOM.className = type;

		const onConnectEvent = ( e ) => {

			e.preventDefault();

			e.stopPropagation();

			selected = null;

			ioDOM.classList.add( 'dragging' );
			dom.classList.add( 'select' );

			const link = type === 'output' ? new Link( this ) : new Link( null, this );

			this.links.push( link );

			draggableDOM( e, ( data ) => {

				if ( data.dragging === false ) {

					ioDOM.classList.remove( 'dragging' );
					dom.classList.remove( 'select' );

					this.links.splice( this.links.indexOf( link ), 1 );

					if ( selected !== null ) {

						if ( type === 'output' ) {

							link.targetElement = selected;

						} else {

							link.sourceElement = selected;

						}

						// check if the connection is valid

						for ( const eLinks of link.sourceElement.links ) {

							if ( link.sourceElement === eLinks.sourceElement &&
								link.targetElement === eLinks.targetElement ) {

								// ignore repeated link

								return;

							}

						}

						if ( link.sourceElement.node === link.targetElement.node ||
							link.sourceElement.node === link.targetElement.node ) {

							// ignore if source and target is the same

							return;

						}

						//

						if ( link.targetElement.disconnectDOM !== null ) {

							// remove the current input

							link.targetElement.disconnectDOM.click();

						}

						//

						if ( link.targetElement.disconnectDOM === null ) {

							link.targetElement.disconnectDOM = document.createElement( 'f-disconnect' );
							link.targetElement.disconnectDOM.innerText = '✖';
							link.targetElement.dom.appendChild( link.targetElement.disconnectDOM );

							const onClick = ( e ) => {

								e.stopPropagation();

								link.targetElement.links = [];
								link.targetElement.dom.removeChild( link.targetElement.disconnectDOM );

								link.targetElement.disconnectDOM = null;

							};

							link.targetElement.disconnectDOM.addEventListener( 'mousedown', onClick, true );
							link.targetElement.disconnectDOM.addEventListener( 'touchstart', onClick, true );

						}

						link.targetElement.links.push( link );

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
