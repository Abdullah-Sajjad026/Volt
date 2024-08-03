// @ts-check

import { userStaleTime } from "modules/user/user.config";
import { saveUser } from "modules/user/user.utils";
import apiClient from "pages/api/AxiosInstance";
import { useQuery } from "react-query";

/**
 * @typedef { import("modules/user/models").User } GetUserResponse
 */

/**
 * @typedef { import("axios").AxiosResponse<GetUserResponse> } GetUserAxiosResponse
 */

/**
 * Get the logged-in user.
 */
export function getUser() {
  return apiClient.get("/app/me");
}

/**
 * Generate a query key for the API
 */
export const getUserQueryKey = () => ["user"];

/**
 * Generate the original response from the data
 * @param { GetUserResponse } data
 * @returns { { data: GetUserAxiosResponse['data'] } }
 */
export const generateUserQueryData = (data) => ({ data: data });

/**
 * Select the data from the response
 * @param { GetUserAxiosResponse } response
 */
export const selectUserQueryData = (response) => {
  const user = response.data;
  saveUser(user);

  return user;
};

/**
 * Get the logged-in user.
 * @param { import("react-query").UseQueryOptions<GetUserResponse, import("axios").AxiosError> & {
 * 	select: (data: GetUserAxiosResponse) => GetUserResponse
 * } } [queryProps]
 */
export function useGetUser(props = {}, queryProps = {}) {
  return useQuery({
    queryFn: getUser,
    queryKey: getUserQueryKey(),
    select: selectUserQueryData,
    staleTime: userStaleTime,
    ...queryProps,
  });
}
