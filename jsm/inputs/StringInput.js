import { Input } from '../core/Input.js';

const ENTER_KEY = 13;

export class StringInput extends Input {

	constructor( value = '' ) {

		const dom = document.createElement( 'f-string' );
		super( dom );

		const inputDOM = document.createElement( 'input' );

		dom.append( inputDOM );

		inputDOM.type = 'text';
		inputDOM.value = value;
		inputDOM.spellcheck = false;
		inputDOM.autocomplete = 'off';

		this._buttonsDOM = null;
		this._datalistDOM = null;

		this.iconDOM = null;
		this.inputDOM = inputDOM;

		this.buttons = [];

		inputDOM.onblur = () => {

			this.dispatchEvent( new Event( 'blur' ) );

		};

		inputDOM.onchange = () => {

			this.dispatchEvent( new Event( 'change' ) );

		};

		inputDOM.onkeyup = ( e ) => {

			if ( e.keyCode === ENTER_KEY ) {

				e.target.blur();

			}

			e.stopPropagation();

			this.dispatchEvent( new Event( 'change' ) );

		};

	}

	setPlaceHolder( text ) {

		this.inputDOM.placeholder = text;

		return this;

	}

	setIcon( value ) {

		this.iconDOM = this.iconDOM || document.createElement( 'i' );
		this.iconDOM.setAttribute( 'type', 'icon' );
		this.iconDOM.className = value;

		if ( value ) this.dom.prepend( this.iconDOM );
		else this.iconDOM.remove();

		return this;

	}

	getIcon() {

		return this.iconInput ? this.iconInput.getIcon() : '';

	}

	addButton( button ) {

		this.buttonsDOM.prepend( button.iconDOM );

		this.buttons.push( button );

		return this;

	}

	addOption( value ) {

		const option = document.createElement( 'option' );
		option.value = value;

		this.datalistDOM.append( option );

		return this;

	}

	clearOptions() {

		this.datalistDOM.remove();

	}

	get datalistDOM() {

		let dom = this._datalistDOM;

		if ( dom === null ) {

			const datalistId = 'input-dt-' + this.id;

			dom = document.createElement( 'datalist' );
			dom.id = datalistId;

			this._datalistDOM = dom;

			this.inputDOM.autocomplete = 'on';
			this.inputDOM.setAttribute( 'list', datalistId );

			this.dom.prepend( dom );

		}

		return dom;

	}

	get buttonsDOM() {

		let dom = this._buttonsDOM;

		if ( dom === null ) {

			dom = document.createElement( 'f-buttons' );

			this._buttonsDOM = dom;

			this.dom.prepend( dom );

		}

		return dom;

	}

}

