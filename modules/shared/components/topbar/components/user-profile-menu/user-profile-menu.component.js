import {
  ChevronRight,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import {
  Avatar,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { useSignOut } from "modules/auth/hooks";
import {
  ConfirmationDialog,
  DialogSubmitButton,
} from "modules/shared/components/dialog";
import Link from "next/link";
import { useState } from "react";
import { useMenu } from "../../../menu";

export function UserProfileMenu() {
  const menuId = "user-profile-menu";

  const { open, onOpen, onClose } = useMenu(menuId);
  const [logoutConfirmation, setLogoutConfirmation] = useState(false);
  const signOut = useSignOut();

  return (
    <div className="ms-auto h-full">
      <UserProfileItem
        avatar={"A"}
        name={"Username here"}
        onClick={onOpen}
        rightIcon={
          open ? (
            <KeyboardArrowUp color="secondary" fontSize="12" />
          ) : (
            <KeyboardArrowDown color="secondary" fontSize="12" />
          )
        }
      />
      <Menu
        id={menuId}
        keepMounted
        open={open}
        onClose={onClose}
        PaperProps={{
          sx: {
            minWidth: 220,
            overflow: "visible",
            mt: 1.5,
            // Small triangle below the menu
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          disableRipple
          disableTouchRipple
          sx={{
            cursor: "default",
          }}
        >
          <ListItemText
            primary={"User Name"}
            secondary={"Some Secondary Information"}
          />
        </MenuItem>
        <Divider />
        <Link passHref href={"/"}>
          <MenuItem sx={{ justifyContent: "space-between" }}>
            <ListItemText primary="Profile" />
            <ListItemIcon>
              <ChevronRight fontSize="small" />
            </ListItemIcon>
          </MenuItem>
        </Link>
        <Divider />
        <MenuItem
          onClick={() => {
            setLogoutConfirmation(true);
            onClose();
          }}
        >
          <ListItemText
            disableTypography
            primary={
              <Typography variant="subtitle1" color="error">
                Logout
              </Typography>
            }
          />
        </MenuItem>
      </Menu>

      <ConfirmationDialog
        open={logoutConfirmation}
        onClose={() => setLogoutConfirmation(false)}
        title="Logout"
        message="Are you sure you want to logout?"
        actionButton={
          <DialogSubmitButton color="error" onClick={signOut}>
            Logout
          </DialogSubmitButton>
        }
      />
    </div>
  );
}

function UserProfileItem({
  avatar,
  name,
  onClick,
  rightIcon,
  Wrapper = MenuItem,
}) {
  return (
    <Wrapper
      onClick={onClick}
      sx={{
        minWidth: 140,
        height: "100%",
      }}
    >
      <Stack
        direction="row"
        spacing={1}
        width="100%"
        justifyContent={rightIcon ? "space-between" : "flex-start"}
        alignItems="center"
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <Avatar
            src={avatar}
            alt={name}
            variant="circular"
            sx={{ width: 30, height: 30, border: 1, borderColor: "divider" }}
          />
          <Typography variant="body1" color="text.primary">
            {name ? name.substr(0, 10) + (name.length > 10 ? "..." : "") : ""}
          </Typography>
        </Stack>
        {rightIcon}
      </Stack>
    </Wrapper>
  );
}
