import { Serializer } from './Serializer.js';
import { Node } from './Node.js';
import { TitleElement } from '../elements/TitleElement.js';
import { draggableDOM, dispatchEventList, numberToPX } from './Utils.js';
import { drawLine } from './CanvasUtils.js';

const colors = [
	'#ff4444',
	'#44ff44',
	'#4444ff'
];

const dropNode = new Node().add( new TitleElement( 'File' ) ).setWidth( 250 );

export class Canvas extends Serializer {

	static get type() {

		return 'Canvas';

	}

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
		this._focusSelected = false;
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

		const zoomTo = ( zoom, clientX = this.clientX, clientY = this.clientY ) => {

			zoom = Math.min( Math.max( zoom, .2 ), 1 );

			this.scrollLeft -= ( clientX / this.zoom ) - ( clientX / zoom );
			this.scrollTop -= ( clientY / this.zoom ) - ( clientY / zoom );
			this.zoom = zoom;

		};

		let touchData = null;

		const onTouchStart = () => {

			touchData = null;

		};

		const classInElements = ( element, className ) => {

			do {

				if ( element.classList ? element.classList.contains( className ) : false ) {

					return true;

				}

			} while ( ( element = element.parentElement ) && element !== dom );

			return false;

		};

		const onMouseZoom = ( e ) => {

			if ( classInElements( e.srcElement, 'f-scroll' ) ) return;

			e.preventDefault();

			e.stopImmediatePropagation();

			const delta = e.deltaY * .003;

			zoomTo( this.zoom - delta );

		};

		const onTouchZoom = ( e ) => {

			if ( e.touches && e.touches.length === 2 ) {

				e.preventDefault();

				e.stopImmediatePropagation();

				const clientX = ( e.touches[ 0 ].clientX + e.touches[ 1 ].clientX ) / 2;
				const clientY = ( e.touches[ 0 ].clientY + e.touches[ 1 ].clientY ) / 2;

				const distance = Math.hypot(
					e.touches[ 0 ].clientX - e.touches[ 1 ].clientX,
					e.touches[ 0 ].clientY - e.touches[ 1 ].clientY
				);

				if ( touchData === null ) {

					touchData = {
						distance
					};

				}

				const delta = ( touchData.distance - distance ) * .003;
				touchData.distance = distance;

				zoomTo( this.zoom - delta, clientX, clientY );

			}

		};

		const onTouchMove = ( e ) => {

			if ( e.touches && e.touches.length === 1 ) {

				e.preventDefault();

				e.stopImmediatePropagation();

				const clientX = e.touches[ 0 ].clientX;
				const clientY = e.touches[ 0 ].clientY;

				if ( touchData === null ) {

					const { scrollLeft, scrollTop } = this;

					touchData = {
						scrollLeft,
						scrollTop,
						clientX,
						clientY
					};

				}

				const zoom = this.zoom;

				this.scrollLeft = touchData.scrollLeft + ( ( clientX - touchData.clientX ) / zoom );
				this.scrollTop = touchData.scrollTop + ( ( clientY - touchData.clientY ) / zoom );

			}

		};

		dom.addEventListener( 'wheel', onMouseZoom );
		dom.addEventListener( 'touchmove', onTouchZoom );
		dom.addEventListener( 'touchstart', onTouchStart );
		canvas.addEventListener( 'touchmove', onTouchMove );

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

				const zoom = this.zoom;

				this.scrollLeft = data.scrollLeft + ( delta.x / zoom );
				this.scrollTop = data.scrollTop + ( delta.y / zoom );

			}

			if ( data.dragging ) {

				dom.classList.add( 'grabbing' );

			} else {

				dom.classList.remove( 'grabbing' );

			}

		}, { className: 'dragging-canvas' } );


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

					let scrollLeft = - this._mapInfo.left - ( clientMapX * scaleX );
					let scrollTop = - this._mapInfo.top - ( clientMapY * ( this._mapInfo.height / this.mapCanvas.height ) );

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

		}, { click: true } );

		this._onMoveEvent = ( e ) => {

			const event = e.touches ? e.touches[ 0 ] : e;
			const { zoom, rect } = this;

			this.clientX = event.clientX;
			this.clientY = event.clientY;

			const rectClientX = ( this.clientX - rect.left ) / zoom;
			const rectClientY = ( this.clientY - rect.top ) / zoom;

			this.relativeClientX = rectClientX - this.scrollLeft;
			this.relativeClientY = rectClientY - this.scrollTop;

		};

		this._onUpdate = () => {

			this.update();

		};

		this.start();

	}

	getBounds() {

		const bounds = { x: Infinity, y: Infinity, width: - Infinity, height: - Infinity };

		for ( const node of this.nodes ) {

			const { x, y, width, height } = node.getBounding();

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

		val === 1 ? this.dom.classList.remove( 'zoom' ) : this.dom.classList.add( 'zoom' );

		this.updateMozTransform();

	}

	set scrollLeft( val ) {

		this._scrollLeft = val;
		this.contentDOM.style.left = numberToPX( val );

		this.updateMozTransform();

	}

	get scrollLeft() {

		return this._scrollLeft;

	}

	set scrollTop( val ) {

		this._scrollTop = val;
		this.contentDOM.style.top = numberToPX( val );

		this.updateMozTransform();

	}

	get scrollTop() {

		return this._scrollTop;

	}

	set focusSelected( value ) {

		if ( this._focusSelected === value ) return;

		const classList = this.dom.classList;

		this._focusSelected = value;

		if ( value ) {

			classList.add( 'focusing' );

		} else {

			classList.remove( 'focusing' );

		}

	}

	get focusSelected() {

		return this._focusSelected;

	}

	get useTransform() {

		const userAgent = navigator.userAgent;
		const isSafari = /Safari/.test( userAgent ) && ! /Chrome/.test( userAgent );

		return ! isSafari;

	}

	updateMozTransform() {

		if ( this.useTransform === false ) return;

		this.contentDOM.style[ '-moz-transform' ] = 'scale(' + this.zoom + ')';
		this.contentDOM.style[ '-moz-transform-origin' ] = '-' + this.contentDOM.style.left + ' -' + this.contentDOM.style.top;

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

		this.scrollLeft = ( this.canvas.width / 2 ) - ( ( - bounds.x + bounds.width ) / 2 );
		this.scrollTop = ( this.canvas.height / 2 ) - ( ( - bounds.y + bounds.height ) / 2 );

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

			this.focusSelected = false;

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

	isNodeVisible( node ) {

		const { zoom, _width, _height } = this;

		const bounds = node.getBounds();

		// Calculate visible area in screen coordinates
		const viewLeft = 0;
		const viewTop = 0;
		const viewRight = _width / zoom;
		const viewBottom = _height / zoom;

		// Node boundaries in screen coordinates (getBounds already includes scrollLeft/scrollTop)
		const nodeLeft = bounds.x;
		const nodeRight = bounds.x + bounds.width;
		const nodeTop = bounds.y;
		const nodeBottom = bounds.y + bounds.height;

		// Check if node intersects with visible area (any part visible)
		const isVisible = ! (
			nodeRight < viewLeft ||
			nodeLeft > viewRight ||
			nodeBottom < viewTop ||
			nodeTop > viewBottom
		);

		return isVisible;

	}

	updateNodesVisibility() {

		const visibleNodes = new Set();

		// First pass: identify directly visible nodes
		for ( const node of this.nodes ) {

			if ( this.isNodeVisible( node ) ) {

				visibleNodes.add( node );

			}

		}

		// Second pass: update DOM visibility
		for ( const node of this.nodes ) {

			const shouldBeVisible = visibleNodes.has( node );

			if ( shouldBeVisible ) {

				if ( node.dom.style.display === 'none' ) {

					node.dom.style.animation = 'none';
					node.dom.style.display = '';

				}

			} else {

				if ( node.dom.style.display !== 'none' ) {

					node.dom.style.animation = 'none';
					node.dom.style.display = 'none';

				}

			}

		}

	}

	updateMap() {

		const { nodes, mapCanvas, mapContext, scrollLeft, scrollTop, canvas, zoom, _mapInfo } = this;

		const bounds = this.getBounds();

		mapCanvas.width = 300;
		mapCanvas.height = 200;

		mapContext.clearRect( 0, 0, mapCanvas.width, mapCanvas.height );

		mapContext.fillStyle = 'rgba( 0, 0, 0, 0 )';
		mapContext.fillRect( 0, 0, mapCanvas.width, mapCanvas.height );

		const boundsWidth = - bounds.x + bounds.width;
		const boundsHeight = - bounds.y + bounds.height;

		const mapScale = Math.min( mapCanvas.width / boundsWidth, mapCanvas.height / boundsHeight ) * .5;

		const boundsMapWidth = boundsWidth * mapScale;
		const boundsMapHeight = boundsHeight * mapScale;

		const boundsOffsetX = ( mapCanvas.width / 2 ) - ( boundsMapWidth / 2 );
		const boundsOffsetY = ( mapCanvas.height / 2 ) - ( boundsMapHeight / 2 );

		let selectedNode = null;

		for ( const node of nodes ) {

			const position = node.getPosition();
			const width = node.getWidth();
			const height = node.getHeight();

			const nodeBound = {
				x: position.x,
				y: position.y,
				width: width,
				height: height
			};

			const nodeColor = node.getColor();

			nodeBound.x += - bounds.x;
			nodeBound.y += - bounds.y;

			nodeBound.x *= mapScale;
			nodeBound.y *= mapScale;
			nodeBound.width *= mapScale;
			nodeBound.height *= mapScale;

			nodeBound.x += boundsOffsetX;
			nodeBound.y += boundsOffsetY;

			if ( node !== this.selected ) {

				mapContext.fillStyle = nodeColor;
				mapContext.fillRect( nodeBound.x, nodeBound.y, nodeBound.width, nodeBound.height );

			} else {

				selectedNode = {
					nodeBound,
					nodeColor
				};

			}

		}

		if ( selectedNode !== null ) {

			const { nodeBound, nodeColor } = selectedNode;

			mapContext.fillStyle = nodeColor;
			mapContext.fillRect( nodeBound.x, nodeBound.y, nodeBound.width, nodeBound.height );

		}

		const screenMapX = ( - ( scrollLeft + bounds.x ) * mapScale ) + boundsOffsetX;
		const screenMapY = ( - ( scrollTop + bounds.y ) * mapScale ) + boundsOffsetY;
		const screenMapWidth = ( canvas.width * mapScale ) / zoom;
		const screenMapHeight = ( canvas.height * mapScale ) / zoom;

		mapContext.fillStyle = 'rgba( 200, 200, 200, 0.1 )';
		mapContext.fillRect( screenMapX, screenMapY, screenMapWidth, screenMapHeight );

		//

		_mapInfo.scale = mapScale;
		_mapInfo.left = ( - boundsOffsetX / mapScale ) + bounds.x;
		_mapInfo.top = ( - boundsOffsetY / mapScale ) + bounds.y;
		_mapInfo.width = mapCanvas.width / mapScale;
		_mapInfo.height = mapCanvas.height / mapScale;
		_mapInfo.screen.x = screenMapX;
		_mapInfo.screen.y = screenMapY;
		_mapInfo.screen.width = screenMapWidth;
		_mapInfo.screen.height = screenMapHeight;

	}

	updateLines() {

		const { dom, zoom, canvas, frontCanvas, frontContext, context, _width, _height, useTransform } = this;

		const domRect = this.rect;

		if ( canvas.width !== _width || canvas.height !== _height ) {

			canvas.width = _width;
			canvas.height = _height;

			frontCanvas.width = _width;
			frontCanvas.height = _height;

		}

		context.clearRect( 0, 0, _width, _height );
		frontContext.clearRect( 0, 0, _width, _height );

		//

		context.globalCompositeOperation = 'lighter';
		frontContext.globalCompositeOperation = 'source-over';

		const links = this.getLinks();

		const aPos = { x: 0, y: 0 };
		const bPos = { x: 0, y: 0 };

		const offsetIORadius = 10;

		let dragging = '';

		const borderTop = Node.BORDER / 2;

		for ( const link of links ) {

			const { lioElement, rioElement } = link;

			let draggingLink = '';
			let length = 0;

			if ( lioElement !== null ) {

				const rect = lioElement.getBounds();

				length = Math.max( length, lioElement.rioLength );

				aPos.x = rect.x + rect.width;
				aPos.y = rect.y + ( ( rect.height + borderTop ) / 2 );

			} else {

				aPos.x = this.clientX;
				aPos.y = this.clientY;

				draggingLink = 'lio';

			}

			if ( rioElement !== null ) {

				const rect = rioElement.getBounds();

				length = Math.max( length, rioElement.lioLength );

				bPos.x = rect.x;
				bPos.y = rect.y + ( ( rect.height + borderTop ) / 2 );

			} else {

				bPos.x = this.clientX;
				bPos.y = this.clientY;

				draggingLink = 'rio';

			}

			dragging = dragging || draggingLink;

			const drawContext = draggingLink ? frontContext : context;

			if ( link.disconnectDOM ) {

				if ( link.inputElement.multiConnections || link.inputElement.links.length > 1 ) {

					link.disconnectDOM.style.left = ( - ( bPos.x - aPos.x ) / 2 ) + 'px';
					link.disconnectDOM.style.top = ( - ( bPos.y - aPos.y ) / 2 ) + 'px';

				} else if ( link.disconnectDOM.style.left !== '' ) {

					link.disconnectDOM.style.left = '';
					link.disconnectDOM.style.top = '';

				}

			}

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

					const aPosY = ( aIndex * marginY );
					const bPosY = ( bIndex * marginY );

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

		this.updateNodesVisibility();
		this.updateLines();
		this.updateMap();

	}

	serialize( data ) {

		const nodes = [];
		const serializeNodes = this.nodes.sort( ( a, b ) => a.serializePriority > b.serializePriority ? - 1 : 1 );

		for ( const node of serializeNodes ) {

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
