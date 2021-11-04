import { Input } from '../core/Input.js';

export class SelectInput extends Input {

	constructor( options = [] ) {

		const dom = document.createElement( 'select' );
		super( dom );

		dom.onchange = () => {

			this.dispatchEvent( new Event( 'change' ) );

		};

		this.options = options;

	}

	set options( list ) {

		const dom = this.dom;

		this._options = list;

		dom.innerHTML = '';

		for ( let index = 0; index < list.length; index ++ ) {

			let opt = list[ index ];

			if ( typeof opt === 'string' ) {

				opt = { name: opt, value: index };

			}

			const option = document.createElement( 'option' );
			option.innerText = opt.name;
			option.value = opt.value;

			dom.appendChild( option );

		}

	}

	get options() {

		return this._options;

	}

}

