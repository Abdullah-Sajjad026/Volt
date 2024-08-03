import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import LoadingIconButton from "./LoadingIconButton";

/**
 * @param {React.ComponentProps<typeof LoadingIconButton> & {
 *  iconProps?: React.ComponentProps<typeof MenuIcon>
 * }} props
 */
export default function HamburgerIconButton({ iconProps, ...props }) {
	return (
		<LoadingIconButton color="secondary" {...props}>
			<MenuRoundedIcon {...iconProps} />
		</LoadingIconButton>
	);
}
