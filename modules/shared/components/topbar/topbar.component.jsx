import { Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import { rootLayoutPaddingX, useIsLaptop } from "modules/shared";
import { HamburgerIconButton } from "modules/shared/components/button";
import { useUserContext } from "modules/user";
import Link from "next/link";
import LogoIcon from "../../icons/LogoIcon";
import { UserProfileMenu } from "./components";

/**
 * @param { import('@mui/material').AppBarProps & { openSidebar: Function } } props
 */
export function Topbar({ sx = {}, openSidebar, ...props }) {
	const isLaptop = useIsLaptop();
	const { user } = useUserContext();

	return (
		<AppBar
			sx={{
				...sx,
				boxShadow: 0,
				borderBottom: "1px solid",
				borderColor: "divider",
			}}
			{...props}
		>
			<Toolbar
				sx={{
					minHeight: "100% !important",
					paddingX: rootLayoutPaddingX,
					display: "flex",
					alignItems: "center",
					gap: 2,
					position: "relative",
				}}
			>
				{isLaptop || (
					<Stack direction="row" spacing={1} paddingLeft={{ xs: 0.5, sm: 0 }}>
						<HamburgerIconButton
							edge="start"
							aria-label="menu"
							onClick={openSidebar}
							iconProps={{
								sx: {
									color: "primary.contrastText",
								},
							}}
						/>
						<Link href="/">
							<LogoIcon sx={{ width: 30, height: 30 }} />
						</Link>
					</Stack>
				)}
				{user.id ? (
					<Box sx={{ marginLeft: "auto" }}>
						<UserProfileMenu />
					</Box>
				) : null}
			</Toolbar>
		</AppBar>
	);
}
