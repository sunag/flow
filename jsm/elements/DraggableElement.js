import { Element } from '../core/Element.js';
import { draggableDOM } from '../core/Utils.js';

export class DraggableElement extends Element {

	constructor( draggable = true ) {

		super( true );

		this.draggable = draggable;

		const onDrag = ( e ) => {

			e.preventDefault();

			if ( this.draggable === true ) {

				draggableDOM( this.node.dom );

			}

		};

		const { dom } = this;

		dom.addEventListener( 'mousedown', onDrag, true );
		dom.addEventListener( 'touchstart', onDrag, true );

	}

}
