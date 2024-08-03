import { useRef, useEffect, useCallback } from "react";

/**
 * Custom hook to debounce a function.
 *
 * @template T
 * @param {(...args: T[]) => void} fn - The function to debounce.
 * @param {number} delay - The debounce delay in milliseconds.
 * @returns {(...args: T[]) => void} The debounced function.
 */
export function useDebouncedFn(fn, delay) {
	const timeoutRef = useRef(null);

	const debouncedFn = useCallback(
		(...args) => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}

			timeoutRef.current = setTimeout(() => {
				fn(...args);
			}, delay);
		},
		[fn, delay],
	);

	useEffect(() => {
		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, []);

	return debouncedFn;
}
