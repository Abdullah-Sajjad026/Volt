export const tabIndicatorHeight = 2;

export const tabPadding = {
	xs: 1,
	md: 2,
	xl: 3,
};
export const tabBorderRadius = 0.5;
export const tabTransitionDuration = "0.25s";

/**
 * @param { import("@mui/material").PaletteOptions } palette
 * @returns { import("@mui/material").Components<Omit<import("@mui/material").Theme<'components'>> }
 */
const tab = palette => ({
	MuiTabs: {
		styleOverrides: {
			flexContainer: ({ theme }) =>
				theme.unstable_sx({
					gap: { xs: 2, sm: 4 },
				}),
			indicator: {
				backgroundColor: palette.primary[400],
			},
		},
	},
	MuiTab: {
		styleOverrides: {
			root: ({ theme }) =>
				theme.unstable_sx({
					padding: tabPadding,
					textTransform: "none",
					borderRadius: tabBorderRadius,
					transition: `all ${tabTransitionDuration} ease-in-out`,

					"&.Mui-selected": {
						backgroundColor: palette.primary[50],
						"&:hover": {
							backgroundColor: palette.primary[100],
						},
					},
				}),
		},
	},
});

export default tab;
