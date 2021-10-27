import { Input } from '../core/Input.js';
import { NumberInput } from '../inputs/NumberInput.js';
import { SliderInput } from '../inputs/SliderInput.js';

export const fromProperty = ( object, property, ...params ) => {

	const ref = object[ property ];
	const type = typeof ref;

	let input = null;

	if ( type === 'number' ) {

		if ( params.length > 0 ) {

			input = new SliderInput( ref, ...params );
			input.onChange( () => {

				object[ property ] = input.value;

			} );

		} else {

			input = new NumberInput( ref );
			input.onChange( () => {

				object[ property ] = input.value;

			} );

		}

	}

	return input;

};

export class PropertyInput extends Input {

	constructor( object, property, ...params ) {

		const dom = document.createElement( 'f-subinputs' );
		super( dom );

		const field = fromProperty( object, property, ...params );

		this.object = object;
		this.property = property;
		this.field = field;

		dom.appendChild( field.dom );

	}

}
