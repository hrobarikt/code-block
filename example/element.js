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


<code-block language="html" theme="synthwave84" copy-disabled="true">
&lt;template&gt;
&lt;body&gt;&lt;/body&gt;
&lt;script&gt;&lt;/script&gt;
	&lt;a&gt;Some hyperlink&lt;/a&gt;
	&lt;p&gt;lorem ipsum&lt;/p&gt;
&lt;/template&gt;
</code-block>

<code-block language="javascript" theme="synthwave84" line-numbers="true">
console
</code-block>


<code-block language="jsx" theme="synthwave84" line-numbers="true" show-header>
render() {
	return &lt;h2>Fancy heading&lt;/h2>
}
</code-block>


`;
