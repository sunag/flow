import fs from "fs";
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import { importAssertionsPlugin } from 'rollup-plugin-import-assert';
import { importAssertions } from 'acorn-import-assertions';

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

const compile = ( input, output, plugins, others ) => {

	console.log(
		{ input: input, plugins: plugins, output: [{ ...output, file: `${output.file}.js` }], ...others },
		{ input: input, plugins: [ ...plugins, terser() ], output: [{ ...output, file: `${output.file}.min.js` }], ...others }
	)

	return [
		{ input: input, plugins: plugins, output: [{ ...output, file: `${output.file}.js` }], ...others },
		{ input: input, plugins: [ ...plugins, terser() ], output: [{ ...output, file: `${output.file}.min.js` }], ...others }
	];

}

const builds = [

	...compile(
		'jsm/Flow.js',
		{ format: 'esm', file: 'build/module/flow' },
		[ css(), header() ]
	),
	...compile(
		'jsm/Flow.js',
		{ format: 'umd', name: 'Flow', file: 'build/umd/flow'},
		[ css(), babel( { babelHelpers: 'bundled' } ), header() ]
	),
	...compile(
		'jsm/FlowWebComponent.js',
		{ format: 'esm', file: 'build/component/flow' },
		[ importAssertionsPlugin() ],
		{ acornInjectPlugins: [ importAssertions ] }
	)

];

export default builds;
