// Get tailwind theme
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";

const tailwindTheme = resolveConfig(tailwindConfig).theme;

export const border = "1px solid var(--color-gray-100)";
export const borderDark = "1px solid var(--color-gray-200)";

export const borderHover = "1px solid var(--color-gray-300)";

export const borderRadius = "6px";

export const gap = tailwindTheme.spacing[3];

export const margin = tailwindTheme.spacing[3];

export const padding = tailwindTheme.spacing[3];

export const boxShadow = "0px 2px 6px 0px rgba(0, 0, 0, 0.06)";

export const transition = (property = "all") => `${property} 0.2s ease-in-out`;

export default tailwindTheme;
