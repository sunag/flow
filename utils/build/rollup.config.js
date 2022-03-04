import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

const fs = require('fs');

const appendCSSFunctionCode = `
function __flow__addCSS( css ) {

	try {

		const style = document.createElement( 'style' );

		style.setAttribute( 'type', 'text/css' );
		style.innerHTML = css;
		document.head.appendChild( style );

	} catch ( e ) {}

}
`;

function css() {

	return {

		renderChunk( code ) {

			let css = fs.readFileSync( './css/flow.css', 'utf8' );

			css = css.trim()
				.replace( /\r\n|\n|\r/g, '' ) // break lines
				.replace( /\s+/g, ' ' ) // duplicate spaces
				.replace( /[ \t]*\/\/.*\n/g, '' ) // remove //
				.replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ) // remove /* */
				.replace( /\n{2,}/g, '\n' ) // # \n+ to \n

	return `${ appendCSSFunctionCode }
__flow__addCSS( ${ '`' + css + '`' } );

${ code }`;

		}

	};

}

function header() {

	return {

		renderChunk( code ) {

			return `/**
 * https://github.com/sunag/flow
 */
${ code }`;

		}

	};

}

const builds = [
	{
		input: 'jsm/Flow.js',
		plugins: [
			css(),
			header()
		],
		output: [
			{
				format: 'esm',
				file: 'build/flow.module.js'
			}
		]
	},
	{
		input: 'jsm/Flow.js',
		plugins: [
			css(),
			babel( {
				babelHelpers: 'bundled'
			} ),
			header()
		],
		output: [
			{
				format: 'umd',
				name: 'Flow',
				file: 'build/flow.js'
			}
		]
	},
	{
		input: 'jsm/Flow.js',
		plugins: [
			css(),
			babel( {
				babelHelpers: 'bundled'
			} ),
			terser(),
			header()
		],
		output: [
			{
				format: 'umd',
				name: 'Flow',
				file: 'build/flow.min.js'
			}
		]
	}
];

export default builds;