import shape from "./shape";

/**
 * @param { import("@mui/material").PaletteOptions } palette
 * @returns { import("@mui/material").Components<Omit<import("@mui/material").Theme<'components'>> }
 */
const table = palette => ({
	MuiTableContainer: {
		styleOverrides: {
			root: {
				boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
				borderRadius: shape.borderRadius,
				overflow: "auto",
			},
		},
	},
	MuiTable: {
		styleOverrides: {
			root: {
				borderCollapse: "separate",
				borderSpacing: 0,
			},
		},
	},
	MuiTableHead: {
		styleOverrides: {
			root: {
				".MuiTableCell-root": {
					backgroundColor: palette.primary.dark,
					color: palette.primary.contrastText,
					fontWeight: "bold",
					textTransform: "uppercase",
					fontSize: "0.875rem",
					padding: "16px",
					borderBottom: `2px solid ${palette.primary.main}`,
				},
			},
		},
	},
	MuiTableBody: {
		styleOverrides: {
			root: {
				".MuiTableRow-root": {
					"&:nth-of-type(odd)": {
						backgroundColor: "rgba(0, 0, 0, 0.02)",
					},
					"&:hover": {
						backgroundColor: "rgba(0, 0, 0, 0.04)",
					},
				},
				".MuiTableCell-root": {
					padding: "12px 16px",
					borderBottom: `1px solid ${palette.divider}`,
				},
			},
		},
	},
	MuiTableSortLabel: {
		styleOverrides: {
			root: {
				flexDirection: "row-reverse",
				"&:hover": {
					color: palette.primary.main,
				},
				"&.Mui-active": {
					color: palette.primary.main,
					"& .MuiTableSortLabel-icon": {
						color: palette.primary.main,
					},
				},
			},
			icon: {
				marginLeft: "4px",
			},
		},
	},
	MuiTablePagination: {
		styleOverrides: {
			root: {
				borderTop: `1px solid ${palette.divider}`,
			},
			selectLabel: {
				marginRight: "8px",
			},
			select: {
				paddingTop: "8px",
				paddingBottom: "8px",
			},
		},
	},
});

export default table;
