/**
 * A simple hook to get the file information.
 * @param {string | File} file
 */
export default function useFile(file) {
	// Check if the file is a file or a string
	const isFile = file instanceof File;

	// Get the file name and extension
	const fileName = isFile ? file.name : file;
	const fileExtension = fileName.split(".").pop();

	// Create a source
	const src = isFile ? URL.createObjectURL(file) : file;

	return {
		src,
		isFile,
		fileName,
		fileExtension,
	};
}
