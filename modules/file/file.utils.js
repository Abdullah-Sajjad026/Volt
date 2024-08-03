import { z } from "zod";
import { ONE_MB } from "./file.constants";

/**
 * 2 MB
 */
export const defaultImageSize = ONE_MB * 2;
export const defaultImageSizeMb = "2MB";

/**
 * 2 MB
 */
export const defaultFileSize = defaultImageSize;
export const defaultFileSizeMb = defaultImageSizeMb;

/**
 * Generates a dynamic schema for URLs, single, and multiple files.
 * @param {Object} options
 * @param {boolean} options.required - Whether the field is required.
 * @param {number} options.maxFiles - The maximum number of files allowed.
 * @param {number} options.maxFileSize - The maximum size of a single file in bytes.
 * @param {string} options.maxFileSizeMb - The maximum size of a single file in MB, suffixed with "MB", such as "2MB".
 * @param {boolean} [options.allowEmpty=false] - Whether to allow empty files, defaults to false.
 * @param {string[]} [options.allowedFileExtensions=[]] - The allowed file extensions.
 */
export function generateFileSchema({
	required,
	maxFiles,
	maxFileSize,
	maxFileSizeMb,
	allowEmpty = false,
	allowedFileExtensions = [],
}) {
	return z.any().superRefine((files, ctx) => {
		// If required and is empty
		if (required && !files) {
			return ctx.addIssue({
				fatal: true,
				code: z.ZodIssueCode.custom,
				message: "Please upload a file",
			});
		}

		const isArray = Array.isArray(files) || files instanceof FileList;

		// Allow empty
		// If empty is allowed, skip undefined, non-array, and empty arrays.
		if (allowEmpty && (!files || !isArray || files.length === 0)) {
			return z.NEVER;
		}

		if (isArray) {
			// If empty isn't allowed and is empty
			if (!allowEmpty && files.length == 0) {
				return ctx.addIssue({
					fatal: true,
					code: z.ZodIssueCode.custom,
					message: "Please upload a file",
				});
			}

			if (files.length > maxFiles) {
				return ctx.addIssue({
					fatal: true,
					code: z.ZodIssueCode.custom,
					message: `You can only upload a maximum of ${maxFiles} files`,
				});
			}

			for (let i = 0; i < files.length; i++) {
				const file = files[i];

				// Files can also be coming from the server, in which case they would be strings, so we ignore them.
				if (file instanceof File) {
					const fileExtension = file.name.toLowerCase().split(".").pop();

					if (!allowedFileExtensions.includes(fileExtension)) {
						return ctx.addIssue({
							fatal: true,
							code: z.ZodIssueCode.custom,
							message: `File ${
								file.name
							} must be one of these types: ${allowedFileExtensions.join(
								", ",
							)}`,
						});
					}

					if (file.size > maxFileSize) {
						return ctx.addIssue({
							fatal: true,
							code: z.ZodIssueCode.custom,
							message: `File ${file.name} must be less than ${maxFileSizeMb}`,
						});
					}
				}
			}
		}
	});
}
