import z from "zod";

export const ONE_MB = 1024 * 1024;

export const IMAGE_EXTENSIONS = [
	"jpg",
	"jpeg",
	"jfif",
	"png",
	"gif",
	"ico",
	"bmp",
	"svg",
	"webp",
];
export const IMAGE_ACCEPT = [
	"image/jpeg",
	"image/jfif",
	"image/png",
	"image/gif",
	"image/x-icon",
	"image/bmp",
	"image/svg+xml",
	"image/webp",
];

export const DOCUMENT_EXTENSIONS = [
	"pdf",
	"doc",
	"docx",
	"xls",
	"xlsx",
	"ppt",
	"pptx",
	"txt",
];

export const DOCUMENT_ACCEPT = [
	"application/pdf",
	"application/msword",
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
	"application/vnd.ms-excel",
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
	"application/vnd.ms-powerpoint",
	"application/vnd.openxmlformats-officedocument.presentationml.presentation",
	"text/plain",
];

export const storedFileSchema = z.object({
	fileName: z.string().optional(),
	contentType: z.string().optional(),
	storeKey: z.string().optional(),
	url: z.string().nullable().optional(),
});
