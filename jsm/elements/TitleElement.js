import { DraggableElement } from './DraggableElement.js';

export class TitleElement extends DraggableElement {

	static get type() {

		return 'TitleElement';

	}

	constructor( title, draggable = true ) {

		super( draggable );

		const { dom } = this;

		dom.classList.add( 'title' );

		const dbClick = () => {

			this.node.canvas.focusSelected = ! this.node.canvas.focusSelected;

		};

		dom.addEventListener( 'dblclick', dbClick );

		const titleDOM = document.createElement( 'f-title' );
		titleDOM.innerText = title;

		const iconDOM = document.createElement( 'i' );

		const toolbarDOM = document.createElement( 'f-toolbar' );

		this.buttons = [];

		this.titleDOM = titleDOM;
		this.iconDOM = iconDOM;
		this.toolbarDOM = toolbarDOM;

		dom.append( titleDOM );
		dom.append( iconDOM );
		dom.append( toolbarDOM );

		this.setHeight( 29 );

	}

	setIcon( value ) {

		this.iconDOM.className = value;

		return this;

	}

	getIcon() {

		return this.iconDOM.className;

	}

	setTitle( value ) {

		this.titleDOM.innerText = value;

		return this;

	}

	getTitle() {

		return this.titleDOM.innerText;

	}

	addButton( button ) {

		this.buttons.push( button );

		this.toolbarDOM.append( button.dom );

		return this;

	}

	serialize( data ) {

		super.serialize( data );

		const title = this.getTitle();
		const icon = this.getIcon();

		data.title = title;

		if ( icon !== '' ) {

			data.icon = icon;

		}

	}

	deserialize( data ) {

		super.deserialize( data );

		this.setTitle( data.title );

		if ( data.icon !== undefined ) {

			this.setIcon( data.icon );

		}

	}

}
