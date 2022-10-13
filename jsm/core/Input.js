import { Serializer } from './Serializer.js';
import { dispatchEventList } from './Utils.js';

export class Input extends Serializer {

	constructor( dom ) {

		super();

		this.dom = dom;

		this.element = null;

		this.extra = null;

		this.tagColor = null;

		this.property = null;

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

	setProperty( name ) {

		this.property = name;

		return this;

	}

	getProperty() {

		return this.property;

	}

	setTagColor( color ) {

		this.tagColor = color;

		this.dom.style[ 'border-left' ] = `2px solid ${color}`;

		return this;

	}

	getTagColor() {

		return this.tagColor;

	}

	setToolTip( text ) {

		const div = document.createElement( 'f-tooltip' );
		div.innerText = text;

		this.dom.append( div );

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

	setReadOnly( value ) {

		this.dom.readOnly = value;

		return this;

	}

	getReadOnly() {

		return this.dom.readOnly;

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
