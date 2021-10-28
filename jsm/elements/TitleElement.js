import { DraggableElement } from './DraggableElement.js';

export class TitleElement extends DraggableElement {

	constructor( title, draggable = true ) {

		super( draggable );

		this.buttons = [];

		this.dom.className = 'title';

		const spanDOM = document.createElement( 'span' );
		spanDOM.innerText = title;

		const toolbarDOM = document.createElement( 'f-toolbar' );

		this.spanDOM = spanDOM;
		this.toolbarDOM = toolbarDOM;

		this.dom.appendChild( spanDOM );
		this.dom.appendChild( toolbarDOM );

	}

	addButton( button ) {

		this.buttons.push( button );

		this.toolbarDOM.appendChild( button.dom );

		return this;

	}

}
