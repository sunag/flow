import { Input } from '../core/Input.js';

export class ButtonInput extends Input {

	constructor( innterText = '' ) {

		const dom = document.createElement( 'button' );
		super( dom );

		dom.innerText = innterText;

		const dispatchEvent = ( type ) => {

			this.dispatchEvent( new Event( type ) );

		};

		dom.onclick = () => {

			dispatchEvent( 'click' );

		};

	}

	set value( val ) {

		this.dom.innerText = val;

	}

	get value() {

		return this.dom.innerText;

	}

}

