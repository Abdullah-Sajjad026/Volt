import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import { Skeleton } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { defaultTransition } from "constants/theme";
import ArrowRightIcon from "modules/shared/icons/ArrowRightIcon";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

/**
 * @param { import("@mui/material").ListItemProps & import("./models").SidebarItemProps } props
 */
export function SidebarItem({
  badge,
  buttonProps = {},
  children,
  chip,
  icon: Icon,
  label,
  secondaryAction,
  disableChildren = false,
  ...props
}) {
  const router = useRouter();
  const { path, onClick, loading = false } = buttonProps;

  // 1. Check if the item itself is selected
  const isSelfSelected = router.pathname === path;

  // 2. See if it has children
  const hasChildren = children && children.length > 0;

  // 3. See if any of those chilren are selected
  const isChildSelected =
    hasChildren &&
    children.some((child) => router.pathname.includes(child.buttonProps.path));

  // 4. The item is considered selected if it is selected itself or if any of its children are selected
  const isSelected = isSelfSelected || isChildSelected;

  // 5. The children are open by default if the item is selected
  const [open, setOpen] = useState(isSelected);

  // 6. See if children should be visible
  const hasVisibleChildren = hasChildren && !disableChildren;

  // 7. See if we have to render a link or a button.
  // This can be decided by the `onClick` and `hasVisibleChildren` properties.
  // Some items have an onClick function instead of a path, while others have a path.
  // Items with visible children are also not going to be links, as they have to act as controls for the collapsible containing the children.
  const isButton = onClick || hasVisibleChildren;

  // 8. See if it has an icon
  const hasIcon = Boolean(Icon);

  // 9. Prerender the content of the item
  const content = (
    <>
      <ListItemIcon sx={{ color: "primary.contrastText" }}>
        {hasIcon ? (
          <Icon className="text-2xl" />
        ) : (
          <CircleRoundedIcon
            sx={{
              width: "8px !important",
              height: "8px !important",
              transform: "translateX(8px)",
              color: isSelected ? "primary.dark" : "transparent",
            }}
          />
        )}
      </ListItemIcon>
      <ListItemText
        primary={
          <>
            {label}
            {badge}
            {chip}
          </>
        }
      />
    </>
  );

  // 10. Set the button styles
  buttonProps.sx = {
    ...buttonProps.sx,
    paddingX: 3,
    selected: isSelected,
    borderLeft: "2px solid",
    borderColor: isSelected ? "primary.dark" : "transparent",
    opacity: isSelected ? 1 : 0.75,
    ":hover": {
      opacity: 1,
    },
  };

  // 11. Return nothing is the item is hidden
  if (buttonProps.sx?.display == "none") {
    return null;
  }

  // 12. Return skeleton if loading
  if (loading) {
    return <Skeleton height={44} component="li" variant="rectangular" />;
  }

  return (
    <>
      <ListItem
        disablePadding
        secondaryAction={
          <>
            {secondaryAction}
            {/* If the item has visible children, we render an expand/collapse button */}
            {hasVisibleChildren ? (
              <IconButton color="secondary" onClick={() => setOpen(!open)}>
                <ArrowRightIcon
                  sx={{
                    color: "primary.contrastText",
                    transition: defaultTransition,
                    transform: open ? "rotate(-90deg)" : "rotate(90deg)",
                  }}
                />
              </IconButton>
            ) : null}
          </>
        }
        {...props}
      >
        {isButton ? (
          <ListItemButton
            {...buttonProps}
            onClick={onClick || (() => setOpen(!open))}
          >
            {content}
          </ListItemButton>
        ) : (
          <Link passHref href={path ?? "#"}>
            <ListItemButton {...buttonProps}>{content}</ListItemButton>
          </Link>
        )}
      </ListItem>
      {hasVisibleChildren && (
        <Collapse in={open}>
          {children.map((child, index) => (
            <SidebarItem key={index} {...child} />
          ))}
        </Collapse>
      )}
    </>
  );
}
