import {
	compressURIComponent,
	decompressURIComponent,
	isValidStringArrayOrObject,
} from "modules/shared/shared.utils";
import { useSearchParams } from "./search-params.hook";

/**
 * A better hook to manage the search params. The older one lacks a lot of features such as custom setters, getters, and compression, resulting in a lot of boilerplate code amongst the consumers, this one addresses all of those issues and more. It has to be incrementally adopted as it's not a drop-in replacement.
 *
 * TODO: Adopt this hook incrementally in all the consumers of the `useSearchParams` hook. Once done, remove the old hook and do a bulk-rename from `useSearchParamsV2` to `useSearchParams`.
 */
export function useSearchParamsV2() {
	const [searchParams, setSearchParams] = useSearchParams();

	/**
	 * Set a single search param.
	 *
	 * @param { string } key
	 * @param { string } value
	 */
	function setSearchParam(key, value) {
		searchParams.delete(key);
		searchParams.set(key, value);
		setSearchParams(searchParams);
	}

	/**
	 * Set a single search param with compression, useful for values with a lot of data or ampersands, or really just anything that needs to be compressed.
	 *
	 * @param { string } key
	 * @param { string | object } value
	 */
	function setCompressedSearchParam(key, value) {
		searchParams.delete(key);

		if (isValidStringArrayOrObject(value)) {
			searchParams.set(key, compressURIComponent(value));
		}

		setSearchParams(searchParams);
	}

	/**
	 * Get a single search param.
	 *
	 * @param { string | number } key
	 * @param { string | number } [fallback]
	 */
	function getSearchParam(key, fallback = "") {
		return searchParams.get(key) || fallback;
	}

	/**
	 * Decompress a search param and return it. Make sure the param was compressed with `setCompressedSearchParam` or `compressURIComponent` or this will return null.
	 *
	 * @param { string } key
	 * @param { unknown } fallback
	 */
	function getCompressedSearchParam(key, fallback) {
		return decompressURIComponent(searchParams.get(key)) || fallback;
	}

	return {
		searchParams,
		setSearchParam,
		setCompressedSearchParam,
		getSearchParam,
		getCompressedSearchParam,
		clearSearchParams: useClearSearchParams(),
	};
}

export function useClearSearchParams() {
	const [searchParams, setSearchParams] = useSearchParams();

	/**
	 * Clear a list of search params.
	 *
	 * @param { string[] } keys
	 */
	return function clearSearchParams(keys) {
		keys.forEach(key => searchParams.delete(key));
		setSearchParams(searchParams);
	};
}
