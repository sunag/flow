import { DraggableElement } from './DraggableElement.js';

export class TitleElement extends DraggableElement {

	constructor( title, draggable = true ) {

		super( draggable );

		const { dom } = this;

		dom.className = 'title';

		const spanDOM = document.createElement( 'span' );
		spanDOM.innerText = title;

		const toolbarDOM = document.createElement( 'f-toolbar' );

		this.buttons = [];

		this.spanDOM = spanDOM;
		this.toolbarDOM = toolbarDOM;

		dom.appendChild( spanDOM );
		dom.appendChild( toolbarDOM );

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

		data.title = this.getTitle();

	}

	deserialize( data ) {

		super.deserialize( data );

		this.setTitle( data.title );

	}

}
