import { Input } from '../core/Input.js';

export class TextInput extends Input {

	constructor( innerText = '' ) {

		const dom = document.createElement( 'textarea' );
		super( dom );

		dom.innerText = innerText;

		dom.onblur = () => {

			this.dispatchEvent( new Event( 'blur' ) );

		};

		dom.onchange = () => {

			this.dispatchEvent( new Event( 'change' ) );

		};

		dom.onkeyup = ( e ) => {

			if ( e.key === 'Enter' ) {

				e.target.blur();

			}

			e.stopPropagation();

			this.dispatchEvent( new Event( 'change' ) );

		};

	}

}

