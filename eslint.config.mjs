import pluginJs from "@eslint/js";
import playwright from "eslint-plugin-playwright";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  playwright.configs["flat/recommended"],
  {
    files: ["**/*.ts"],
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        project: true,
      },
    },
    rules: {
      "playwright/expect-expect": "error",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/await-thenable": "error",
    },
  },
];
