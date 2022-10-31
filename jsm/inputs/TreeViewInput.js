import { Input } from '../core/Input.js';

export class TreeViewNode {
	
	constructor( title = '' ) {

		const dom = document.createElement( 'f-treeview-node' );
		const labelDOM = document.createElement( 'f-treeview-label' );
		const inputDOM = document.createElement( 'input' );
		
		labelDOM.innerText = title;
		
		inputDOM.type = 'checkbox';
		
		dom.append( inputDOM );
		dom.append( labelDOM );

		this.dom = dom;
		this.childrenDOM = null;
		this.labelDOM = labelDOM;
		this.iconDOM = null;
		
		this.children = [];
		
		this.setIcon( 'ti ti-3d-cube-sphere' );

	}
	
	add( node ) {
		
		let  childrenDOM = this.childrenDOM;
		
		if ( this.childrenDOM === null ) {
			
			const dom = this.dom;
			
			const arrowDOM = document.createElement( 'f-arrow' );
			childrenDOM = document.createElement( 'f-treeview-children' );

			dom.append( arrowDOM );
			dom.append( childrenDOM );
			
			this.childrenDOM = childrenDOM;
			
		}		
		
		this.children.push( node );
		childrenDOM.append( node.dom );
		
		return this;
		
	}
	
	setIcon( value ) {

		this.iconDOM = this.iconDOM || document.createElement( 'i' );
		this.iconDOM.className = value;

		if ( value ) this.labelDOM.prepend( this.iconDOM );
		else this.iconDOM.remove();

		return this;

	}

	getIcon() {

		return this.iconDOM?.className;

	}
	
}

export class TreeViewInput extends Input {

	constructor( options = [] ) {

		const dom = document.createElement( 'f-treeview' );
		super( dom );

		const childrenDOM = document.createElement( 'f-treeview-children' );
		dom.append( childrenDOM );

		dom.setAttribute( 'type', 'tree' );

		this.childrenDOM = childrenDOM;

		this.children = [];

	}
	
	add( node ) {
		
		this.children.push( node );
		this.childrenDOM.append( node.dom );
		
		return this;
		
	}

	serialize( data ) {

		//data.options = [ ...this.options ];

		super.serialize( data );

	}

	deserialize( data ) {
/*
		const currentOptions = this.options;

		if ( currentOptions.length === 0 ) {

			this.setOptions( data.options );

		}
*/
		super.deserialize( data );

	}

}
