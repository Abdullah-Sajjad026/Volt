/**
 * @param {React.ComponentPropsWithoutRef<'svg'> & {
 *  fileExtension: string;
 *  textProps: React.ComponentPropsWithoutRef<'span'>;
 * }} props
 */
export default function FileExtensionIcon({
	textProps = {},
	fileExtension,
	...props
}) {
	const extension =
		fileExtension.length > 4 ? fileExtension.slice(0, 4) : fileExtension;

	const { color, background } = {
		pdf: { color: "white", background: "red" },
		doc: { color: "white", background: "blue" },
		docx: { color: "white", background: "blue" },
		xls: { color: "white", background: "green" },
		xlsx: { color: "white", background: "green" },
		ppt: { color: "white", background: "orange" },
		pptx: { color: "white", background: "orange" },
		csv: { color: "white", background: "green" },
		zip: { color: "white", background: "red" },
		rar: { color: "white", background: "red" },
		jpg: { color: "white", background: "purple" },
		jpeg: { color: "white", background: "purple" },
		png: { color: "white", background: "purple" },
	}[extension] || { color: "white", background: "black" };

	return (
		<span className="relative">
			<svg
				{...props}
				width="37"
				height="36"
				fill="none"
				viewBox="0 0 37 36"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g id="FileTypeIcon">
					<g id="Page">
						<path
							id="Page background"
							d="M32.1 35.25H11.3C9.50508 35.25 8.05 33.7949 8.05 32V4C8.05 2.20507 9.50507 0.75 11.3 0.75H25.3C25.3892 0.75 25.4748 0.785442 25.5379 0.848528L35.2515 10.5621C35.3146 10.6252 35.35 10.7108 35.35 10.8V32C35.35 33.7949 33.8949 35.25 32.1 35.25Z"
							fill="white"
							stroke="#D0D5DD"
							strokeWidth="1.5"
						/>
						<path
							id="Earmark"
							d="M25.3 0.450001V6.8C25.3 9.00914 27.0909 10.8 29.3 10.8H35.65"
							stroke="#D0D5DD"
							strokeWidth="1.5"
						/>
					</g>
				</g>
			</svg>
			<span
				{...textProps}
				style={{
					...textProps.style,
					color,
					background,
					fontSize: "10px",
					borderRadius: "4px",
				}}
				className="absolute bottom-1 left-0 px-1 font-medium"
			>
				{extension.toUpperCase()}
			</span>
		</span>
	);
}
