// @ts-check

import { CardHeader, IconButton } from "@mui/material";
import { drawerContentPaddingX } from "constants/theme/drawer";
import { CloseIcon } from "modules/shared/icons";

/**
 * @param { import("@mui/material").CardHeaderProps & {
 *  onClose: () => void;
 *  disableClose?: boolean;
 * } } props
 */
export function DrawerHeader({ disableClose, onClose, ...props }) {
  return (
    <CardHeader
      {...props}
      subheader={
        <>
          {props?.subheader}
          {disableClose ||
            (onClose && (
              <IconButton onClick={onClose}>
                <CloseIcon />
              </IconButton>
            ))}
        </>
      }
      sx={{
        ...props?.sx,
        borderBottom: 1,
        borderColor: "divider",
        paddingX: drawerContentPaddingX,
        ".MuiCardHeader-content": {
          gap: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        },
      }}
    />
  );
}
