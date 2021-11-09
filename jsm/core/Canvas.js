import { Serializer } from './Serializer.js';
import { draggableDOM, toPX } from './Utils.js';
import { drawLine } from './CanvasUtils.js';

const inputColors = [
	'#ff4444',
	'#44ff44',
	'#4444ff'
];

export class Canvas extends Serializer {

	constructor() {

		super();

		const dom = document.createElement( 'f-canvas' );
		const contentDOM = document.createElement( 'f-content' );
		const areaDOM = document.createElement( 'f-area' );
		const canvas = document.createElement( 'canvas' );
		const frontCanvas = document.createElement( 'canvas' );

		const context = canvas.getContext( '2d' );
		const frontContext = frontCanvas.getContext( '2d' );

		this.dom = dom;

		this.contentDOM = contentDOM;
		this.areaDOM = areaDOM;

		this.canvas = canvas;
		this.frontCanvas = frontCanvas;

		this.context = context;
		this.frontContext = frontContext;

		this.width = 10000;
		this.height = 10000;

		this.clientX = 0;
		this.clientY = 0;

		this.relativeX = 0;
		this.relativeY = 0;

		this.zoom = 1;

		this.nodes = [];

		this.selected = null;

		this.updating = false;

		frontCanvas.className = 'front';

		contentDOM.style.left = toPX( this.centerX );
		contentDOM.style.top = toPX( this.centerY );

		areaDOM.style.width = `calc( 100% + ${ this.width }px )`;
		areaDOM.style.height = `calc( 100% + ${ this.height }px )`;

		dom.appendChild( canvas );
		dom.appendChild( frontCanvas );
		dom.appendChild( contentDOM );
		dom.appendChild( areaDOM );
		/*
		let zoomTouchData = null;

		const onZoomStart = () => {

			zoomTouchData = null;

		};
*/
		const onZoom = ( e ) => {

			if ( e.touches ) {

				if ( e.touches.length === 2 ) {

					e.preventDefault();

					e.stopImmediatePropagation();
					/*
					const clientX = ( e.touches[ 0 ].clientX + e.touches[ 1 ].clientX ) / 2;
					const clientY = ( e.touches[ 0 ].clientY + e.touches[ 1 ].clientY ) / 2;

					const distance = Math.hypot(
						e.touches[ 0 ].clientX - e.touches[ 1 ].clientX,
						e.touches[ 0 ].clientY - e.touches[ 1 ].clientY
					);

					if ( zoomTouchData === null ) {

						zoomTouchData = {
							distance
						};

					}

					const delta = ( zoomTouchData.distance - distance );
					zoomTouchData.distance = distance;

					let zoom = Math.min( Math.max( this.zoom - delta * .01, .5 ), 1.2 );

					if ( zoom < .52 ) zoom = .5;
					else if ( zoom > .98 ) zoom = 1;

					contentDOM.style.left = toPX( this.centerX / zoom );
					contentDOM.style.top = toPX( this.centerY / zoom );
					contentDOM.style.zoom = this.zoom = zoom;
*/

				}

			} else {

				e.preventDefault();

				e.stopImmediatePropagation();
				/*
				const delta = e.deltaY / 100;
				const zoom = Math.min( Math.max( this.zoom - delta * .1, .5 ), 1 );

				contentDOM.style.left = toPX( this.centerX / zoom );
				contentDOM.style.top = toPX( this.centerY / zoom );
				contentDOM.style.zoom = this.zoom = zoom;
*/

			}

		};

		dom.addEventListener( 'wheel', onZoom );
		dom.addEventListener( 'touchmove', onZoom );
		//dom.addEventListener( 'touchstart', onZoomStart );

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

		this._onMoveEvent = ( e ) => {

			const event = e.touches ? e.touches[ 0 ] : e;
			const zoom = this.zoom;
			const rect = dom.getBoundingClientRect();

			this.clientX = event.clientX;
			this.clientY = event.clientY;

			this.relativeX = ( ( ( dom.scrollLeft - this.centerX ) + event.clientX ) - rect.left ) / zoom;
			this.relativeY = ( ( ( dom.scrollTop - this.centerY ) + event.clientY ) - rect.top ) / zoom;

		};

		this._onContentLoaded = () => {

			this.centralize();

		};

		this._onUpdate = () => {

			this.update();

		};

		this.start();

	}

	get centerX() {

		return this.width / 2;

	}

	get centerY() {

		return this.height / 2;

	}

	start() {

		this.updating = true;

		document.addEventListener( 'wheel', this._onMoveEvent, true );

		document.addEventListener( 'mousedown', this._onMoveEvent, true );
		document.addEventListener( 'touchstart', this._onMoveEvent, true );

		document.addEventListener( 'mousemove', this._onMoveEvent, true );
		document.addEventListener( 'touchmove', this._onMoveEvent, true );

		document.addEventListener( 'DOMContentLoaded', this._onContentLoaded );

		requestAnimationFrame( this._onUpdate );

	}

	stop() {

		this.updating = false;

		document.removeEventListener( 'wheel', this._onMoveEvent, true );

		document.removeEventListener( 'mousedown', this._onMoveEvent, true );
		document.removeEventListener( 'touchstart', this._onMoveEvent, true );

		document.removeEventListener( 'mousemove', this._onMoveEvent, true );
		document.removeEventListener( 'touchmove', this._onMoveEvent, true );

		document.removeEventListener( 'DOMContentLoaded', this._onContentLoaded );

	}

	add( node ) {

		this.nodes.push( node );

		node.canvas = this;

		this.contentDOM.appendChild( node.dom );

		return this;

	}

	remove( node ) {

		this.unlink( node );

		const nodes = this.nodes;

		nodes.splice( nodes.indexOf( node ), 1 );

		node.canvas = null;

		this.contentDOM.removeChild( node.dom );

	}

	unlink( node ) {

		const links = this.getLinks();

		for ( const link of links ) {

			if ( link.sourceElement && link.sourceElement.node === node ) {

				link.targetElement.link();

			}

		}

	}

	getLinks() {

		const links = [];

		for ( const node of this.nodes ) {

			links.push( ...node.getLinks() );

		}

		return links;

	}

	centralize() {

		this.dom.scroll( this.centerX, this.centerY );

		return this;

	}

	select( node = null ) {

		if ( this.selected !== null ) {

			this.selected.dom.classList.remove( 'selected' );

		}

		if ( node !== null ) {

			node.dom.classList.add( 'selected' );

		}

		this.selected = node;

	}

	update() {

		if ( this.updating === false ) return;

		requestAnimationFrame( this._onUpdate );

		const { dom, zoom, canvas, frontCanvas, frontContext, context } = this;

		const width = window.innerWidth;
		const height = window.innerHeight;

		const domRect = dom.getBoundingClientRect();

		if ( canvas.width !== width || canvas.height !== height ) {

			canvas.width = width;
			canvas.height = height;

			frontCanvas.width = width;
			frontCanvas.height = height;

		}

		context.clearRect( 0, 0, width, height );
		frontContext.clearRect( 0, 0, width, height );

		context.globalCompositeOperation = 'lighter';
		frontContext.globalCompositeOperation = 'source-over';

		const links = this.getLinks();

		const aPos = { x: 0, y: 0 };
		const bPos = { x: 0, y: 0 };

		const offsetIORadius = 10;

		let dragging = '';

		for ( const link of links ) {

			const { sourceElement, targetElement } = link;

			let draggingLink = '';
			let length = 0;

			if ( sourceElement !== null ) {

				const rect = sourceElement.dom.getBoundingClientRect();

				length = Math.max( length, sourceElement.outputLength );

				aPos.x = rect.x + rect.width;
				aPos.y = rect.y + ( rect.height / 2 );

			} else {

				aPos.x = this.clientX;
				aPos.y = this.clientY;

				draggingLink = 'input';

			}

			if ( targetElement !== null ) {

				const rect = targetElement.dom.getBoundingClientRect();

				length = Math.max( length, targetElement.inputLength );

				bPos.x = rect.x;
				bPos.y = rect.y + ( rect.height / 2 );

			} else {

				bPos.x = this.clientX;
				bPos.y = this.clientY;

				draggingLink = 'output';

			}

			dragging = dragging || draggingLink;

			const drawContext = draggingLink ? frontContext : context;

			if ( draggingLink || length === 1 ) {

				if ( draggingLink === 'output' ) {

					aPos.x += offsetIORadius;
					bPos.x /= zoom;
					bPos.y /= zoom;

				} else if ( draggingLink === 'input' ) {

					bPos.x -= offsetIORadius;
					aPos.x /= zoom;
					aPos.y /= zoom;

				}

				drawLine(
					aPos.x * zoom, aPos.y * zoom,
					bPos.x * zoom, bPos.y * zoom,
					false, 2, '#ffffff', drawContext
				);

			} else {

				length = Math.min( length, 4 );

				for ( let i = 0; i < length; i ++ ) {

					const color = inputColors[ i ] || '#ffffff';

					const marginY = 4;

					const outputLength = Math.min( sourceElement.outputLength, length );
					const inputLength = Math.min( targetElement.inputLength, length );

					const aCenterY = ( ( outputLength * marginY ) * .5 ) - ( marginY / 2 );
					const bCenterY = ( ( inputLength * marginY ) * .5 ) - ( marginY / 2 );

					const aIndex = Math.min( i, outputLength - 1 );
					const bIndex = Math.min( i, inputLength - 1 );

					const aPosY = aIndex * marginY;
					const bPosY = bIndex * marginY;

					drawLine(
						aPos.x * zoom, ( ( aPos.y + aPosY ) - aCenterY ) * zoom,
						bPos.x * zoom, ( ( bPos.y + bPosY ) - bCenterY ) * zoom,
						false, 2, color, drawContext
					);

				}

			}

		}

		context.globalCompositeOperation = 'destination-in';

		context.fillRect( domRect.x, domRect.y, domRect.width, domRect.height );

		if ( dragging !== '' ) {

			dom.classList.add( 'dragging-' + dragging );

		} else {

			dom.classList.remove( 'dragging-input' );
			dom.classList.remove( 'dragging-output' );

		}

	}

	serialize( data ) {

		const nodes = [];

		for ( const node of this.nodes ) {

			nodes.push( node.toJSON( data ).id );

		}

		data.nodes = nodes;

	}

	deserialize( data ) {

		for ( const id of data.nodes ) {

			this.add( data.objects[ id ] );

		}

	}

}
