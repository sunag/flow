import { drawLine } from './Utils.js';

export class Canvas {

	constructor() {

		this.dom = document.createElement( 'f-canvas' );

		this.canvas = document.createElement( 'canvas' );
		this.dom.appendChild( this.canvas );
		
		this.context = this.canvas.getContext( '2d' );

		this.nodes = [];

		window.requestAnimationFrame( this.update.bind( this ) );

	}

	add( node ) {

		this.nodes.push( node );

		node.canvas = this;

		this.dom.appendChild( node.dom );

		return this;

	}
	
	getLinks() {
		
		const { dom, nodes } = this;
		
		const links = [];
		
		const sourceRect = dom.getBoundingClientRect();
		
		const source = {
			x: sourceRect.x - dom.scrollLeft,
			y: sourceRect.y - dom.scrollTop
		};
		
		for( const node of nodes ) {
			
			for( const element of node.elements ) {
				
				const rect = element.dom.getBoundingClientRect();

				const target = {
					x: rect.x,
					y: rect.y + ( rect.height / 2 )
				};

				links.push( { source, target } );
				
			}
			
		}
		
		return links;
		
	}
	
	update() {
		
		window.requestAnimationFrame( this.update.bind( this ) );
		
		const { dom, canvas, context, nodes } = this;
		
		const rect = dom.getBoundingClientRect();
		
		if (canvas.width !== rect.width || canvas.height !== rect.height) {
		
			canvas.width = rect.width;
			canvas.height = rect.height;
			
		}
		
		context.clearRect( 0, 0, canvas.width, canvas.height );
		
		const links = this.getLinks();
		
		for( const link of links ) {
		
			const { source, target } = link;
		
			drawLine(
				source.x, source.y,
				target.x, target.y,
				false, 2, 'white', context
			);
			
		}
		
	}

}
