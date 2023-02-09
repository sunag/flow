import { Input } from '../core/Input.js';

export class SelectInput extends Input {

	constructor( options = [], value = null ) {

		const dom = document.createElement( 'select' );
		super( dom );

		dom.onchange = () => {

			this.dispatchEvent( new Event( 'change' ) );

		};

		dom.onmousedown = dom.ontouchstart = () => {

			this.dispatchEvent( new Event( 'click' ) );

		};

		this.setOptions( options, value );

	}

	setOptions( options, value = null ) {

		const dom = this.dom;
		const defaultValue = dom.value;

		let containsDefaultValue = false;

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

			if ( containsDefaultValue === false && defaultValue === opt.value ) {

				containsDefaultValue = true;

			}

			dom.append( option );

		}

		dom.value = value !== null ? value : containsDefaultValue ? defaultValue : '';

		return this;

	}

	getOptions() {

		return this.options;

	}

	serialize( data ) {

		data.options = [ ...this.options ];

		super.serialize( data );

	}

	deserialize( data ) {

		const currentOptions = this.options;

		if ( currentOptions.length === 0 ) {

			this.setOptions( data.options );

		}

		super.deserialize( data );

	}

}
