export class Link {

	constructor( outputElement = null, inputElement = null ) {

		this.outputElement = outputElement;
		this.inputElement = inputElement;

	}

	get lioElement() {
		
		return this.inputElement;
		
	}
	
	get rioElement() {
		
		return this.outputElement;
		
	}

}
