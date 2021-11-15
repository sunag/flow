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

	static parse( json, lib = null ) {

		json = Loader.parseObjects( json, lib );

		const flowObj = new Flow[ json.type ]();
		flowObj.deserialize( json );

		return flowObj;

	}

	static parseObjects( json, lib = null ) {

		json = { ...json };

		const objects = {};
		const list = [];

		for ( const id in json.objects ) {

			const obj = json.objects[ id ];
			obj.objects = objects;

			const Class = lib && lib[ obj.type ] ? lib[ obj.type ] : Flow[ obj.type ];

			objects[ id ] = new Class();

		}

		const ref = new WeakMap();

		const deserializePass = ( prop = null ) => {

			for ( const id in json.objects ) {

				const newObject = objects[ id ];

				if ( ref.has( newObject ) === false && ( prop === null || newObject[ prop ] === true ) ) {

					ref.set( newObject, true );

					newObject.deserialize( json.objects[ id ] );

				}

			}

		};

		deserializePass( 'isNode' );
		deserializePass( 'isElement' );
		deserializePass( 'isInput' );
		deserializePass();

		json.objects = objects;

		return json;

	}

}
