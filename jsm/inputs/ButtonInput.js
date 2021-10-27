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

	onChange( callback ) {

		this.changeEvents.push( callback );

		return this;

	}

	set innterText( val ) {

		this.dom.innerText = val;

	}

	get innterText() {

		return this.dom.innerText;

	}

}

