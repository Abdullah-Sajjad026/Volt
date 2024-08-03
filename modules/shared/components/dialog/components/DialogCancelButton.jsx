// @ts-check

import Button from "@mui/material/Button";
import React from "react";

/**
 * @param { Omit<import("@mui/material").ButtonProps, 'onClick'> & {
 * 	onClick: import("@mui/material").DialogProps['onClose']
 * }> } props
 */
export default function DialogCancelButton({
  sx = {},
  size = "large",
  type = "button",
  color = "secondary",
  variant = "outlined",
  ...props
}) {
  return (
    <Button
      {...props}
      {...{ size, type, color, variant }}
      sx={{
        ...sx,
        minWidth: "fit-content",
        flex: {
          xs: 1,
          sm: 0,
        },
      }}
    />
  );
}
