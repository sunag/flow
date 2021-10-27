import { Input } from '../core/Input.js';

export class ToggleInput extends Input {

	constructor( value = false ) {

		const dom = document.createElement( 'input' );
		super( dom );

		dom.type = 'checkbox';
		dom.className = 'toggle';
		dom.checked = value;

	}

	set value( val ) {

		this.dom.checked = val;

	}

	get value() {

		return this.dom.checked;

	}

}

