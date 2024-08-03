import KeyboardDoubleArrowLeftRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftRounded";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Stack from "@mui/material/Stack";
import { useIsLaptop } from "modules/shared/shared.hooks";
import Link from "next/link";
import LogoIcon from "../../icons/LogoIcon";
import { SidebarItem, useContextualizedSidebarItems } from "./components";
import { sidebarWidth } from "./sidebar.config";

/**
 * A standalone sidebar component that can be used in any layout.
 *
 *  @param { import("@mui/material").DrawerProps } props
 */
export function Sidebar({ onClose, children, PaperProps = {}, ...props }) {
  const isLaptop = useIsLaptop();

  // 1. Get the sidebarItems
  const { sidebarItems, secondarySidebarItems } = useContextualizedSidebarItems(
    {}
  );

  // 2. Render the sidebar
  return (
    <>
      <Drawer
        onClose={onClose}
        PaperProps={{
          sx: {
            ...PaperProps.sx,
            borderRight: 0,
          },
        }}
        {...props}
      >
        <Stack
          role="presentation"
          overflow="auto"
          paddingY={3}
          height="100svh"
          maxHeight="100vh"
          width="100vw"
          maxWidth={sidebarWidth}
          spacing={3}
          justifyContent="space-between"
        >
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 2,
            }}
          >
            <Link href="/" title="Home">
              <LogoIcon />
            </Link>
          </Box>

          {/* Any custom children: Pass only when anonymous user  */}
          {children ? (
            <Box sx={{ flexGrow: 1, padding: 3 }}>{children}</Box>
          ) : null}

          {/* Sidebar Items */}
          {sidebarItems.length > 0 && (
            <List disablePadding sx={{ flexGrow: 1 }}>
              {sidebarItems.map((item, index) => (
                <SidebarItem key={index} {...item} />
              ))}
            </List>
          )}
          {/* Secondary Sidebar Items */}
          <List disablePadding>
            <Divider
              component="li"
              variant="middle"
              sx={{ marginX: 3, marginBottom: 3 }}
            />
            {secondarySidebarItems.map((item, index) => (
              <SidebarItem
                key={index}
                {...item}
                secondaryAction={
                  // For the last secondary item, have a close button that closes the sidebar.
                  // Only on smaller screens though, cuz that's when the sidebar is temporary and can be closed.
                  isLaptop ||
                  (index == secondarySidebarItems.length - 1 && (
                    <IconButton color="secondary" onClick={onClose}>
                      <KeyboardDoubleArrowLeftRoundedIcon
                        sx={{ color: "primary.contrastText" }}
                      />
                    </IconButton>
                  ))
                }
              />
            ))}
          </List>
        </Stack>
      </Drawer>
    </>
  );
}
