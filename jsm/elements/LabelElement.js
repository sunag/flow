import { Element } from '../core/Element.js';

export class LabelElement extends Element {

	constructor( label = '', align = '' ) {

		super();

		this.labelDOM = document.createElement( 'f-label' );
		this.inputsDOM = document.createElement( 'f-inputs' );

		const spanDOM = document.createElement( 'span' );
		const iconDOM = document.createElement( 'i' );

		this.spanDOM = spanDOM;
		this.iconDOM = iconDOM;

		this.labelDOM.appendChild( this.spanDOM );
		this.labelDOM.appendChild( this.iconDOM );

		this.dom.appendChild( this.labelDOM );
		this.dom.appendChild( this.inputsDOM );

		this.setLabel( label );
		this.setAlign( align );

	}

	setIcon( value ) {

		this.iconDOM.className = value;

		return this;

	}

	getIcon() {

		return this.iconDOM.className;

	}

	setAlign( align ) {

		this.labelDOM.className = align;

	}

	setLabel( val ) {

		this.spanDOM.innerText = val;

	}

	getLabel() {

		return this.spanDOM.innerText;

	}

	serialize( data ) {

		super.serialize( data );

		const label = this.getLabel();
		const icon = this.getIcon();

		data.label = label;

		if ( icon !== '' ) {

			data.icon = icon;

		}

	}

	deserialize( data ) {

		super.deserialize( data );

		this.setLabel( data.label );

		if ( data.icon !== undefined ) {

			this.setIcon( data.icon );

		}

	}

}
