import { Element } from '../core/Element.js';

export class TitleElement extends Element {

	constructor( title ) {

		super();

		this.dom.className = 'title';

		const span = document.createElement( 'span' );
		span.innerText = title;

		this.dom.appendChild( span );

	}

}
