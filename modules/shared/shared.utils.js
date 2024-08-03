import { BREAKPOINTS } from "constants/common";
import {
	compressToEncodedURIComponent,
	decompressFromEncodedURIComponent,
} from "lz-string";
import { loadAccessToken } from "modules/auth";
import z from "zod";
import { sharedRoutes } from "./shared.routes";

// =============================================================================
// Constants
// =============================================================================
export const stringSchema = z
	.string()
	.min(1, "String must have at least one character");
export const arraySchema = z
	.array(z.any())
	.min(1, "Array must have at least one element");
export const objectSchema = z.object({
	[z.string()]: z.any(),
});

// =============================================================================
// Functions
// =============================================================================
// -----------------------------------------------------------------------------
// Functions / Validations
// -----------------------------------------------------------------------------
/**
 * Check if a string is valid and contains at least 1 character.
 * @param { unknown } string
 */
export function isValidString(string) {
	return stringSchema.safeParse(string).success;
}

/**
 * Check if an array is valid and contains at least 1 element.
 * @param { unknown } array
 */
export function isValidArray(array) {
	return arraySchema.safeParse(array).success;
}

/**
 * Check if an object is valid and contains at least 1 value.
 * @param { unknown } object
 */
export function isValidObject(object) {
	return objectSchema.safeParse(object).success;
}

/**
 * Check if a value is a valid string, array, or an object.
 * @param { unknown } string
 *
 * @see {@link isValidString}
 * @see {@link isValidArray}
 * @see {@link isValidObject}
 */
export function isValidStringArrayOrObject(value) {
	if (typeof value == "string") {
		return isValidString(value);
	}

	if (Array.isArray(value)) {
		return isValidArray(value);
	}

	if (typeof value === "object") {
		return isValidObject(value);
	}

	return false;
}

// -----------------------------------------------------------------------------
// Functions / DOM & BOM
// -----------------------------------------------------------------------------
export function resetScroll() {
	if (isClient()) {
		Array.from(
			document.querySelectorAll("body, #app-root-layout, #app-main-container"),
		).forEach(element => {
			element.scrollTo(0, 0);
		});
	}
}

// -----------------------------------------------------------------------------
// Functions / Utilities
// -----------------------------------------------------------------------------

export function isUrl(subject) {
	try {
		const url = new URL(subject);
		return url.protocol === "http:" || url.protocol === "https:";
	} catch (e) {
		return false;
	}
}

export function isClient() {
	return typeof window !== "undefined";
}

export function isServer() {
	return typeof window === "undefined";
}

export function isOnline() {
	if (isClient()) {
		return window.navigator.onLine;
	} else {
		return true;
	}
}

// -----------------------------------------------------------------------------
// Functions / Getters & Managers
// -----------------------------------------------------------------------------

/**
 * Makes sure that a url is valid and leads to an external resource.
 */
export function getValidExternalUrl(url) {
	if (isUrl(url)) {
		return url;
	}

	return `https://${url}`;
}

/**
 * Truncate a string to a certain length.
 * @param {string} string The string to truncate.
 * @param {number} [length=16] The maximum length of the string.
 */
export function getTruncatedString(string, length = 16) {
	if (string.length <= length) {
		return string;
	}

	return `${string.slice(0, length)}...`;
}

/**
 * Get properties to be spread to MUI theme customization based on breakpoints.
 * @description The props passed to MUI tokens customizations are directly mapped to CSS
 * so we can use media queries to handle responsive props.
 * @param {keyof BREAKPOINTS} breakpoint
 * @param {{[key: string]: any}} props
 * @see "https://mui.com/material-ui/customization/typography/#responsive-font-sizes"
 */
export function getResponsiveThemeTokens(breakpoint, props) {
	const px = BREAKPOINTS[breakpoint];
	const key = `@media (min-width:${px}px)`;
	return {
		[key]: props,
	};
}

/**
 * Get a managed error message.
 * Error messages can result from various causes, this function ensures that we're displaying the right message.
 * The message you pass might be the right error message, or maybe we had some other problem that you don't know of, such as a network error.
 * @param {string} message The error message.
 * @returns {string} The managed error message.
 */
export function getManagedErrorMessage(message) {
	if (!isOnline()) {
		return "You're offline, please check your internet connection and try again";
	}

	if (
		// If we're on the client side, and the token is null, and we're not on the login page
		isClient() &&
		loadAccessToken() === null &&
		window.location.pathname != sharedRoutes.auth.signIn.path
	) {
		// We're unauthenticated, redirect to the login page
		return "Session expired, please wait while we redirect you to the login page";
	}

	return message;
}

/**
 * Get a standard error message based on a certain action.
 * @param { string } action The action that resulted in the error.
 * @example getStandardErrorMessage("creating a post")
 */
export function getStandardErrorMessage(action) {
	return getManagedErrorMessage(
		`There was an error ${action}. Please try again later or contact support.`,
	);
}

/**
 * Abbreviates thousands into Ks and millions into Ms and so on.
 *
 * @param { number } value The value to abbreviate
 * @param { number } [digits=2] The number of digits to round the value to
 * with.
 *
 * @see https://stackoverflow.com/a/9462382
 *
 * @returns {string} The abbreviated string
 */
export function getAbbreviatedNumbers(value, digits = 1) {
	const lookup = [
		{ value: 1, symbol: "" },
		{ value: 1e3, symbol: "k" },
		{ value: 1e6, symbol: "M" },
		{ value: 1e9, symbol: "G" },
		{ value: 1e12, symbol: "T" },
		{ value: 1e15, symbol: "P" },
		{ value: 1e18, symbol: "E" },
	];

	const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;

	const item = lookup
		.slice()
		.reverse()
		.find(item => value >= item.value);

	// In case it's a faulty value
	if (!item) return value.toString();

	// The value without the abbreviated part
	return (value / item.value).toFixed(digits).replace(rx, "$1") + item.symbol;
}

/**
 * Log to console only if in development mode.
 * @param { any } args
 */
export function log(...args) {
	if (process.env.NODE_ENV === "development") {
		console.log("[DEV]", ...args);
	}
}

// -----------------------------------------------------------------------------
// Functions / URI Components
// -----------------------------------------------------------------------------

/**
 * Check if a value is an encoded URI Component.
 *
 * @param { unknown } value
 */
export function isEncodedURIComponent(value) {
	return decodeURIComponent(value) !== value;
}

/**
 * Compress a value and encode it as a URI component.
 *
 * @param { unknown } value
 */
export function compressURIComponent(value) {
	const json = JSON.stringify(value);
	return compressToEncodedURIComponent(json);
}

/**
 * Decompress a URI component and decode it into its original shape.
 *
 * @param { string } value
 */
export function decompressURIComponent(value) {
	const json = decompressFromEncodedURIComponent(value);
	return json ? JSON.parse(json) : null;
}

// -----------------------------------------------------------------------------
// Functions / localization
// -----------------------------------------------------------------------------

/*
 * Format a number as a currency.
 *
 * @param { number } number The number to format
 * @param { 'usd' } currency The currency to format the number as
 */
export function formatNumberAsCurrency(number, currency) {
	const locale = {
		usd: "en-US",
	}[currency];

	return new Intl.NumberFormat(locale, { currency, style: "currency" }).format(
		number,
	);
}

/**
 * Format a number as a USD currency.
 *
 * @param { number } number The number to format
 */
export function formatNumberAsUSD(number) {
	return formatNumberAsCurrency(number, "usd");
}

// -----------------------------------------------------------------------------
// Functions / Filters
// -----------------------------------------------------------------------------
/**
 * Compound filters have values as objects, but the form elements need values as strings, this handles that.
 * @param { Object } [value]
 */
export function getCompoundFilterValue(value) {
	if (!value) return "";

	return JSON.stringify(value);
}

/**
 * Compound filters set their values as serialized objects, this deserializes for them.
 * @param { string } value
 */
export function parseCompoundFilterValue(value) {
	return JSON.parse(value);
}

export const getApiErrorMessage = (error, fallback = "An error occurred") => {
	if (error.response) {
		// The request was made and the server responded with a status code
		// that falls out of the range of 2xx
		console.error("Error Response Data:", error.response.data);
		console.error("Error Response Status:", error.response.status);
		console.error("Error Response Headers:", error.response.headers);

		if (error.response.data?.errors?.length > 0) {
			return error.response.data?.errors[0];
		}

		return error.response.data?.message || fallback;
	} else if (error.request) {
		// The request was made but no response was received
		console.error("Error Request:", error.request);
		return "No response was received";
	} else {
		// Something happened in setting up the request that triggered an Error
		console.error("Error Message:", error.message);
		return error.message;
	}
};
