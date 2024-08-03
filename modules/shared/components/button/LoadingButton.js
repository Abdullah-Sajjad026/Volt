// @ts-check
import Button from "@mui/material/Button";
import Spinner from "modules/shared/components/spinner";
import React from "react";

/**
 * @param {import("@mui/material").ButtonProps & {
 *  loading?: boolean;
 *  spinnerProps?: React.ComponentProps<typeof Spinner>;
 * }} props
 */
export default function LoadingButton({
  endIcon,
  children,
  type = "button",
  loading = false,
  disabled = false,
  spinnerProps = {},
  ...props
}) {
  return (
    <Button
      {...props}
      type={type}
      disabled={disabled || loading}
      endIcon={
        !loading ? (
          endIcon
        ) : (
          <Spinner
            {...spinnerProps}
            size={spinnerProps.size || 15}
            color={spinnerProps.color || "inherit"}
          />
        )
      }
    >
      {children}
    </Button>
  );
}
