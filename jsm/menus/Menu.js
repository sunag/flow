import { toPX } from '../core/Utils.js';

export class Menu {

	constructor( className, target = null ) {

		const dom = document.createElement( 'f-menu' );
		dom.className = className + ' hidden';

		this.dom = dom;

		this.visible = false;

		this.setTarget( target );

	}

	show( x, y ) {

		this.setPosition( x, y );

		this.dom.classList.remove( 'hidden' );

		this.visible = true;

		return this;

	}

	hide() {

		this.dom.classList.add( 'hidden' );

		this.visible = false;

	}

	setTarget( target = null ) {

		if ( target !== null ) {

			const onContextMenu = ( e ) => {

				e.preventDefault();

				const rect = this.target.getBoundingClientRect();

				this.show( e.pageX  - rect.left, e.pageY - rect.top );

			};

			const onDown = ( e ) => {

				if ( this.visible === true && e.target.closest( 'f-menu' ) === null ) {

					this.hide();

				}

			};

			this.target = target;

			target.addEventListener( 'mousedown', onDown, true );
			target.addEventListener( 'touchstart', onDown, true );

			target.addEventListener( 'contextmenu', onContextMenu, false );

		}

		return this;

	}

	add( button, submenu = null ) {

		const liDOM = document.createElement( 'f-item' );

		if ( submenu !== null ) {

			liDOM.classList.add( 'submenu' );

			liDOM.appendChild( submenu.dom );

		}

		liDOM.appendChild( button.dom );

		this.dom.appendChild( liDOM );

		return this;

	}

	setPosition( x, y ) {

		const dom = this.dom;

		dom.style.left = toPX( x );
		dom.style.top = toPX( y );

		return this;

	}

}
