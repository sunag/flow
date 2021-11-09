import { Input } from '../core/Input.js';

export class TextInput extends Input {

	constructor( innerText = '' ) {

		const dom = document.createElement( 'textarea' );
		super( dom );

		dom.innerText = innerText;

	}

	setValue( val ) {

		this.dom.innerText = val;

		return this;

	}

	getValue() {

		return this.dom.innerText;

	}

}

