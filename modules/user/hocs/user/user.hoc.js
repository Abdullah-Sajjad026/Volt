import { LazyLoader, log, sharedRoutes } from "modules/shared/";
import Loader from "modules/shared/components/loader";
import { UserContext, useUser } from "modules/user";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const Error400 = dynamic(() => import("pages/400.jsx"), {
	loading: props => <LazyLoader {...props} loader={<Loader />} />,
});

const Error403 = dynamic(() => import("pages/403.jsx"), {
	loading: props => <LazyLoader {...props} loader={<Loader />} />,
});

/**
 * HOC to check if the user is authenticated and to wrap the component with the user context.
 *
 * The HOC first tries to get the user from the API. If the user is not authenticated, they're redirected to the sign-in page.
 * Then, the HOC checks for the user type. If the user type is not the same as the one passed to the HOC, the user is redirected to the 403 page.
 *
 * Note: Make sure to use this HOC at the top-most level of the component tree, mainly the page component.
 *
 * @template T
 *
 * @param { React.ComponentType<T> } Component The component to wrap.
 * @param { object } [options] The options for the HOC.
 * @param { import("modules/user/models").UserType } [options.userType] The type of user to check for.
 * @param { import("modules/user/models").UserType[] } [options.userTypes] The types of users to check for.
 */
export function withUser(Component, { userType, userTypes = [] } = {}) {
	/**
	 * @param { T } props
	 */
	return function WithUser(props) {
		const router = useRouter();
		const {
			isError,
			isLoading,
			user,
			setUser,
			refetch: refreshUser,
		} = useUser();

		if (isError) {
			log("Error fetching user. Redirecting to 400 page.");

			return <Error400 />;
		}

		if (isLoading) {
			log("Fetching user data.");

			return <Loader />;
		}

		if (!user) {
			log("User not found. Redirecting to sign-in page.");

			router.push(
				sharedRoutes.auth.signIn.getPath({
					redirect: window.location.href,
				}),
			);
			return <Loader />;
		}

		// Check if the user's role matches any of the allowed roles
		const isAllowedUserRole =
			userType || userTypes.length
				? (userType && userType === user.role) ||
				  userTypes.some(allowedRole => allowedRole === user.role)
				: true;

		if (!isAllowedUserRole) {
			log(
				`User type is ${
					user.role
				} while the required user types are ${userTypes.join(
					", ",
				)}. Redirecting to 403 page.`,
			);

			return <Error403 />;
		}

		log(
			"User is authenticated. Wrapping the component with the user context.",
			{ user },
		);

		return (
			<UserContext.Provider value={{ user, setUser, refreshUser }}>
				<Component {...props} />
			</UserContext.Provider>
		);
	};
}
