import { Menu } from './Menu.js';
import { dispatchEventList } from '../core/Utils.js';

const filterString = ( str ) => {

	return str.trim().toLowerCase().replace( /\s\s+/g, ' ' );

};

export class Search extends Menu {

	constructor() {

		super( 'search' );

		this.events.submit = [];
		this.events.filter = [];

		this.tags = new WeakMap();

		const inputDOM = document.createElement( 'input' );
		inputDOM.placeholder = 'Type here';

		let filter = true;
		let filterNeedUpdate = true;

		inputDOM.addEventListener( 'focusout', () => {

			filterNeedUpdate = true;

			this.setValue( '' );

		} );

		inputDOM.onkeydown = ( e ) => {

			const key = e.key;

			if ( key === 'ArrowUp' ) {

				const index = this.filteredIndex;

				if ( this.forceAutoComplete ) {

					this.filteredIndex = index !== null ? ( index + 1 ) % ( this.filtered.length || 1 ) : 0;

				} else {

					this.filteredIndex = index !== null ? Math.min( index + 1, this.filtered.length - 1 ) : 0;

				}

				e.preventDefault();

				filter = false;

			} else if ( key === 'ArrowDown' ) {

				const index = this.filteredIndex;

				if ( this.forceAutoComplete ) {

					this.filteredIndex = index - 1;

					if ( this.filteredIndex === null ) this.filteredIndex = this.filtered.length - 1;

				} else {

					this.filteredIndex = index !== null ? index - 1 : null;

				}

				e.preventDefault();

				filter = false;

			} else if ( key === 'Enter' ) {

				this.value = this.currentFiltered ? this.currentFiltered.button.getValue() : inputDOM.value;

				this.submit();

				e.preventDefault();

				filter = false;

			} else {

				filter = true;

			}

		};

		inputDOM.onkeyup = () => {

			if ( filter ) {

				if ( filterNeedUpdate ) {

					this.dispatchEvent( new Event( 'filter' ) );

					filterNeedUpdate = false;

				}

				this.filter( inputDOM.value );

			}

		};

		this.filtered = [];
		this.currentFiltered = null;

		this.value = '';

		this.forceAutoComplete = false;

		this.dom.append( inputDOM );

		this.inputDOM = inputDOM;

		this.addEventListener( 'filter', ( ) => {

			dispatchEventList( this.events.filter, this );

		} );

		this.addEventListener( 'submit', ( ) => {

			dispatchEventList( this.events.submit, this );

		} );

	}

	submit() {

		this.dispatchEvent( new Event( 'submit' ) );

		return this.setValue( '' );

	}

	setValue( value ) {

		this.inputDOM.value = value;

		this.filter( value );

		return this;

	}

	getValue() {

		return this.value;

	}

	onFilter( callback ) {

		this.events.filter.push( callback );

		return this;

	}

	onSubmit( callback ) {

		this.events.submit.push( callback );

		return this;

	}

	getFilterByButton( button ) {

		for ( const filter of this.filtered ) {

			if ( filter.button === button ) {

				return filter;

			}

		}

		return null;

	}

	add( button ) {

		super.add( button );

		const onDown = () => {

			const filter = this.getFilterByButton( button );

			this.filteredIndex = this.filtered.indexOf( filter );
			this.value = button.getValue();

			this.submit();

		};

		button.dom.addEventListener( 'mousedown', onDown );
		button.dom.addEventListener( 'touchstart', onDown );

		this.domButtons.get( button ).remove();

		return this;

	}

	set filteredIndex( index ) {

		if ( this.currentFiltered ) {

			const buttonDOM = this.domButtons.get( this.currentFiltered.button );

			buttonDOM.classList.remove( 'active' );

			this.currentFiltered = null;

		}

		const filteredItem = this.filtered[ index ];

		if ( filteredItem ) {

			const buttonDOM = this.domButtons.get( filteredItem.button );

			buttonDOM.classList.add( 'active' );

			this.currentFiltered = filteredItem;

		}

		this.updateFilter();

	}

	get filteredIndex() {

		return this.currentFiltered ? this.filtered.indexOf( this.currentFiltered ) : null;

	}

	setTag( button, tags ) {

		this.tags.set( button, tags );

	}

	filter( text ) {

		text = filterString( text );

		const tags = this.tags;
		const filtered = [];

		for ( const button of this.buttons ) {

			const buttonDOM = this.domButtons.get( button );

			buttonDOM.remove();

			const buttonTags = tags.has( button ) ? ' ' + tags.get( button ) : '';

			const label = filterString( button.getValue() + buttonTags );

			if ( text && label.includes( text ) === true ) {

				const score = text.length / label.length;

				filtered.push( {
					button,
					score
				} );

			}

		}

		filtered.sort( ( a, b ) => b.score - a.score );

		this.filtered = filtered;
		this.filteredIndex = this.forceAutoComplete ? 0 : null;

	}

	updateFilter() {

		const filteredIndex = Math.min( this.filteredIndex, this.filteredIndex - 3 );

		for ( let i = 0; i < this.filtered.length; i ++ ) {

			const button = this.filtered[ i ].button;
			const buttonDOM = this.domButtons.get( button );

			buttonDOM.remove();

			if ( i >= filteredIndex ) {

				this.listDOM.append( buttonDOM );

			}

		}

	}

}
