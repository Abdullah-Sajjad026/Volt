import z from "zod";

const EnumValueSchema = z.object({
	label: z.string(),
	value: z.string(),
});
const EnumListSchema = z.record(EnumValueSchema);

/**
 * @typedef {z.infer<typeof EnumValueSchema>} EnumValue
 */

/**
 * @typedef {z.infer<typeof EnumListSchema>} EnumList
 */
