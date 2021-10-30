export const drawLine = ( p1x, p1y, p2x, p2y, invert, size, color, ctx ) => {

	const offset = 100 * ( invert ? - 1 : 1 );

	ctx.beginPath();

	ctx.moveTo( p1x, p1y );

	ctx.bezierCurveTo(
		p1x + offset, p1y,
		p2x - offset, p2y,
		p2x, p2y
	);

	ctx.lineWidth = size;
	ctx.strokeStyle = color;
	ctx.stroke();

};
