import CodeHeader from "./CodeHeader";
import themeLoader from "./themes/themeLoader";

export default (state) => {
	const { properties } = state;
	return (
		<div>
			{themeLoader(properties.theme)}
			<pre className="line-numbers">
				<CodeHeader label={properties.label} />

				<code className={`language-${properties.language}  code-block`}></code>
			</pre>
			<slot></slot>
		</div>
	);
};
