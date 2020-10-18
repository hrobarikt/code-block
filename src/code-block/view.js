import CodeHeader from "./CodeHeader";
import themeLoader from "./themes/themeLoader";

export default (state) => {
	const { properties } = state;
	return (
		<div>
			{themeLoader(properties.theme)}
			<CodeHeader label={properties.label} />
			<pre class={{ "line-numbers": properties.lineNumbers }} data-line={properties.highlightLines}>

				<code className={`language-${properties.language}  code-block`}></code>
			</pre>
			<slot></slot>
		</div>
	);
};
