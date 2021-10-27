import { Input } from '../core/Input.js';

export class TextInput extends Input {

	constructor( innerText = '' ) {

		const dom = document.createElement( 'textarea' );
		super( dom );

		dom.innerText = innerText;

	}

	set value( val ) {

		this.dom.innerText = val;

	}

	get value() {

		return this.dom.innerText;

	}

}

