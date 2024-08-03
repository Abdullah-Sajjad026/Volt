import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "constants/theme";
import {
  Sidebar,
  sidebarWidth,
  Topbar,
  topbarHeight,
} from "modules/shared/components";
import { useIsLaptop } from "modules/shared/shared.hooks";
import { useState } from "react";
import { rootLayoutId } from "./root.config";

function RenderBars({ sidebarChildren }) {
  const isLaptop = useIsLaptop();

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const topbar = (
    <Topbar
      position="fixed"
      enableColorOnDark
      openSidebar={() => setSidebarOpen(true)}
      sx={{
        height: topbarHeight,
        left: { md: `${sidebarWidth}px` },
        width: { md: `calc(100% - ${sidebarWidth}px)` },
        backgroundColor: "background.paper",
      }}
    />
  );

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Sidebar
          onClose={() => setSidebarOpen(false)}
          open={isLaptop ? true : isSidebarOpen}
          variant={isLaptop ? "permanent" : "temporary"}
        >
          {sidebarChildren ? sidebarChildren : null}
        </Sidebar>
        {!isLaptop && topbar}
      </ThemeProvider>
      {isLaptop && topbar}
    </>
  );
}

/**
 * The very root layout of the application.
 * Contains the sidebar, the topbar, and the main content.
 *
 * @param { import("@mui/material").BoxProps } props
 * @param { React.ReactNode } props.sidebarChildren
 */
export function RootLayout({ sx = {}, sidebarChildren, ...props }) {
  return (
    <>
      <RenderBars sidebarChildren={sidebarChildren} />
      <Box
        id={rootLayoutId}
        marginTop={`${topbarHeight}px`}
        marginLeft={{ md: `${sidebarWidth}px` }}
        height={`calc(100svh - ${topbarHeight}px)`}
        maxHeight={`calc(100vh - ${topbarHeight}px)`}
        sx={{
          ...sx,
          overflowY: "auto",
        }}
        {...props}
      />
    </>
  );
}
