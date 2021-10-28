import { dispatchEventList } from './Utils.js';

export class Input extends EventTarget {

	constructor( dom ) {

		super();

		this.dom = dom;

		this.element = null;

		this.events = {
			'change': [],
			'click': []
		};

		this.addEventListener( 'change', ( ) => {

			dispatchEventList( this.events.change, this );

		} );

		this.addEventListener( 'click', ( ) => {

			dispatchEventList( this.events.click, this );

		} );

	}

	onChange( callback ) {

		this.events.change.push( callback );

		return this;

	}

	onClick( callback ) {

		this.events.click.push( callback );

		return this;

	}

	set value( value ) {

		this.dom.value = value;

	}

	get value() {

		return this.dom.value;

	}

}
