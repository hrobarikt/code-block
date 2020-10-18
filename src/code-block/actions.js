import Prism from "prismjs";
import {
	actionTypes
} from "@servicenow/ui-core";

export default {
	actionHandlers: {
		/**
		 * Initialize PrismJS highlighting when the component is bootstrapped. It's copying the content
		 * from the hosting element into the code element placed inside of the shadowDOM
		 *
		 */
		[actionTypes.COMPONENT_BOOTSTRAPPED]: (coeffects) => {
			const {
				host
			} = coeffects;
			host.shadowRoot.querySelector("code").innerHTML = host.innerHTML;
			Prism.highlightElement(host.shadowRoot.querySelector("code"));
		}
	}
}
