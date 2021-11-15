import { Input } from '../core/Input.js';
import { toHex } from '../core/Utils.js';

export class ColorInput extends Input {

	constructor( value = 0x0099ff ) {

		const dom = document.createElement( 'input' );
		super( dom );

		dom.type = 'color';
		dom.value = toHex( value );

		dom.oninput = () => {

			this.dispatchEvent( new Event( 'change' ) );

		};

	}

	setValue( value ) {

		return super.setValue( toHex( value ) );

	}

	getValue() {

		return parseInt( super.getValue().substr( 1 ), 16 );

	}

}
