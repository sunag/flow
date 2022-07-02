import flowSheet from "../css/flow.css" assert { type: "css" };
import { Canvas } from "./core/Canvas.js";
import { toPX } from "./core/Utils.js";

export class Component {

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
                [ "select", { className: "SelectInput", path: "./inputs/SelectInput.js" } ],
                [ "slider", { className: "SliderInput", path: "./inputs/SliderInput.js" } ],
                [ "string", { className: "StringInput", path: "./inputs/StringInput.js" } ],
                [ "text", { className: "TextInput", path: "./inputs/TextInput.js" } ],
                [ "toggle", { className: "ToggleInput", path: "./inputs/ToggleInput.js" } ]
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

    let options = { width: "100%", height: "100%", components: new Component() };

    if ( params ) {

        const { width, height, components } = params;

        if ( width ) {

            options.width = typeof width === "number" ? toPX( width ) : width;

        }

        if ( height ) {

            options.height = typeof height === "number" ? toPX( height ) : height;

        }

        if ( components ) {

            if ( Array.isArray( components ) ) {

                components.forEach( ( { type, name, desc } ) => {

                    options.components.add(type, name, desc);

                } );

            } else if ( typeof components === "object" ) {

                const { type, name, desc } = components;
                options.components.add( type, name, desc );

            }

        }
    }

    return options;

}

export default class FlowElement extends HTMLElement {

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

        this.shadowRoot.adoptedStyleSheets = [ flowSheet, holderSheet ];

    }

    connectedCallback() {

        this.canvas = new Canvas();

        this.shadowRoot.append( this.canvas.dom );

        FlowElement.onDrop = this.canvas.onDrop.bind( this.canvas );

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

                const { className, path } = this.options.components.get( "element", elementSettings.type )

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
