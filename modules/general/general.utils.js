import { isClient } from "modules/shared";

/**
 *
 * @param {"someValue"} key
 * @returns {Array<{ label: string; value: string }>}
 */
export const getOptionsFromAppEnums = key => {
	const options = !isClient() ? [] : JSON.parse(localStorage.getItem(key));

	return options;
};
