import { Input } from '../core/Input.js';

const ENTER_KEY = 13;

export class StringInput extends Input {

	constructor( value = '' ) {

		const dom = document.createElement( 'f-string' );
		super( dom );

		const inputDOM = document.createElement( 'input' );

		dom.append( inputDOM );

		inputDOM.type = 'text';
		inputDOM.value = value;
		inputDOM.spellcheck = false;
		inputDOM.autocomplete = 'off';

		this.iconDOM = null;
		this.inputDOM = inputDOM;

		inputDOM.onblur = () => {

			this.dispatchEvent( new Event( 'blur' ) );

		};

		inputDOM.onchange = () => {

			this.dispatchEvent( new Event( 'change' ) );

		};

		inputDOM.onkeyup = ( e ) => {

			if ( e.keyCode === ENTER_KEY ) {

				e.target.blur();

			}

			e.stopPropagation();

			this.dispatchEvent( new Event( 'change' ) );

		};

	}

	setPlaceHolder( text ) {

		this.inputDOM.placeholder = text;

		return this;

	}

	setIcon( value ) {

		this.iconDOM = this.iconDOM || document.createElement( 'i' );
		this.iconDOM.className = value;

		if ( value ) this.dom.prepend( this.iconDOM );
		else this.iconDOM.remove();

		return this;

	}

	getIcon() {

		return this.iconDOM?.className;

	}

}

