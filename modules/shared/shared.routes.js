// Make sure to import from the .routes file itself otherwise if the module is using the `routes` object anywhere else, it will cause a circular dependency.

import { getAuthRoutes } from "../auth";

/**
 * @typedef { object } Route
 * @property { string } path - The path of the route.
 * @property { Function } [getPath] - The function to get the path of the route, mostly used for dynamic paths or prop forwarding.
 */

/**
 * A route collection serves as a parent to many routes.
 * @typedef {Record<string, Route>} RouteCollection
 */

/**
 * A route object can contain both routes and route collections.
 * @typedef { Record<string, Route | RouteCollection> } RouteObject
 */

// Everything to their specific modules and then export getRoutes from the module itself.
export const sharedRoutes = {
	dashboard: {
		path: "/",
	},
	// General Authentication and User Routes
	auth: getAuthRoutes("/auth"),
	// Module-specific routes
};
