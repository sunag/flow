import * as Flow from '../FlowObjects.js';
import { dispatchEventList } from './Utils.js';

export class Loader extends EventTarget {

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

	async load( url, lib = null ) {

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

	parse( json, lib = null ) {

		json = this._parseObjects( json, lib );

		const parseType = this.parseType;

		if ( parseType === Loader.DEFAULT ) {

			const flowObj = new Flow[ json.type ]();

			if ( flowObj.getSerializable() ) {

				flowObj.deserialize( json );

			}

			return flowObj;

		} else if ( parseType === Loader.OBJECTS ) {

			return json;

		}

	}

	_parseObjects( json, lib = null ) {

		json = { ...json };

		const objects = {};
		const list = [];

		for ( const id in json.objects ) {

			const obj = json.objects[ id ];
			obj.objects = objects;

			const Class = lib && lib[ obj.type ] ? lib[ obj.type ] : Flow[ obj.type ];

			if ( ! Class ) {

				console.error( `Class "${ obj.type }" not found!` );

			}

			objects[ id ] = new Class();

		}

		const ref = new WeakMap();

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
