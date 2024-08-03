import { getProfileRoutes } from "./modules/profile";

/**
 * @param { string } [path="user"] - The path to the module.
 */
export function getUserRoutes(path = "user") {
  return {
    profile: getProfileRoutes(`${path}/profile`),
    // settings: getSettingsRoutes(`${path}/settings`),
  };
}
