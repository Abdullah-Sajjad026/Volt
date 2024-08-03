import { AlertTitle } from "@mui/material";
import { PageLevelAlert } from "../page-level-alert/page-level-alert.component";

/** @param { Omit<React.ComponentProps<typeof PageLevelAlert>, "severity">> } props */
export function MaintenanceBanner({ children, ...props }) {
	return (
		<PageLevelAlert {...props} severity="info">
			<AlertTitle>*Maintenance Notice*</AlertTitle>
			{children}
		</PageLevelAlert>
	);
}
