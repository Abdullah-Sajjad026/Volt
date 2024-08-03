import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: ["setupTests.js"],
	},
	resolve: {
		alias: {
			components: path.resolve(__dirname, "./components"),
			constants: path.resolve(__dirname, "./constants"),
			context: path.resolve(__dirname, "./context"),
			helper_functions: path.resolve(__dirname, "./helper_functions"),
			hooks: path.resolve(__dirname, "./hooks"),
			modules: path.resolve(__dirname, "./modules"),
			pages: path.resolve(__dirname, "./pages"),
			styles: path.resolve(__dirname, "./styles"),
		},
	},
});
