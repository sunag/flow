import { Element } from '../core/Element.js';
import { draggableDOM } from '../core/Utils.js';

export class DraggableElement extends Element {

	static get type() {

		return 'DraggableElement';

	}

	constructor( draggable = true ) {

		super( true );

		this.draggable = draggable;

		const onDrag = ( e ) => {

			e.preventDefault();

			if ( this.draggable === true ) {

				draggableDOM( this.node.dom, null, { className: 'dragging node' } );

			}

		};

		const { dom } = this;

		dom.addEventListener( 'mousedown', onDrag, true );
		dom.addEventListener( 'touchstart', onDrag, true );

	}

}
