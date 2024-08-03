import Stack from "@mui/material/Stack";
import { buttonGroupSpacing } from "constants/theme/button";

/**
 * @param { import("@mui/material").StackProps } props
 */
export function ButtonGroup(props) {
  return <Stack direction="row" spacing={buttonGroupSpacing} {...props} />;
}
