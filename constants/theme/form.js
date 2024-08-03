import typography, { fontSize, fontFamily, lineHeight } from "./typography";
import tailwindTheme, { padding, boxShadow, borderDark } from "./tailwindTheme";
import chip from "./chip";
import shape from "./shape";

export const inputMargin = "12px";

export const inputPadding = 1.5;
export const inputPaddingPx = `${shape.padding * inputPadding}px`;

export const inputBorder = borderDark;

export const inputSpinnerSize = 24;

export const inputSpacing = shape.spacing / 2;
export const inputSpacingPx = `${inputSpacing}px`;

// Box shadow
export const inputBoxShadow = "0px 2px 6px 0px rgba(0, 0, 0, 0.06)";
export const inputBoxShadowFocus = palette =>
	`0 0 0 0.2rem ${palette.primary["100"]}`;
export const inputBoxShadowError = palette =>
	`0 0 0 0.2rem ${palette.error["100"]}`;

const defaultLabelProps = palette => ({
	fontSize,
	fontFamily,
	lineHeight,
	fontWeight: 500,
	marginBottom: 0,
	color: palette.text.secondary,
});

/**
 * @param { import("@mui/material").PaletteOptions } palette
 */
const baseInputProps = palette => ({
	padding,
	fontSize,
	fontFamily,
	border: borderDark,
	position: "relative",
	boxShadow: inputBoxShadow,
	backgroundColor: tailwindTheme.colors.white,

	"&:not(.MuiAutocomplete-inputRoot):has(.MuiIconButton-root)": {
		paddingTop: tailwindTheme.padding[1],
		paddingBottom: tailwindTheme.padding[1],
	},

	"&:focus-within:not(.Mui-readOnly,.Mui-disabled)": {
		boxShadow: "0 0 0 0.2rem var(--color-blue-100)",
		borderColor: "var(--color-blue-500)",
	},

	"&.Mui-error": {
		borderColor: palette.error.main,
		boxShadow: `0 0 0 0.2rem #FFD4D4`,
	},

	"&.Mui-readOnly": {
		backgroundColor: tailwindTheme.colors.gray[100],
	},
});

/**
 * @param { import("@mui/material").PaletteOptions } palette
 * @returns { import("@mui/material").Components<Omit<import("@mui/material").Theme<'components'>> }
 */
const form = palette => {
	const inputProps = baseInputProps(palette);
	const labelProps = defaultLabelProps(palette);
	const typographyProps = typography(palette);

	return {
		MuiFormLabel: {
			styleOverrides: {
				root: {
					...labelProps,
					color: palette.text.primary,

					"& + .MuiFormControl-root": {
						marginTop: inputSpacingPx,
					},

					"& + .MuiAutocomplete-root": {
						marginTop: inputSpacingPx,
					},
				},
			},
		},
		MuiFormControlLabel: {
			styleOverrides: {
				label: {
					...labelProps,
					color: palette.text.heading,
				},
			},
		},
		MuiFormHelperText: {
			styleOverrides: {
				root: {
					...labelProps,
					fontWeight: 300,
					color: palette.text.secondary,
					marginTop: 0,

					"& + .MuiFormControl-root": {
						marginTop: inputSpacingPx,
					},

					"&.Mui-error": {
						margin: 0,
						marginTop: inputSpacingPx,
					},

					"& .MuiSvgIcon-root": {
						fontSize: 16,
					},
				},
				sizeSmall: {
					...typographyProps.subtitle2,

					"& .MuiSvgIcon-root": {
						fontSize: 14,
					},
				},
			},
		},
		MuiInputLabel: {
			defaultProps: {
				sx: labelProps,
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				notchedOutline: {
					display: "none",
				},

				root: {
					"&.MuiInputBase-root": {
						...inputProps,

						"& .MuiSelect-select": {
							padding: padding,
							paddingBottom: padding,
							paddingLeft: padding,
						},
					},
				},
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					"& .MuiInputBase-root": inputProps,
					"& .MuiInputBase-input": {
						padding: "0 !important",
					},

					"& + .MuiFormHelperText-root": {
						marginTop: inputSpacingPx,
					},
				},
			},
			defaultProps: {
				variant: "outlined",
				fullWidth: true,
			},
			variants: [
				{
					props: { select: true },
					style: {
						".MuiSelect-select": {
							paddingRight: `${shape.padding * inputPadding * 2}px !important`,
						},
					},
				},
			],
		},
		MuiAutocomplete: {
			styleOverrides: {
				root: {
					"& .MuiOutlinedInput-root": {
						...inputProps,
						padding: inputPaddingPx,
					},

					"& + .MuiFormHelperText-root": {
						marginTop: inputSpacingPx,
					},
				},
				listbox: {
					borderRadius: 1,
					overflow: "hidden",
					border: borderDark,
					overflowY: "auto",

					"& .MuiAutocomplete-option": {
						fontSize,
					},
				},
				// Tags inside autocomplete must always
				tag: (() => {
					const chipVariants = chip(palette).MuiChip.variants;

					return {
						// Be lowercased
						...chipVariants.find(value => value.props.disableUppercase).style,
						// Conform to the `small` chip size
						...chipVariants.find(value => value.props.size === "small").style,
						// Be of the `secondary` color and the `outlined` variant
						...chipVariants.find(
							({ props: { color, variant } }) =>
								color == "secondary" && variant == "outlined",
						).style,
					};
				})(),
				noOptions: {
					fontSize,
				},
			},
		},
		MuiSwitch: {
			styleOverrides: {
				sizeSmall: {
					width: 50,
					height: 16,
					paddingTop: 0,
					paddingRight: 8,
					paddingBottom: 0,
					paddingLeft: 12,

					".MuiSwitch-switchBase": {
						padding: 0,
						transform: "translate(13px, 1px)",
						"&.Mui-checked": {
							transform: "translate(27px, 1px)",
						},
					},

					".MuiSwitch-thumb": {
						width: 14,
						height: 14,
					},
				},
				colorPrimary: {
					".MuiSwitch-thumb": {
						backgroundColor: palette.background.paper,
					},

					".MuiSwitch-track": {
						backgroundColor: palette.secondary.main,
					},

					"&.Mui-checked + .MuiSwitch-track": {
						opacity: 1,
					},
				},
			},
		},
	};
};

export default form;
