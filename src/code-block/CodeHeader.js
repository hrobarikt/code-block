/**
 * Simple functional component for rendering the header for code block inspired by [carbon](https://carbon.now.sh/)
 */
export default ({ label, showControls }) => (
	<label className="code-header">
		{showControls ?
			<svg
				attr-class="window-controls"
				xmlns="http://www.w3.org/2000/svg"
				attr-width="54"
				attr-height="14"
				attr-viewBox="0 0 54 14"
			>
				<g
					attr-fill="none"
					attr-fill-rule="evenodd"
					attr-transform="translate(1 1)"
				>
					<circle
						attr-cx="6"
						attr-cy="6"
						attr-r="6"
						attr-fill="#FF5F56"
						attr-stroke="#E0443E"
						attr-stroke-width=".5"
					></circle>
					<circle
						attr-cx="26"
						attr-cy="6"
						attr-r="6"
						attr-fill="#FFBD2E"
						stroke="#DEA123"
						stroke-width=".5"
					></circle>
					<circle
						attr-cx="46"
						attr-cy="6"
						attr-r="6"
						attr-fill="#27C93F"
						attr-stroke="#1AAB29"
						attr-stroke-width=".5"
					></circle>
				</g>
			</svg> : null}
		{label}
	</label>
);
