import { Input } from '../core/Input.js';
import { NumberInput } from './NumberInput.js';
import { draggableDOM } from '../core/Utils.js';

const getStep = ( min, max ) => {

	const sensibility = .001;

	return ( max - min ) * sensibility;

};

export class SliderInput extends Input {

	constructor( value = 0, min = 0, max = 100 ) {

		const dom = document.createElement( 'f-subinputs' );
		super( dom );

		value = Math.min( Math.max( value, min ), max );

		const step = getStep( min, max );

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

		field.addEventListener( 'range', () => {

			rangeDOM.min = field.min;
			rangeDOM.max = field.max;
			rangeDOM.step = field.step;
			rangeDOM.value = field.value;

		} );

		dom.appendChild( rangeDOM );
		dom.appendChild( field.dom );

		this.min = min;
		this.max = max;
		this.step = step;

		this.rangeDOM = rangeDOM;
		this.field = field;

		const updateRangeValue = () => {

			let value = Number( rangeDOM.value );

			if ( value !== this.max && value + this.step >= this.max ) {

				// fix not end range fraction

				rangeDOM.value = value = this.max;

			}

			this.field.value = value;

		};

		draggableDOM( rangeDOM, () => {

			updateRangeValue();

			this.dispatchEvent( new Event( 'change' ) );

		} );

	}

	setRange( min, max ) {

		this.field.setRange( min, max, getStep( min, max ) );

		this.dispatchEvent( new Event( 'range' ) );
		this.dispatchEvent( new Event( 'change' ) );

		return this;

	}

	set value( val ) {

		this.field.value = val;
		this.rangeDOM.value = val;

	}

	get value() {

		return this.field.value;

	}

	serialize( data ) {

		data.min = this.min;
		data.max = this.max;

		super.serialize( data );

	}

	deserialize( data ) {

		const { min, max } = data;

		this.setRange( min, max );

		super.deserialize( data );

	}

}

