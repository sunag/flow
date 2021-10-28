import { Element } from '../core/Element.js';
import { draggableDOM } from '../core/Utils.js';

export class DraggableElement extends Element {

	constructor( dragabble = true ) {

		super();

		this.dragabble = dragabble;

		this.dom.onmousedown = () => {

			if ( dragabble === true ) {

				draggableDOM( this.node.dom );

			}

		};

	}

}
