import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";

/**
 * @typedef { Object } StarRatingProps
 * @property { number } value - The rating value, can be a decimal number, decimals will render partial stars.
 * @property { boolean } [readOnly=false] - Whether the rating is read-only or not, setting to true will disable user input.
 * @property { import("@mui/material").IconButtonProps } [buttonProps] - Props to pass to the IconButton component.
 */

/**
 * A simple star rating component to both display and allow user input.
 *
 * @param { import("@mui/material").StackProps & StarRatingProps } props
 */
export function StarRating({ value, readOnly, buttonProps, ...props }) {
	// If the value isn't a valid floating point integer or is an unsupported value, return null
	if (isNaN(value) || value < 0 || value > 5) {
		return null;
	}

	// Determine the number of full stars, half stars, and empty stars
	const fullStars = Math.floor(value);
	const halfStars = value % 1 >= 0.5 ? 1 : 0;
	const emptyStars = 5 - fullStars - halfStars;

	const actualButtonProps = {
		sx: { padding: 0 },

		...buttonProps,
		disabled: readOnly,
	};

	return (
		<Stack direction="row" spacing={0} {...props}>
			{[...Array(fullStars)].map((_, index) => (
				<IconButton key={index} {...actualButtonProps}>
					<StarRoundedIcon color="warning" />
				</IconButton>
			))}
			{[...Array(halfStars)].map((_, index) => (
				<IconButton key={index + fullStars} {...actualButtonProps}>
					<StarHalfRoundedIcon color="warning" />
				</IconButton>
			))}
			{[...Array(emptyStars)].map((_, index) => (
				<IconButton key={index + fullStars + halfStars} {...actualButtonProps}>
					<StarBorderRoundedIcon color="warning" />
				</IconButton>
			))}
		</Stack>
	);
}
