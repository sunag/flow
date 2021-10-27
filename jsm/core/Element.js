import { toPX } from './Utils.js';

export class Element {

	constructor() {

		this.dom = document.createElement( 'f-element' );

	}

	add( input ) {

		this.dom.appendChild( input.dom );

		return this;

	}

	setHeight( val ) {

		this.dom.style.height = toPX( val );

		return this;

	}

	getHeight() {

		return this.style.height;

	}

}
