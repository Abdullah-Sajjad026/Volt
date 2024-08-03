import {
	DashboardOutlined,
	PeopleOutlined,
	QuizOutlined,
	RememberMeOutlined,
} from "@mui/icons-material";
import HeadphonesIcon from "modules/shared/icons/HeadphonesIcon";
import {
	userTypeAdmin,
	userTypeStaff,
	userTypeStudent,
	useUserContext,
} from "modules/user";

/**
 * @returns { import("modules/shared").SidebarItemProps[] } Sidebar items for admin users
 */
function useAdminSidebarItems() {
	return [
		{
			label: "Dashboard",
			icon: DashboardOutlined,
			buttonProps: {
				// path: sharedRoutes.adminUserManagement.index.path,
			},
		},
		{
			label: "All Students",
			icon: PeopleOutlined,
			buttonProps: {
				// path: sharedRoutes.students.index.path,
			},
		},
		{
			label: "All Staff",
			icon: RememberMeOutlined,
			buttonProps: {
				// path: sharedRoutes.adminUserManagement.index.path,
			},
		},
		{
			label: "Manage FAQs",
			icon: QuizOutlined,
			buttonProps: {
				// path: sharedRoutes.adminBulkActions.path,
			},
		},
	];
}

/**
 * @returns { import("modules/shared").SidebarItemProps[] } Sidebar items for student users
 */
function useStudentSidebarItems() {
	return [];
}

/**
 * @returns { import("modules/shared").SidebarItemProps[] } Sidebar items for staff users
 */
function useStaffSidebarItems() {
	return [];
}

/**
 * Get yourself a list of sidebar items for the sidebar navigation.
 *
 * @param { object } options
 */
export function useSidebarItems({ user = {} }) {
	const { role } = user;

	/**
	 * Sidebar items for the main sidebar navigation
	 */
	const sidebarItems =
		{
			[userTypeAdmin]: useAdminSidebarItems(),
			[userTypeStudent]: useStudentSidebarItems(user),
			[userTypeStaff]: useStaffSidebarItems(user),
		}[role] || [];

	/**
	 * Sidebar items for the secondary sidebar navigation
	 */
	const secondarySidebarItems = [
		{
			label: "Help",
			icon: HeadphonesIcon,
			buttonProps: {
				// onClick: openHelpDialog,
			},
		},
	];

	// if (role === userTypeStudent) {
	// } else if (role === userTypeStaff) {
	// }

	return {
		sidebarItems,
		secondarySidebarItems,
	};
}

/**
 * @param { Omit<Parameters<typeof useSidebarItems>[0], 'user'> } options
 */
export function useContextualizedSidebarItems(options) {
	const { user } = useUserContext();

	return useSidebarItems({ user, ...options });
}
