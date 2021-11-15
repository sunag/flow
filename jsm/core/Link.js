export class Link {

	constructor( inputElement = null, outputElement = null ) {

		this.inputElement = inputElement;
		this.outputElement = outputElement;

	}

	get lioElement() {

		if ( Link.InputDirection === 'left' ) {

			return this.outputElement;

		} else {

			return this.inputElement;

		}

	}

	get rioElement() {

		if ( Link.InputDirection === 'left' ) {

			return this.inputElement;

		} else {

			return this.outputElement;

		}

	}

}

//Link.InputDirection = 'right';
Link.InputDirection = 'left';
