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

			rangeDOM.value = field.getValue();

		} );

		field.addEventListener( 'range', () => {

			rangeDOM.min = field.min;
			rangeDOM.max = field.max;
			rangeDOM.step = field.step;
			rangeDOM.value = field.getValue();

		} );

		dom.append( rangeDOM );
		dom.append( field.dom );

		this.rangeDOM = rangeDOM;
		this.field = field;

		const updateRangeValue = () => {

			let value = Number( rangeDOM.value );

			if ( value !== this.max && value + this.step >= this.max ) {

				// fix not end range fraction

				rangeDOM.value = value = this.max;

			}

			this.field.setValue( value );

		};

		draggableDOM( rangeDOM, () => {

			updateRangeValue();

			this.dispatchEvent( new Event( 'change' ) );

		}, { className: '' } );

	}

	get min() {

		return this.field.min;

	}

	get max() {

		return this.field.max;

	}

	get step() {

		return this.field.step;

	}

	setRange( min, max ) {

		this.field.setRange( min, max, getStep( min, max ) );

		this.dispatchEvent( new Event( 'range' ) );
		this.dispatchEvent( new Event( 'change' ) );

		return this;

	}

	setValue( val, dispatch = true ) {

		this.field.setValue( val );
		this.rangeDOM.value = val;

		if ( dispatch ) this.dispatchEvent( new Event( 'change' ) );

		return this;

	}

	getValue() {

		return this.field.getValue();

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
