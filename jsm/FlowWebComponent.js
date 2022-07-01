import flowSheet from "../css/flow.css" assert { type: "css" };
import { Canvas } from "./core/Canvas.js";

export default class FlowElement extends HTMLElement {

    constructor( options ) {

        super();

        this.options = options;

        this.attachShadow({ mode: "open" });

        const holderSheet = new CSSStyleSheet();
        holderSheet.replace( `
            :host {
                position: absolute;
                width: ${ options.width };
                height: ${ options.height };
            }
        ` );

        this.shadowRoot.adoptedStyleSheets = [ flowSheet, holderSheet ];

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

            let nodeData;

            switch ( nodeSettings.type ) {

                case "object":
                    const { ObjectNode } = await import( "./nodes/ObjectNode.js" );
                    nodeData = new ObjectNode( nodeSettings.params );
                    break;
                case "panel":
                    const { PanelNode } = await import("./nodes/PanelNode.js" );
                    nodeData = new PanelNode( nodeSettings.params );
                    break;
                default:
                    const { Node } = await import("./core/Node.js");
                    nodeData = new Node();
                    break;

            }

            if ( nodeSettings.handle ) nodeSettings.handle.call( nodeData, nodeData );

            console.log(nodeSettings, nodeData);

            for (const element of elements) {

                if ( typeof element !== "object" ) throw new TypeError( `Invalid ${ element } type ${ typeof element }` );

                const { inputs, ...elementSettings } = element;

                let elementData;

                switch ( elementSettings.type ) {

                    case "draggable":
                        const { DraggableElement } = await import( "./elements/DraggableElement.js" );
                        elementData = new DraggableElement(elementSettings.params);
                        break;
                    case "label":
                        const { LabelElement } = await import( "./elements/LabelElement.js" );
                        elementData = new LabelElement(elementSettings.params);
                        break;
                    case "title":
                        const { TitleElement } = await import( "./elements/TitleElement.js" );
                        elementData = new TitleElement(elementSettings.params);
                        break;
                    default:
                        const { Element } = await import( "./core/Element.js" );
                        elementData = new Element(elementSettings.params);
                        break;

                }

                if ( elementSettings.handle ) elementSettings.handle.call( elementData, elementData );

                console.log(elementSettings, elementData);

                for (const input of inputs) {

                    if ( typeof input !== "object" ) throw new TypeError( `Invalid ${ input } type ${ typeof input }` );

                    const inputSettings = input;

                    let inputData;

                    switch ( inputSettings.type ) {

                        case "button":
                            const { ButtonInput } = await import( "./inputs/ButtonInput.js" );
                            inputData = new ButtonInput(inputSettings.params);
                            break;
                        case "color":
                            const { ColorInput } = await import( "./inputs/ColorInput.js" );
                            inputData = new ColorInput(inputSettings.params);
                            break;
                        case "number":
                            const { NumberInput } = await import( "./inputs/NumberInput.js" );
                            inputData = new NumberInput(inputSettings.params);
                            break;
                        case "select":
                            break;
                        case "slider":
                            break;
                        case "string":
                            const { StringInput } = await import( "./inputs/StringInput.js" );
                            inputData = new StringInput(inputSettings.params);
                            break;
                        default:
                            const { Input } = await import( "./core/Input.js" );
                            inputData = new Input(inputSettings.params);
                            break;
                    }

                    if ( inputSettings.handle ) inputSettings.handle.call( inputData, inputData );

                    console.log(inputSettings, inputData);

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
