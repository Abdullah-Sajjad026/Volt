/**
 * @param {React.ComponentPropsWithoutRef<'footer'>} props
 * @deprecated Use `DialogActions` from `@mui/material/DialogActions` instead.
 */
export default function DialogActions({ className = "", ...props }) {
	return (
		<footer
			{...props}
			className={`pb-4 pe-4 flex gap-2 justify-end items-center ${className}`}
		/>
	);
}
