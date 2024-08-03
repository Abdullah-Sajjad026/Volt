import { useCallback, useState } from "react";

/**
 * Simple dialog state.
 * @param { Object } [options] - Additional options.
 * @param { boolean } [options.defaultOpen = false] - Whether the dialog should be open by default.
 */
export function useDialog({ defaultOpen = false } = {}) {
	const [open, setOpen] = useState(defaultOpen);

	const onOpen = useCallback(() => {
		setOpen(true);
	}, []);

	const onClose = useCallback(() => {
		setOpen(false);
	}, []);

	return {
		open,
		onOpen,
		onClose,
	};
}
