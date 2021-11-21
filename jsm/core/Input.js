import { Serializer } from './Serializer.js';
import { dispatchEventList } from './Utils.js';

export class Input extends Serializer {

	constructor( dom ) {

		super();

		this.dom = dom;

		this.element = null;

		this.extra = null;

		this.events = {
			'change': [],
			'click': []
		};

		this.addEventListener( 'change', ( ) => {

			dispatchEventList( this.events.change, this );

		} );

		this.addEventListener( 'click', ( ) => {

			dispatchEventList( this.events.click, this );

		} );

	}

	setExtra( value ) {

		this.extra = value;

		return this;

	}

	getExtra() {

		return this.extra;

	}

	setToolTip( text ) {

		const div = document.createElement( 'f-tooltip' );
		div.innerText = text;

		this.dom.appendChild( div );

		return this;

	}

	onChange( callback ) {

		this.events.change.push( callback );

		return this;

	}

	onClick( callback ) {

		this.events.click.push( callback );

		return this;

	}

	setValue( value, dispatch = true ) {

		this.dom.value = value;

		if ( dispatch ) this.dispatchEvent( new Event( 'change' ) );

		return this;

	}

	getValue() {

		return this.dom.value;

	}

	serialize( data ) {

		data.value = this.getValue();

	}

	deserialize( data ) {

		this.setValue( data.value );

	}

}

Input.prototype.isInput = true;
