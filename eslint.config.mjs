import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import globals from "globals";

const compat = new FlatCompat({
	baseDirectory: dirname(fileURLToPath(import.meta.url)),
});

export default [
	{
		ignores: [
			"**/node_modules/**",
			"**/.next/**",
			"**/playwright-report/**",
			"**/test-results/**",
			"apps/storefront/public/**",
		],
	},
	js.configs.recommended,
	...compat
		.extends("next/core-web-vitals")
		.map((c) => ({ ...c, files: ["apps/storefront/**/*.{js,jsx,mjs}"] })),
	{
		files: ["apps/storefront/**/*.{js,jsx,mjs}"],
		settings: { next: { rootDir: "apps/storefront" } },
	},
	{
		// Legacy GraphQL-era code that Phase 5 rewrites; unused vars stay visible as warnings.
		files: ["apps/storefront/app/**/*.js"],
		rules: { "no-unused-vars": ["warn", { caughtErrors: "none" }] },
	},
	{
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			globals: {
				...globals.browser,
				...globals.node,
				WebKitCSSMatrix: "readonly",
			},
			parserOptions: { ecmaFeatures: { jsx: true } },
		},
	},
	prettier,
];
