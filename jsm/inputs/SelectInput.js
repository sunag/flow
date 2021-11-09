import { Input } from '../core/Input.js';

export class SelectInput extends Input {

	constructor( options = [] ) {

		const dom = document.createElement( 'select' );
		super( dom );

		dom.onchange = () => {

			this.dispatchEvent( new Event( 'change' ) );

		};

		this.setOptions( options );

	}

	setOptions( options ) {

		const dom = this.dom;

		this.options = options;

		dom.innerHTML = '';

		for ( let index = 0; index < options.length; index ++ ) {

			let opt = options[ index ];

			if ( typeof opt === 'string' ) {

				opt = { name: opt, value: index };

			}

			const option = document.createElement( 'option' );
			option.innerText = opt.name;
			option.value = opt.value;

			dom.appendChild( option );

		}

		return this;

	}

	getOptions() {

		return this._options;

	}

	serialize( data ) {

		data.options = [ ...this.options ];

		super.serialize( data );

	}

	deserialize( data ) {

		this.setOptions( data.options );

		super.deserialize( data );

	}

}
