import shape from "./shape";
import tailwindTheme, { border, padding, transition } from "./tailwindTheme";

/**
 * @param { import("@mui/material").PaletteOptions } palette
 * @returns { import("@mui/material").Components<Omit<import("@mui/material").Theme<'components'>> }
 */
const chip = palette => ({
	MuiChip: {
		variants: [
			// =======================================================================
			// Colors
			// =======================================================================
			/* Primary */
			// Filled
			{
				props: { variant: "filled", color: "primary" },
				style: {
					color: palette.primary[600],
					backgroundColor: palette.primary[50],
				},
			},
			// Outlined
			{
				props: { variant: "outlined", color: "primary" },
				style: {
					color: palette.primary[600],
					backgroundColor: palette.primary[50],
					border: `1px solid ${palette.primary[200]}`,
				},
			},
			/* Secondary */
			// Filled
			{
				props: { variant: "filled", color: "secondary" },
				style: {
					color: palette.secondary[600],
					backgroundColor: palette.secondary[200],
				},
			},
			// Outlined
			{
				props: { variant: "outlined", color: "secondary" },
				style: {
					color: palette.secondary[600],
					backgroundColor: palette.secondary[50],
					border: `1px solid ${palette.secondary[300]}`,
				},
			},
			/* Warning */
			// Filled
			{
				props: { variant: "filled", color: "warning" },
				style: {
					color: palette.warning[600],
					backgroundColor: palette.warning[50],
				},
			},
			// Outlined
			{
				props: { variant: "outlined", color: "warning" },
				style: {
					color: palette.warning[600],
					backgroundColor: palette.warning[50],
					border: `1px solid ${palette.warning[200]}`,
				},
			},
			/* Success */
			// Filled
			{
				props: { variant: "filled", color: "success" },
				style: {
					color: palette.success[600],
					backgroundColor: palette.success[50],
				},
			},
			// Outlined
			{
				props: { variant: "outlined", color: "success" },
				style: {
					color: palette.success[600],
					backgroundColor: palette.success[50],
					border: `1px solid ${palette.success[200]}`,
				},
			},
			/* Error */
			// Filled
			{
				props: { variant: "filled", color: "error" },
				style: {
					color: palette.error[600],
					backgroundColor: palette.error[50],
				},
			},
			// Outlined
			{
				props: { variant: "outlined", color: "error" },
				style: {
					backgroundColor: "#FEF2F2",
					color: palette.secondary[800],
					border: `1px solid ${palette.error[200]}`,

					".MuiChip-icon": {
						color: palette.error[500],
					},
				},
			},
			// =======================================================================
			// Casing
			// =======================================================================
			{
				props: { disableUppercase: true },
				style: {
					letterSpacing: "normal",
					textTransform: "capitalize",
				},
			},
			// Custom variants
			{
				props: { variant: "button" },
				style: {
					border,
					fontWeight: 400,
					textTransform: "capitalize",
					color: palette.primary[600],
					transition: transition("border-color"),
					backgroundColor: palette.primary[50],
					letterSpacing: tailwindTheme.letterSpacing.normal,

					":hover": {
						borderColor: palette.primary[300],
						backgroundColor: palette.primary[50],
					},

					":focus": {
						borderColor: palette.primary[300],
						backgroundColor: palette.primary[50],
					},

					".MuiChip-icon": {
						width: "16px",
						height: "16px",
						marginLeft: "12px",
					},
				},
			},
			{
				props: { variant: "button", color: "secondary" },
				style: {
					color: palette.secondary[600],
					backgroundColor: palette.secondary[50],

					":hover": {
						borderColor: palette.secondary[300],
						backgroundColor: palette.secondary[50],
					},

					":focus": {
						borderColor: palette.secondary[300],
						backgroundColor: palette.secondary[50],
					},
				},
			},
			/* Sizes */
			// Smaller
			{
				props: { size: "smaller" },
				style: {
					height: "20px",
					fontSize: "10px",

					".MuiChip-label": {
						paddingLeft: "6px",
						paddingRight: "6px",
					},
				},
			},
			// Small
			{
				props: { size: "small" },
				style: {
					height: "24px",
					fontSize: "12px",

					".MuiChip-label": {
						paddingLeft: "8px",
						paddingRight: "8px",
					},
				},
			},
			// Large
			{
				props: { size: "large" },
				style: {
					gap: "6px",
					height: "28px",
					fontSize: "14px",
					paddingLeft: "12px",
					paddingRight: "12px",

					".MuiChip-label": {
						padding: 0,
					},

					".MuiChip-icon": {
						margin: 0,
						width: "16px",
						height: "16px",
					},
				},
			},
		],
		styleOverrides: {
			root: {
				fontSize: "12px",
				fontWeight: 500,
				letterSpacing: "1px",
				textTransform: "uppercase",
			},
		},
	},
});

export default chip;
