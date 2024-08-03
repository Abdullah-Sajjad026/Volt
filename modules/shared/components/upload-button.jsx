import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import Button from "@mui/material/Button";

/**
 * @param {import("@mui/material").ButtonProps} props
 */
export default function UploadButton({
	variant = "outlined",
	startIcon = <FileUploadOutlinedIcon />,
	...props
}) {
	return (
		<Button
			{...props}
			{...{
				variant,
				startIcon,
			}}
		/>
	);
}
