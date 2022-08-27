
class PointerMonitor {

	started = false;

	constructor() {

		this.x = 0;
		this.y = 0;

		this._onMoveEvent = ( e ) => {

			const event = e.touches ? e.touches[ 0 ] : e;

			this.x = event.x;
			this.y = event.y;

		}

	}

	start() {

		if ( this.started ) return;

		this.started = true;

		window.addEventListener( 'wheel', this._onMoveEvent, true );

		window.addEventListener( 'mousedown', this._onMoveEvent, true );
		window.addEventListener( 'touchstart', this._onMoveEvent, true );

		window.addEventListener( 'mousemove', this._onMoveEvent, true );
		window.addEventListener( 'touchmove', this._onMoveEvent, true );

		window.addEventListener( 'dragover', this._onMoveEvent, true );

		return this;

	}

}

export const pointer = new PointerMonitor().start();

export const draggableDOM = ( dom, callback = null, settings = { className: 'dragging', click: false, bypass: false } ) => {

	let dragData = null;
	
	const { className, click, bypass } = settings;

	const getZoom = () => {

		let zoomDOM = dom;

		while ( zoomDOM && zoomDOM !== document ) {

			const zoom = zoomDOM.style.zoom;

			if ( zoom ) {

				return Number( zoom );

			}

			zoomDOM = zoomDOM.parentNode;

		}

		return 1;

	};

	const onMouseDown = ( e ) => {

		const event = e.touches ? e.touches[ 0 ] : e;

		if ( bypass === false ) e.stopImmediatePropagation();

		dragData = {
			client: { x: event.clientX, y: event.clientY },
			delta: { x: 0, y: 0 },
			start: { x: dom.offsetLeft, y: dom.offsetTop },
			frame: 0,
			isDown: true,
			dragging: false,
			isTouch: !! e.touches
		};

		if ( click === true ) {
			
			callback( dragData );
			
			dragData.frame++;
			
		}

		window.addEventListener( 'mousemove', onGlobalMouseMove );
		window.addEventListener( 'mouseup', onGlobalMouseUp );

		window.addEventListener( 'touchmove', onGlobalMouseMove );
		window.addEventListener( 'touchend', onGlobalMouseUp );

	};

	const onGlobalMouseMove = ( e ) => {

		const { start, delta, client } = dragData;

		const event = e.touches ? e.touches[ 0 ] : e;

		const zoom = getZoom();

		delta.x = ( event.clientX - client.x ) / zoom;
		delta.y = ( event.clientY - client.y ) / zoom;

		dragData.x = start.x + delta.x;
		dragData.y = start.y + delta.y;

		if ( dragData.dragging === true ) {

			if ( callback !== null ) {

				callback( dragData );
				
				dragData.frame++;

			} else {

				dom.style.cssText += `; left: ${ dragData.x }px; top: ${ dragData.y }px;`;

			}

			if ( bypass === false ) e.stopImmediatePropagation();

		} else {

			if ( Math.abs( delta.x ) > 2 || Math.abs( delta.y ) > 2 ) {

				dragData.dragging = true;

				dom.classList.add( 'drag' );

				if ( className ) document.body.classList.add( className );

				if ( bypass === false ) e.stopImmediatePropagation();

			}

		}

	};

	const onGlobalMouseUp = ( e ) => {

		if ( bypass === false ) e.stopImmediatePropagation();

		dom.classList.remove( 'drag' );

		if ( className ) document.body.classList.remove( className );

		window.removeEventListener( 'mousemove', onGlobalMouseMove );
		window.removeEventListener( 'mouseup', onGlobalMouseUp );

		window.removeEventListener( 'touchmove', onGlobalMouseMove );
		window.removeEventListener( 'touchend', onGlobalMouseUp );

		if ( callback === null ) {

			dom.removeEventListener( 'mousedown', onMouseDown );
			dom.removeEventListener( 'touchstart', onMouseDown );

		}

		dragData.dragging = false;
		dragData.isDown = false;

		if ( callback !== null ) {

			callback( dragData );
			
			dragData.frame++;

		}

	};

	if ( dom instanceof Event ) {

		const e = dom;
		dom = e.target;

		onMouseDown( e );

	} else {

		dom.addEventListener( 'mousedown', onMouseDown );
		dom.addEventListener( 'touchstart', onMouseDown );

	}

};

export const dispatchEventList = ( list, ...params ) => {

	for ( const callback of list ) {

		if ( callback( ...params ) === false ) {

			return false;

		}

	}

	return true;

};

export const numberToPX = ( val ) => {

	if ( isNaN( val ) === false ) {

		val = `${ val }px`;

	}

	return val;

};

export const numberToHex = ( val ) => {

	if ( isNaN( val ) === false ) {

		val = `#${ val.toString( 16 ).padStart( 6, '0' ) }`;

	}

	return val;

};

export const rgbaToArray = ( rgba ) => {

	const values = rgba.substring( rgba.indexOf( '(' ) + 1, rgba.indexOf( ')' )  )
		.split(',')
		.map( num => parseInt( num.trim() ) );

	return values;

};

export const removeDOMClass = ( dom, classList ) => {

	if ( classList ) classList.split( ' ' ).forEach( alignClass => dom.classList.remove( alignClass ) );

};

export const addDOMClass = ( dom, classList ) => {

	if ( classList ) classList.split( ' ' ).forEach( alignClass => dom.classList.add( alignClass ) );

};
