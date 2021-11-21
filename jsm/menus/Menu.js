import { toPX } from '../core/Utils.js';
import { dispatchEventList } from '../core/Utils.js';

export class Menu extends EventTarget {

	constructor( className, target = null ) {

		super();

		const dom = document.createElement( 'f-menu' );
		dom.className = className + ' hidden';

		this.dom = dom;

		this.visible = false;

		this.events = {
			'context': []
		};

		this.addEventListener( 'context', ( ) => {

			dispatchEventList( this.events.context, this );

		} );

		this.setTarget( target );

	}

	onContext( callback ) {

		this.events.context.push( callback );

		return this;

	}

	show( x, y ) {

		this.setPosition( x, y );

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

	setTarget( target = null ) {

		if ( target !== null ) {

			const onContextMenu = ( e ) => {

				e.preventDefault();

				if ( e.pointerType !== 'mouse' || ( e.pageX === 0 && e.pageY === 0 ) ) return;

				const rect = this.target.getBoundingClientRect();

				this.dispatchEvent( new Event( 'context' ) );

				this.show( e.pageX - rect.left, e.pageY - rect.top );

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

			target.appendChild( this.dom );

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
