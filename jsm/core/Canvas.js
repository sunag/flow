import { Serializer } from './Serializer.js';
import { Node } from './Node.js';
import { TitleElement } from '../elements/TitleElement.js';
import { rgbaToArray, draggableDOM, dispatchEventList, numberToPX } from './Utils.js';
import { drawLine } from './CanvasUtils.js';

const colors = [
	'#ff4444',
	'#44ff44',
	'#4444ff'
];

const dropNode = new Node().add( new TitleElement( 'File' ) ).setWidth( 250 );

export class Canvas extends Serializer {

	constructor() {

		super();

		const dom = document.createElement( 'f-canvas' );
		const contentDOM = document.createElement( 'f-content' );
		const areaDOM = document.createElement( 'f-area' );
		const dropDOM = document.createElement( 'f-drop' );

		const canvas = document.createElement( 'canvas' );
		const frontCanvas = document.createElement( 'canvas' );
		const mapCanvas = document.createElement( 'canvas' );

		const context = canvas.getContext( '2d' );
		const frontContext = frontCanvas.getContext( '2d' );
		const mapContext = mapCanvas.getContext( '2d' );

		this.dom = dom;

		this.contentDOM = contentDOM;
		this.areaDOM = areaDOM;
		this.dropDOM = dropDOM;

		this.canvas = canvas;
		this.frontCanvas = frontCanvas;
		this.mapCanvas = mapCanvas;

		this.context = context;
		this.frontContext = frontContext;
		this.mapContext = mapContext;

		this.clientX = 0;
		this.clientY = 0;

		this.relativeClientX = 0;
		this.relativeClientY = 0;

		this.nodes = [];

		this.selected = null;

		this.updating = false;

		this.droppedItems = [];

		this.events = {
			'drop': []
		};

		this._scrollLeft = 0;
		this._scrollTop = 0;
		this._zoom = 1;
		this._width = 0;
		this._height = 0;
		this._mapInfo = {
			scale: 1,
			screen: {}
		};

		canvas.className = 'background';
		frontCanvas.className = 'frontground';
		mapCanvas.className = 'map';

		dropDOM.innerHTML = '<span>drop your file</span>';

		dom.append( dropDOM );
		dom.append( canvas );
		dom.append( frontCanvas );
		dom.append( contentDOM );
		dom.append( areaDOM );
		dom.append( mapCanvas );
		
		let zoomTouchData = null;

		const onZoomStart = () => {

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
							distance
						};

					}

					const delta = ( zoomTouchData.distance - distance );
					zoomTouchData.distance = distance;

					let zoom = Math.min( Math.max( this.zoom - delta * .01, .5 ), 1.2 );

					if ( zoom < .52 ) zoom = .5;
					else if ( zoom > .98 ) zoom = 1;

					//contentDOM.style.left = numberToPX( this.centerX / zoom );
					//contentDOM.style.top = numberToPX( this.centerY / zoom );
					contentDOM.style.zoom = this.zoom = zoom;

				}

			} else {

				e.preventDefault();

				e.stopImmediatePropagation();
				
				const delta = e.deltaY / 100;
				const zoom = Math.min( Math.max( this.zoom - delta * .1, .2 ), 1 );

				const bounds = this.getBounds();
				const centerX = bounds.x + bounds.width;

				this.scrollLeft -= ( this.clientX / this.zoom ) - ( this.clientX / zoom );
				this.scrollTop -= ( this.clientY / this.zoom ) - ( this.clientY / zoom );

				this.zoom = zoom;

			}

		};

		dom.addEventListener( 'wheel', onZoom );
		dom.addEventListener( 'touchmove', onZoom );
		dom.addEventListener( 'touchstart', onZoomStart );

		let dropEnterCount = 0;

		const dragState = ( enter ) => {

			if ( enter ) {

				if ( dropEnterCount ++ === 0 ) {

					this.droppedItems = [];

					dropDOM.classList.add( 'visible' );

					this.add( dropNode );

				}

			} else if ( -- dropEnterCount === 0 ) {

				dropDOM.classList.remove( 'visible' );

				this.remove( dropNode );

			}

		};

		dom.addEventListener( 'dragenter', () => {

 			dragState( true );

		} );

		dom.addEventListener( 'dragleave', () => {

			dragState( false );

		} );

		dom.addEventListener( 'dragover', ( e ) => {

			e.preventDefault();

			const { relativeClientX, relativeClientY } = this;

			const centerNodeX = dropNode.getWidth() / 2;

			dropNode.setPosition( relativeClientX - centerNodeX, relativeClientY - 20 );

		} );

		dom.addEventListener( 'drop', ( e ) => {

			e.preventDefault();

			dragState( false );

			this.droppedItems = e.dataTransfer.items;

			dispatchEventList( this.events.drop, this );

		} );

		draggableDOM( dom, ( data ) => {

			const { delta, isTouch } = data;

			if ( ! isTouch ) {

				if ( data.scrollTop === undefined ) {

					data.scrollLeft = this.scrollLeft;
					data.scrollTop = this.scrollTop;

				}

				this.scrollLeft = data.scrollLeft + delta.x;
				this.scrollTop = data.scrollTop + delta.y;

			}

			if ( data.dragging ) {

				dom.classList.add( 'grabbing' );

			} else {

				dom.classList.remove( 'grabbing' );

			}

		}, 'dragging-canvas' );
		
		
		draggableDOM( mapCanvas, ( data ) => {
			
			const { scale, screen } = this._mapInfo;
			
			if ( data.scrollLeft === undefined ) {
				
				const rect = this.mapCanvas.getBoundingClientRect();
			
				const clientMapX = data.client.x - rect.left;
				const clientMapY = data.client.y - rect.top;
				
				const overMapScreen = 
					clientMapX > screen.x && clientMapY > screen.y &&
					clientMapX < screen.x + screen.width && clientMapY < screen.y + screen.height;
					
				if ( overMapScreen === false ) {

					const scaleX = this._mapInfo.width / this.mapCanvas.width;

					let scrollLeft = -this._mapInfo.left - ( clientMapX * scaleX );
					let scrollTop = -this._mapInfo.top - ( clientMapY * ( this._mapInfo.height / this.mapCanvas.height ) );

					scrollLeft += ( screen.width / 2 ) / scale;
					scrollTop += ( screen.height / 2 ) / scale;
					
					this.scrollLeft = scrollLeft;
					this.scrollTop = scrollTop;

				}
				
				data.scrollLeft = this.scrollLeft;
				data.scrollTop = this.scrollTop;
				
			}
			
			this.scrollLeft = data.scrollLeft - ( data.delta.x / scale );
			this.scrollTop = data.scrollTop - ( data.delta.y / scale );
			
		} );

		this._onMoveEvent = ( e ) => {

			const event = e.touches ? e.touches[ 0 ] : e;
			const { zoom, rect } = this;

			this.clientX = event.clientX;
			this.clientY = event.clientY;

			//this.relativeClientX = ( ( ( dom.scrollLeft - this.centerX ) + event.clientX ) - rect.left ) / zoom;
			this.relativeClientY = ( ( ( dom.scrollTop - this.centerY ) + event.clientY ) - rect.top ) / zoom;

		};

		this._onUpdate = () => {

			this.update();

		};

		this.start();

	}

	getBounds() {

		const bounds = { x: Infinity, y: Infinity, width: -Infinity, height: -Infinity };

		for( const node of this.nodes) {

			const { x, y, width, height } = node.getBound();

			bounds.x = Math.min( bounds.x, x );
			bounds.y = Math.min( bounds.y, y );
			bounds.width = Math.max( bounds.width, x + width );
			bounds.height = Math.max( bounds.height, y + height );

		}

		bounds.x = Math.round( bounds.x );
		bounds.y = Math.round( bounds.y );
		bounds.width = Math.round( bounds.width );
		bounds.height = Math.round( bounds.height );

		return bounds;

	}

	get width() {

		return this._width;

	}

	get height() {

		return this._height;

	}

	get rect() {

		return this.dom.getBoundingClientRect();

	}

	get zoom() {

		return this._zoom;

	}

	set zoom( val ) {

		this._zoom = val;
		this.contentDOM.style.zoom = val;

	}

	set scrollLeft( val ) {

		this._scrollLeft = val;
		this.contentDOM.style.left = numberToPX( val );

	}

	get scrollLeft() {

		return this._scrollLeft;

	}

	set scrollTop( val ) {

		this._scrollTop = val;
		this.contentDOM.style.top = numberToPX( val );

	}

	get scrollTop() {

		return this._scrollTop;

	}

	onDrop( callback ) {

		this.events.drop.push( callback );

		return this;

	}

	start() {

		this.updating = true;

		document.addEventListener( 'wheel', this._onMoveEvent, true );

		document.addEventListener( 'mousedown', this._onMoveEvent, true );
		document.addEventListener( 'touchstart', this._onMoveEvent, true );

		document.addEventListener( 'mousemove', this._onMoveEvent, true );
		document.addEventListener( 'touchmove', this._onMoveEvent, true );

		document.addEventListener( 'dragover', this._onMoveEvent, true );

		requestAnimationFrame( this._onUpdate );

	}

	stop() {

		this.updating = false;

		document.removeEventListener( 'wheel', this._onMoveEvent, true );

		document.removeEventListener( 'mousedown', this._onMoveEvent, true );
		document.removeEventListener( 'touchstart', this._onMoveEvent, true );

		document.removeEventListener( 'mousemove', this._onMoveEvent, true );
		document.removeEventListener( 'touchmove', this._onMoveEvent, true );

		document.removeEventListener( 'dragover', this._onMoveEvent, true );

	}

	add( node ) {

		if ( node.canvas === this ) return;

		this.nodes.push( node );

		node.canvas = this;

		this.contentDOM.append( node.dom );

		return this;

	}

	remove( node ) {

		if ( node === this.selected ) {

			this.select();

		}

		this.unlink( node );

		const nodes = this.nodes;

		nodes.splice( nodes.indexOf( node ), 1 );

		node.canvas = null;

		this.contentDOM.removeChild( node.dom );

		node.dispatchEvent( new Event( 'remove' ) );

		return this;

	}

	clear() {

		const nodes = this.nodes;

		while ( nodes.length > 0 ) {

			this.remove( nodes[ 0 ] );

		}

		return this;

	}

	unlink( node ) {

		const links = this.getLinks();

		for ( const link of links ) {

			if ( link.inputElement && link.outputElement ) {

				if ( link.inputElement.node === node ) {

					link.inputElement.connect();

				} else if ( link.outputElement.node === node ) {

					link.inputElement.connect();

				}

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

		const bounds = this.getBounds();

		this.scrollLeft = ( this.canvas.width / 2 ) - ( ( -bounds.x + bounds.width ) / 2 );
		this.scrollTop = ( this.canvas.height / 2 ) - ( ( -bounds.y + bounds.height ) / 2 );

		return this;

	}
	
	setSize( width, height ) {
		
		this._width = width;
		this._height = height;
		
		this.update();
		
		return this;
		
	}

	select( node = null ) {

		if ( node === this.selected ) return;

		const previousNode = this.selected;

		if ( previousNode !== null ) {

			previousNode.dom.classList.remove( 'selected' );

			this.selected = null;

			dispatchEventList( previousNode.events.blur, previousNode );

		}

		if ( node !== null ) {

			node.dom.classList.add( 'selected' );

			this.selected = node;

			dispatchEventList( node.events.focus, node );

		}

	}

	updateMap() {

		const { nodes, mapCanvas, mapContext, scrollLeft, scrollTop, canvas, zoom, _mapInfo } = this;

		const bounds = this.getBounds();

		let aspectX = 1, aspectY = 1;

		if ( canvas.width > canvas.height ) aspectY = canvas.height / canvas.width;
		else aspectX = canvas.width / canvas.height;

		mapCanvas.width = 300;
		mapCanvas.height = 200;

		mapContext.clearRect( 0, 0, mapCanvas.width, mapCanvas.height );

		mapContext.fillStyle = 'rgba( 0, 0, 0, 0 )';
		mapContext.fillRect( 0, 0, mapCanvas.width, mapCanvas.height );

		const boundsWidth = -bounds.x + bounds.width;
		const boundsHeight = -bounds.y + bounds.height;

		const mapScale = Math.min( mapCanvas.width / boundsWidth, mapCanvas.height / boundsHeight ) * .5;
		
		const boundsMapWidth = boundsWidth * mapScale;
		const boundsMapHeight = boundsHeight * mapScale;
		
		const boundsOffsetX = ( mapCanvas.width / 2) - ( boundsMapWidth / 2 );
		const boundsOffsetY = ( mapCanvas.height / 2) - ( boundsMapHeight / 2 );

		for ( const node of nodes ) {

			const nodeBound = node.getBound();
			const nodeColor = node.getColor();

			nodeBound.x += -bounds.x;
			nodeBound.y += -bounds.y;

			nodeBound.x *= mapScale;
			nodeBound.y *= mapScale;
			nodeBound.width *= mapScale;
			nodeBound.height *= mapScale;
			
			nodeBound.x += boundsOffsetX;
			nodeBound.y += boundsOffsetY;

			mapContext.fillStyle = nodeColor;
			mapContext.fillRect( nodeBound.x, nodeBound.y, nodeBound.width, nodeBound.height );

		}
		
		const screenMapX = ( -(scrollLeft + bounds.x) * mapScale ) + boundsOffsetX;
		const screenMapY = ( -(scrollTop + bounds.y) * mapScale ) + boundsOffsetY;
		const screenMapWidth = ( canvas.width * mapScale ) / zoom;
		const screenMapHeight = ( canvas.height * mapScale ) / zoom;
		
		mapContext.fillStyle = 'rgba( 200, 200, 200, 0.1 )';
		mapContext.fillRect( screenMapX, screenMapY, screenMapWidth, screenMapHeight );
		
		//
		
		_mapInfo.scale = mapScale;
		_mapInfo.left = ( -boundsOffsetX / mapScale ) + bounds.x;
		_mapInfo.top = ( -boundsOffsetY / mapScale ) + bounds.y;
		_mapInfo.width = mapCanvas.width / mapScale;
		_mapInfo.height = mapCanvas.height / mapScale;
		_mapInfo.screen.x = screenMapX;
		_mapInfo.screen.y = screenMapY;
		_mapInfo.screen.width = screenMapWidth;
		_mapInfo.screen.height = screenMapHeight;

	}

	updateLines() {

		const { dom, zoom, canvas, frontCanvas, frontContext, context, width, height } = this;

		const domRect = this.rect;

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

			const { lioElement, rioElement } = link;

			let draggingLink = '';
			let length = 0;

			if ( lioElement !== null ) {

				const rect = lioElement.dom.getBoundingClientRect();

				length = Math.max( length, lioElement.rioLength );

				aPos.x = rect.x + rect.width;
				aPos.y = rect.y + ( rect.height / 2 );

			} else {

				aPos.x = this.clientX;
				aPos.y = this.clientY;

				draggingLink = 'lio';

			}

			if ( rioElement !== null ) {

				const rect = rioElement.dom.getBoundingClientRect();

				length = Math.max( length, rioElement.lioLength );

				bPos.x = rect.x;
				bPos.y = rect.y + ( rect.height / 2 );

			} else {

				bPos.x = this.clientX;
				bPos.y = this.clientY;

				draggingLink = 'rio';

			}

			dragging = dragging || draggingLink;

			const drawContext = draggingLink ? frontContext : context;

			if ( draggingLink || length === 1 ) {

				let colorA = null,
					colorB = null;

				if ( draggingLink === 'rio' ) {

					colorA = colorB = lioElement.getRIOColor();

					aPos.x += offsetIORadius;
					bPos.x /= zoom;
					bPos.y /= zoom;

				} else if ( draggingLink === 'lio' ) {

					colorA = colorB = rioElement.getLIOColor();

					bPos.x -= offsetIORadius;
					aPos.x /= zoom;
					aPos.y /= zoom;

				} else {

					colorA = lioElement.getRIOColor();
					colorB = rioElement.getLIOColor();

				}

				drawLine(
					aPos.x * zoom, aPos.y * zoom,
					bPos.x * zoom, bPos.y * zoom,
					false, 2, colorA || '#ffffff', drawContext, colorB || '#ffffff'
				);

			} else {

				length = Math.min( length, 4 );

				for ( let i = 0; i < length; i ++ ) {

					const color = colors[ i ] || '#ffffff';

					const marginY = 4;

					const rioLength = Math.min( lioElement.rioLength, length );
					const lioLength = Math.min( rioElement.lioLength, length );

					const colorA = lioElement.getRIOColor() || color;
					const colorB = rioElement.getLIOColor() || color;

					const aCenterY = ( ( rioLength * marginY ) * .5 ) - ( marginY / 2 );
					const bCenterY = ( ( lioLength * marginY ) * .5 ) - ( marginY / 2 );

					const aIndex = Math.min( i, rioLength - 1 );
					const bIndex = Math.min( i, lioLength - 1 );

					const aPosY = ( aIndex * marginY ) - 1;
					const bPosY = ( bIndex * marginY ) - 1;

					drawLine(
						aPos.x * zoom, ( ( aPos.y + aPosY ) - aCenterY ) * zoom,
						bPos.x * zoom, ( ( bPos.y + bPosY ) - bCenterY ) * zoom,
						false, 2, colorA, drawContext, colorB
					);

				}

			}

		}

		context.globalCompositeOperation = 'destination-in';

		context.fillRect( domRect.x, domRect.y, domRect.width, domRect.height );

		if ( dragging !== '' ) {

			dom.classList.add( 'dragging-' + dragging );

		} else {

			dom.classList.remove( 'dragging-lio' );
			dom.classList.remove( 'dragging-rio' );

		}

	}

	
	update() {

		if ( this.updating === false ) return;

		requestAnimationFrame( this._onUpdate );

		this.updateLines();
		this.updateMap();

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
