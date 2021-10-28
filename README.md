<h1 align="center">
  <img alt="flow" height="350px" src="https://raw.githack.com/sunag/flow/master/media/flow-box-shadow.png"/>
</h1>

<h3 align="center">
   Lightweight, cross-browser UI library. 
</h3>

<p align="center">
  Flow is basead on native components of <b>HTML5</b> and the code on <b>ES6</b>. It is modular, three-shaking and class-based.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/build-passing-green">
  <img src="https://img.shields.io/badge/flow.min.js-17kB-0099FF">
</p>

:rocket: Examples
===

- [x] [Inputs](https://raw.githack.com/sunag/flow/master/examples/index.html)
- [x] [Events](https://raw.githack.com/sunag/flow/master/examples/events.html)
- [x] [Pure HTML5 ( No JavaScript )](https://raw.githack.com/sunag/flow/master/examples/pure.html)
- [ ] Node-Graph Editor

### :keyboard: JavaScript

```javascript
import * as Flow from '../build/flow.module.js';

const object = {
	'string': 'Hello World!',
	'color': 0x339933,
	'number': 100,
	'slider': .5,
	'text': 'Text Area'
};

const node = new Flow.PanelNode( 'Panel', 'center' );
node.addString( object, 'string' );
node.addColor( object, 'color' );
node.addNumber( object, 'number' );
node.addSlider( object, 'slider', 0, 1 );
node.addText( object, 'text' );
node.addButton( 'My Button' );

document.body.appendChild( node.dom );
```

[Open example](https://raw.githack.com/sunag/flow/master/examples/index.html)

### :package: HTML5

Use your own JavaScript with Flow layout and style.

```html
<f-node class="center rounded">
	<f-element class="title left">
		<span>Made With Love ❤</span>
		<f-toolbar>
			<span class="button">✖</span>
		</f-toolbar>
	</f-element>
	<f-element>
		<f-label>Node</f-label>
		<f-inputs>
			<input type="text" value="Hello World!"/>
		</f-inputs>
	</f-element>
	...
</f-node>
```

[Open example](https://raw.githack.com/sunag/flow/master/examples/pure.html)

## :footprints: Inspiration and special thanks

- [Three.js and Mr.doob](https://github.com/mrdoob/three.js/)
- [UIL and Lo-th](https://github.com/lo-th/uil)
