import { log } from "modules/shared";
import { createContext, useContext } from "react";
import { defaultUser } from "./models";

/**
 * @type { import('react').Context<{
 * 	user: import('./models').User,
 * 	setUser: (user: import('./models').User) => void,
 * }> }
 */
export const UserContext = createContext({
  user: defaultUser,
  setUser: () => {},
});

export function useUserContext() {
  try {
    return useContext(UserContext);
  } catch (error) {
    log(
      "useUserContext must be used within a UserProvider, defaulting to a blank user object."
    );
    return { user: defaultUser, setUser: () => {} };
  }
}
