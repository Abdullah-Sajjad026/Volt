/**
 * @typedef { Object } ExpandableUserItemProps
 * @property { import("modules/user/models").User } user
 * @property { import("@mui/material").ListItemButtonProps } buttonProps
 */

import { AccountCircleOutlined, UnfoldMore } from "@mui/icons-material";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { SignOutIcon } from "components/icons";
import { sharedRoutes, useMenu } from "modules/shared";
import { useSignOut } from "modules/user/hooks";
import { userTypeAdmin, userTypeBrand } from "modules/user/user.config";
import Link from "next/link";

/**
 * An expandable user item that can be expanded to have further options regarding the user.
 *
 * @param { import("@mui/material").ListItemProps & ExpandableUserItemProps } props
 */
export function ExpandableUserItem({
  user,
  buttonProps,
  secondaryAction,
  ...props
}) {
  const { email, full_name, profile_photo, role } = user;
  const { menuProps, controlProps } = useMenu();
  const signOut = useSignOut();

  return (
    <>
      <ListItem
        disablePadding
        secondaryAction={
          <ListItemSecondaryAction>
            {secondaryAction}
            <UnfoldMore fontSize="small" />
          </ListItemSecondaryAction>
        }
        {...props}
      >
        <ListItemButton {...controlProps} {...buttonProps}>
          <ListItemAvatar>
            <Avatar
              alt={`Profile picture of ${full_name}`}
              src={profile_photo}
              sx={{ width: 32, height: 32 }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={full_name}
            primaryTypographyProps={{ noWrap: true }}
            secondary={email}
            secondaryTypographyProps={{ noWrap: true }}
          />
        </ListItemButton>
      </ListItem>
      <Menu
        {...menuProps}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        {role == userTypeAdmin || (
          <Link
            passHref
            href={
              role === userTypeBrand
                ? sharedRoutes.userSettings.account.path
                : sharedRoutes.userSettings.companyProfile.path
            }
          >
            <MenuItem>
              <ListItemIcon>
                <AccountCircleOutlined />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </MenuItem>
          </Link>
        )}
        <MenuItem onClick={signOut}>
          <ListItemIcon>
            <SignOutIcon />
          </ListItemIcon>
          <ListItemText primary="Sign out" />
        </MenuItem>
      </Menu>
    </>
  );
}
