import CodeHeader from "./CodeHeader";
import themeLoader from "./themes/themeLoader";
import "@servicenow/now-button";
import { COPY_CLICKED } from "./actions";

export default (state, { dispatch }) => {
	const { properties } = state;
	return (
		<div className="code-block">
			{themeLoader(properties.theme)}
			<now-button class={{ "is-disabled": properties.copyDisabled, "copy-button": true }} label={state.copyLabel} variant="secondary" size="sm" icon="documents-outline" tooltipContent="Copy the code to clipboard" on-click={() => { dispatch(COPY_CLICKED) }}></now-button>
			<CodeHeader label={properties.label} showControls={properties.showWindowControls} />

			<pre class={{ "line-numbers": properties.lineNumbers }} data-line={properties.highlightLines}>

				<code className={`language-${properties.language}`}></code>
			</pre>
			<slot></slot>
		</div>
	);
};
