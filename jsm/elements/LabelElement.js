import { Element } from '../core/Element.js';

export class LabelElement extends Element {

	static get type() {

		return 'LabelElement';

	}

	constructor( label = '', align = '' ) {

		super();

		this.labelDOM = document.createElement( 'f-label' );
		this.inputsDOM = document.createElement( 'f-inputs' );

		const spanDOM = document.createElement( 'span' );

		this.spanDOM = spanDOM;
		this.iconDOM = null;

		this.labelDOM.append( spanDOM );

		this.dom.append( this.labelDOM );
		this.dom.append( this.inputsDOM );

		this.serializeLabel = false;

		this.setLabel( label );
		this.setAlign( align );

	}

	setIcon( value ) {

		this.iconDOM = this.iconDOM || document.createElement( 'i' );
		this.iconDOM.className = value;

		if ( value ) this.labelDOM.prepend( this.iconDOM );
		else this.iconDOM.remove();

		return this;

	}

	getIcon() {

		return this.iconDOM ? this.iconDOM.className : null;

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

		if ( this.serializeLabel ) {

			const label = this.getLabel();
			const icon = this.getIcon();

			data.label = label;

			if ( icon !== '' ) {

				data.icon = icon;

			}

		}

	}

	deserialize( data ) {

		super.deserialize( data );

		if ( this.serializeLabel ) {

			this.setLabel( data.label );

			if ( data.icon !== undefined ) {

				this.setIcon( data.icon );

			}

		}

	}

}
