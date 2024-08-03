import { z } from "zod";

export const SidebarItemPropsSchema = z.lazy(() =>
	z.object({
		label: z.string(),
		icon: z.function().optional(),
		chip: z.function().optional(),
		badge: z.function().optional(),
		disableChildren: z.boolean().optional(),
		children: z.array(SidebarItemPropsSchema).optional(),
		buttonProps: z
			.object({
				path: z.string().optional(),
				onClick: z.function().optional(),
			})
			.optional(),
	}),
);

/**
 * @typedef { Partial<Pick<z.infer<typeof SidebarItemPropsSchema>, 'label' | 'disableChildren'>> & {
 * 	icon?: React.ComponentType
 * 	chip?: React.ReactNode
 * 	badge?: React.ReactNode
 * 	children?: SidebarItemProps[]
 * 	buttonProps?: Omit<import("@mui/material").ListItemButtonProps, 'href'> & { path?: string, loading?: boolean }
 * } } SidebarItemProps
 */
