import { useMenu } from "../menu";

export function usePopover() {
	const { menuProps, ...props } = useMenu();

	return { ...props, popoverProps: menuProps };
}
