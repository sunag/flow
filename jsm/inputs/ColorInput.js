import { Input } from '../core/Input.js';
import { numberToHex } from '../core/Utils.js';

export class ColorInput extends Input {

	static get type() {

		return 'ColorInput';

	}

	constructor( value = 0x0099ff ) {

		const dom = document.createElement( 'input' );
		super( dom );

		dom.type = 'color';
		dom.value = numberToHex( value );

		dom.oninput = () => {

			this.dispatchEvent( new Event( 'change' ) );

		};

	}

	setValue( value, dispatch = true ) {

		return super.setValue( numberToHex( value ), dispatch );

	}

	getValue() {

		return parseInt( super.getValue().substr( 1 ), 16 );

	}

}
