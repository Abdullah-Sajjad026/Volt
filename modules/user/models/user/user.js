import { z } from "zod";
import { UserTypeSchema } from "../user-type/user-type";

export const UserSchema = z.object({
	id: z.string(),
	email: z.string(),
	firstName: z.string(),
	lastName: z.string(),
	phoneNumber: z.string(),
	role: UserTypeSchema,
	createdAt: z.date(),
	lastModifiedAt: z.date(),
	clientId: z.string().optional(),
});

/**
 * @typedef { z.infer<typeof UserSchema> } User
 */

/**
 * A baseline user object without any real values.
 * @type { User }
 */
export const defaultUser = {
	id: "",
	email: "",
	firstName: "",
	lastName: "",
	phoneNumber: "",
	role: "",
	createdAt: new Date(),
	lastModifiedAt: new Date(),
};
