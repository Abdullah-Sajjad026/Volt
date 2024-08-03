import shape from "./shape";

// =============================================================================
// Drawer content
// =============================================================================

// spacingX
export const drawerContentSpacingX = {
	xs: 2,
	sm: 3,
};
export const drawerContentSpacingXPx = {
	xs: `${shape.spacing * drawerContentSpacingX.xs}px`,
	sm: `${shape.spacing * drawerContentSpacingX.sm}px`,
};

// spacingY
export const drawerContentSpacingY = { xs: 2 };
export const drawerContentSpacingYPx = {
	xs: `${shape.spacing * drawerContentSpacingY.xs}px`,
};

// spacing
export const drawerContentSpacing = {
	xs: `${drawerContentSpacingXPx.xs} ${drawerContentSpacingYPx.xs}`,
	sm: `${drawerContentSpacingXPx.sm} ${drawerContentSpacingYPx.sm}`,
};

// paddingX
export const drawerContentPaddingX = drawerContentSpacingX;
export const drawerContentPaddingXPx = drawerContentSpacingXPx;

// paddingY
export const drawerContentPaddingY = drawerContentSpacingY;
export const drawerContentPaddingYPx = drawerContentSpacingYPx;

// padding
export const drawerContentPadding = drawerContentSpacing;

/**
 * @param { import("@mui/material").PaletteOptions } palette
 * @returns { import("@mui/material").Components<Omit<import("@mui/material").Theme<'components'>> }
 */
const drawer = palette => ({
	MuiDrawer: {},
});

export default drawer;
