import { Element } from '../core/Element.js';
import { draggableDOM } from '../core/Utils.js';

export class DraggableElement extends Element {

	constructor( draggable = true ) {

		super();

		this.draggable = draggable;

		this.dom.onmousedown = () => {

			if ( draggable === true ) {

				draggableDOM( this.node.dom );

			}

		};

	}

}
