import { Input } from '../core/Input.js';

export class ButtonInput extends Input {

	constructor( innterText = '' ) {

		const dom = document.createElement( 'button' );

		const spanDOM = document.createElement( 'span' );
		dom.appendChild( spanDOM );

		const iconDOM = document.createElement( 'i' );
		dom.appendChild( iconDOM );

		super( dom );

		this.spanDOM = spanDOM;
		this.iconDOM = iconDOM;

		spanDOM.innerText = innterText;

		dom.onclick = () => {

			this.dispatchEvent( new Event( 'click' ) );

		};

	}

	setIcon( className ) {

		this.iconDOM.className = className;

		return this;

	}

	setValue( val ) {

		this.spanDOM.innerText = val;

		return this;

	}

	getValue() {

		return this.spanDOM.innerText;

	}

}
