import shape from "./shape";
import tailwindTheme, {
	border,
	borderDark,
	borderRadius,
	boxShadow,
	padding,
} from "./tailwindTheme";
import typography, { fontSize } from "./typography";

// List
export const listPadding = 1.5;
export const listPaddingPx = `${shape.padding * listPadding}px`;

// ListItem
export const listItemBorder = borderDark;
export const listItemMargin = `${shape.margin}px`;
export const listItemSpacing = `${shape.gap * 2}px`;

// v2
export const compactListItemSpacing = 1;
export const compactListItemSpacingPx = `${
	shape.gap * compactListItemSpacing
}px`;

// Border Radii
export const listItemBorderRadius = 1;
export const listItemBorderRadiusPx = `${
	shape.borderRadius * listItemBorderRadius
}px`;

// Max Height
export const smallMenuMaxHeight = 240;
export const mediumMenuMaxHeight = 360;
export const largeMenuMaxHeight = 540;

// ListItemIcon
export const listItemIconSize = "20px";

// ListItemAction
export const listItemActionSpacing = `${shape.gap}px`;

/**
 * @param { import("@mui/material").PaletteOptions } palette
 * @returns { import("@mui/material").Components<Omit<import("@mui/material").Theme<'components'>>['MuiListItem'] }
 */
const listItem = palette => ({
	styleOverrides: {
		root: {
			gap: listItemSpacing,

			".MuiListItemSecondaryAction-root": {
				color: palette.text.primary,
				backgroundColor: "transparent",
			},
		},
	},
});

/**
 * @param { import("@mui/material").PaletteOptions } palette
 * @returns { import("@mui/material").Components<Omit<import("@mui/material").Theme<'components'>> }
 */
const list = palette => ({
	MuiList: {
		styleOverrides: {
			root: {
				margin: 0,
				overflow: "visible",

				// Contained list.
				// A variant where each list item is contained within a single container.
				"&.contained": {
					border,
					boxShadow,
					borderRadius,
					overflow: "hidden",
					backgroundColor: tailwindTheme.colors.white,

					// Primary text
					".MuiListItemText-primary": {
						fontSize,
					},
				},
				// Distinct list.
				// A variant where each list item is distinct from the next, with a gap between each item.
				"&.distinct": {
					".MuiListItem-root": {
						padding: 0,
						borderRadius,
						backgroundColor: tailwindTheme.colors.white,

						"&.MuiListItem-padding": {
							boxShadow,
							border: listItemBorder,
							// If the ListItem does not contain a ListItemButton, add padding
							"&:not(:has(> .MuiListItemButton-root))": {
								padding,
							},
						},

						"&.MuiListItem-gutters:not(:last-child)": {
							marginBottom: listItemMargin,
						},
					},
					".MuiListItemButton-root": {
						padding,
						boxShadow,
						borderRadius,
						border: listItemBorder,
					},
					".MuiAvatar-root, .MuiIconButton-root": {
						border,
					},
				},

				// Distinct list with grid layout.
				"&.distinct.grid": {
					display: "grid",
					gap: listItemSpacing,
					alignSelf: "stretch",
					gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",

					".MuiListItem-root": {
						marginBottom: "0",
					},
				},
			},
		},
	},
	MuiMenuItem: {
		defaultProps: {
			sx: {
				fontSize,
				"&.Mui-selected": {
					".MuiListItemText-primary": {
						color: "var(--color-blue-500)",
					},
				},
			},
		},
	},
	MuiListItem: listItem(palette),
	MuiListItemButton: listItem(palette),
	MuiListItemAvatar: {
		styleOverrides: {
			root: {
				minWidth: "auto",
			},
		},
	},
	MuiListItemIcon: {
		styleOverrides: {
			root: {
				color: "currentColor",
				minWidth: "24px",

				"& > svg": {
					width: listItemIconSize,
					height: listItemIconSize,
				},
			},
		},
	},
	MuiListItemText: {
		styleOverrides: {
			root: {
				overflow: "hidden",
			},
			primary: {
				...typography(palette).h3,
			},
			secondary: {
				...typography(palette).subtitle1,
				color: palette.text.secondary,
			},
		},
	},
});

export default list;
