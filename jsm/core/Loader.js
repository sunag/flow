import * as Flow from '../Flow.js';

export class Loader extends EventTarget {

	constructor() {

		super();

	}

	async load( url ) {

		return await fetch( url )
			.then( response => response.json() )
			.then( result => {

				return this.parse( result );

			} )
			.catch( err => {

				console.error( 'Loader:', err );

			} );

	}

	parse( json ) {

		json = { ...json };

		const objects = {};

		for ( const id in json.objects ) {

			const obj = json.objects[ id ];
			obj.objects = objects;

			objects[ id ] = new Flow[ obj.type ]();

		}

		for ( const id in json.objects ) {

			objects[ id ].deserialize( json.objects[ id ] );

		}

		json.objects = objects;

		const flowObj = new Flow[ json.type ]();
		flowObj.deserialize( json );

		return flowObj;

	}

}
