import Prism from "prismjs";
import {
	actionTypes
} from "@servicenow/ui-core";
import copy from "copy-to-clipboard";

export const COPY_CLICKED = "COPY_CLICKED";
export const COPY_LABEL_RESETTED = "COPY_LABEL_RESETTED";
export const HIGHLIGHT_NEEDED = "HIGHLIGHT_NEEDED";


export default {
	actionHandlers: {
		[actionTypes.COMPONENT_RENDERED]: ({ dispatch }) => {
			dispatch(HIGHLIGHT_NEEDED);
		},
		/**
		 * Initialize PrismJS highlighting when needed. It's 
		 * copying the content from the hosting element into 
		 * the code element placed inside of the shadowDOM
		 *
		 */
		[HIGHLIGHT_NEEDED]: (coeffects) => {
			const {
				host,
				state
			} = coeffects;
			const prismHighlightElement = () => {
				Prism.highlightElement(host.shadowRoot.querySelector("code"));
			};
			//strip the lead/end newlines so the line numbers are displayed correctly
			host.shadowRoot.querySelector("code").innerHTML = host.innerHTML.replace(/^\s+|\s+$/g, '');
			import(`prismjs/components/prism-${state.properties.language}`).then(
				prismHighlightElement, prismHighlightElement
			);
		},
		/**
		 * Action handler for copy button. It reads the content of the code and copies 
		 * it to clipboard
		 */
		[COPY_CLICKED]: (coeffects) => {
			const {
				host,
				updateState,
				dispatch
			} = coeffects;
			copy(host.shadowRoot.querySelector('code').textContent);
			updateState({
				copyLabel: "Copied!"
			})
			clearTimeout(host.timeout);
			host.timeout = setTimeout(() => {
				dispatch(COPY_LABEL_RESETTED)
			}, 1000);

		},
		[COPY_LABEL_RESETTED]: ({
			updateState,
			host
		}) => {
			updateState({
				copyLabel: "Copy"
			});
		},
		/**
		 * Setup a mutation observer on text nodes to detect 
		 * changes within the code and invoke reapplying of
		 * syntax highlighting
		 *
		 */
		[actionTypes.COMPONENT_BOOTSTRAPPED]: (coeffects) => {
			const { host, dispatch } = coeffects;
			const observer = new MutationObserver(() => {
				dispatch(HIGHLIGHT_NEEDED)
			});
			host.shadowRoot.querySelector('slot').assignedNodes().forEach(node => {
				observer.observe(node, { characterData: true, childList: true });
			})
		},
	}
}
