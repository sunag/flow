import { LabelElement } from '../elements/LabelElement.js';
import { PropertyInput } from '../inputs/PropertyInput.js';

export const fromProperty = ( object, property, ...params ) => {

	const element = new LabelElement( property );
	element.add( new PropertyInput( object, property, ...params ) );

	return element;

};
