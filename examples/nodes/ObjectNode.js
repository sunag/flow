import { Node } from '../core/Node.js';
import { Styles } from '../core/Styles.js';
import { ButtonInput } from '../inputs/ButtonInput.js';
import { TitleElement } from '../elements/TitleElement.js';

export class ObjectNode extends Node {

	constructor( name, inputLength, callback = null, width = 300 ) {

		super();

		this.setWidth( width );

		const title = new TitleElement( name )
			.setObjectCallback( callback )
			.setSerializable( false )
			.setOutput( inputLength );

		const closeButton = new ButtonInput( Styles.icons.close || '✕' ).onClick( () => {

			this.dispose();

		} ).setIcon( Styles.icons.close );

		title.addButton( closeButton );

		this.add( title );

		this.title = title;
		this.closeButton = closeButton;

	}

	setName( value ) {

		this.title.setTitle( value );

		return this;

	}

	getName() {

		return this.title.getTitle();

	}

	setObjectCallback( callback ) {

		this.title.setObjectCallback( callback );

		return this;

	}

	getObject( callback ) {

		return this.title.getObject( callback );

	}

	setColor( color ) {

		return this.title.setColor( color );

	}

	setOutputColor( color ) {

		return this.title.setOutputColor( color );

	}

	invalidate() {

		this.title.dispatchEvent( new Event( 'connect' ) );

	}

}
