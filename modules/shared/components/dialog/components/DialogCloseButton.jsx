// @ts-check

import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import React from "react";

/**
 * @param { Omit<import("@mui/material").IconButtonProps, 'onClick'> & {
 * 	onClick?: import("@mui/material").DialogProps["onClose"]
 * } } props
 */
export default function DialogCloseButton({ sx, type = "button", ...props }) {
  return (
    <IconButton
      {...props}
      type={type}
      aria-label="close"
      sx={{
        ...sx,
        position: "absolute",
        top: 8,
        right: 8,
        color: (theme) => theme.palette.grey[500],
      }}
    >
      <CloseIcon />
    </IconButton>
  );
}
