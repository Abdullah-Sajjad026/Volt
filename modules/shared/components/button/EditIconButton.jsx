import EditIcon from "modules/shared/icons/EditIcon";
import Link from "next/link";
import LoadingIconButton from "./LoadingIconButton";

/**
 * @param {React.ComponentProps<typeof LoadingIconButton> & {
 *  iconProps?: React.ComponentProps<typeof EditIcon>
 * }} props
 */
export default function EditIconButton({ iconProps, href, ...props }) {
	const Wrapper = href ? Link : React.Fragment;
	return (
		<LoadingIconButton color="secondary" {...props}>
			<Wrapper href={href}>
				<EditIcon {...iconProps} />
			</Wrapper>
		</LoadingIconButton>
	);
}
