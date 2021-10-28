import { toPX } from './Utils.js';

export class Element {

	constructor() {

		this.dom = document.createElement( 'f-element' );
		this.inputsDOM = this.dom;

		this.node = null;

		this.inputs = [];

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

}

Element.prototype.isElement = true;
