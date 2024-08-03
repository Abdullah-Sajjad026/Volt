// @ts-check

import { Box, FormLabel, TextField } from "@mui/material";
import { useId } from "react";

/**
 * @typedef { Object } SelectWithLabelProps
 * @property { string } [label]
 * @property { import("@mui/material").FormLabelProps } [labelProps]
 * @property { Omit<import("@mui/material").BoxProps, 'children'> } [boxProps]
 */

/**
 * A simple select box with a label. Handles ID itself.
 *
 * @param { Omit<import("@mui/material").TextFieldProps, 'label' | 'variant'> & SelectWithLabelProps } props
 */
export function SelectWithLabel({
	boxProps,
	label,
	labelProps,
	inputProps = {},
	...props
}) {
	const id = useId();

	return (
		<Box {...boxProps}>
			{label && (
				<FormLabel htmlFor={id} {...labelProps}>
					{label}
				</FormLabel>
			)}
			<TextField
				select
				inputProps={{
					id,
					...inputProps,
				}}
				{...props}
			/>
		</Box>
	);
}
