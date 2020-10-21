import { createCustomElement } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";
import view from "./view";
import codeblockActions from "./actions";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-highlight/prism-line-highlight";

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
	initialState: {
		/**
		 * Used to determine the label of copy button
		 * @type {string}
		 */
		copyLabel: "Copy"
	},
	properties: {
		/**
		 * Label that will be displayed in the code header. It will also 
		 * automatically display a header
		 * @type {string}
		 */
		label: { schema: { type: "string" } },
		/**
		 * Sets the code language that will be used for syntax highlighting
		 * @type {string}
		 */
		language: {
			default: "javascript",
			schema: {
				type: "string"
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
		},
		/**
		 * If specified, it will also display the line numbers
		 * @type {boolean}
		 */
		lineNumbers: {
			default: false,
			schema: {
				type: "boolean"
			}
		},
		/**
		 * Specify the lines to be highlighted in the code following the simple format:
		 * - A single number refers to the line with that number
		 * - Ranges are denoted by two numbers, separated with a hyphen (-)
		 * - Multiple line numbers or ranges are separated by commas
		 * - Whitespace is allowed anywhere and will be stripped off.
		 * @example
		 * 5: the 5th line
		 * 1-5: lines 1 through 5
		 * 1,4: Line 1 and 4
		 * 1-2, 5, 9-20: Lines 1 through 2, line 5, lines 9 through 20
		 * @type {string}
		 * 		 
		 */
		highlightLines: {
			schema: {
				type: "string"
			}
		},
		/**
		 * When set to true, it will not display the copy to clipboard button
		 * @type {boolean}
		 */
		copyDisabled: {
			default: false,
			schema: {
				type: "boolean"
			}
		},
		/**
		 * When enabled display the macOS like window controls
		 * @type {boolean}
		 */
		showWindowControls: {
			default: false,
			schema: {
				type: "boolean"
			}
		}
	},
	view,
	...codeblockActions,
	styles,
});
