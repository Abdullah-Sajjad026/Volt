import { borderRadius } from "./tailwindTheme";
import typography from "./typography";

/**
 * @param { import("@mui/material").PaletteOptions } palette
 * @returns { import("@mui/material").Components<Omit<import("@mui/material").Theme<'components'>> }
 */
const pagination = palette => ({
	MuiPagination: {
		styleOverrides: {
			ul: {
				"li:first-child .MuiPaginationItem-outlined": {
					borderTopLeftRadius: borderRadius,
					borderBottomLeftRadius: borderRadius,
				},

				"li:last-child .MuiPaginationItem-outlined": {
					borderTopRightRadius: borderRadius,
					borderBottomRightRadius: borderRadius,
				},
			},
		},
	},
	MuiPaginationItem: {
		styleOverrides: {
			root: {
				fontSize: typography(palette).subtitle1.fontSize,
			},
			outlined: {
				margin: 0,
				borderRadius: 0,
				color: palette.text.disabled,
				borderColor: palette.divider,

				"&.Mui-selected": {
					backgroundColor: palette.primary[50],
					border: `1px solid ${palette.primary[200]}`,
					color: palette.primary.main,
					"&:hover": {
						backgroundColor: palette.primary[100],
					},
				},
			},
		},
	},
});

export default pagination;
