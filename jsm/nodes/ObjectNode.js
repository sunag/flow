import { Node } from '../core/Node.js';
import { ButtonInput } from '../inputs/ButtonInput.js';
import { TitleElement } from '../elements/TitleElement.js';

export class ObjectNode extends Node {

	constructor( name, inputLength, extra = null ) {

		super();

		const title = new TitleElement( name )
			.setExtra( extra )
			.setOutput( inputLength );

		const closeButton = new ButtonInput( '✖' ).onClick( () => {

			this.dispose();

		} );

		title.addButton( closeButton );

		this.add( title );

		this.title = title;
		this.closeButton = closeButton;

	}

	setExtra( value ) {

		this.title.setExtra( value );

		return this;

	}

	getExtra( value ) {

		return this.title.getExtra();

	}

	invalidate() {

		this.title.dispatchEvent( new Event( 'connect' ) );

	}

}
