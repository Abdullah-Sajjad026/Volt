import { z } from "zod";

/**
 * Default stale time for the query cache: Thirty minutes.
 */
export const defaultStaleTime = 30 * 60 * 1000;

/**
 * Default delay for debouncers.
 * @example
 *  import { useDebounce } from "@uidotdev/usehooks";
 *  const debouncedValue = useDebounce(value, defaultDebounceDelay)
 */
export const defaultDebounceDelay = 500;
export const appDefaultDateFormat = "yyyy-MM-dd";

export const EnumValueSchema = z.object({
	value: z.number(),
	label: z.string(),
});
