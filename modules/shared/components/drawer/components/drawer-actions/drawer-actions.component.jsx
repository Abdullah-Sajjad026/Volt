// @ts-check

import { CardActions } from "@mui/material";
import {
  drawerContentPaddingX,
  drawerContentPaddingY,
} from "constants/theme/drawer";

/** @param { import("@mui/material").CardActionsProps } props */
export function DrawerActions(props) {
  return (
    <CardActions
      {...props}
      sx={{
        ...props?.sx,
        borderTop: 1,
        borderColor: "divider",
        paddingX: drawerContentPaddingX,
        paddingY: drawerContentPaddingY,
      }}
    />
  );
}
