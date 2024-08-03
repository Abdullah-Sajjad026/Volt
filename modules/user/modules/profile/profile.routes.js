/**
 * @param { string } [path="profile"] - The path to the module.
 */
export function getProfileRoutes(path = "profile") {
	return {
		index: {
			path,
			getPath: () => path,
		},
	};
}
