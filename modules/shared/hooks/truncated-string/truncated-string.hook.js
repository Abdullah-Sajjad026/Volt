/**
 * @param { string } string The string to truncate
 * @param { number } maxLength The maximum length of the truncated string
 *
 * @returns { [string, boolean] } The truncated string and a boolean indicating if the string was truncated
 */
export function useTruncatedString(string, maxLength = 50) {
	const isTruncated = string.length > maxLength;

	return [
		isTruncated ? `${string.slice(0, maxLength)}...` : string,
		isTruncated,
	];
}
