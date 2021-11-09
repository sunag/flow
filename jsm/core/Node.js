import { Serializer } from './Serializer.js';
import { toPX } from './Utils.js';

export class Node extends Serializer {

	constructor() {

		super();

		const dom = document.createElement( 'f-node' );
		//dom.className = 'rounded';

		const onDown = () => {

			const canvas = this.canvas;

			if ( canvas !== null ) {

				canvas.select( this );

			}

		};

		dom.addEventListener( 'mousedown', onDown, true );
		dom.addEventListener( 'touchstart', onDown, true );

		this.dom = dom;

		this.style = '';

		this.canvas = null;

		this.elements = [];

	}

	setStyle( style ) {

		const dom = this.dom;

		if ( this.style ) dom.classList.remove( this.style );

		if ( style ) dom.classList.add( style );

		this.style = style;

		return this;

	}

	setPosition( x, y ) {

		const dom = this.dom;

		dom.style.left = toPX( x );
		dom.style.top = toPX( y );

		return this;

	}

	getPosition() {

		const dom = this.dom;

		return {
			x: parseInt( dom.style.left ),
			y: parseInt( dom.style.top )
		};

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

	isCircular( node ) {

		if ( node === this ) return true;

		const links = this.getLinks();

		for ( const link of links ) {

			if ( link.sourceElement.node.isCircular( node ) ) {

				return true;

			}

		}

		return false;

	}

	getLinks() {

		const links = [];

		for ( const element of this.elements ) {

			links.push( ...element.links );

		}

		return links;

	}

	serialize( data ) {

		const { x, y, style } = this.getPosition();

		const elements = [];

		for ( const element of this.elements ) {

			elements.push( element.toJSON( data ).id );

		}

		data.x = x;
		data.y = y;
		data.width = this.getWidth();
		data.elements = elements;

		if ( style !== '' ) {

			data.style = style;

		}

	}

	deserialize( data ) {

		this.setPosition( data.x, data.y );
		this.setWidth( data.width );

		for ( const id of data.elements ) {

			this.add( data.objects[ id ] );

		}

		if ( data.style !== undefined ) {

			this.setStyle( data.style );

		}

	}

}
