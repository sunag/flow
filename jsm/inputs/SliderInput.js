import { Input } from '../core/Input.js';
import { NumberInput } from './NumberInput.js';
import { draggableDOM } from '../core/Utils.js';

export class SliderInput extends Input {

	constructor( value = 0, min = 0, max = 100 ) {

		const dom = document.createElement( 'f-subinputs' );
		super( dom );

		value = Math.min( Math.max( value, min ), max );

		const sensibility = .001;
		const step = ( max - min ) * sensibility;

		const rangeDOM = document.createElement( 'input' );
		rangeDOM.type = 'range';
		rangeDOM.min = min;
		rangeDOM.max = max;
		rangeDOM.step = step;
		rangeDOM.value = value;

		const field = new NumberInput( value, min, max, step );
		field.dom.className = 'range-value';
		field.onChange( () => {

			rangeDOM.value = field.value;

		} );

		dom.appendChild( rangeDOM );
		dom.appendChild( field.dom );

		this.min = min;
		this.max = max;
		this.step = step;

		this.rangeDOM = rangeDOM;
		this.field = field;

		const dispatchEvent = ( type ) => {

			this.dispatchEvent( new Event( type ) );

		};

		const updateRangeValue = () => {

			let value = Number( rangeDOM.value );

			if ( value !== this.max && value + this.step >= this.max ) {

				// fix not end range fraction

				rangeDOM.value = value = this.max;

			}

			this.field.value = value;

		};

		draggableDOM( rangeDOM, ( data ) => {

			updateRangeValue();

			dispatchEvent( 'change' );

		} );

	}

	set value( val ) {

		this.field.value = val;
		this.rangeDOM.value = this.field.value;

	}

	get value() {

		return this.field.value;

	}

}

