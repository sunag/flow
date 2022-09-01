import { Menu } from './Menu.js';
import { numberToPX, pointer } from '../core/Utils.js';
import { dispatchEventList } from '../core/Utils.js';

let lastContext = null;

const onCloseLastContext = ( e ) => {

	if ( lastContext && lastContext.visible === true && e.target.closest( 'f-menu.context' ) === null ) {

		lastContext.hide();

	}

};

document.body.addEventListener( 'mousedown', onCloseLastContext, true );
document.body.addEventListener( 'touchstart', onCloseLastContext, true );

export class ContextMenu extends Menu {

	constructor( target = null ) {

		super( 'context', target );

		this.events.context = [];

		this._lastButtonClick = null;

		this._onButtonClick = ( e = null ) => {

			const button = e ? e.target : null;

			if ( this._lastButtonClick ) {

				this._lastButtonClick.dom.parentElement.classList.remove( 'active' );

			}

			this._lastButtonClick = button;

			if ( button ) {

				if ( this.subMenus.has( button ) ) {

					this.subMenus.get( button )._onButtonClick();

				}

				button.dom.parentElement.classList.add( 'active' );

			}

		};

		this._onButtonMouseOver = ( e ) => {

			const button = e.target;

			if ( this.subMenus.has( button ) && this._lastButtonClick !== button ) {

				this._onButtonClick();

			}

		};

		this.addEventListener( 'context', ( ) => {

			dispatchEventList( this.events.context, this );

		} );

		this.setTarget( target );

	}

	openFrom( dom ) {

		const rect = dom.getBoundingClientRect();

		return this.open( rect.x + ( rect.width / 2 ), rect.y + ( rect.height / 2 ) );

	}

	open( x = pointer.x, y = pointer.y ) {

		if ( lastContext !== null ) {

			lastContext.hide();

		}

		lastContext = this;

		this.setPosition( x, y );

		document.body.append( this.dom );

		return this.show();

	}

	setPosition( x, y ) {

		const dom = this.dom;

		dom.style.left = numberToPX( x );
		dom.style.top = numberToPX( y );

		return this;

	}

	setTarget( target = null ) {

		if ( target !== null ) {

			const onContextMenu = ( e ) => {

				e.preventDefault();

				if ( e.pointerType !== 'mouse' || ( e.pageX === 0 && e.pageY === 0 ) ) return;

				this.dispatchEvent( new Event( 'context' ) );

				this.open();

			};

			this.target = target;

			target.addEventListener( 'contextmenu', onContextMenu, false );

		}

		return this;

	}

	show() {

		if ( ! this.opened ) {

			this.dom.style.left = '';
			this.dom.style.transform = '';

		}

		const domRect = this.dom.getBoundingClientRect();

		let offsetX = Math.min( window.innerWidth - ( domRect.x + domRect.width + 10 ), 0 );
		let offsetY = Math.min( window.innerHeight - ( domRect.y + domRect.height + 10 ), 0 );

		if ( this.opened ) {

			if ( offsetX < 0 ) offsetX = - domRect.width;
			if ( offsetY < 0 ) offsetY = - domRect.height;

			this.setPosition( domRect.x + offsetX, domRect.y + offsetY );

		} else {

			// flip submenus

			if ( offsetX < 0 ) this.dom.style.left = '-100%';
			if ( offsetY < 0 ) this.dom.style.transform = 'translateY( calc( 32px - 100% ) )';

		}

		return super.show();

	}

	hide() {

		if ( this.opened ) {

			lastContext = null;

		}

		return super.hide();

	}

	add( button, submenu = null ) {

		button.addEventListener( 'click', this._onButtonClick );
		button.addEventListener( 'mouseover', this._onButtonMouseOver );

		return super.add( button, submenu );

	}

	get opened() {

		return lastContext === this;

	}

}
