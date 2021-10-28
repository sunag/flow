export const draggableDOM = ( dom, callback = null ) => {

	let dragData = null;

	const onMouseDown = ( e ) => {

		const target = e.touches ? e.touches[ 0 ] : e;

		dragData = {
			client: { x: target.clientX, y: target.clientY },
			delta: { x: 0, y: 0 },
			start: { x: dom.offsetLeft, y: dom.offsetTop },
			dragging: false
		};

		window.addEventListener( 'mousemove', onGlobalMouseMove );
		window.addEventListener( 'mouseup', onGlobalMouseUp );

		window.addEventListener( 'touchmove', onGlobalMouseMove );
		window.addEventListener( 'touchend', onGlobalMouseUp );

	};

	const onGlobalMouseMove = ( e ) => {

		const { start, delta, client } = dragData;

		const target = e.touches ? e.touches[ 0 ] : e;

		delta.x = target.clientX - client.x;
		delta.y = target.clientY - client.y;

		dragData.x = start.x + delta.x;
		dragData.y = start.y + delta.y;

		if ( dragData.dragging === true ) {

			if ( callback !== null ) {

				callback( dragData );

			} else {

				dom.style.cssText += `; left: ${ dragData.x }px; top: ${ dragData.y }px;`;

			}

		} else {

			if ( Math.abs( delta.x ) > 1 || Math.abs( delta.y ) > 1 ) {

				dragData.dragging = true;

			}

		}

	};

	const onGlobalMouseUp = () => {

		window.removeEventListener( 'mousemove', onGlobalMouseMove );
		window.removeEventListener( 'mouseup', onGlobalMouseUp );

		window.removeEventListener( 'touchmove', onGlobalMouseMove );
		window.removeEventListener( 'touchend', onGlobalMouseUp );

		if ( dragData.dragging === true ) {

			dragData.dragging = false;

			if ( callback !== null ) {

				callback( dragData );

			} else {

				dom.removeEventListener( 'mousedown', onMouseDown );
				dom.removeEventListener( 'touchstart', onMouseDown );

			}

		}

	};

	dom.addEventListener( 'mousedown', onMouseDown );
	dom.addEventListener( 'touchstart', onMouseDown );

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
