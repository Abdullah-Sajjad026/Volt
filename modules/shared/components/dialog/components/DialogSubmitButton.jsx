// @ts-check

import React from "react";
import { LoadingButton } from "../../button";

/**
 * @param {React.ComponentProps<typeof LoadingButton>} props
 */
export default function DialogSubmitButton({
  sx = {},
  size = "large",
  type = "submit",
  variant = "contained",
  ...props
}) {
  return (
    <LoadingButton
      {...props}
      {...{ size, type, variant }}
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
