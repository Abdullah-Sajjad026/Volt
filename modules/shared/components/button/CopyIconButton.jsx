import { CopyIcon } from "modules/shared/icons/";
import LoadingIconButton from "./LoadingIconButton";

/**
 * @param {React.ComponentProps<typeof LoadingIconButton> & {
 *  iconProps?: React.ComponentProps<typeof CopyIcon>
 * }} props
 */
export default function CopyIconButton({ iconProps, ...props }) {
  return (
    <LoadingIconButton color="secondary" {...props}>
      <CopyIcon {...iconProps} />
    </LoadingIconButton>
  );
}
