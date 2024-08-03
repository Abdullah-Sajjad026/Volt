import {
	generateUserQueryData,
	getUserQueryKey,
	useGetUser,
} from "modules/user/apis";
import { useQueryClient } from "react-query";

/**
 * A simple wrapper around useGetUser, which also provides a setUser function.
 */
export function useUser() {
	const queryClient = useQueryClient();

	const { data: user, ...getUser } = useGetUser();

	/**
	 * @param { import("modules/user/models").User } user
	 */
	function setUser(user) {
		queryClient.setQueryData(getUserQueryKey(), generateUserQueryData(user));
	}

	return { user, setUser, ...getUser };
}
