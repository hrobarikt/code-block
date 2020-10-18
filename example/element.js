import '../src/code-block';

const el = document.createElement('DIV');
document.body.appendChild(el);

el.innerHTML = `		
<code-block label="code-block.js" language="javascript" line-numbers highlight-lines="2,4,10-13">
import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import view from "./view";
import codeblockActions from "./actions";

createCustomElement('code-block', {
	renderer: {
		type: snabbdom
	},
	properties: {
		label: {},
		language: {}
	},
	view,
	...codeblockActions,
	styles
});

</code-block>
`;
