import DeleteIcon from "modules/shared/icons/DeleteIcon";
import LoadingIconButton from "./LoadingIconButton";

/**
 * @param {React.ComponentProps<typeof LoadingIconButton> & {
 *  iconProps?: React.ComponentProps<typeof DeleteIcon>
 * }} props
 */
export default function DeleteIconButton({ iconProps, ...props }) {
  return (
    <LoadingIconButton color="error" {...props}>
      <DeleteIcon {...iconProps} />
    </LoadingIconButton>
  );
}
