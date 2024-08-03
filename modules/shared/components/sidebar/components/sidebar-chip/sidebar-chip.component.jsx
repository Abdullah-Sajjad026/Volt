import { Chip } from "@mui/material";

/**
 * @param { import("@mui/material").ChipProps }
 */
export function SidebarChip({ sx = {}, ...props }) {
	return (
		<Chip
			size="smaller"
			color="secondary"
			variant="outlined"
			sx={{ ...sx, ml: 1, backgroundColor: "transparent" }}
			{...props}
		/>
	);
}
