import { Node } from '../core/Node.js';
import { Element } from '../core/Element.js';
import { StringInput } from '../inputs/StringInput.js';
import { NumberInput } from '../inputs/NumberInput.js';
import { SliderInput } from '../inputs/SliderInput.js';
import { ColorInput } from '../inputs/ColorInput.js';
import { TextInput } from '../inputs/TextInput.js';
import { ButtonInput } from '../inputs/ButtonInput.js';
import { LabelElement } from '../elements/LabelElement.js';
import { TitleElement } from '../elements/TitleElement.js';

export class PanelNode extends Node {

	constructor( title = 'Panel', align = 'top-right' ) {

		super();

		const titleElement = new TitleElement( title );
		this.add( titleElement );

		const collapseButton = new ButtonInput( '🗕' );
		collapseButton.onClick( () => {

			this.setCollapse( ! this.collapsed );

		} );

		titleElement.addButton( collapseButton );

		this.collapseButton = collapseButton;
		this.titleElement = titleElement;
		this.align = align;
		this.collapsed = false;

		this.setAlign( align );
		this.setStyle( 'rouded' );

	}

	setCollapse( value ) {

		const cssClass = 'closed';

		this.dom.classList.remove( cssClass );

		this.collapsed = value;

		this.collapseButton.value = value ? '🗖' : '🗕';

		if ( value === true ) {

			this.dom.classList.add( cssClass );

		}

		return this;

	}

	setAlign( align ) {

		if ( this.align ) this.dom.classList.remove( this.align );
		this.dom.classList.add( align );

		this.align = align;

		return this;

	}

	addInput( inputClass, object, property, ...params ) {

		const value = object[ property ];

		const input = new inputClass( value, ...params );
		input.onChange( () => {

			object[ property ] = input.value;

		} );

		this.add( new LabelElement( property ).add( input ) );

		return input;

	}

	addSlider( object, property, min, max ) {

		return this.addInput( SliderInput, object, property, min, max );

	}

	addNumber( object, property ) {

		return this.addInput( NumberInput, object, property );

	}

	addColor( object, property ) {

		return this.addInput( ColorInput, object, property );

	}

	addString( object, property ) {

		return this.addInput( StringInput, object, property );

	}

	addText( object, property ) {

		const input = this.addInput( TextInput, object, property );
		input.element.setHeight( 70 );

		return input;

	}

	addButton( name ) {

		const input = new ButtonInput( name );

		this.add( new Element().setHeight( 34 ).add( input ) );

		return input;

	}

}
