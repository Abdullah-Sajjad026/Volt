import { Alert } from "@mui/material";
import { rootLayoutPaddingX } from "modules/shared/layouts";

/**
 * A top-level alert to be used as a banner on the page.
 * @param { import("@mui/material").AlertProps } props
 */
export function PageLevelAlert({ sx = {}, ...props }) {
  return <Alert {...props} sx={{ ...sx, paddingX: rootLayoutPaddingX }} />;
}
