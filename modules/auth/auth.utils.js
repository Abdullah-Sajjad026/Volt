import { isClient } from "../shared/shared.utils";

export function saveAccessToken(token) {
	if (isClient()) {
		localStorage.setItem("token", token);
	}
}

export function loadAccessToken() {
	if (isClient()) {
		return localStorage.getItem("token");
	} else return null;
}

export function clearAccessToken() {
	if (isClient()) {
		localStorage.removeItem("token");
	}
}
