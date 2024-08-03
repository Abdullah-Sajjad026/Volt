import { createContext, useContext } from "react";

/**
 * @type { import('react').Context<{
 * 	auth: import('./models').Auth,
 * 	setAuth: (auth: import('./models').Auth) => void,
 * }> }
 */
export const AuthContext = createContext({
	auth: undefined,
	setAuth: () => {},
});

export function useAuthContext() {
	return useContext(AuthContext);
}
