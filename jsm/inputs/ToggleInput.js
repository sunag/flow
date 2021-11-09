import { Input } from '../core/Input.js';

export class ToggleInput extends Input {

	constructor( value = false ) {

		const dom = document.createElement( 'input' );
		super( dom );

		dom.type = 'checkbox';
		dom.className = 'toggle';
		dom.checked = value;

	}

	setValue( val ) {

		this.dom.checked = val;

		return this;

	}

	getValue() {

		return this.dom.checked;

	}

}

