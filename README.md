<h1 align="center">
  <img alt="flow" height="300px" src="https://raw.githack.com/sunag/flow/main/media/flow-box.svg"/>
</h1>

<h3 align="center">
   Lightweight, cross-browser UI library. 
</h3>

<p align="center">
  Flow is basead on native components of <b>HTML5</b> and the code on <b>ES2015</b>. It is modular, three-shaking and class-based.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/build-passing-green">
  <img src="https://img.shields.io/badge/flow.min.js-12kB-0099FF">
</p>

:rocket: Examples
===

- [x] [Inputs](https://raw.githack.com/sunag/flow/main/examples/index.html)
- [x] [Events](https://raw.githack.com/sunag/flow/main/examples/events.html)
- [x] [Pure HTML5 ( No JavaScript )](https://raw.githack.com/sunag/flow/main/examples/events.html)
- [ ] Node-Graph Editor

### :keyboard: JavaScript

```javascript
import * as Flow from '../build/flow.module.js';

const node = new Flow.Node();
node.setWidth( 400 );
node.setAlign( 'center' );

const numberElement = new Flow.LabelElement( 'onChange' );
numberElement.add( new Flow.NumberInput( 1 ).onChange( ( input ) => {

  console.log( 'Value:', input.value );

} ) );

const buttonElement = new Flow.LabelElement( 'onClick' );
buttonElement.add( new Flow.ButtonInput( 'OK' ).onClick( () => {

  console.log( 'Clicked!' );

} ) );

node.add( new Flow.TitleElement( 'Callback ( Open Console )' ) );
node.add( numberElement );
node.add( buttonElement );

document.body.appendChild( node.dom );
```

### :package: HTML5

If you prefer you can use Flow with your own JavaScript

[<img width="350px" src="https://user-images.githubusercontent.com/502810/139017347-6a63b516-180c-4db8-ab3f-9eca21a1ce9b.png"/>](http://sunag.github.io/flow/)

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
		<f-io class="input"></f-io>
		<f-io class="output"></f-io>
		<f-inputs>
			<input type="text" spellcheck="false" autocomplete="off" value="Hello World!"/>
		</f-inputs>
	</f-element>
	...
</f-node>
```

## Inspiration and special thanks

- [Three.js and Mr.doob](https://github.com/mrdoob/three.js/)
- [UIL and Lo-th](https://github.com/lo-th/uil)
