import ArrowRightIcon from "./ArrowRightIcon";

/**
 * @param {React.ComponentProps<typeof ArrowRightIcon>} props
 */
export default function ArrowLeftIcon({ sx = {}, ...props }) {
	return (
		<ArrowRightIcon sx={{ transform: "rotate(180deg)", ...sx }} {...props} />
	);
}
