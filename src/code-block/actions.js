import Prism from "prismjs";
import {
	actionTypes
} from "@servicenow/ui-core";
import copy from "copy-to-clipboard";

export const COPY_CLICKED = "COPY_CLICKED";
export const COPY_LABEL_RESETTED = "COPY_LABEL_RESETTED";

export default {
	actionHandlers: {
		/**
		 * Initialize PrismJS highlighting when the component is bootstrapped. It's copying the content
		 * from the hosting element into the code element placed inside of the shadowDOM
		 *
		 */
		[actionTypes.COMPONENT_BOOTSTRAPPED]: (coeffects) => {
			const {
				host,
				state
			} = coeffects;

			//strip the lead/end newlines so the line numbers are displayed correctly
			host.shadowRoot.querySelector("code").innerHTML = host.innerHTML.replace(/^\s+|\s+$/g, '');
			import(`prismjs/components/prism-${state.properties.language}`).finally(
				() => {
					Prism.highlightElement(host.shadowRoot.querySelector("code"));
				}
			)
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
		}
	}
}
