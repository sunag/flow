/**
 * https://github.com/sunag/flow
 */
const sheet = new CSSStyleSheet();sheet.replaceSync(`/*box-sizing: border-box;*/

@keyframes f-animation-open {

	0% { 
		transform: scale(.5);
		opacity: 0;
	}
	
	100% { 
		transform: scale(1);
		opacity: 1;
	}

}

f-canvas,
f-canvas canvas {
	position: absolute;
	top: 0;
	left: 0;
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
	/*scroll-behavior: smooth;*/
	-webkit-touch-callout: none;   
}

f-canvas {
	overflow: auto;
	cursor: grab;
}

f-canvas canvas.front {
	z-index: 10;
}

body.dragging *:not(.drag) {
	pointer-events: none !important;
}

f-canvas.grabbing * {
	cursor: grabbing; 
	user-select: none;
}

f-canvas canvas {
	position: fixed;
	overflow: hidden;
	pointer-events: none;
}

f-canvas::-webkit-scrollbar {
	width: 8px;
	height: 8px;
}

f-canvas::-webkit-scrollbar-thumb:hover{
	background: #014fc5;
}

f-canvas::-webkit-scrollbar-track {
	background: #363636;
}

f-canvas::-webkit-scrollbar-thumb {
	background-color: #666666;
	border-radius: 10px;
	border: 0;
}

f-canvas f-content,
f-canvas f-area {
	position: absolute;
    display: block;
}

f-node {
	position: absolute;
	margin: 0;
	padding: 0;
	user-select: none;
	width: 320px;
	z-index: 1;
	cursor: auto;
	/*box-shadow: 0 0 8px 5px #00000061;*/
	filter: drop-shadow(0 0 10px #00000061);
	backdrop-filter: blur(4px);
}

f-node.selected {
	z-index: 2;
}

f-node.selected,
f-canvas.dragging-rio f-node:hover,
f-canvas.dragging-lio f-node:hover {
	filter: drop-shadow(0 0 10px #00000061) drop-shadow(0 0 8px #4444dd);
}

f-node.closed f-element:not(:first-child) {
	display: none;
}

f-node.center {
	top: 50%;
	left: 50%;
	transform: translate( -50%, -50% );
}

f-node.top-right {
	top: 0;
	right: 0;
}

f-node.top-center {
	top: 0;
	left: 50%;
	transform: translateX( -50% );
}

f-node.top-left {
	top: 0;
	left: 0;
}

f-node {
	transition: filter 0.2s ease;
}

f-node {
	animation: .2s f-animation-open 1 alternate ease-out;
}

f-tips,
f-drop,
f-menu,
f-menu input,
f-menu button,
f-element,
f-element input,
f-element select,
f-element button,
f-element textarea {
	font-family: 'Open Sans', sans-serif;
	font-size: 13px;
	text-transform: capitalize;
	color: #eeeeee;
	outline: solid 0px #000;
	/*letter-spacing: .2px;*/
	margin: 0;
	padding: 0;
	border: 0;
	user-select: none;
	-webkit-tap-highlight-color: transparent;
	transition: background 0.2s ease, filter 0.2s ease;
}

f-element input:read-only {
	color: #666;
}

f-element input,
f-element textarea {
    text-transform: initial;
}

f-element input {
	transition: background 0.1s ease;
}

f-element input,
f-element select,
f-element button,
f-element textarea {
	background-color: #232324d1;
}

f-element {
	position: relative;
	width: calc( 100% - 14px );
	background: rgba(45, 45, 48, 0.95);
	pointer-events: auto;
	border-bottom: 2px solid #232323;
	display: flex;
	padding-left: 7px;
	padding-right: 7px;
	padding-top: 2px;
	padding-bottom: 2px;
}

f-element:after,
f-element:before {
	transition: opacity .17s;
	opacity: 0;
	content: '';
}

f-element[tooltip]:hover:after,
f-element[tooltip]:focus-within:after {
	font-size: 14px !important;
	display: flex;
	justify-content: center;
	position: fixed;
	margin-left: -7px;
	width: calc( 100% );
	background: #1d1d1de8;
	border: 1px solid #444444a1;
	border-radius: 6px;
	color: #dadada;
	content: attr( tooltip );
	margin-top: -41px;
	font-size: 16px;
	padding-top: 3px;
	padding-bottom: 3px;
	z-index: 10;
	opacity: 1;
	backdrop-filter: blur(4px);
	white-space: nowrap;
	overflow: hidden;
	text-shadow: 1px 1px 0px #0007;
}

f-element[tooltip]:hover:before,
f-element[tooltip]:focus-within:before {
	border: solid;
	border-color: #1d1d1de8 transparent;
	border-width: 12px 6px 0 6px;
	left: calc( 50% - 6px );
	bottom: 30px;
	position: absolute;
	opacity: 1;
	z-index: 11;
}

f-element[error] {
	background-color: #ff0000;
}

f-element[error]:hover:after,
f-element[error]:focus-within:after {
	border: none;
	background-color: #ff0000bb;
	filter: drop-shadow( 2px 2px 5px #000 );
	color: #fff;
}

f-element[error]:hover:before,
f-element[error]:focus-within:before {
	border-color: #ff0000bb transparent;
}

f-element/*.default*/ {
    height: 24px;
}

f-element input {
	margin-top: 2px;
	margin-bottom: 2px;
	box-shadow: inset 0px 1px 1px rgb(0 0 0 / 20%), 0px 1px 0px rgb(255 255 255 / 5%);
	margin-left: 2px;
	margin-right: 2px;
	width: 100%;
	padding-left: 4px;
	padding-right: 4px;
}

f-element input.number {
	cursor: col-resize;
}

f-element input:focus[type='text'], 
f-element input:focus[type='range'], 
f-element input:focus[type='color'] {
    background: rgba( 0, 0, 0, 0.6 );
	outline: solid 1px rgba( 0, 80, 200, 0.98 );
}

f-element input[type='color'] {
	appearance: none;
	padding: 0;
	margin-left: 2px;
	margin-right: 2px;
	height: calc( 100% - 4px );
	margin-top: 2px;
	border: none;
}

f-element input[type='color']::-webkit-color-swatch-wrapper {
	padding: 2px;
}

f-element input[type='color']::-webkit-color-swatch {
	border: none;
	cursor: alias;
}

f-element input[type='range'] {
	appearance: none;
	width: 100%;
	overflow: hidden;
	padding: 0;
	cursor: ew-resize;
}

f-element input[type='range']::-webkit-slider-runnable-track {
	appearance: none;
    height: 10px;
    color: #13bba4;
	margin: 0;
}

f-element input[type='range']::-webkit-slider-thumb {
	appearance: none;
	width: 0;
    background: #434343;
    box-shadow: -500px 0 0 500px rgba( 0, 120, 255, 0.98 );
    border-radius: 50%;
    border: 0 !important;
}

f-element input[type='range']::-webkit-slider-runnable-track {
	margin-left: -4px;
	margin-right: -5px;
}

f-element input[type='checkbox'] {
	appearance: none;
	cursor: pointer;
}

f-element input[type='checkbox'].toggle {
	height: 20px;
	width: 45px;
	border-radius: 16px;
	display: inline-block;
	position: relative;
	margin: 0;
	margin-top: 2px;
	background: linear-gradient( 0deg, #292929 0%, #0a0a0ac2 100% );
	transition: all 0.2s ease;
}

f-element input[type='checkbox'].toggle:after {
	content: "";
	position: absolute;
	top: 2px;
	left: 2px;
	width: 16px;
	height: 16px;
	border-radius: 50%;
	background: white;
	box-shadow: 0 1px 2px rgba(44, 44, 44, 0.2);
	transition: all 0.2s cubic-bezier(0.5, 0.1, 0.75, 1.35);
}

f-element input[type='checkbox'].toggle:checked {
	background: linear-gradient( 0deg, #0177fb 0%, #0177fb 100% );
}

f-element input[type='checkbox'].toggle:checked:after {
	transform: translatex(25px);
}

f-element.auto-height {
	display: table;
}

f-element textarea {
	width: calc( 100% - 18px );
	padding-top: 1px;
	padding-bottom: 3px;
	padding-left: 3px;
	padding-right: 8px;
	margin-top: 2px;
	margin-left: 2px;
	height: calc( 100% - 8px );
	max-height: 300px;
	border-radius: 2px;
	resize: none;
	box-shadow: inset 0px 1px 1px rgb(0 0 0 / 20%), 0px 1px 0px rgb(255 255 255 / 5%);
}

f-element.auto-height textarea {
	resize: auto;
}

f-element select {
	width: 100%;
	margin-top: 2px;
	margin-bottom: 2px;
	margin-left: 2px;
	margin-right: 2px;
	/*padding-left: 5px;*/
	cursor: pointer;
	box-shadow: inset 0px 1px 1px rgb(0 0 0 / 20%), 0px 1px 0px rgb(255 255 255 / 5%);
}

f-element f-toolbar {
	position: absolute;
	display: flex;
	top: 0;
	width: 100%;
	height: 100%;
	align-content: space-around;
}

f-element.input-right f-toolbar {
	right: 7px;
	float: right;
	justify-content: end;
}

f-element f-toolbar {
	margin-top: auto;
	margin-bottom: auto;
	margin-left: 3px;
	margin-right: 3px;
	font-size: 18px;
    line-height: 18px;
}

f-element f-toolbar button {
	opacity: .7;
	cursor: pointer;
	font-size: 14px;
	width: unset;
    height: unset;
    border-radius: unset;
    border: unset;
	outline: 0;
	background-color: unset;
	box-shadow: unset;
}

f-element f-toolbar button:hover,
f-element f-toolbar button:active {
	opacity: 1;
	border: 0;
	background-color: unset;
}

f-element input.range-value {
	width: 60px;
	text-align: center;
}

f-menu.context button,
f-element button {
	width: 100%;
	height: calc( 100% - 4px );
	margin-left: 2px;
	margin-right: 2px;
	margin-top: 2px;
	border-radius: 3px;
	cursor: pointer;
	/*text-transform: uppercase;*/
}

f-element button {
	box-shadow: inset 1px 1px 1px 0 rgb(255 255 255 / 17%), inset -2px -2px 2px 0 rgb(0 0 0 / 26%);
}

f-element button:hover {
	color: #fff;
	background-color: #2a2a2a;
}

f-element button:active {
	/*background: rgba( 0, 0, 0, 0.6 );*/
	border: 1px solid rgba( 0, 120, 255, 0.98 );
}

f-element f-inputs,
f-element f-subinputs {
	display: flex;
	justify-content: flex-end;
	width: 100%;
}

f-element f-inputs {
	left: 100px;
	top: 50%;
	transform: translateY(-50%);
	position: absolute;
	width: calc( 100% - 106px );
	height: calc( 100% - 4px );
	z-index: 1;
}

f-element.inputs-disable f-inputs {
	filter: grayscale(100%);
    opacity: .5;
}

f-element.inputs-disable f-inputs input {
	pointer-events: none;
}

f-element f-label,
f-element span {
	margin: auto;
	text-shadow: 1px 1px 0px #0007;
}

f-element f-label {	
	padding-left: 4px;
	white-space: nowrap;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	width: calc( 100% - 20px );
}

f-element.right f-label {
	text-align: right;
}

f-element.center f-label {
	text-align: center;
}

f-element f-label i {
	float: left;
	font-size: 18px;
	margin-right: 6px;
}

f-element f-label.center {
	width: 100%;
	text-align: center;
	display: block;
}
/*
f-element f-label.center {
	width: 100%;
	height: 100%;
	position: absolute;
	justify-content: center;
    align-items: center;
    display: flex;
}
*/
f-element.title {
	height: 29px;
	background-color: #3a3a3ab0;
	background-color: #3b3b43ed;
    /*background-color: linear-gradient( rgb(1 119 251), rgba(0, 80, 200, 0.73) );*/
	cursor: all-scroll;
	border-top-left-radius: 6px;
    border-top-right-radius: 6px;
}

f-element.blue {
	background-color: #014fc5;
}

f-element.red {
	background-color: #bd0b0b;
}

f-element.green {
	background-color: #148d05;
}

f-element.yellow {
	background-color: #d6b100;
}

f-element.title.left {
	text-align: left;
	display: inline-grid;
	justify-content: start;
}

f-element.title span {
	text-align: center;
	font-size: 15px;
	padding-top: 2px;
}

f-element.title i {
	font-size: 18px;
	position: absolute;
	right: 10px;
	top: 50%;
	transform: translateY(-50%);
	opacity: .5;
}

f-element.title f-toolbar i {
	font-size: 20px;
	right: unset;
	left: 0px;
}

f-element.input-right.title i {
	left: 10px;
	right: unset;
}

f-element.title.left span {
	text-align: left;
}

f-element f-io {
	border: 2px solid #dadada;
	width: 7px;
	height: 7px;
	position: absolute;
	background: #242427;
	border-radius: 8px;
	float: left;
	left: -7px;
	top: calc( 50% - 5px );
	cursor: alias;
	box-shadow: 0 0 3px 2px #0000005e;
	z-index: 1;
}

f-element f-io.connect,
f-canvas.dragging-rio f-element:hover f-io.lio,
f-canvas.dragging-lio f-element:hover f-io.rio {
	zoom: 1.4;
}

f-node.io-connect f-io:not(.connect) {
	border: 2px solid #dadada !important;
	zoom: 1 !important;
}

f-element f-io.rio {
	float: right;
    right: -7px;
    left: unset;
}

f-element f-disconnect {
	position: absolute;
	left: -35px;
	top: 50%;
	font-size: 22px;
	transform: translateY( -50% );
	filter: drop-shadow(0 0 5px #000);
	text-shadow: 0px 0px 5px black;
	cursor: pointer;
	transition: all .2s;
}

f-element.input-right f-disconnect {
	right: -35px;
	left: unset;
}

f-element f-disconnect:hover {
	color: #ff3300;
}

f-element textarea::-webkit-scrollbar {
	width: 6px;
}

f-element textarea::-webkit-scrollbar-track {
	background: #111; 
}
 
f-element textarea::-webkit-scrollbar-thumb {
	background: #0177fb; 
}

f-element textarea::-webkit-scrollbar-thumb:hover {
	background: #1187ff; 
}

f-element.small {
    height: 18px;
}

f-element.large {
    height: 36px;
}

body.connecting f-node:not(.io-connect) f-element:hover,
f-element.select {
	background-color: rgba(61, 70, 82, 0.98);
}

f-element.invalid > f-io {
	zoom: 1 !important;
}

f-element.invalid::after {
	font-size: 14px !important;
	display: flex;
	justify-content: center;
	align-items:center;
	margin: auto;
	position: absolute;
	width: 100%;
	height: 100%;
	background: #bd0b0b77;
	vertical-align: middle;
	color: #fff;
	content: 'Not Compatible';
	opacity: .95;
	backdrop-filter: grayscale(100%);
	white-space: nowrap;
	overflow: hidden;
	left: 0;
	top: 0;
	text-transform: initial;
}

f-element.invalid > f-inputs,
f-element.invalid > f-label,
f-element.invalid > input,
f-element.invalid > select {
	opacity: .1;
}

/* drop */

f-drop {
	width: 100%;
	height: 100%;
	position: sticky;
	left: 0;
	top: 0;
	background: #02358417;
	text-align: center;
	justify-content: center;
	align-items: center;
	display: flex;
	box-shadow: inset 0 0 20px 10px #464ace17;
	pointer-events: none;
	transition: all .07s;
	opacity: 0;
	visibility: hidden;
}

f-drop.visible {
	visibility: unset;
	opacity: unset;
	transition: all .23s;
}

f-drop span {
	opacity: .5;
	font-size: 40px;
	text-shadow: 0px 0px 5px #000;
	font-weight: bold;
}

/* menu */

f-tooltip {
	pointer-events: none;
}

f-tooltip {
	position: absolute;
	left: 0;
	top: 0;	
	background: rgba(0,0,0,.8);
	backdrop-filter: blur(4px);
	font-size: 14px;
	padding: 7px;
	left: 50%;
	border-radius: 10px;
	transform: translateX(-50%);
	visibility: hidden;
	pointer-events: none;
	opacity: 0;
	transition: all 0.3s ease;
	z-index: 150;
	white-space: nowrap;
}

f-menu.context,
f-menu.search {
	position: absolute;
}

f-menu.context {
	width: 170px;
	z-index: 110;
}

f-menu.search {
	bottom: 85px;
	left: 50%;
	transform: translateX(-50%);
	z-index: 10;
	width: 300px;
}

f-menu.context f-list {
	display: block;
	margin: 0;
	background: #171717e6;
	font-size: 12px;
	border-radius: 6px;
	backdrop-filter: blur(6px);
	border: 1px solid #7e7e7e45;
	box-shadow: 3px 3px 6px rgba(0,0,0,.2);
	transition: opacity 0.2s ease, transform 0.1s ease;
}

f-menu.search f-list {
	margin: 0 6px 0 6px;
	display: flex;
    flex-direction: column-reverse;
	margin-bottom: 5px;
}

f-menu.context.hidden {
	visibility: hidden;
	/*transform: translateX(-10px);*/
	opacity: 0;
}

f-menu.context f-item,
f-menu.search f-item {
	display: block;
	position: relative;
	margin: 0;
	padding: 0;
	white-space: nowrap;
}

f-menu.search f-item {
	opacity: 0;
}

f-menu.context f-item.submenu::after {
	content: "";
	position: absolute;
	right: 6px;
	top: 50%;
	-webkit-transform: translateY(-50%);
	transform: translateY(-50%);
	border: 5px solid transparent;
	border-left-color: #808080;
}

f-menu.context f-item:hover > f-menu,
f-menu.context f-item.active > f-menu {
	visibility: unset;
	transform: unset;
	opacity: unset;
}

f-menu.context f-menu {
	top: 0px;
	left: calc( 100% - 4px );
}

f-menu.context f-item button,
f-menu.search f-item button {
	overflow: visible;
	display: block;
	width: calc( 100% - 6px );
	text-align: left;
	cursor: pointer;
	white-space: nowrap;
	padding: 6px 8px;
	border-radius: 3px;
	background: rgba(45, 45, 48, 0.95);
	border: 0;
	color: #ddd;
	margin: 3px;
	text-shadow: 1px 1px 0px #0007;
}

f-menu.context f-item button i,
f-menu.search f-item button i {
	float: left;
	font-size: 16px;
}

f-menu.context f-item button span,
f-menu.search f-item button span {
	margin-left: 6px;
}

f-menu.context f-item:hover > button,
f-menu.search f-item:hover > button,
f-menu.search f-item.active > button {
	color: #fff;
	background-color: rgba(61, 70, 82, 0.98);
}

f-menu.search f-item:hover,
f-menu.search f-item.active {
	opacity: 1 !important;
}

f-menu.context f-item button:active {
	outline: solid 1px rgba( 0, 80, 200, 0.98 );
}

f-menu.context f-item f-tooltip {
	margin-left: 85px;
	top: -50px;
}

f-menu.search f-item {
	display: none;
}

f-menu.search f-item:nth-child(1) {
	opacity: 1;
	display: unset;
}

f-menu.search f-item:nth-child(2) {
	opacity: .8;
	display: unset;
}

f-menu.search f-item:nth-child(3) {
	opacity: .6;
	display: unset;
}

f-menu.search f-item:nth-child(4) {
	opacity: .4;
	display: unset;
}

f-menu.search f-item button {
    border-radius: 14px;
}

/* tips */

f-tips {
	right: 10px;
	top: 10px;
    position: absolute;
	z-index: 100;
	pointer-events: none;
	display: flex;
    flex-direction: column/*-reverse*/;
}

f-tips f-tip {
    width: 450px;
    font-size: 13px;
    border-radius: 6px;
    text-align: center;
    display: block;
    height: auto;
    color: #ffffffe0;
	margin: 4px;
	padding: 4px;
    background: #17171794;
    border: 1px solid #7e7e7e38;
    line-height: 100%;
	backdrop-filter: blur(6px);
	transition: all 0.2s ease;
	text-transform: initial;
	opacity: 0;
}

f-tips f-tip:nth-child(1) {
	opacity: 1;
}

f-tips f-tip:nth-child(2) {
	opacity: .75;
}

f-tips f-tip:nth-child(3) {
	opacity: .25;
}

f-tips f-tip:nth-child(4) {
	opacity: .1;
}

f-tips f-tip.error {
	background: #b900005e;
}

/* circle/search */

f-menu.search input {
	width: calc( 100% - 28px );
	height: 41px;
	position: absolute;
	z-index: 10;
	border-radius: 20px;
	padding-left: 14px;
	padding-right: 14px;
	font-size: 15px;
	background-color: #17171794;
	border: 1px solid #7e7e7e45;
	backdrop-filter: blur(6px);
	box-shadow: 3px 3px 6px rgb(0 0 0 / 20%);
	text-transform: initial;
}

f-menu.circle {
	position: absolute;
	left: 40px;
	bottom: 40px;
	z-index: 100;
}

f-menu.circle f-item {
	/*display: flex;*/
	/*justify-content: end;*/
    align-content: space-around;
	margin-right: 20px;
}

f-menu.circle f-item button {
	width: 47px;
	height: 47px;
	font-size: 22px;
	background: #17171794;
	border-radius: 50%;
	backdrop-filter: blur(6px);
	border: 1px solid #7e7e7e45;
	line-height: 100%;
	cursor: pointer;
	box-shadow: 3px 3px 6px rgba(0,0,0,.2);
}

f-menu.circle f-item f-tooltip {
	margin-top: -60px;
}

/* rounded */

.f-rounded f-node f-element,
.f-rounded f-node f-element.title.left {
	border-radius: 10px 5px 10px 5px;
}

.f-rounded f-node f-element input, 
.f-rounded f-node f-element select,
.f-rounded f-node f-element button,
.f-rounded f-node f-element textarea,
.f-rounded f-node f-element input[type='checkbox'].toggle,
.f-rounded f-node f-element input[type='checkbox'].toggle:after {
	border-radius: 20px 10px;
}

.f-rounded f-node f-element input {
	padding-left: 7px;
	padding-right: 7px;
}

.f-rounded f-menu.context,
.f-rounded f-menu.context f-item button {
	border-radius: 20px 10px;
}

/* desktop */

@media (hover: hover) and (pointer: fine) {

	f-node:not(.selected):hover {
		filter: drop-shadow(0 0 6px #66666630);
	}

	f-element f-toolbar {
		visibility: hidden;
		opacity: 0;
		transition: opacity 0.2s ease;
	}

	f-node:hover > f-element f-toolbar {
		visibility: visible;
		opacity: 1;
	}

	f-element f-io:hover {
		zoom: 1.4;
	}
	
	f-menu.circle f-item button:hover {
		background-color: #2a2a2a;
	}

	f-menu.search input:hover,
	f-menu.search input:focus {
		background-color: #1a1a1a;
		filter: drop-shadow(0 0 6px #66666630);
	}

	f-menu.search input:focus {
		filter: drop-shadow(0 0 8px #4444dd);
	}

	f-menu.circle f-item button:hover > f-tooltip,
	f-menu.context f-item button:hover > f-tooltip {
		visibility: visible;
		opacity: 1;
	}

	f-menu.circle f-item button:hover > f-tooltip {
		margin-top: -50px;
	}

	f-menu.context f-item button:hover > f-tooltip {
		/*margin-left: 120px;*/
		top: -30px;
	}

	f-menu.circle f-item button:focus > f-tooltip,
	f-menu.context f-item button:focus > f-tooltip {
		visibility: hidden;
		opacity: 0;
	}

}

/* mobile */

@media (hover: none) and (pointer: coarse) {

	body.dragging f-canvas,
	body.connecting f-canvas {
		overflow: hidden !important;
	}

}

/* optimizations */

f-canvas {
	will-change: top, left;
}

f-node {
	will-change: transform !important;
}
`);

let _id = 0;

class Serializer extends EventTarget {

	constructor() {

		super();

		this._id = _id ++;

		this._serializable = true;

	}

	get id() {

		return this._id;

	}

	setSerializable( value ) {

		this._serializable = value;

		return this;

	}

	getSerializable() {

		return this._serializable;

	}

	serialize( /*data*/ ) {

		console.warn( 'Serializer: Abstract function.' );

	}

	deserialize( /*data*/ ) {

		console.warn( 'Serializer: Abstract function.' );

	}

	toJSON( data = null ) {

		let object = null;

		const id = this.id;

		if ( data !== null ) {

			const objects = data.objects;

			object = objects[ id ];

			if ( object === undefined ) {

				object = { objects };

				this.serialize( object );

				delete object.objects;

				objects[ id ] = object;

			}

		} else {

			object = { objects: {} };

			this.serialize( object );

		}

		object.id = id;
		object.type = this.constructor.name;

		return object;

	}

}

class PointerMonitor {

	started = false;

	constructor() {

		this.x = 0;
		this.y = 0;

		this._onMoveEvent = ( e ) => {

			const event = e.touches ? e.touches[ 0 ] : e;

			this.x = event.x;
			this.y = event.y;

		};

	}

	start() {

		if ( this.started ) return;

		this.started = true;

		window.addEventListener( 'wheel', this._onMoveEvent, true );

		window.addEventListener( 'mousedown', this._onMoveEvent, true );
		window.addEventListener( 'touchstart', this._onMoveEvent, true );

		window.addEventListener( 'mousemove', this._onMoveEvent, true );
		window.addEventListener( 'touchmove', this._onMoveEvent, true );

		window.addEventListener( 'dragover', this._onMoveEvent, true );

		return this;

	}

}

new PointerMonitor().start();

const draggableDOM = ( dom, callback = null, className = 'dragging' ) => {

	let dragData = null;

	const getZoom = () => {

		let zoomDOM = dom;

		while ( zoomDOM && ! ( zoomDOM instanceof Document || zoomDOM instanceof ShadowRoot ) ) {

			const zoom = zoomDOM.style.zoom;

			if ( zoom ) {

				return Number( zoom );

			}

			zoomDOM = zoomDOM.parentNode;

		}

		return 1;

	};

	const onMouseDown = ( e ) => {

		const event = e.touches ? e.touches[ 0 ] : e;

		e.stopImmediatePropagation();

		dragData = {
			client: { x: event.clientX, y: event.clientY },
			delta: { x: 0, y: 0 },
			start: { x: dom.offsetLeft, y: dom.offsetTop },
			dragging: false,
			isTouch: !! e.touches
		};

		window.addEventListener( 'mousemove', onGlobalMouseMove );
		window.addEventListener( 'mouseup', onGlobalMouseUp );

		window.addEventListener( 'touchmove', onGlobalMouseMove );
		window.addEventListener( 'touchend', onGlobalMouseUp );

	};

	const onGlobalMouseMove = ( e ) => {

		const { start, delta, client } = dragData;

		const event = e.touches ? e.touches[ 0 ] : e;

		const zoom = getZoom();

		delta.x = ( event.clientX - client.x ) / zoom;
		delta.y = ( event.clientY - client.y ) / zoom;

		dragData.x = start.x + delta.x;
		dragData.y = start.y + delta.y;

		if ( dragData.dragging === true ) {

			if ( callback !== null ) {

				callback( dragData );

			} else {

				dom.style.cssText += `; left: ${ dragData.x }px; top: ${ dragData.y }px;`;

			}

			e.stopImmediatePropagation();

		} else {

			if ( Math.abs( delta.x ) > 2 || Math.abs( delta.y ) > 2 ) {

				dragData.dragging = true;

				dom.classList.add( 'drag' );

				if ( className ) document.body.classList.add( className );

				e.stopImmediatePropagation();

			}

		}

	};

	const onGlobalMouseUp = ( e ) => {

		e.stopImmediatePropagation();

		dom.classList.remove( 'drag' );

		if ( className ) document.body.classList.remove( className );

		window.removeEventListener( 'mousemove', onGlobalMouseMove );
		window.removeEventListener( 'mouseup', onGlobalMouseUp );

		window.removeEventListener( 'touchmove', onGlobalMouseMove );
		window.removeEventListener( 'touchend', onGlobalMouseUp );

		if ( callback === null ) {

			dom.removeEventListener( 'mousedown', onMouseDown );
			dom.removeEventListener( 'touchstart', onMouseDown );

		}

		dragData.dragging = false;

		if ( callback !== null ) {

			callback( dragData );

		}

	};

	if ( dom instanceof Event ) {

		const e = dom;
		dom = e.target;

		onMouseDown( e );

	} else {

		dom.addEventListener( 'mousedown', onMouseDown );
		dom.addEventListener( 'touchstart', onMouseDown );

	}

};

const dispatchEventList = ( list, ...params ) => {

	for ( const callback of list ) {

		if ( callback( ...params ) === false ) {

			return false;

		}

	}

	return true;

};

const toPX = ( val ) => {

	if ( isNaN( val ) === false ) {

		val = `${ val }px`;

	}

	return val;

};

const toHex = ( val ) => {

	if ( isNaN( val ) === false ) {

		val = `#${ val.toString( 16 ).padStart( 6, '0' ) }`;

	}

	return val;

};

class Node extends Serializer {

	constructor() {

		super();

		const dom = document.createElement( 'f-node' );

		const onDown = () => {

			const canvas = this.canvas;

			if ( canvas !== null ) {

				canvas.select( this );

			}

		};

		dom.addEventListener( 'mousedown', onDown, true );
		dom.addEventListener( 'touchstart', onDown, true );

		this._onConnect = ( e ) => {

			const { target } = e;

			for ( const element of this.elements ) {

				if ( element !== target ) {

					element.dispatchEvent( new Event( 'nodeConnect' ) );

				}

			}

		};

		this._onConnectChildren = ( e ) => {

			const { target } = e;

			for ( const element of this.elements ) {

				if ( element !== target ) {

					element.dispatchEvent( new Event( 'nodeConnectChildren' ) );

				}

			}

		};

		this.dom = dom;

		this.style = '';

		this.canvas = null;

		this.elements = [];

		this.events = {
			'focus': [],
			'blur': []
		};

		this.setWidth( 300 ).setPosition( 0, 0 );

	}

	onFocus( callback ) {

		this.events.focus.push( callback );

		return this;

	}

	onBlur( callback ) {

		this.events.blur.push( callback );

		return this;

	}

	setStyle( style ) {

		const dom = this.dom;

		if ( this.style ) dom.classList.remove( this.style );

		if ( style ) dom.classList.add( style );

		this.style = style;

		return this;

	}

	setPosition( x, y ) {

		const dom = this.dom;

		dom.style.left = toPX( x );
		dom.style.top = toPX( y );

		return this;

	}

	getPosition() {

		const dom = this.dom;

		return {
			x: parseInt( dom.style.left ),
			y: parseInt( dom.style.top )
		};

	}

	setWidth( val ) {

		this.dom.style.width = toPX( val );

		return this;

	}

	getWidth() {

		return parseInt( this.dom.style.width );

	}

	add( element ) {

		this.elements.push( element );

		element.node = this;
		element.addEventListener( 'connect', this._onConnect );
		element.addEventListener( 'connectChildren', this._onConnectChildren );

		this.dom.append( element.dom );

		return this;

	}

	remove( element ) {

		this.elements.splice( this.elements.indexOf( element ), 1 );

		element.node = null;
		element.removeEventListener( 'connect', this._onConnect );
		element.removeEventListener( 'connectChildren', this._onConnectChildren );

		this.dom.removeChild( element.dom );

		return this;

	}

	dispose() {

		const canvas = this.canvas;

		if ( canvas !== null ) canvas.remove( this );

		for ( const element of this.elements ) {

			element.dispose();

		}

		this.dispatchEvent( new Event( 'dispose' ) );

	}

	isCircular( node ) {

		if ( node === this ) return true;

		const links = this.getLinks();

		for ( const link of links ) {

			if ( link.outputElement.node.isCircular( node ) ) {

				return true;

			}

		}

		return false;

	}

	getLinks() {

		const links = [];

		for ( const element of this.elements ) {

			links.push( ...element.links );

		}

		return links;

	}

	serialize( data ) {

		const { x, y } = this.getPosition();

		const elements = [];

		for ( const element of this.elements ) {

			elements.push( element.toJSON( data ).id );

		}

		data.x = x;
		data.y = y;
		data.width = this.getWidth();
		data.elements = elements;

		if ( this.style !== '' ) {

			data.style = this.style;

		}

	}

	deserialize( data ) {

		this.setPosition( data.x, data.y );
		this.setWidth( data.width );

		if ( data.style !== undefined ) {

			this.setStyle( data.style );

		}

		const elements = this.elements;

		if ( elements.length > 0 ) {

			let index = 0;

			for ( const id of data.elements ) {

				data.objects[ id ] = elements[ index ++ ];

			}

		} else {

			for ( const id of data.elements ) {

				this.add( data.objects[ id ] );

			}

		}

	}

}

Node.prototype.isNode = true;

class Link {

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

let selected = null;

class Element extends Serializer {

	constructor( draggable = false ) {

		super();

		const dom = document.createElement( 'f-element' );
		dom.element = this;

		const onSelect = ( e ) => {

			let element = this;

			if ( e.changedTouches && e.changedTouches.length > 0 ) {

				const touch = e.changedTouches[ 0 ];

				let overDOM = document.elementFromPoint( touch.clientX, touch.clientY );

				while ( overDOM && ( ! overDOM.element || ! overDOM.element.isElement ) ) {

					overDOM = overDOM.parentNode;

				}

				element = overDOM ? overDOM.element : null;

			}

			const type = e.type;

			if ( ( type === 'mouseout' ) && selected === element ) {

				selected = null;

			} else {

				selected = element;

			}

		};

		if ( draggable === false ) {

			dom.ontouchstart = dom.onmousedown = ( e ) => {

				e.stopPropagation();

			};

		}

		dom.addEventListener( 'mouseup', onSelect, true );
		dom.addEventListener( 'mouseover', onSelect );
		dom.addEventListener( 'mouseout', onSelect );
		dom.addEventListener( 'touchmove', onSelect );
		dom.addEventListener( 'touchend', onSelect );

		this.inputs = [];

		this.links = [];

		this.dom = dom;

		this.lioLength = 0;
		this.rioLength = 0;

		this.events = {
			'connect': [],
			'connectChildren': [],
			'valid': []
		};

		this.node = null;

		this.style = '';

		this.object = null;
		this.objectCallback = null;

		this.enabledInputs = true;

		this.visible = true;

		this.inputsDOM = dom;

		this.disconnectDOM = null;

		this.lioDOM = this._createIO( 'lio' );
		this.rioDOM = this._createIO( 'rio' );

		this.dom.classList.add( `input-${ Link.InputDirection }` );

		this.dom.append( this.lioDOM );
		this.dom.append( this.rioDOM );

		this.addEventListener( 'connect', ( ) => {

			dispatchEventList( this.events.connect, this );

		} );

		this.addEventListener( 'connectChildren', ( ) => {

			dispatchEventList( this.events.connectChildren, this );

		} );

	}

	setAttribute( name, value ) {

		this.dom.setAttribute( name, value );

		return this;

	}

	onValid( callback ) {

		this.events.valid.push( callback );

		return this;

	}

	onConnect( callback, childrens = false ) {

		this.events.connect.push( callback );

		if ( childrens ) {

			this.events.connectChildren.push( callback );

		}

		return this;

	}

	setObjectCallback( callback ) {

		this.objectCallback = callback;

		return this;

	}

	setObject( value ) {

		this.object = value;

		return this;

	}

	getObject( output = null ) {

		return this.objectCallback ? this.objectCallback( output ) : this.object;

	}

	setVisible( value ) {

		this.visible = value;

		this.dom.style.display = value ? '' : 'none';

		return this;

	}

	getVisible() {

		return this.visible;

	}

	setEnabledInputs( value ) {

		const dom = this.dom;

		if ( ! this.enabledInputs ) dom.classList.remove( 'inputs-disable' );

		if ( ! value ) dom.classList.add( 'inputs-disable' );

		this.enabledInputs = value;

		return this;

	}

	getEnabledInputs() {

		return this.enabledInputs;

	}

	setColor( color ) {

		this.dom.style[ 'background-color' ] = toHex( color );

		return this;

	}

	setStyle( style ) {

		const dom = this.dom;

		if ( this.style ) dom.classList.remove( this.style );

		if ( style ) dom.classList.add( style );

		this.style = style;

		return this;

	}

	setInput( length ) {

		if ( Link.InputDirection === 'left' ) {

			return this.setLIO( length );

		} else {

			return this.setRIO( length );

		}

	}

	setInputColor( color ) {

		if ( Link.InputDirection === 'left' ) {

			return this.setLIOColor( color );

		} else {

			return this.setRIOColor( color );

		}

	}

	setOutput( length ) {

		if ( Link.InputDirection === 'left' ) {

			return this.setRIO( length );

		} else {

			return this.setLIO( length );

		}

	}

	setOutputColor( color ) {

		if ( Link.InputDirection === 'left' ) {

			return this.setRIOColor( color );

		} else {

			return this.setLIOColor( color );

		}

	}

	get inputLength() {

		if ( Link.InputDirection === 'left' ) {

			return this.lioLength;

		} else {

			return this.rioLength;

		}

	}

	get outputLength() {

		if ( Link.InputDirection === 'left' ) {

			return this.rioLength;

		} else {

			return this.lioLength;

		}

	}

	setLIOColor( color ) {

		this.lioDOM.style[ 'border-color' ] = toHex( color );

		return this;

	}

	setLIO( length ) {

		this.lioLength = length;

		this.lioDOM.style.visibility = length > 0 ? '' : 'hidden';

		return this;

	}

	getLIOColor() {

		return this.lioDOM.style[ 'border-color' ];

	}

	setRIOColor( color ) {

		this.rioDOM.style[ 'border-color' ] = toHex( color );

		return this;

	}

	getRIOColor() {

		return this.rioDOM.style[ 'border-color' ];

	}

	setRIO( length ) {

		this.rioLength = length;

		this.rioDOM.style.visibility = length > 0 ? '' : 'hidden';

		return this;

	}

	add( input ) {

		this.inputs.push( input );

		input.element = this;

		this.inputsDOM.append( input.dom );

		return this;

	}

	setHeight( val ) {

		this.dom.style.height = toPX( val );

		return this;

	}

	getHeight() {

		return this.dom.style.height;

	}

	connect( element = null ) {

		if ( this.disconnectDOM !== null ) {

			// remove the current input

			this.disconnectDOM.dispatchEvent( new Event( 'disconnect' ) );

		}

		if ( element !== null ) {

			if ( dispatchEventList( this.events.valid, this, element, 'connect' ) === false ) {

				return false;

			}

			const link = new Link( this, element );

			this.links.push( link );

			if ( this.disconnectDOM === null ) {

				this.disconnectDOM = document.createElement( 'f-disconnect' );
				this.disconnectDOM.innerHTML = '✖';

				this.dom.append( this.disconnectDOM );

				const onDisconnect = () => {

					this.links = [];
					this.dom.removeChild( this.disconnectDOM );

					this.disconnectDOM.removeEventListener( 'mousedown', onClick, true );
					this.disconnectDOM.removeEventListener( 'touchstart', onClick, true );
					this.disconnectDOM.removeEventListener( 'disconnect', onDisconnect, true );

					element.removeEventListener( 'connect', onConnect );
					element.removeEventListener( 'connectChildren', onConnect );
					element.removeEventListener( 'nodeConnect', onConnect );
					element.removeEventListener( 'nodeConnectChildren', onConnect );
					element.removeEventListener( 'dispose', onDispose );

					this.disconnectDOM = null;

				};

				const onConnect = () => {

					this.dispatchEvent( new Event( 'connectChildren' ) );

				};

				const onDispose = () => {

					this.connect();

				};

				const onClick = ( e ) => {

					e.stopPropagation();

					this.connect();

				};

				this.disconnectDOM.addEventListener( 'mousedown', onClick, true );
				this.disconnectDOM.addEventListener( 'touchstart', onClick, true );
				this.disconnectDOM.addEventListener( 'disconnect', onDisconnect, true );

				element.addEventListener( 'connect', onConnect );
				element.addEventListener( 'connectChildren', onConnect );
				element.addEventListener( 'nodeConnect', onConnect );
				element.addEventListener( 'nodeConnectChildren', onConnect );
				element.addEventListener( 'dispose', onDispose );

			}

		}

		this.dispatchEvent( new Event( 'connect' ) );

		return true;

	}

	dispose() {

		this.dispatchEvent( new Event( 'dispose' ) );

	}

	serialize( data ) {

		const height = this.getHeight();

		const inputs = [];
		const links = [];

		for ( const input of this.inputs ) {

			inputs.push( input.toJSON( data ).id );

		}

		for ( const link of this.links ) {

			if ( link.inputElement !== null && link.outputElement !== null ) {

				links.push( link.outputElement.toJSON( data ).id );

			}

		}

		if ( this.inputLength > 0 ) data.inputLength = this.inputLength;
		if ( this.outputLength > 0 ) data.outputLength = this.outputLength;

		if ( inputs.length > 0 ) data.inputs = inputs;
		if ( links.length > 0 ) data.links = links;

		if ( this.style !== '' ) {

			data.style = this.style;

		}

		if ( height !== '' ) {

			data.height = height;

		}

	}

	deserialize( data ) {

		if ( data.inputLength !== undefined ) this.setInput( data.inputLength );
		if ( data.outputLength !== undefined ) this.setOutput( data.outputLength );

		if ( data.inputs !== undefined ) {

			const inputs = this.inputs;

			if ( inputs.length > 0 ) {

				let index = 0;

				for ( const id of data.inputs ) {

					data.objects[ id ] = inputs[ index ++ ];

				}

			} else {

				for ( const id of data.inputs ) {

					this.add( data.objects[ id ] );

				}

			}

		}

		if ( data.links !== undefined ) {

			for ( const id of data.links ) {

				this.connect( data.objects[ id ] );

			}

		}

		if ( data.style !== undefined ) {

			this.setStyle( data.style );

		}

		if ( data.height !== undefined ) {

			this.setHeight( data.height );

		}

	}

	getLinkedObject( output = null ) {

		const linkedElement = this.getLinkedElement();

		return linkedElement ? linkedElement.getObject( output ) : null;

	}

	getLinkedElement() {

		const link = this.getLink();

		return link ? link.outputElement : null;

	}

	getLink() {

		return this.links[ 0 ];

	}

	_createIO( type ) {

		const { dom } = this;

		const ioDOM = document.createElement( 'f-io' );
		ioDOM.style.visibility = 'hidden';
		ioDOM.className = type;

		const onConnectEvent = ( e ) => {

			e.preventDefault();

			e.stopPropagation();

			selected = null;

			const nodeDOM = this.node.dom;

			nodeDOM.classList.add( 'io-connect' );

			ioDOM.classList.add( 'connect' );
			dom.classList.add( 'select' );

			const defaultOutput = Link.InputDirection === 'left' ? 'lio' : 'rio';

			const link = type === defaultOutput ? new Link( this ) : new Link( null, this );
			const previewLink = new Link( link.inputElement, link.outputElement );

			this.links.push( link );

			draggableDOM( e, ( data ) => {

				if ( previewLink.outputElement )
					previewLink.outputElement.dom.classList.remove( 'invalid' );

				if ( previewLink.inputElement )
					previewLink.inputElement.dom.classList.remove( 'invalid' );

				previewLink.inputElement = link.inputElement;
				previewLink.outputElement = link.outputElement;

				if ( type === defaultOutput ) {

					previewLink.outputElement = selected;

				} else {

					previewLink.inputElement = selected;

				}

				const isInvalid = previewLink.inputElement !== null && previewLink.outputElement !== null &&
					previewLink.inputElement.inputLength > 0 && previewLink.outputElement.outputLength > 0 &&
					dispatchEventList( previewLink.inputElement.events.valid, previewLink.inputElement, previewLink.outputElement, data.dragging ? 'dragging' : 'dragged' ) === false;

				if ( data.dragging && isInvalid ) {

					if ( type === defaultOutput ) {

						if ( previewLink.outputElement )
							previewLink.outputElement.dom.classList.add( 'invalid' );

					} else {

						if ( previewLink.inputElement )
							previewLink.inputElement.dom.classList.add( 'invalid' );

					}

					return;

				}

				if ( ! data.dragging ) {

					nodeDOM.classList.remove( 'io-connect' );

					ioDOM.classList.remove( 'connect' );
					dom.classList.remove( 'select' );

					this.links.splice( this.links.indexOf( link ), 1 );

					if ( selected !== null && ! isInvalid ) {

						link.inputElement = previewLink.inputElement;
						link.outputElement = previewLink.outputElement;

						// check if is an is circular link

						if ( link.outputElement.node.isCircular( link.inputElement.node ) ) {

							return;

						}

						//

						if ( link.inputElement.inputLength > 0 && link.outputElement.outputLength > 0 ) {

							link.inputElement.connect( link.outputElement );

						}

					}

				}

			}, 'connecting' );

		};

		ioDOM.addEventListener( 'mousedown', onConnectEvent, true );
		ioDOM.addEventListener( 'touchstart', onConnectEvent, true );

		return ioDOM;

	}

}

Element.prototype.isElement = true;

class DraggableElement extends Element {

	constructor( draggable = true ) {

		super( true );

		this.draggable = draggable;

		const onDrag = ( e ) => {

			e.preventDefault();

			if ( this.draggable === true ) {

				draggableDOM( this.node.dom );

			}

		};

		const { dom } = this;

		dom.addEventListener( 'mousedown', onDrag, true );
		dom.addEventListener( 'touchstart', onDrag, true );

	}

}

class TitleElement extends DraggableElement {

	constructor( title, draggable = true ) {

		super( draggable );

		const { dom } = this;

		dom.className = 'title';

		const spanDOM = document.createElement( 'span' );
		spanDOM.innerText = title;

		const iconDOM = document.createElement( 'i' );

		const toolbarDOM = document.createElement( 'f-toolbar' );

		this.buttons = [];

		this.spanDOM = spanDOM;
		this.iconDOM = iconDOM;
		this.toolbarDOM = toolbarDOM;

		dom.append( spanDOM );
		dom.append( iconDOM );
		dom.append( toolbarDOM );

	}

	setIcon( value ) {

		this.iconDOM.className = value;

		return this;

	}

	getIcon() {

		return this.iconDOM.className;

	}

	setTitle( value ) {

		this.spanDOM.innerText = value;

		return this;

	}

	getTitle() {

		return this.spanDOM.innerText;

	}

	addButton( button ) {

		this.buttons.push( button );

		this.toolbarDOM.append( button.dom );

		return this;

	}

	serialize( data ) {

		super.serialize( data );

		const title = this.getTitle();
		const icon = this.getIcon();

		data.title = title;

		if ( icon !== '' ) {

			data.icon = icon;

		}

	}

	deserialize( data ) {

		super.deserialize( data );

		this.setTitle( data.title );

		if ( data.icon !== undefined ) {

			this.setIcon( data.icon );

		}

	}

}

const drawLine = ( p1x, p1y, p2x, p2y, invert, size, colorA, ctx, colorB = null ) => {

	const dx = p2x - p1x;
	const dy = p2y - p1y;
	const offset = Math.sqrt( ( dx * dx ) + ( dy * dy ) ) * ( invert ? - .3 : .3 );

	ctx.beginPath();

	ctx.moveTo( p1x, p1y );

	ctx.bezierCurveTo(
		p1x + offset, p1y,
		p2x - offset, p2y,
		p2x, p2y
	);

	if ( colorB !== null && colorA !== colorB ) {

		const gradient = ctx.createLinearGradient( p1x, p1y, p2x, p2y );
		gradient.addColorStop( 0, colorA );
		gradient.addColorStop( 1, colorB );

		ctx.strokeStyle = gradient;

	} else {

		ctx.strokeStyle = colorA;

	}

	ctx.lineWidth = size;
	ctx.stroke();

};

const colors = [
	'#ff4444',
	'#44ff44',
	'#4444ff'
];

const dropNode = new Node().add( new TitleElement( 'File' ) ).setWidth( 250 );

class Canvas extends Serializer {

	constructor() {

		super();

		const dom = document.createElement( 'f-canvas' );
		const contentDOM = document.createElement( 'f-content' );
		const areaDOM = document.createElement( 'f-area' );
		const dropDOM = document.createElement( 'f-drop' );

		const canvas = document.createElement( 'canvas' );
		const frontCanvas = document.createElement( 'canvas' );

		const context = canvas.getContext( '2d' );
		const frontContext = frontCanvas.getContext( '2d' );

		this.dom = dom;

		this.contentDOM = contentDOM;
		this.areaDOM = areaDOM;
		this.dropDOM = dropDOM;

		this.canvas = canvas;
		this.frontCanvas = frontCanvas;

		this.context = context;
		this.frontContext = frontContext;

		this.width = 10000;
		this.height = 10000;

		this.clientX = 0;
		this.clientY = 0;

		this.relativeClientX = 0;
		this.relativeClientY = 0;

		this.zoom = 1;

		this.nodes = [];

		this.selected = null;

		this.updating = false;

		this.droppedItems = [];

		this.events = {
			'drop': []
		};

		frontCanvas.className = 'front';

		contentDOM.style.left = toPX( this.centerX );
		contentDOM.style.top = toPX( this.centerY );

		areaDOM.style.width = `calc( 100% + ${ this.width }px )`;
		areaDOM.style.height = `calc( 100% + ${ this.height }px )`;

		dropDOM.innerHTML = '<span>drop your file</span>';

		dom.append( dropDOM );
		dom.append( canvas );
		dom.append( frontCanvas );
		dom.append( contentDOM );
		dom.append( areaDOM );
		/*
		let zoomTouchData = null;

		const onZoomStart = () => {

			zoomTouchData = null;

		};
*/
		const onZoom = ( e ) => {

			if ( e.touches ) {

				if ( e.touches.length === 2 ) {

					e.preventDefault();

					e.stopImmediatePropagation();
					/*
					const clientX = ( e.touches[ 0 ].clientX + e.touches[ 1 ].clientX ) / 2;
					const clientY = ( e.touches[ 0 ].clientY + e.touches[ 1 ].clientY ) / 2;

					const distance = Math.hypot(
						e.touches[ 0 ].clientX - e.touches[ 1 ].clientX,
						e.touches[ 0 ].clientY - e.touches[ 1 ].clientY
					);

					if ( zoomTouchData === null ) {

						zoomTouchData = {
							distance
						};

					}

					const delta = ( zoomTouchData.distance - distance );
					zoomTouchData.distance = distance;

					let zoom = Math.min( Math.max( this.zoom - delta * .01, .5 ), 1.2 );

					if ( zoom < .52 ) zoom = .5;
					else if ( zoom > .98 ) zoom = 1;

					contentDOM.style.left = toPX( this.centerX / zoom );
					contentDOM.style.top = toPX( this.centerY / zoom );
					contentDOM.style.zoom = this.zoom = zoom;
*/

				}

			} else {

				e.preventDefault();

				e.stopImmediatePropagation();
				/*
				const delta = e.deltaY / 100;
				const zoom = Math.min( Math.max( this.zoom - delta * .1, .5 ), 1 );

				contentDOM.style.left = toPX( this.centerX / zoom );
				contentDOM.style.top = toPX( this.centerY / zoom );
				contentDOM.style.zoom = this.zoom = zoom;
*/

			}

		};

		dom.addEventListener( 'wheel', onZoom );
		dom.addEventListener( 'touchmove', onZoom );
		//dom.addEventListener( 'touchstart', onZoomStart );

		let dropEnterCount = 0;

		const dragState = ( enter ) => {

			if ( enter ) {

				if ( dropEnterCount ++ === 0 ) {

					this.droppedItems = [];

					dropDOM.classList.add( 'visible' );

					this.add( dropNode );

				}

			} else if ( -- dropEnterCount === 0 ) {

				dropDOM.classList.remove( 'visible' );

				this.remove( dropNode );

			}

		};

		dom.addEventListener( 'dragenter', () => {

 			dragState( true );

		} );

		dom.addEventListener( 'dragleave', () => {

			dragState( false );

		} );

		dom.addEventListener( 'dragover', ( e ) => {

			e.preventDefault();

			const { relativeClientX, relativeClientY } = this;

			const centerNodeX = dropNode.getWidth() / 2;

			dropNode.setPosition( relativeClientX - centerNodeX, relativeClientY - 20 );

		} );

		dom.addEventListener( 'drop', ( e ) => {

			e.preventDefault();

			dragState( false );

			this.droppedItems = e.dataTransfer.items;

			dispatchEventList( this.events.drop, this );

		} );

		draggableDOM( dom, ( data ) => {

			const { delta, isTouch } = data;

			if ( ! isTouch ) {

				if ( data.scrollTop === undefined ) {

					data.scrollLeft = dom.scrollLeft;
					data.scrollTop = dom.scrollTop;

				}

				dom.scrollLeft = data.scrollLeft - delta.x;
				dom.scrollTop = data.scrollTop - delta.y;

			}

			if ( data.dragging ) {

				dom.classList.add( 'grabbing' );

			} else {

				dom.classList.remove( 'grabbing' );

			}

		}, 'dragging-canvas' );

		this._onMoveEvent = ( e ) => {

			const event = e.touches ? e.touches[ 0 ] : e;
			const { zoom, rect } = this;

			this.clientX = event.clientX;
			this.clientY = event.clientY;

			this.relativeClientX = ( ( ( dom.scrollLeft - this.centerX ) + event.clientX ) - rect.left ) / zoom;
			this.relativeClientY = ( ( ( dom.scrollTop - this.centerY ) + event.clientY ) - rect.top ) / zoom;

		};

		this._onContentLoaded = () => {

			this.centralize();

		};

		this._onUpdate = () => {

			this.update();

		};

		this.start();

	}

	get rect() {

		return this.dom.getBoundingClientRect();

	}

	get relativeX() {

		return this.dom.scrollLeft - this.centerX;

	}

	get relativeY() {

		return this.dom.scrollTop - this.centerY;

	}

	get centerX() {

		return this.width / 2;

	}

	get centerY() {

		return this.height / 2;

	}

	onDrop( callback ) {

		this.events.drop.push( callback );

		return this;

	}

	start() {

		this.updating = true;

		document.addEventListener( 'wheel', this._onMoveEvent, true );

		document.addEventListener( 'mousedown', this._onMoveEvent, true );
		document.addEventListener( 'touchstart', this._onMoveEvent, true );

		document.addEventListener( 'mousemove', this._onMoveEvent, true );
		document.addEventListener( 'touchmove', this._onMoveEvent, true );

		document.addEventListener( 'dragover', this._onMoveEvent, true );

		document.addEventListener( 'DOMContentLoaded', this._onContentLoaded );

		requestAnimationFrame( this._onUpdate );

	}

	stop() {

		this.updating = false;

		document.removeEventListener( 'wheel', this._onMoveEvent, true );

		document.removeEventListener( 'mousedown', this._onMoveEvent, true );
		document.removeEventListener( 'touchstart', this._onMoveEvent, true );

		document.removeEventListener( 'mousemove', this._onMoveEvent, true );
		document.removeEventListener( 'touchmove', this._onMoveEvent, true );

		document.removeEventListener( 'dragover', this._onMoveEvent, true );

		document.removeEventListener( 'DOMContentLoaded', this._onContentLoaded );

	}

	add( node ) {

		if ( node.canvas === this ) return;

		this.nodes.push( node );

		node.canvas = this;

		this.contentDOM.append( node.dom );

		return this;

	}

	remove( node ) {

		if ( node === this.selected ) {

			this.select();

		}

		this.unlink( node );

		const nodes = this.nodes;

		nodes.splice( nodes.indexOf( node ), 1 );

		node.canvas = null;

		this.contentDOM.removeChild( node.dom );

		node.dispatchEvent( new Event( 'remove' ) );

		return this;

	}

	clear() {

		const nodes = this.nodes;

		while ( nodes.length > 0 ) {

			this.remove( nodes[ 0 ] );

		}

		return this;

	}

	unlink( node ) {

		const links = this.getLinks();

		for ( const link of links ) {

			if ( link.inputElement && link.outputElement ) {

				if ( link.inputElement.node === node ) {

					link.inputElement.connect();

				} else if ( link.outputElement.node === node ) {

					link.inputElement.connect();

				}

			}

		}

	}

	getLinks() {

		const links = [];

		for ( const node of this.nodes ) {

			links.push( ...node.getLinks() );

		}

		return links;

	}

	centralize() {

		this.dom.scroll( this.centerX, this.centerY );

		return this;

	}

	select( node = null ) {

		if ( node === this.selected ) return;

		const previousNode = this.selected;

		if ( previousNode !== null ) {

			previousNode.dom.classList.remove( 'selected' );

			this.selected = null;

			dispatchEventList( previousNode.events.blur, previousNode );

		}

		if ( node !== null ) {

			node.dom.classList.add( 'selected' );

			this.selected = node;

			dispatchEventList( node.events.focus, node );

		}

	}

	update() {

		if ( this.updating === false ) return;

		requestAnimationFrame( this._onUpdate );

		const { dom, zoom, canvas, frontCanvas, frontContext, context } = this;

		const width = window.innerWidth;
		const height = window.innerHeight;

		const domRect = this.rect;

		if ( canvas.width !== width || canvas.height !== height ) {

			canvas.width = width;
			canvas.height = height;

			frontCanvas.width = width;
			frontCanvas.height = height;

		}

		context.clearRect( 0, 0, width, height );
		frontContext.clearRect( 0, 0, width, height );

		context.globalCompositeOperation = 'lighter';
		frontContext.globalCompositeOperation = 'source-over';

		const links = this.getLinks();

		const aPos = { x: 0, y: 0 };
		const bPos = { x: 0, y: 0 };

		const offsetIORadius = 10;

		let dragging = '';

		for ( const link of links ) {

			const { lioElement, rioElement } = link;

			let draggingLink = '';
			let length = 0;

			if ( lioElement !== null ) {

				const rect = lioElement.dom.getBoundingClientRect();

				length = Math.max( length, lioElement.rioLength );

				aPos.x = rect.x + rect.width;
				aPos.y = rect.y + ( rect.height / 2 );

			} else {

				aPos.x = this.clientX;
				aPos.y = this.clientY;

				draggingLink = 'lio';

			}

			if ( rioElement !== null ) {

				const rect = rioElement.dom.getBoundingClientRect();

				length = Math.max( length, rioElement.lioLength );

				bPos.x = rect.x;
				bPos.y = rect.y + ( rect.height / 2 );

			} else {

				bPos.x = this.clientX;
				bPos.y = this.clientY;

				draggingLink = 'rio';

			}

			dragging = dragging || draggingLink;

			const drawContext = draggingLink ? frontContext : context;

			if ( draggingLink || length === 1 ) {

				let colorA = null,
					colorB = null;

				if ( draggingLink === 'rio' ) {

					colorA = colorB = lioElement.getRIOColor();

					aPos.x += offsetIORadius;
					bPos.x /= zoom;
					bPos.y /= zoom;

				} else if ( draggingLink === 'lio' ) {

					colorA = colorB = rioElement.getLIOColor();

					bPos.x -= offsetIORadius;
					aPos.x /= zoom;
					aPos.y /= zoom;

				} else {

					colorA = lioElement.getRIOColor();
					colorB = rioElement.getLIOColor();

				}

				drawLine(
					aPos.x * zoom, aPos.y * zoom,
					bPos.x * zoom, bPos.y * zoom,
					false, 2, colorA || '#ffffff', drawContext, colorB || '#ffffff'
				);

			} else {

				length = Math.min( length, 4 );

				for ( let i = 0; i < length; i ++ ) {

					const color = colors[ i ] || '#ffffff';

					const marginY = 4;

					const rioLength = Math.min( lioElement.rioLength, length );
					const lioLength = Math.min( rioElement.lioLength, length );

					const colorA = lioElement.getRIOColor() || color;
					const colorB = rioElement.getLIOColor() || color;

					const aCenterY = ( ( rioLength * marginY ) * .5 ) - ( marginY / 2 );
					const bCenterY = ( ( lioLength * marginY ) * .5 ) - ( marginY / 2 );

					const aIndex = Math.min( i, rioLength - 1 );
					const bIndex = Math.min( i, lioLength - 1 );

					const aPosY = ( aIndex * marginY ) - 1;
					const bPosY = ( bIndex * marginY ) - 1;

					drawLine(
						aPos.x * zoom, ( ( aPos.y + aPosY ) - aCenterY ) * zoom,
						bPos.x * zoom, ( ( bPos.y + bPosY ) - bCenterY ) * zoom,
						false, 2, colorA, drawContext, colorB
					);

				}

			}

		}

		context.globalCompositeOperation = 'destination-in';

		context.fillRect( domRect.x, domRect.y, domRect.width, domRect.height );

		if ( dragging !== '' ) {

			dom.classList.add( 'dragging-' + dragging );

		} else {

			dom.classList.remove( 'dragging-lio' );
			dom.classList.remove( 'dragging-rio' );

		}

	}

	serialize( data ) {

		const nodes = [];

		for ( const node of this.nodes ) {

			nodes.push( node.toJSON( data ).id );

		}

		data.nodes = nodes;

	}

	deserialize( data ) {

		for ( const id of data.nodes ) {

			this.add( data.objects[ id ] );

		}

	}

}

class Component {
    constructor() {

        this.default = {
            node: { className: "Node", path: "./core/Node.js" },
            element: { className: "Element", path: "./core/Element.js" },
            input: { className: "Input", path: "./core/Input.js" }
        };
        this.cache = {
            node: new Map( [
                [ "object", { className: "ObjectNode", path: "./nodes/ObjectNode.js" } ],
                [ "panel", { className: "PanelNode", path: "./nodes/PanelNode.js" } ]
            ] ),
            element: new Map( [
                [ "draggable", { className: "DraggableElement", path: "./elements/DraggableElement.js" } ],
                [ "label", { className: "LabelElement", path: "./elements/LabelElement.js" } ],
                [ "title", { className: "TitleElement", path: "./elements/TitleElement.js" } ]
            ] ),
            input: new Map( [
                [ "button", { className: "ButtonInput", path: "./inputs/ButtonInput.js" } ],
                [ "color", { className: "ColorInput", path: "./inputs/ColorInput.js" } ],
                [ "number", { className: "NumberInput", path: "./inputs/NumberInput.js" } ],
                [ "select", { className: "SelectInputs", path: "./inputs/SelectInputs.js" } ],
                [ "slider", { className: "SliderInputs", path: "./inputs/SliderInputs.js" } ],
                [ "string", { className: "StringInput", path: "./inputs/StringInput.js" } ],
                [ "Text", { className: "TextInput", path: "./inputs/TextInput.js" } ],
                [ "Toggle", { className: "ToggleInput", path: "./inputs/ToggleInput.js" } ]
            ] )
        };

    }

    add(type, name, desc) {

        this.cache[type].set(name, desc);

    }

    get(type, name) {

        return this.cache[type].has(name) ? this.cache[type].get(name) : this.default[type];

    }

    remove(type, name) {

        this.cache[type].delete(name);

    }
}

const optionsBuilder = params => {

    let options = { components: new Component() };

    const { width, height, components } = params;

    if ( typeof width === "number" )
        options.width = toPX( width );

    if ( typeof height === "number" )
        options.height = toPX( height );

    if ( components ) {

        if ( Array.isArray(components) ) {

            components.forEach( ( { type, name, desc } ) => {

                options.components.add( type, name, desc );

            } );

        } else if ( typeof components === "object") {

            const { type, name, desc } = components;
            options.components.add( type, name, desc );

        }

    }

    return options;

};

class FlowElement extends HTMLElement {

    constructor( options ) {

        super();

        this.options = optionsBuilder( options );

        this.attachShadow({ mode: "open" });

        const holderSheet = new CSSStyleSheet();
        holderSheet.replace( `
            :host {
                position: absolute;
                width: ${ this.options.width };
                height: ${ this.options.height };
            }
        ` );

        this.shadowRoot.adoptedStyleSheets = [ sheet, holderSheet ];

    }

    connectedCallback() {

        this.canvas = new Canvas();

        this.shadowRoot.append( this.canvas.dom );

        FlowElement.onDrop = this.canvas.onDrop.bind( this.ondrop );

        FlowElement.start = this.canvas.start.bind( this.canvas );

        FlowElement.stop = this.canvas.stop.bind( this.canvas );

        FlowElement.delete = this.canvas.remove.bind( this.canvas );

        FlowElement.clear = this.canvas.clear.bind( this.canvas );

        FlowElement.destory = super.remove;

        FlowElement.unlink = this.canvas.unlink.bind( this.canvas );

        FlowElement.getLinks = this.canvas.getLinks.bind( this.canvas );

        FlowElement.centralize = this.canvas.getLinks.bind( this.canvas );

        FlowElement.select = this.canvas.select.bind( this.canvas );

        FlowElement.update = this.canvas.update.bind( this.canvas );

        FlowElement.serialize = this.canvas.serialize.bind( this.canvas );

        FlowElement.deserialize = this. canvas.deserialize.bind( this.canvas );

    }

    /**
     * A lazy entrance of {@link Canvas }
     * @example
     * add(
     *     {
     *       type: "XXXnode",
     *       elements: [
     *         {
     *           type: "title",
     *           params: "BalaBala"
     *         },
     *         {
     *           type: "title",
     *           params: { title: "BalaBala" }
     *         },
     *         {
     *           type: "label",
     *           params: { label: "BalaBala" },
     *           handle: element => { element.setXXX }
     *         },
     *         {
     *           type: "label",
     *           params: { label: "BalaBala" },
     *           handle: element => { element.setXXX }
     *           inputs: [
     *             {
     *               type: "button",
     *               params: "Text",
     *               handle => { input.setXXX }
     *             }
     *           ]
     *         },
     *         {
     *           type: "label",
     *           params: { label: "BalaBala" },
     *           handle: element => { element.setXXX }
     *           inputs: [
     *             {
     *               type: "button",
     *               params: "Text",
     *               handle => { input.setXXX }
     *             },
     *             {
     *               type: "button",
     *               params: "Text",
     *               handle => { input.setXXX }
     *             }
     *           ]
     *         }
     *       ]
     *     },
     *     {
     *         ...;
     *     }
     * );
     * @param {any[]} nodes
     */
    async add( ...nodes ) {

        for (const node of nodes) {

            if ( typeof node !== "object" ) throw new TypeError( `Invalid ${ node } type ${ typeof node }` );

            const { elements, ...nodeSettings } = node;

            const { className, path } = this.options.components.get( "node", nodeSettings.type );

            const nodeData = new ( ( await import( path ) )[className] )( nodeSettings.params );

            if ( nodeSettings.handle ) nodeSettings.handle.call( nodeData, nodeData );

            //console.log(nodeSettings, nodeData);

            for (const element of elements) {

                if ( typeof element !== "object" ) throw new TypeError( `Invalid ${ element } type ${ typeof element }` );

                const { inputs, ...elementSettings } = element;

                const { className, path } = this.options.components.get( "element", elementSettings.type );

                const elementData = new ( ( await import( path ) )[className] )( elementSettings.params );

                if ( elementSettings.handle ) elementSettings.handle.call( elementData, elementData );

                //console.log(elementSettings, elementData);

                for (const input of inputs) {

                    if ( typeof input !== "object" ) throw new TypeError( `Invalid ${ input } type ${ typeof input }` );

                    const inputSettings = input;

                    const { className, path } = this.options.components.get( "input", inputSettings.type );

                    const inputData = new ( ( await import( path ) )[className] )( inputSettings.params );

                    if ( inputSettings.handle ) inputSettings.handle.call( inputData, inputData );

                    //console.log(inputSettings, inputData);

                    elementData.add( inputData );

                }

                nodeData.add( elementData );

            }

            this.canvas.add(nodeData);

        }

        return this.canvas;

    }

}

customElements.define( "f-master", FlowElement );

export { Component, FlowElement as default };
