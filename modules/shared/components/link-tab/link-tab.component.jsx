import { Tab } from "@mui/material";
import { useRouter } from "next/router";

/**
 * A tab that navigates to a new page when clicked.
 * @param { import("@mui/material").TabProps & { href: string } } props
 */
export function LinkTab({ href, ...props }) {
	const router = useRouter();

	return (
		<Tab
			{...props}
			href={href}
			component="a"
			onClick={e => {
				// Prevent the default behavior of the tab.
				e.preventDefault();

				// Navigate to the tab's href.
				router.push(href);
			}}
		/>
	);
}
