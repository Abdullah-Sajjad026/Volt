import { Badge } from "@mui/material";

export function SidebarBadge({ sx = {}, ...props }) {
	return (
		<Badge color="error" position="relative" sx={{ ...sx, ml: 1 }} {...props} />
	);
}
