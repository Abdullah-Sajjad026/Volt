import apiClient from "pages/api/AxiosInstance";
import { useMutation } from "react-query";

/**
 * @typedef {Object} SignInProps
 * @property {string} email
 * @property {string} password
 
 */

/**
 * @typedef {Object} SignInResponse
 * @property {string} token
 */

/**
 * @typedef { import("axios").AxiosResponse<SignInResponse> } SignInAxiosResponse
 */

/**
 * API Description goes here
 * @param { SignInProps } props
 */
export function signIn({ email, password }) {
  return apiClient.post("/app/login", { email, password });
}

/**
 * Generate a mutation key for the API
 * @param { SignInProps } props
 */
export const getSignInMutationKey = (props) => ["sign-in", props];

/**
 * Generate the original response from the data
 * @param { SignInResponse } data
 */
export const generateSignInMutationData = (data) => ({ data });

/**
 * Select the data from the response
 * @param { SignInAxiosResponse } response
 */
export const selectSignInMutationData = (response) => response?.data;

/**
 * @param { import("react-query").UseMutationOptions<SignInResponse, import("axios").AxiosError, SignInProps> } [props]
 */
export function useSignInMutation(props = {}) {
  return useMutation({
    mutationFn: signIn,
    mutationKey: getSignInMutationKey(props),
    ...props,
  });
}
