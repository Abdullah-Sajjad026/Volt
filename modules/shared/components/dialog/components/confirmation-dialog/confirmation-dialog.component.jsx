import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogCancelButton from "../DialogCancelButton";
import DialogCloseButton from "../DialogCloseButton";

/**
 * @typedef { Object } ConfirmationDialogProps
 * @property { string } message - The message to display in the dialog
 * @property { string } title - The title of the dialog
 * @property { React.ReactElement } [actionButton] - The action button to display in the dialog
 */

/**
 * @param { import("@mui/material").ButtonProps & ConfirmationDialogProps } props
 */
export function ConfirmationDialog({
	actionButton,
	message,
	onClose,
	title,
	maxWidth = "sm",
	...props
}) {
	return (
		<Dialog {...props} {...{ onClose, maxWidth, fullWidth: true }}>
			<DialogTitle>{title}</DialogTitle>
			<DialogCloseButton type="button" onClick={onClose} />
			<DialogContent>{message}</DialogContent>
			<DialogActions>
				<DialogCancelButton type="button" onClick={onClose}>
					Cancel
				</DialogCancelButton>
				{actionButton}
			</DialogActions>
		</Dialog>
	);
}
