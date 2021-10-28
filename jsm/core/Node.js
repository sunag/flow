import { toPX } from './Utils.js';

export class Node {

	constructor() {

		this.dom = document.createElement( 'f-node' );

		this.style = 'rounded';
		this.align = '';

		this._updateClass();

	}

	setPosition( x, y ) {

		this.dom.style.cssText += `; left: ${ x }px; top: ${ y }px;`;

		return this;

	}

	setStyle( style ) {

		this.style = style;

		this._updateClass();

		return this;

	}

	setAlign( align ) {

		this.align = align;

		this._updateClass();

		return this;

	}

	setWidth( val ) {

		this.dom.style.width = toPX( val );

		return this;

	}

	getWidth() {

		return this.dom.style.width;

	}

	add( element ) {

		element.node = this;

		this.dom.appendChild( element.dom );

		return this;

	}

	_updateClass() {

		this.dom.className = `${ this.style } ${ this.align }`;

	}

}
