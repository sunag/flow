import * as Flow from '../FlowObjects.js';
import { dispatchEventList } from './Utils.js';

export const LoaderLib = {};

export class Loader extends EventTarget {

	static get type() {

		return 'Loader';

	}

	constructor( parseType = Loader.DEFAULT ) {

		super();

		this.parseType = parseType;

		this.events = {
			'load': []
		};

	}

	setParseType( type ) {

		this.parseType = type;

		return this;

	}

	getParseType() {

		return this.parseType;

	}

	onLoad( callback ) {

		this.events.load.push( callback );

		return this;

	}

	async load( url, lib = {} ) {

		return await fetch( url )
			.then( response => response.json() )
			.then( result => {

				this.data = this.parse( result, lib );

				dispatchEventList( this.events.load, this );

				return this.data;

			} )
			.catch( err => {

				console.error( 'Loader:', err );

			} );

	}

	parse( json, lib = {} ) {

		json = this._parseObjects( json, lib );

		const parseType = this.parseType;

		if ( parseType === Loader.DEFAULT ) {

			const type = json.type;

			const flowClass = lib[ type ] ? lib[ type ] : ( LoaderLib[ type ] || Flow[ type ] );
			const flowObj = new flowClass();

			if ( flowObj.getSerializable() ) {

				flowObj.deserialize( json );

			}

			return flowObj;

		} else if ( parseType === Loader.OBJECTS ) {

			return json;

		}

	}

	_parseObjects( json, lib = {} ) {

		json = { ...json };

		const objects = {};

		for ( const id in json.objects ) {

			const obj = json.objects[ id ];
			obj.objects = objects;

			const type = obj.type;
			const flowClass = lib[ type ] ? lib[ type ] : ( LoaderLib[ type ] || Flow[ type ] );

			if ( ! flowClass ) {

				console.error( `Class "${ type }" not found!` );

			}

			objects[ id ] = new flowClass();
			objects[ id ].deserializeLib( json.objects[ id ], lib );

		}

		const ref = new Map();

		const deserializePass = ( prop = null ) => {

			for ( const id in json.objects ) {

				const newObject = objects[ id ];

				if ( ref.has( newObject ) === false && ( prop === null || newObject[ prop ] === true ) ) {

					ref.set( newObject, true );

					if ( newObject.getSerializable() ) {

						newObject.deserialize( json.objects[ id ] );

					}

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

Loader.DEFAULT = 'default';
Loader.OBJECTS = 'objects';
