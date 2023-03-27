import { Input } from '../core/Input.js';
import { draggableDOM } from '../core/Utils.js';

export class NumberInput extends Input {

	constructor( value = 0, min = - Infinity, max = Infinity, step = .01 ) {

		const dom = document.createElement( 'input' );
		super( dom );

		this.min = min;
		this.max = max;
		this.step = step;

		this.integer = false;

		dom.type = 'text';
		dom.className = 'number';
		dom.value = this._getString( value );
		dom.spellcheck = false;
		dom.autocomplete = 'off';

		dom.ondragstart = dom.oncontextmenu = ( e ) => {

			e.preventDefault();

			e.stopPropagation();

		};

		dom.onfocus = dom.onclick = () => {

			dom.select();

		};

		dom.onblur = () => {

			this.dom.value = this._getString( this.dom.value );

			this.dispatchEvent( new Event( 'blur' ) );

		};

		dom.onchange = () => {

			this.dispatchEvent( new Event( 'change' ) );

		};

		dom.onkeydown = ( e ) => {

			if ( e.key.length === 1 && /\d|\.|\-/.test( e.key ) !== true ) {

				return false;

			}

			if ( e.key === 'Enter' ) {

				e.target.blur();

			}

			e.stopPropagation();

		};

		draggableDOM( dom, ( data ) => {

			const { delta } = data;

			if ( dom.readOnly === true ) return;

			if ( data.value === undefined ) {

				data.value = this.getValue();

			}

			const diff = delta.x - delta.y;

			const value = data.value + ( diff * this.step );

			dom.value = this._getString( value.toFixed( this.precision ) );

			this.dispatchEvent( new Event( 'change' ) );

		} );

	}

	setStep( step ) {

		this.step = step;

		return this;

	}

	setRange( min, max, step ) {

		this.min = min;
		this.max = max;
		this.step = step;

		this.dispatchEvent( new Event( 'range' ) );

		return this.setValue( this.getValue() );

	}

	get precision() {

		if ( this.integer === true ) return 0;

		const fract = this.step % 1;

		return fract !== 0 ? fract.toString().split( '.' )[ 1 ].length : 1;

	}

	setValue( val, dispatch = true ) {

		return super.setValue( this._getString( val ), dispatch );

	}

	getValue() {

		return Number( this.dom.value );

	}

	serialize( data ) {

		const { min, max } = this;

		if ( min !== - Infinity && max !== Infinity ) {

			data.min = this.min;
			data.max = this.max;
			data.step = this.step;

		}

		super.serialize( data );

	}

	deserialize( data ) {

		if ( data.min !== undefined ) {

			const { min, max, step } = this;

			this.setRange( min, max, step );

		}

		super.deserialize( data );

	}

	_getString( value ) {

		const num = Math.min( Math.max( Number( value ), this.min ), this.max );

		if ( this.integer === true ) {

			return Math.floor( num );

		} else {

			return num + ( num % 1 ? '' : '.0' );

		}

	}

}
