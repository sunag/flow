import { addDOMClass, removeDOMClass } from '../core/Utils.js';

export class Menu extends EventTarget {

	constructor( className ) {

		super();

		const dom = document.createElement( 'f-menu' );
		dom.className = className + ' bottom left hidden';

		const listDOM = document.createElement( 'f-list' );

		dom.append( listDOM );

		this.dom = dom;
		this.listDOM = listDOM;

		this.visible = false;

		this.align = 'bottom left';

		this.subMenus = new WeakMap();
		this.domButtons = new WeakMap();

		this.buttons = [];

		this.events = {};

	}

	onContext( callback ) {

		this.events.context.push( callback );

		return this;

	}

	setAlign( align ) {

		const dom = this.dom;

		removeDOMClass( dom, this.align );
		addDOMClass( dom, align );

		this.align = align;

		return this;

	}

	getAlign() {

		return this.align;

	}

	show() {

		this.dom.classList.remove( 'hidden' );

		this.visible = true;

		this.dispatchEvent( new Event( 'show' ) );

		return this;

	}

	hide() {

		this.dom.classList.add( 'hidden' );

		this.dispatchEvent( new Event( 'hide' ) );

		this.visible = false;

	}

	add( button, submenu = null ) {

		const liDOM = document.createElement( 'f-item' );

		if ( submenu !== null ) {

			liDOM.classList.add( 'submenu' );

			liDOM.append( submenu.dom );

			this.subMenus.set( button, submenu );

			button.dom.addEventListener( 'mouseover', () => submenu.show() );
			button.dom.addEventListener( 'mouseout', () => submenu.hide() );

		}

		liDOM.append( button.dom );

		this.buttons.push( button );

		this.listDOM.append( liDOM );

		this.domButtons.set( button, liDOM );

		return this;

	}

	clear() {

		this.buttons = [];

		this.subMenus = new WeakMap();
		this.domButtons = new WeakMap();

		while ( this.listDOM.firstChild ) {

			this.listDOM.firstChild.remove();

		}

	}

}
