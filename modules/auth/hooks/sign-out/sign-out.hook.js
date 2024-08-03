import { clearAccessToken, loadAccessToken } from "modules/auth";
import { clearUser } from "modules/user/user.utils";
import { sharedRoutes } from "modules/shared";
import { useQueryClient } from "react-query";
import { useRouter } from "next/router";

/**
 * Hook to sign out the user.
 */
export function useSignOut() {
	const router = useRouter();
	const queryClient = useQueryClient();

	// If the user is not logged in, return a function that redirects to the sign-in page
	if (!loadAccessToken()) {
		return () => {
			router.push(sharedRoutes.auth.signIn.path);
		};
	}

	// Otherwise, return the signOut function
	return async function signOut({
		redirectUrl = sharedRoutes.auth.signIn.path,
	} = {}) {
		// Promise in order to be able to await the signOut function in case we need to do something after the user is logged out.
		return Promise.resolve().then(() => {
			clearAccessToken();
			clearUser();

			// Clear all cached queries
			queryClient.clear();

			// Redirect to the redirectUrl, which is the the sign-in page by default
			if (router) router.push(redirectUrl);
			else window.location.href = redirectUrl;
		});
	};
}
