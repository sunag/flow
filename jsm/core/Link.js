export class Link {

	constructor( inputElement = null, outputElement = null ) {

		this.inputElement = inputElement;
		this.outputElement = outputElement;

	}

	get lioElement() {
		
		return this.inputElement;
		
	}
	
	get rioElement() {
		
		return this.outputElement;
		
	}

}
