import { Input } from '../core/Input.js';

export class TextInput extends Input {

	static get type() {

		return 'TextInput';

	}

	constructor( innerText = '' ) {

		const dom = document.createElement( 'textarea' );
		super( dom );

		dom.innerText = innerText;

		dom.classList.add( 'f-scroll' );

		dom.onblur = () => {

			this.dispatchEvent( new Event( 'blur' ) );

		};

		dom.onchange = () => {

			this.dispatchEvent( new Event( 'change' ) );

		};

		dom.onkeyup = ( e ) => {

			e.stopPropagation();

			this.dispatchEvent( new Event( 'change' ) );

		};

	}

}

