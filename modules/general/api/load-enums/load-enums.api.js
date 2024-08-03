// @ts-check

import apiClient from "pages/api/AxiosInstance";
import { useQuery } from "react-query";

/**
 * @typedef { import("modules/general/models/enums-lists").EnumList } LoadEnumsResponse
 */

/**
 * @typedef { import("axios").AxiosResponse<LoadEnumsResponse> } LoadEnumsAxiosResponse
 */

export function getEnums() {
	return apiClient.get("/app/enums");
}

/**
 * Generate a query key for the API
 */
export const getLoadEnumsQueryKey = () => ["app-enums"];

/**
 * Select the data from the response
 * @param { LoadEnumsAxiosResponse } response
 */
export const selectLoadEnumsQueryData = response => response.data;

/**
 * @param { import("react-query").UseQueryOptions<LoadEnumsResponse, import("axios").AxiosError> & {
 * 	select: (data: LoadEnumsAxiosResponse) => LoadEnumsResponse
 * } } [props]
 */
export function useLoadEnums(props = {}) {
	return useQuery({
		queryFn: getEnums,
		queryKey: getLoadEnumsQueryKey(),
		select: selectLoadEnumsQueryData,
		staleTime: 1000 * 60 * 60 * 24,
		onSuccess: data => {
			console.log(data);

			// Save enums with keys
			Object.keys(data).forEach(key => {
				localStorage.setItem(key, JSON.stringify(data[key]));
			});

			props?.onSuccess?.(data);
		},
		...props,
	});
}
