import { CloseIcon } from "modules/shared/icons";

import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Popover as MuiPopover,
} from "@mui/material";

/**
 * @param { import("@mui/material").PopoverProps & {
 *  disableClose?: boolean,
 *  cardProps?: import("@mui/material").CardProps
 * } }
 */
export function Popover({
  onClose,
  children,
  cardProps = {},
  disableClose = false,
  ...props
}) {
  return (
    <MuiPopover {...props} onClose={onClose}>
      <Card {...cardProps}>{children}</Card>
      {disableClose || (
        <IconButton
          color="secondary"
          onClick={onClose}
          sx={{ position: "absolute", top: 12, right: 12 }}
        >
          <CloseIcon />
        </IconButton>
      )}
    </MuiPopover>
  );
}

export const PopoverHeader = CardHeader;
export const PopoverContent = CardContent;
export const PopoverActions = CardActions;
