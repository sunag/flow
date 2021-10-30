
export const draggableDOM = ( dom, callback = null, className = 'dragging' ) => {

	let dragData = null;

	const onMouseDown = ( e ) => {

		const event = e.touches ? e.touches[ 0 ] : e;

		e.stopImmediatePropagation();

		dragData = {
			client: { x: event.clientX, y: event.clientY },
			delta: { x: 0, y: 0 },
			start: { x: dom.offsetLeft, y: dom.offsetTop },
			dragging: false,
			isTouch: !! e.touches
		};

		window.addEventListener( 'mousemove', onGlobalMouseMove );
		window.addEventListener( 'mouseup', onGlobalMouseUp );

		window.addEventListener( 'touchmove', onGlobalMouseMove );
		window.addEventListener( 'touchend', onGlobalMouseUp );

	};

	const onGlobalMouseMove = ( e ) => {

		const { start, delta, client } = dragData;

		const event = e.touches ? e.touches[ 0 ] : e;

		delta.x = event.clientX - client.x;
		delta.y = event.clientY - client.y;

		dragData.x = start.x + delta.x;
		dragData.y = start.y + delta.y;

		if ( dragData.dragging === true ) {

			if ( callback !== null ) {

				callback( dragData );

			} else {

				dom.style.cssText += `; left: ${ dragData.x }px; top: ${ dragData.y }px;`;

			}

			e.stopImmediatePropagation();

		} else {

			if ( Math.abs( delta.x ) > 1 || Math.abs( delta.y ) > 1 ) {

				dragData.dragging = true;

				dom.classList.add( 'drag' );

				if ( className ) document.body.classList.add( className );

				e.stopImmediatePropagation();

			}

		}

	};

	const onGlobalMouseUp = ( e ) => {

		e.stopImmediatePropagation();

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

		if ( callback !== null ) {

			callback( dragData );

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

		callback( ...params );

	}

};

export const toPX = ( val ) => {

	if ( isNaN( val ) === false ) {

		val = `${ val }px`;

	}

	return val;

};

export const toHex = ( val ) => {

	if ( isNaN( val ) === false ) {

		val = `#${ val.toString( 16 ).padStart( 6, '0' ) }`;

	}

	return val;

};
