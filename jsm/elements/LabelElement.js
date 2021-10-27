import { Element } from '../core/Element.js';

export class LabelElement extends Element {

	constructor( label = '' ) {

		super();

		this.labelDOM = document.createElement( 'f-label' );
		this.inputsDOM = document.createElement( 'f-inputs' );

		this.dom.appendChild( this.labelDOM );
		this.dom.appendChild( this.inputsDOM );

		this.setLabel( label );

	}

	add( input ) {

		this.inputsDOM.appendChild( input.dom );

		return this;

	}

	setLabel( val ) {

		this.labelDOM.innerText = val;

	}

	getLabel() {

		return this.labelDOM.innerText;

	}

}
