// @ts-check

import { Drawer as MuiDrawer } from "@mui/material";
import React from "react";

/** @param { import("@mui/material").DrawerProps } props */
export function Drawer(props) {
  return (
    <MuiDrawer
      {...props}
      PaperProps={{
        ...props?.PaperProps,
        sx: {
          ...props?.PaperProps?.sx,
          width: "100vw",
          display: "flex",
          flexDirection: "column",
        },
      }}
    />
  );
}
