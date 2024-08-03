import { z } from "zod";

export const AuthSchema = z.object({
  token: z.string(),
});

/**
 * @typedef { z.infer<typeof AuthSchema> } Auth
 */
