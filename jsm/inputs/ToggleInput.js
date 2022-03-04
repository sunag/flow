import { Input } from '../core/Input.js';

export class ToggleInput extends Input {

	constructor( value = false ) {

		const dom = document.createElement( 'input' );
		super( dom );

		dom.type = 'checkbox';
		dom.className = 'toggle';
		dom.checked = value;

		dom.onclick = () => this.dispatchEvent( new Event( 'click' ) );
		dom.onchange = () => this.dispatchEvent( new Event( 'change' ) );

	}

	setValue( val ) {

		this.dom.checked = val;

		this.dispatchEvent( new Event( 'change' ) );

		return this;

	}

	getValue() {

		return this.dom.checked;

	}

}
