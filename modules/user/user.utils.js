import { isClient } from "../shared/shared.utils";

export function saveUser(user) {
  if (isClient()) {
    localStorage.setItem("user", JSON.stringify(user));
  }
}

export function loadUser() {
  if (isClient()) {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  } else return null;
}

export function clearUser() {
  if (isClient()) {
    localStorage.removeItem("user");
  }
}
