import { useId, useState } from "react";
import { useSearchParams } from "../../hooks";

/**
 * Utility function to generate common menu and control props.
 * @param { string } id - An id, without any suffixes, used to generate the ids for both the menu and the button that controls it.
 * @param { function } onOpen - Function to handle opening the menu.
 * @param { function } onClose - Function to handle closing the menu.
 * @param { HTMLElement } anchorEl - The DOM element that anchors the menu.
 */
function useMenuBase(id, onOpen, onClose, anchorEl) {
	const open = Boolean(anchorEl);

	const menuId = `${id}-menu`;
	const controlId = `${id}-control`;

	/**
	 * Props to be forwarded to the control button.
	 */
	const controlProps = {
		id: controlId,
		onClick: onOpen,
		"aria-haspopup": "true",
		"aria-controls": open ? menuId : undefined,
		"aria-expanded": open ? "true" : undefined,
	};

	/**
	 * Props to be forwarded to the menu.
	 */
	const menuProps = {
		open,
		onClose,
		anchorEl,
		id: menuId,
		"aria-labelledby": controlId,
	};

	return {
		open,
		onOpen,
		onClose,
		menuProps,
		controlProps,
	};
}

/**
 * Hook to get the state of a menu.
 * @param { string } [id] - An id, without any suffixes, used to generate the ids for both the menu and the button that controls it, defaults to a random string.
 */
export function useMenu(id) {
	const randomId = useId();
	const [anchorEl, setAnchorEl] = useState(null);

	function onOpen(event) {
		setAnchorEl(event.currentTarget);
	}

	function onClose() {
		setAnchorEl(null);
	}

	return useMenuBase(id || randomId, onOpen, onClose, anchorEl);
}

/**
 * Hook to get the state of a menu, synchronized with URL search parameters.
 * @param {string} id - An id, without any suffixes, used to generate the ids for both the menu and the button that controls it.
 */
export function useMenuWithSearchParams(id) {
	const [searchParams, setSearchParams] = useSearchParams();
	const anchorElId = searchParams.get(`${id}-anchorEl`);

	const anchorEl = anchorElId ? document.getElementById(anchorElId) : null;

	function onOpen(event) {
		setSearchParams(
			new URLSearchParams({ [`${id}-anchorEl`]: event.currentTarget.id }),
		);
	}

	function onClose() {
		setSearchParams(new URLSearchParams());
	}

	return useMenuBase(id, onOpen, onClose, anchorEl);
}
