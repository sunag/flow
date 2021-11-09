import { DraggableElement } from './DraggableElement.js';

export class TitleElement extends DraggableElement {

	constructor( title, draggable = true ) {

		super( draggable );

		const { dom } = this;

		dom.className = 'title';

		const spanDOM = document.createElement( 'span' );
		spanDOM.innerText = title;

		const iconDOM = document.createElement( 'i' );

		const toolbarDOM = document.createElement( 'f-toolbar' );

		this.buttons = [];

		this.spanDOM = spanDOM;
		this.iconDOM = iconDOM;
		this.toolbarDOM = toolbarDOM;

		dom.appendChild( spanDOM );
		dom.appendChild( iconDOM );
		dom.appendChild( toolbarDOM );

	}

	setIcon( value ) {

		this.iconDOM.className = value;

		return this;

	}

	getIcon() {

		return this.iconDOM.className;

	}

	setTitle( value ) {

		this.spanDOM.innerText = value;

		return this;

	}

	getTitle() {

		return this.spanDOM.innerText;

	}

	addButton( button ) {

		this.buttons.push( button );

		this.toolbarDOM.appendChild( button.dom );

		return this;

	}

	serialize( data ) {

		super.serialize( data );

		const title = this.getTitle();
		const icon = this.getIcon();

		data.title = title;

		if ( icon !== '' ) {

			data.icon = icon;

		}

	}

	deserialize( data ) {

		super.deserialize( data );

		this.setTitle( data.title );

		if ( data.icon !== undefined ) {

			this.setIcon( data.icon );

		}

	}

}
