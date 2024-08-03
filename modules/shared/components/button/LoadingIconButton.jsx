// @ts-check

import IconButton from "@mui/material/IconButton";
import { iconButtonSizes } from "constants/theme";
import React from "react";
import Spinner from "../spinner";

/**
 * @param {import("@mui/material").IconButtonProps & {
 *  loading?: boolean;
 *  spinnerProps?: React.ComponentProps<typeof Spinner>;
 * }} props
 */
export default function LoadingIconButton({
	children,
	size = "medium",
	loading = false,
	spinnerProps = {},
	...props
}) {
	// Button sizes are actually font sizes so -4 is the right adjustment for an equal font size as per my observation.
	const spinnerSize = iconButtonSizes[size] - 4;

	return (
		<IconButton type="button" disabled={loading} {...props}>
			{loading ? (
				<Spinner color="inherit" size={spinnerSize} {...spinnerProps} />
			) : (
				children
			)}
		</IconButton>
	);
}
