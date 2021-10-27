import { Input } from '../core/Input.js';

const ENTER_KEY = 13;

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

		let dragData = null;

		const dispatchEvent = ( type ) => {

			this.dispatchEvent( new Event( type ) );

		};

		dom.onblur = () => {

			dispatchEvent( 'blur' );

		};

		dom.onkeydown = ( e ) => {

			if ( e.key.length === 1 && /\d|\/./.test( e.key ) !== true ) {

				return false;

			}

			dispatchEvent( 'change' );

			if ( e.keyCode === ENTER_KEY ) {

				e.target.blur();

			}

			e.stopPropagation();

		};

		const onGlobalMouseMove = ( e ) => {

			const diff = ( e.clientX - dragData.x ) - ( e.clientY - dragData.y );

			if ( dragData.dragging === true ) {

				const value = dragData.value + ( diff * this.step );

				this.dom.value = this._getString( value.toFixed( this.precision ) );

				e.preventDefault();

				dispatchEvent( 'change' );

			} else {

				if ( Math.abs( diff ) > 1 ) {

					dragData.dragging = true;

				}

			}

		};

		const onGlobalMouseUp = () => {

			window.removeEventListener( "mousemove", onGlobalMouseMove );
			window.removeEventListener( "mouseup", onGlobalMouseUp );

			if ( dragData.dragging === true ) {

				dispatchEvent( 'complete' );

			}

		};

		dom.onmousedown = ( e ) => {

			dragData = { x: e.clientX, y: e.clientY, dragging: false, value: this.value };

			window.addEventListener( "mousemove", onGlobalMouseMove );
			window.addEventListener( "mouseup", onGlobalMouseUp );

		};

	}

	setRange( min, max, step ) {

		this.min = min;
		this.max = max;
		this.step = step;

	}

	get precision() {

		if ( this.integer === true ) return 0;

		const fract = this.step % 1;

		return fract !== 0 ? fract.toString().split( '.' )[ 1 ].length : 1;

	}

	set value( val ) {

		this.dom.value = this._getString( val );

	}

	get value() {

		return Number( this.dom.value );

	}

	_getString( value ) {

		let num = Math.min( Math.max( Number( value ), this.min ), this.max );

		if ( this.integer === true ) {

			return Math.floor( num );

		} else {

			return num + ( num % 1 ? '' : '.0' );

		}

	}

}

