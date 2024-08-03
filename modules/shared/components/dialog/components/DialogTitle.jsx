/**
 * @param {React.ComponentPropsWithoutRef<'h2'>} props
 * @deprecated Use `DialogTitle` from `@mui/material/DialogTitle` instead.
 */
export default function DialogTitle({ className = "", ...props }) {
	return (
		<h2
			{...props}
			className={`pt-4 ps-4 text-2xl font-sans font-medium text-gray-800 ${className}`}
		/>
	);
}
