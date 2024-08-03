import { fontSize } from "./typography";
import { borderRadius } from "./tailwindTheme";
import shape from "./shape";

export const buttonGroupSpacing = 1.5;

export const iconButtonSizes = {
	small: 16,
	medium: 20,
	large: 24,
};

// v2
// =============================================================================
// Icon Button
// =============================================================================
// fontSize
export const smallIconButtonFontSize = 16;
export const mediumIconButtonFontSize = 20;
export const largeIconButtonFontSize = 24;

// =============================================================================
// Button
// =============================================================================
// fontSize
export const smallButtonFontSize = 12;
export const mediumButtonFontSize = 14;
export const largeButtonFontSize = 14;

/**
 * @param { import("@mui/material").PaletteOptions } palette
 * @returns { import("@mui/material").Components<Omit<import("@mui/material").Theme<'components'>> }
 */
const button = palette => ({
	MuiIconButton: {
		variants: [
			{
				props: {
					variant: "outlined",
				},
				style: {
					border: `1px solid ${palette.divider}`,
				},
			},
		],
		styleOverrides: {
			sizeSmall: {
				"& > svg": {
					fontSize: iconButtonSizes.small,
				},
			},
			sizeMedium: {
				"& > svg": {
					fontSize: iconButtonSizes.medium,
				},
			},
			sizeLarge: {
				"& > svg": {
					fontSize: iconButtonSizes.large,
				},
			},
			root: {
				"& > svg": {
					fontSize: iconButtonSizes.medium,
				},
			},
		},
	},
	MuiButton: {
		styleOverrides: {
			root: {
				fontSize,
				fontWeight: 500,
				boxShadow: "none",
				textTransform: "capitalize",
				borderRadius: shape.borderRadius,
			},
			// Text button
			text: {
				minWidth: 0,
				padding: "0 !important",
				justifyContent: "flex-start",
			},
			textSizeSmall: {
				fontSize: "12px",
			},
			/* Sizes */
			// Small
			iconSizeSmall: {
				".MuiSvgIcon-root": {
					fontSize: "14px",
				},
			},
			// Medium
			sizeMedium: {
				borderRadius,
				padding: "8px 16px",
			},
			iconSizeMedium: {
				".MuiSvgIcon-root": {
					fontSize: "16px",
				},
			},
			// Large
			sizeLarge: {
				borderRadius,
				padding: `10px 24px`,
			},
			iconSizeLarge: {
				".MuiSvgIcon-root": {
					fontSize: "18px",
				},
			},
			// Button variants
			outlined: {
				backgroundColor: palette.background.paper + "!important",
			},
			// Button colors
			// Primary
			outlinedPrimary: {
				borderColor: palette.primary[100],
				backgroundColor: palette.primary[50] + "!important",
				"&:hover": {
					borderColor: palette.primary[200],
				},
				"&.Mui-disabled": {
					borderColor: palette.primary[50],
				},
			},
			containedPrimary: {
				backgroundColor: palette.primary.main + "!important",
				"&.Mui-disabled": {
					color: palette.background.paper,
					backgroundColor: palette.primary[200] + "!important",
				},
			},
			// Secondary
			outlinedSecondary: {
				borderColor: palette.secondary[200],
				"&:hover": {
					borderColor: palette.secondary[300],
				},
				"&.Mui-disabled": {
					borderColor: palette.secondary[100],
				},
			},
			containedSecondary: {
				backgroundColor: palette.secondary.main + "!important",
				"&.Mui-disabled": {
					color: palette.background.paper,
					backgroundColor: palette.secondary[200] + "!important",
				},
			},
			// Warning
			containedWarning: {
				backgroundColor: palette.warning.main + "!important",
				"&.Mui-disabled": {
					color: palette.background.paper,
					backgroundColor: palette.warning[200] + "!important",
				},
			},
			outlinedWarning: {
				color: palette.warning.dark,
				borderColor: palette.warning[200],
				backgroundColor: palette.background.paper + "!important",
				"&:hover": {
					borderColor: palette.warning[300],
				},
				"&.Mui-disabled": {
					borderColor: palette.warning[100],
				},
			},
			// Error
			containedError: {
				backgroundColor: palette.error.main + "!important",
				"&.Mui-disabled": {
					color: palette.background.paper,
					backgroundColor: palette.error[200] + "!important",
				},
			},
			outlinedError: {
				color: palette.error.dark,
				borderColor: palette.error[200],
				backgroundColor: palette.error[50] + "!important",
				"&:hover": {
					borderColor: palette.error[300],
				},
				"&.Mui-disabled": {
					borderColor: palette.error[100],
				},
			},
			// Success
			containedSuccess: {
				backgroundColor: palette.success.main + "!important",
				"&.Mui-disabled": {
					color: palette.background.paper,
					backgroundColor: palette.success[200] + "!important",
				},
			},
			outlinedSuccess: {
				color: palette.success.dark,
				borderColor: palette.success[200],
				backgroundColor: palette.success[50] + "!important",
				"&:hover": {
					borderColor: palette.success[300],
				},
				"&.Mui-disabled": {
					borderColor: palette.success[100],
				},
			},
			// Info
			containedInfo: {
				backgroundColor: palette.info.main + "!important",
				"&.Mui-disabled": {
					color: palette.background.paper,
					backgroundColor: palette.info[200] + "!important",
				},
			},
			outlinedInfo: {
				color: palette.info.dark,
				borderColor: palette.info[200],
				backgroundColor: palette.info[50] + "!important",
				"&:hover": {
					borderColor: palette.info[300],
				},
				"&.Mui-disabled": {
					borderColor: palette.info[100],
				},
			},
		},
	},
});

export default button;
