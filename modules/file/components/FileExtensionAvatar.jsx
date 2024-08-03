import Avatar from "@mui/material/Avatar";
import { FileExtensionIcon } from "modules/shared/icons";
import { IMAGE_EXTENSIONS } from "../file.constants";

/**
 * Renders an avatar that either displays an image or displays a file icon encasing the file extension.
 * @param {import("@mui/material").AvatarProps & {
 *  fileExtension: string
 * }} props
 */
export default function FileExtensionAvatar({
	fileExtension,
	variant = "rounded",
	...props
}) {
	const isImage = IMAGE_EXTENSIONS.includes(fileExtension.toLowerCase());

	if (isImage) {
		return <Avatar {...props} {...{ variant }} />;
	}

	return <FileExtensionIcon {...{ fileExtension }} />;
}
