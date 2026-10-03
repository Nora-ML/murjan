import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		include: ["{apps,packages}/**/*.test.{js,mjs}"],
		exclude: ["**/node_modules/**", "**/e2e/**"],
		passWithNoTests: true,
	},
});
