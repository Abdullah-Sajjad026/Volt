// @ts-check

import { MenuItem, TextField } from "@mui/material";
import React from "react";

/**
 * @typedef { Object } SelectWithPlaceholderProps
 * @property { string } placeholder
 */

/**
 * A simple select box with a placeholder item.
 *
 * @param { Omit<import("@mui/material").TextFieldProps, 'placeholder' | 'variant'> & SelectWithPlaceholderProps } props
 */
export function SelectWithPlaceholder({
  label,
  placeholder,
  children,
  ...props
}) {
  return (
    <TextField select {...props}>
      <MenuItem disabled value="">
        <em>{placeholder}</em>
      </MenuItem>
      {children}
    </TextField>
  );
}
