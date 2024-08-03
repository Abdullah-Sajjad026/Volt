import {
	userTypeAdmin,
	userTypeAnonymous,
	userTypeStaff,
	userTypeStudent,
} from "modules/user/user.config";
import { z } from "zod";

export const UserTypeSchema = z.union([
	z.literal(userTypeAdmin),
	z.literal(userTypeStudent),
	z.literal(userTypeStaff),
	z.literal(userTypeAnonymous),
]);

/**
 * @typedef { z.infer<typeof UserTypeSchema> } UserType
 */

/**
 *
 */
export const defaultUserType = userTypeAnonymous;
