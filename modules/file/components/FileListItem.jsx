import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import FileExtensionAvatar from "./FileExtensionAvatar";
import useFile from "../file.hook";

/**
 * @param {import('@mui/material').ListItemProps & {
 *  file: string | File
 *  primaryTypographyProps?: import('@mui/material').TypographyProps
 * }} props
 */
export default function FileListItem({
	file,
	primaryTypographyProps = {},
	...props
}) {
	const { src, fileName, fileExtension } = useFile(file);

	return (
		<ListItem {...props}>
			<ListItemAvatar>
				<FileExtensionAvatar {...{ src, fileExtension }} />
			</ListItemAvatar>
			<ListItemText
				primary={fileName}
				primaryTypographyProps={{
					...primaryTypographyProps,
					noWrap: primaryTypographyProps.noWrap ?? true,
					maxWidth: primaryTypographyProps.maxWidth ?? "7.5rem",
				}}
			/>
		</ListItem>
	);
}
