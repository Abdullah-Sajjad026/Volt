/**
 * @param {React.ComponentPropsWithoutRef<'svg'>} props
 */
export default function ArrowReturnIcon(props) {
	return (
		<svg
			{...props}
			width="21"
			height="21"
			viewBox="0 0 21 21"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M3 8.2596H14.25C16.3211 8.2596 18 9.93854 18 12.0096C18 14.0807 16.3211 15.7596 14.25 15.7596H10.5M3 8.2596L6.33333 4.92627M3 8.2596L6.33333 11.5929"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
