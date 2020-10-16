import { Fragment } from "@servicenow/ui-renderer-snabbdom";
import CodeHeader from "./CodeHeader";

export default (state) => {
	const { properties } = state;
	return (
		<Fragment>
			<pre>
				<CodeHeader label={properties.label} />
				<code className={`language-${properties.language}  code-block`}></code>
			</pre>
			<slot></slot>
		</Fragment>
	);
};
