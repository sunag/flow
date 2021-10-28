import { DragabbleElement } from './DragabbleElement.js';

export class TitleElement extends DragabbleElement {

	constructor( title, dragabble = true ) {

		super( dragabble );

		this.dom.className = 'title';

		const span = document.createElement( 'span' );
		span.innerText = title;

		this.dom.appendChild( span );

	}

}
