import { Element } from '../core/Element.js';
import { dragabbleDOM } from '../core/Utils.js';

export class DragabbleElement extends Element {

	constructor( dragabble = true ) {

		super();

		this.dragabble = dragabble;

		this.dom.onmousedown = () => {

			if ( dragabble === true ) {

				dragabbleDOM( this.node.dom );

			}

		};

	}

}
