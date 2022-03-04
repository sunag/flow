
export class Tips extends EventTarget {

	constructor() {

		super();

		const dom = document.createElement( 'f-tips' );

		this.dom = dom;

		this.time = 0;
		this.duration = 3000;

	}

	message( str ) {

		return this.tip( str );

	}

	error( str ) {

		return this.tip( str, 'error' );

	}

	tip( html, className = '' ) {

		const dom = document.createElement( 'f-tip' );
		dom.className = className;
		dom.innerHTML = html;

		this.dom.prepend( dom );

		//requestAnimationFrame( () => dom.style.opacity = 1 );

		this.time = Math.min( this.time + this.duration, this.duration );

		const timeout = setTimeout( () => {

			this.time -= this.duration;

			dom.style.opacity = 0;

			setTimeout( () => dom.remove(), 250 );

		}, this.time );

		return this;

	}

}
