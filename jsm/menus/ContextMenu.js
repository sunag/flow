import { Menu } from './Menu.js';

let lastContext = null;

export class ContextMenu extends Menu {

	constructor( target = null ) {

		super( 'context', target );

	}

	show( x, y ) {

		if ( lastContext !== null ) {

			lastContext.hide();

		}

		lastContext = this;

		return super.show( x, y );

	}

	hide() {

		if ( lastContext === this ) {

			lastContext = null;

		}

		return super.hide();

	}

}
