import { createCustomElement } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";
import view from "./view";
import codeblockActions from "./actions";

/**
 * A code-block element that can be used for rendering code snippets inside of the HTML. It is using PrismJS
 * for syntax highlighting.
 *
 * ```jsx
 *
 * <code-block language="javascript" label="demo.js">
 * // simple function
 *	function (name){
 *		console.log('Hello ' + name);
 *  }
 * </code-block>
 * ```
 *
 * @seismicElement code-block
 * @summary A container element that will highlight the syntax for the code provided inside of the element.
 *
 * */
createCustomElement("code-block", {
	renderer: { type: snabbdom },
	properties: {
		/**
		 * Label that will be displayed in the code header.
		 * @type {string}
		 */
		label: { schema: { type: "string" } },
		/**
		 * Sets the code language that will be used for syntax highlighting
		 * @type {("javascript"|"css"|"clike"|"markup"|"html"|"xml"|"svg")}
		 */
		language: {
			default: "javascript",
			schema: {
				type: "string",
				enum: ["javascript", "css", "clike", "markup", "html", "xml", "svg"],
			},
		},
		/**
		 * Specifies a visual theme applied to syntax highlighting
		 * @type {string}
		 */
		theme: {
			default: "prism",
			schema: {
				type: "string",

			}
		}
	},
	view,
	...codeblockActions,
	styles,
});
