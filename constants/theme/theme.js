import { createTheme } from "@mui/material";
import chip from "./chip";
import drawer from "./drawer";
import form from "./form";
import list from "./list";
import pagination from "./pagination";
import palette, { darkPalette } from "./palette";
import shape from "./shape";
import tab from "./tab";
import table from "./table";
import { gap } from "./tailwindTheme";
import typography from "./typography";

export const rowSpacing = 3;
export const rowSpacingPx = `${rowSpacing * shape.spacing}px`;

export const columnSpacing = 2;
export const columnSpacingPx = `${columnSpacing * shape.spacing}px`;

export const buttonSpacing = 1;
export const buttonSpacingPx = `${buttonSpacing * shape.spacing}px`;

export const defaultTransition = "all 0.2s ease-in-out";

export const containerSizeLarge = 1440;
export const containerSizeLargePx = `${containerSizeLarge}px`;

export const borderRadius = "6px";

export const iconButtonSizes = {
	small: 16,
	medium: 20,
	large: 24,
};

export const getTheme = palette =>
	createTheme({
		palette,
		shape,
		spacing: 8,
		components: {
			MuiSwitch: {
				styleOverrides: {
					root: {
						width: 46,
						height: 27,
						padding: 0,
						margin: 8,
					},
					switchBase: {
						padding: 1,
						"&$checked, &$colorPrimary$checked, &$colorSecondary$checked": {
							transform: "translateX(16px)",
							color: "#fff",
							"& + $track": {
								opacity: 1,
								border: "none",
							},
						},
					},
					thumb: {
						width: 24,
						height: 24,
					},
					track: {
						borderRadius: 13,
						border: "1px solid #bdbdbd",
						backgroundColor: "#fafafa",
						opacity: 1,
						transition:
							"background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
					},
				},
			},
			MuiCssBaseline: {
				styleOverrides: {
					html: {
						"b, strong": {
							fontWeight: `500 !important`,
						},
						"&::-webkit-scrollbar, & *::-webkit-scrollbar": {
							width: 8,
							height: 8,
							backgroundColor: palette.primary[50],
						},
						"&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
							border: 0,
							borderRadius: shape.borderRadius,
							backgroundColor: palette.primary.main,
						},
						"&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
							{
								backgroundColor: palette.primary.dark,
							},
						"&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
							{
								backgroundColor: palette.primary.dark,
							},
						"&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
							{
								backgroundColor: palette.primary.dark,
							},
						"&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
							backgroundColor: "transparent",
						},
					},
					body: {
						backgroundColor: palette.background.default,
					},
				},
			},
			MuiSkeleton: {
				variants: [
					{
						props: { variant: "rectangular" },
						style: {
							borderRadius,
						},
					},
				],
			},
			MuiDivider: {
				styleOverrides: {
					root: {
						opacity: 1,
					},
				},
			},
			MuiStack: {
				defaultProps: {
					spacing: gap,
				},
			},
			MuiPaper: {
				styleOverrides: {
					elevation1: {
						boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.04)",
					},
				},
			},
			MuiContainer: {
				styleOverrides: {
					maxWidthLg: {
						maxWidth: `${containerSizeLargePx} !important`,
					},
				},
			},
			MuiAvatar: {
				styleOverrides: {
					root: {
						img: {
							objectFit: "contain",
						},
					},
				},
			},
			MuiPopover: {
				styleOverrides: {
					root: {
						"& .MuiCard-root": {
							boxShadow: "none",
							gap: "24px !important",
						},
					},
				},
			},
			MuiButtonBase: {
				defaultProps: {
					disableRipple: true,
				},
			},
			...typography(palette),
			...form(palette),
			...chip(palette),
			...drawer(palette),
			...list(palette),
			...pagination(palette),
			...tab(palette),
			...table(palette),
		},
		props: {
			MuiTooltip: {
				arrow: true,
			},
		},
	});

export const theme = getTheme(palette);

export const darkTheme = getTheme(darkPalette);
