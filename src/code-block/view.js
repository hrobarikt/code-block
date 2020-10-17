import CodeHeader from "./CodeHeader";
import themeLoader from "./themes/themeLoader";

export default (state) => {
	const { properties } = state;
	return (
		<div>
			{themeLoader(properties.theme)}
			<pre class={{ "line-numbers": properties.lineNumbers }}>
				<CodeHeader label={properties.label} />

				<code className={`language-${properties.language}  code-block`}></code>
			</pre>
			<slot></slot>
		</div>
	);
};
