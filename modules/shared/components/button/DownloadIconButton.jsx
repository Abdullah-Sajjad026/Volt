import DownloadIcon from "modules/shared/icons/DownloadIcon";
import LoadingIconButton from "./LoadingIconButton";

/**
 * @param {React.ComponentProps<typeof LoadingIconButton> & {
 *  iconProps?: React.ComponentProps<typeof DownloadIcon>
 * }} props
 */
export default function DownloadIconButton({ iconProps, ...props }) {
  return (
    <LoadingIconButton color="secondary" {...props}>
      <DownloadIcon {...iconProps} />
    </LoadingIconButton>
  );
}
