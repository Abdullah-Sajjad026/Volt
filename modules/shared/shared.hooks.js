import useMediaQuery from "@mui/material/useMediaQuery";
import { BREAKPOINTS } from "constants/common";
import { getOptionsFromAppEnums } from "modules/general/general.utils";
import { useSearchParamsV2 } from "modules/shared/hooks";
import { useQueryClient } from "react-query";
import { isClient } from ".";

export function useIsMobile() {
	return useMediaQuery(`(min-width: ${BREAKPOINTS.xs}px)`);
}

export function useIsTablet() {
	return useMediaQuery(`(min-width: ${BREAKPOINTS.sm}px)`);
}

export function useIsLaptop() {
	return useMediaQuery(`(min-width: ${BREAKPOINTS.md}px)`);
}

export function useIsDesktop() {
	return useMediaQuery(`(min-width: ${BREAKPOINTS.lg}px)`);
}

export function useIsLargeDesktop() {
	return useMediaQuery(`(min-width: ${BREAKPOINTS.xl}px)`);
}

export const usePagination = ({
	defaultPageSize = 25,
	paramsPrefix = "",
} = {}) => {
	const { setSearchParam, getSearchParam } = useSearchParamsV2();

	const page = parseInt(
		getSearchParam(`${paramsPrefix ? paramsPrefix + "_" : ""}pageNumber`, "1"),
	);
	const rowsPerPage = parseInt(
		getSearchParam(
			`${paramsPrefix ? paramsPrefix + "_" : ""}pageSize`,
			defaultPageSize.toString(),
		),
	);

	const handleChangePage = (event, newPage) => {
		setSearchParam(
			`${paramsPrefix ? paramsPrefix + "_" : ""}pageNumber`,
			newPage + 1,
		);
	};

	const handleChangeRowsPerPage = event => {
		setSearchParam(
			`${paramsPrefix ? paramsPrefix + "_" : ""}pageSize`,
			event.target.value,
		);
		setSearchParam(`${paramsPrefix ? paramsPrefix + "_" : ""}pageNumber`, 1);
	};

	return {
		page,
		rowsPerPage,
		handleChangePage,
		handleChangeRowsPerPage,
	};
};

export const useSorting = (defaultSortBy = "Id") => {
	const { setSearchParam, getSearchParam } = useSearchParamsV2();

	const sortBy = getSearchParam("sortBy", defaultSortBy);
	const sortDirection =
		getSearchParam("isDescending", "false") === "true" ? "desc" : "asc";

	const handleSortByChange = event => {
		setSearchParam("sortBy", event.target.value);
	};

	const handleSortDirectionChange = event => {
		setSearchParam("isDescending", event.target.value === "desc");
	};

	return {
		sortBy,
		sortDirection,
		handleSortByChange,
		handleSortDirectionChange,
	};
};

/**
 * Custom hook to invalidate queries by a partial key
 * @param  {unknown} partialKey
 */
export function useInvalidateQueriesByPartialKey(partialKey) {
	const queryClient = useQueryClient();

	const invalidateQueries = () => {
		queryClient.invalidateQueries({
			predicate: query =>
				query.queryKey.some(key => {
					if (typeof key === "string") {
						return key.includes(partialKey);
					}

					if (Array.isArray(key)) {
						return key.some(
							k => typeof k === "string" && k.includes(partialKey),
						);
					}

					return false;
				}),
		});
	};

	return invalidateQueries;
}

export function useOptionsFromAppEnums() {
	if (!isClient()) return {};

	const someOptions = getOptionsFromAppEnums("someValue");

	return {
		someOptions,
	};
}
