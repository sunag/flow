import { draggableDOM } from './Utils.js';
import { drawLine } from './CanvasUtils.js';

const inputColors = [
	'#ff6666',
	'#66ff66',
	'#6666ff'
];

export class Canvas {

	constructor() {

		const dom = document.createElement( 'f-canvas' );
		const contentDOM = document.createElement( 'f-content' );
		const canvas = document.createElement( 'canvas' );

		this.dom = dom;

		this.contentDOM = contentDOM;

		this.canvas = canvas;

		this.context = canvas.getContext( '2d' );
		//this.context.globalCompositeOperation = 'screen';

		this.clientX = 0;
		this.clientY = 0;

		this.zoom = 1;

		this.nodes = [];

		dom.appendChild( canvas );
		dom.appendChild( contentDOM );

		let zoomTouchData = null;

		const onZoomStart = ( e ) => {

			zoomTouchData = null;

		};

		const onZoom = ( e ) => {

			if ( e.touches ) {

				if ( e.touches.length === 2 ) {

					e.preventDefault();

					e.stopImmediatePropagation();

					const clientX = ( e.touches[ 0 ].clientX + e.touches[ 1 ].clientX ) / 2;
					const clientY = ( e.touches[ 0 ].clientY + e.touches[ 1 ].clientY ) / 2;

					const distance = Math.hypot(
						e.touches[ 0 ].clientX - e.touches[ 1 ].clientX,
						e.touches[ 0 ].clientY - e.touches[ 1 ].clientY
					);

					if ( zoomTouchData === null ) {

						zoomTouchData = {
							clientX,
							clientY,
							distance
						};

					}

					const delta = ( zoomTouchData.distance - distance );
					zoomTouchData.distance = distance;

					let zoom = Math.min( Math.max( this.zoom - delta * .01, .5 ), 1.2 );

					if ( zoom < .52 ) zoom = .5;
					else if ( zoom > .98 ) zoom = 1;

					const offsetX = ( zoomTouchData.clientX / this.zoom ) - ( clientX / zoom );
					const offsetY = ( zoomTouchData.clientY / this.zoom ) - ( clientY / zoom );

					zoomTouchData.clientX = clientX;
					zoomTouchData.clientY = clientY;

					dom.style.zoom = this.zoom = zoom;

					dom.scrollLeft += offsetX;
					dom.scrollTop += offsetY;

				}

			} else {

				e.preventDefault();

				e.stopImmediatePropagation();

				const delta = e.deltaY / 100;
				const zoom = Math.min( Math.max( this.zoom - delta * .1, .5 ), 1 );

				const offsetX = this.clientX - ( e.clientX / zoom );
				const offsetY = this.clientY - ( e.clientY / zoom );

				dom.style.zoom = this.zoom = zoom;

				dom.scrollLeft += offsetX;
				dom.scrollTop += offsetY;

			}

		};

		dom.addEventListener( 'wheel', onZoom );
		dom.addEventListener( 'touchmove', onZoom );
		dom.addEventListener( 'touchstart', onZoomStart );

		draggableDOM( dom, ( data ) => {

			const { delta, isTouch } = data;

			if ( ! isTouch ) {

				if ( data.scrollTop === undefined ) {

					data.scrollLeft = dom.scrollLeft;
					data.scrollTop = dom.scrollTop;

				}

				dom.scrollLeft = data.scrollLeft - delta.x;
				dom.scrollTop = data.scrollTop - delta.y;

			}

			if ( data.dragging ) {

				dom.classList.add( 'grabbing' );

			} else {

				dom.classList.remove( 'grabbing' );

			}

		}, 'dragging-canvas' );

		const onMoveEvent = ( e ) => {

			const event = e.touches ? e.touches[ 0 ] : e;

			this.clientX = event.clientX / this.zoom;
			this.clientY = event.clientY / this.zoom;

		};

		dom.addEventListener( 'wheel', onMoveEvent, true );

		dom.addEventListener( 'mousedown', onMoveEvent, true );
		dom.addEventListener( 'touchstart', onMoveEvent, true );

		dom.addEventListener( 'mousemove', onMoveEvent, true );
		dom.addEventListener( 'touchmove', onMoveEvent, true );

		document.addEventListener( 'DOMContentLoaded', () => {

			dom.scroll(
				5000,
				5000,
			);

		} );

		window.requestAnimationFrame( this.update.bind( this ) );

	}

	add( node ) {

		this.nodes.push( node );

		node.canvas = this;

		this.contentDOM.appendChild( node.dom );

		return this;

	}

	getLinks() {

		const links = [];

		for ( const node of this.nodes ) {

			for ( const element of node.elements ) {

				for ( const element of node.elements ) {

					links.push( ...element.links );

				}

			}

		}

		return links;

	}

	update() {

		window.requestAnimationFrame( this.update.bind( this ) );

		const { dom, canvas, context, nodes } = this;

		const rect = dom.getBoundingClientRect();

		if ( canvas.width !== rect.width || canvas.height !== rect.height ) {

			canvas.width = rect.width;
			canvas.height = rect.height;

		}

		context.clearRect( 0, 0, canvas.width, canvas.height );

		const sourceRect = dom.getBoundingClientRect();

		const source = {
			x: sourceRect.x - dom.scrollLeft,
			y: sourceRect.y - dom.scrollTop
		};

		const links = this.getLinks();

		const aPos = { x: 0, y: 0 };
		const bPos = { x: 0, y: 0 };

		let dragging = false;

		for ( const link of links ) {

			const { sourceElement, targetElement } = link;

			let draggingLink = false;
			let length = 0;

			if ( sourceElement !== null ) {

				const rect = sourceElement.dom.getBoundingClientRect();

				length = Math.max( length, sourceElement.outputLength );

				aPos.x = rect.x + rect.width;
				aPos.y = rect.y + ( rect.height / 2 );

			} else {

				aPos.x = this.clientX;
				aPos.y = this.clientY;

				draggingLink = true;

			}

			if ( targetElement !== null ) {

				const rect = targetElement.dom.getBoundingClientRect();

				length = Math.max( length, targetElement.inputLength );

				bPos.x = rect.x;
				bPos.y = rect.y + ( rect.height / 2 );

			} else {

				bPos.x = this.clientX;
				bPos.y = this.clientY;

				draggingLink = true;

			}

			dragging = dragging || draggingLink;

			if ( draggingLink || length === 1 ) {

				drawLine(
					aPos.x, aPos.y,
					bPos.x, bPos.y,
					false, 2, '#ffffff', context
				);

			} else {

				length = Math.min( length, 4 );

				for ( let i = 0; i < length; i ++ ) {

					const color = inputColors[ i ] || '#ffffff';

					const outputLength = Math.min( targetElement.outputLength - 1, 3 );
					const inputLength = Math.min( targetElement.inputLength - 1, 3 );

					const aIndex = Math.min( i, outputLength );
					const bIndex = Math.min( i, inputLength );

					drawLine(
						aPos.x, Math.round( ( aPos.y + ( aIndex * 2 ) ) - outputLength ) - 1,
						bPos.x, Math.round( ( bPos.y + ( bIndex * 2 ) ) - inputLength ) - 1,
						false, 1, color, context
					);

				}

			}

		}

		if ( dragging ) dom.classList.add( 'dragging' );
		else dom.classList.remove( 'dragging' );

	}

}
