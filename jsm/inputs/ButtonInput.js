import { Input } from '../core/Input.js';

export class ButtonInput extends Input {

	constructor( innterText = '' ) {

		const dom = document.createElement( 'button' );

		const spanDOM = document.createElement( 'span' );
		dom.append( spanDOM );

		const iconDOM = document.createElement( 'i' );
		dom.append( iconDOM );

		super( dom );

		this.spanDOM = spanDOM;
		this.iconDOM = iconDOM;

		spanDOM.innerText = innterText;

		dom.onmouseover = () => {

			this.dispatchEvent( new Event( 'mouseover' ) );

		};

		dom.onclick = dom.ontouchstart = ( e ) => {

			e.preventDefault();

			e.stopPropagation();

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
