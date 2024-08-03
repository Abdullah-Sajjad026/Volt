import MoreOptionsIcon from "modules/shared/icons/MoreOptionsIcon";
import LoadingIconButton from "./LoadingIconButton";

/**
 * @param {React.ComponentProps<typeof LoadingIconButton> & {
 *  iconProps?: React.ComponentProps<typeof MenuIcon>
 * }} props
 */
export default function MenuIconButton({ iconProps, ...props }) {
  return (
    <LoadingIconButton color="secondary" {...props}>
      <MoreOptionsIcon {...iconProps} />
    </LoadingIconButton>
  );
}
