import { toPX } from './Utils.js';

export class Node {

	constructor() {

		this.dom = document.createElement( 'f-node' );
		this.dom.className = 'rounded';

		this.style = '';

		this.canvas = null;

		this.elements = [];

	}

	setStyle( style ) {

		if ( this.style ) this.dom.classList.remove( this.style );
		this.dom.classList.add( style );

		this.style = style;

		return this;

	}

	setPosition( x, y ) {

		this.dom.style.cssText += `; left: ${ x }px; top: ${ y }px;`;

		return this;

	}

	getPosition() {

		const dom = this.dom;

		return { x: dom.offsetLeft, y: dom.offsetTop };

	}

	setWidth( val ) {

		this.dom.style.width = toPX( val );

		return this;

	}

	getWidth() {

		return this.dom.style.width;

	}

	add( element ) {

		this.elements.push( element );

		element.node = this;

		this.dom.appendChild( element.dom );

		return this;

	}

}
