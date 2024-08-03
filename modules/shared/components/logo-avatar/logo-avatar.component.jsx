import Avatar from "@mui/material/Avatar";

/**
 * An avatar catered towards logos.
 *
 * @param { import("@mui/material").AvatarProps } props
 */
export function LogoAvatar({ sx = {}, imgProps = {}, ...props }) {
	const { border = 1, padding = 1, borderColor = "divider", ...actualSx } = sx;

	return (
		<Avatar
			{...props}
			sx={{ ...actualSx, ...{ padding, border, borderColor } }}
			imgProps={{ ...imgProps, sx: { ...imgProps.sx, objectFit: "contain" } }}
		/>
	);
}
