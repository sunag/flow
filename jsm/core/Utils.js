export const dragabbleDOM = ( dom, callback = null ) => {

	let dragData = null;

	const onMouseDown = ( e ) => {

		dragData = {
			client: { x: e.clientX, y: e.clientY },
			delta: { x: 0, y: 0 },
			start: { x: dom.offsetLeft, y: dom.offsetTop },
			dragging: false
		};

		window.addEventListener( "mousemove", onGlobalMouseMove );
		window.addEventListener( "mouseup", onGlobalMouseUp );

	};

	const onGlobalMouseMove = ( e ) => {

		const { start, delta, client } = dragData;

		delta.x = e.clientX - client.x;
		delta.y = e.clientY - client.y;

		dragData.x = start.x + delta.x;
		dragData.y = start.y + delta.y;

		if ( dragData.dragging === true ) {

			e.preventDefault();

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

		window.removeEventListener( "mousemove", onGlobalMouseMove );
		window.removeEventListener( "mouseup", onGlobalMouseUp );

		if ( dragData.dragging === true ) {

			dragData.dragging = false;

			if ( callback !== null ) {

				callback( dragData );

			} else {

				dom.removeEventListener( 'mousedown', onMouseDown );

			}

		}

	};

	dom.addEventListener( 'mousedown', onMouseDown );

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
