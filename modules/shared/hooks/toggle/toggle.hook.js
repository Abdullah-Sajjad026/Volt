import { useState } from "react";

export function useToggle(initialValue = false) {
	const [open, setOpen] = useState(initialValue);

	const onOpen = () => setOpen(true);
	const onClose = () => setOpen(false);

	const toggle = () => setOpen(!open);

	return {
		open,
		onOpen,
		onClose,
		toggle,
	};
}
