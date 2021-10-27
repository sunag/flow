import { Input } from '../core/Input.js';

const ENTER_KEY = 13;

export class StringInput extends Input {

	constructor( value = '' ) {

		const dom = document.createElement( 'input' );
		super( dom );

		dom.type = 'text';
		dom.value = value;
		dom.spellcheck = false;
		dom.autocomplete = 'off';

		const dispatchEvent = ( type ) => {

			this.dispatchEvent( new Event( type ) );

		};

		dom.onblur = () => {

			dispatchEvent( 'blur' );

		};

		dom.onchange = () => {

			dispatchEvent( 'change' );

		};

		dom.onkeydown = ( e ) => {

			if ( e.keyCode === ENTER_KEY ) {

				e.target.blur();

			}

			e.stopPropagation();

		};

	}

}

