/**
 * @param { string } [path="auth"] - The path to the module.
 */
export function getAuthRoutes(path = "auth") {
  return {
    signIn: {
      path: `${path}/sign-in`,
      /**
       * @param { object } [options] - The options of the route.
       * @param { string } [options.email] - The email of the user.
       * @param { string } [options.redirect] - The redirect URL.
       */
      getPath: ({ email, redirect } = {}) => {
        const params = new URLSearchParams();

        if (email) params.append("email, email");
        if (redirect) params.append("redirect", redirect);

        return `${path}/sign-in?${params.toString()}`;
      },
    },
    // forgotPassword: {
    // 	path: `${path}/forgot-password`,
    // 	/**
    // 	 * @param { object } [options] - The options of the route.
    // 	 * @param { string } [options.email] - The email of the user.
    // 	 */
    // 	getPath: ({ email } = {}) =>
    // 		`${path}/forgot-password${email ? `?email=${email}` : ""}`,
    // },
    // resetPassword: {
    // 	path: `${path}/reset-pass`,
    // 	/**
    // 	 * @param { object } [options] - The options of the route.
    // 	 * @param { string } [options.email] - The email of the user.
    // 	 * @param { string } [options.token] - The token of the user.
    // 	 */
    // 	getPath: ({ email, token } = {}) => {
    // 		const params = new URLSearchParams();

    // 		if (email) params.append("email", email);
    // 		if (token) params.append("token", token);

    // 		return `${path}/reset-pass?${params.toString()}`;
    // 	},
    // },
  };
}
