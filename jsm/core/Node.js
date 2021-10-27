import { toPX } from './Utils.js';

export class Node {

	constructor() {

		this.dom = document.createElement( 'f-node' );

	}

	setAlign( align ) {

		this.dom.className = align;

		return this;

	}

	setWidth( val ) {

		this.dom.style.width = toPX( val );

		return this;

	}

	getWidth() {

		return this.dom.style.width;

	}

	add( element ) {

		this.dom.appendChild( element.dom );

		return this;

	}

}
