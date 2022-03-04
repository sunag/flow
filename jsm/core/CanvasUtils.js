export const drawLine = ( p1x, p1y, p2x, p2y, invert, size, colorA, ctx, colorB = null ) => {

	const dx = p2x - p1x;
	const dy = p2y - p1y;
	const offset = Math.sqrt( ( dx * dx ) + ( dy * dy ) ) * ( invert ? - .3 : .3 );

	ctx.beginPath();

	ctx.moveTo( p1x, p1y );

	ctx.bezierCurveTo(
		p1x + offset, p1y,
		p2x - offset, p2y,
		p2x, p2y
	);

	if ( colorB !== null && colorA !== colorB ) {

		const gradient = ctx.createLinearGradient( p1x, p1y, p2x, p2y );
		gradient.addColorStop( 0, colorA );
		gradient.addColorStop( 1, colorB );

		ctx.strokeStyle = gradient;

	} else {

		ctx.strokeStyle = colorA;

	}

	ctx.lineWidth = size;
	ctx.stroke();

};
