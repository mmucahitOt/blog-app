import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import vitestGlobals from "eslint-plugin-vitest-globals";
import babelParser from "@babel/eslint-parser";

export default [
  js.configs.recommended,
  // JavaScript files
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        // Node.js globals
        process: "readonly",
        Buffer: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        module: "readonly",
        require: "readonly",
        exports: "readonly",
        global: "readonly",
        console: "readonly",
        // Browser globals
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly",
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "vitest-globals": vitestGlobals,
    },
    rules: {
      // General rules
      eqeqeq: "error",
      "no-trailing-spaces": "error",
      "object-curly-spacing": ["error", "always"],
      "arrow-spacing": ["error", { before: true, after: true }],
      "no-console": 0,
      "no-unused-vars": 0,

      // React rules
      "react/react-in-jsx-scope": "off",
      "react/prop-types": 0,
    },
    settings: {
      react: { version: "18.2" },
    },
  },
  // JSX files
  {
    files: ["**/*.jsx"],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-react"],
        },
        ecmaFeatures: {
          jsx: true,
        },
      },
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        // Node.js globals
        process: "readonly",
        Buffer: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        module: "readonly",
        require: "readonly",
        exports: "readonly",
        global: "readonly",
        console: "readonly",
        // Browser globals
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly",
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "vitest-globals": vitestGlobals,
    },
    rules: {
      // General rules
      eqeqeq: "error",
      "no-trailing-spaces": "error",
      "object-curly-spacing": ["error", "always"],
      "arrow-spacing": ["error", { before: true, after: true }],
      "no-console": 0,
      "no-unused-vars": 0,

      // React rules
      "react/react-in-jsx-scope": "off",
      "react/prop-types": 0,
    },
    settings: {
      react: { version: "18.2" },
    },
  },
  // Backend files - CommonJS, double quotes, semicolons
  {
    files: ["backend/**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      ecmaVersion: "latest",
    },
    rules: {
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react-hooks/rules-of-hooks": "off",
      "react-hooks/exhaustive-deps": "off",
      "vitest-globals/no-importing-test": "off",
      "vitest-globals/no-conditional-expect": "off",
      "vitest-globals/no-conditional-in-test": "off",
      "vitest-globals/no-conditional-tests": "off",
      "vitest-globals/no-focused-tests": "off",
      "vitest-globals/no-standalone-expect": "off",
      "vitest-globals/prefer-comparison-matcher": "off",
      "vitest-globals/prefer-equality-matcher": "off",
      "vitest-globals/prefer-expect-assertions": "off",
      "vitest-globals/prefer-expect-resolves": "off",
      "vitest-globals/prefer-lowercase-title": "off",
      "vitest-globals/prefer-mock-promise-shorthand": "off",
      "vitest-globals/prefer-snapshot-hint": "off",
      "vitest-globals/prefer-strict-equal": "off",
      "vitest-globals/prefer-to-be": "off",
      "vitest-globals/prefer-to-be-falsy": "off",
      "vitest-globals/prefer-to-be-object": "off",
      "vitest-globals/prefer-to-be-truthy": "off",
      "vitest-globals/prefer-to-contain": "off",
      "vitest-globals/prefer-to-have-length": "off",
      "vitest-globals/require-expect": "off",
      "vitest-globals/require-hook": "off",
      "vitest-globals/require-to-throw-message": "off",
      "vitest-globals/require-top-level-describe": "off",
      "vitest-globals/valid-expect": "off",
    },
  },
  // E2E files - ES modules, double quotes, semicolons
  {
    files: ["e2e/**/*.js"],
    languageOptions: {
      sourceType: "module",
      ecmaVersion: "latest",
    },
    rules: {
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react-hooks/rules-of-hooks": "off",
      "react-hooks/exhaustive-deps": "off",
      "vitest-globals/no-importing-test": "off",
      "vitest-globals/no-conditional-expect": "off",
      "vitest-globals/no-conditional-in-test": "off",
      "vitest-globals/no-conditional-tests": "off",
      "vitest-globals/no-focused-tests": "off",
      "vitest-globals/no-standalone-expect": "off",
      "vitest-globals/prefer-comparison-matcher": "off",
      "vitest-globals/prefer-equality-matcher": "off",
      "vitest-globals/prefer-expect-assertions": "off",
      "vitest-globals/prefer-expect-resolves": "off",
      "vitest-globals/prefer-lowercase-title": "off",
      "vitest-globals/prefer-mock-promise-shorthand": "off",
      "vitest-globals/prefer-snapshot-hint": "off",
      "vitest-globals/prefer-strict-equal": "off",
      "vitest-globals/prefer-to-be": "off",
      "vitest-globals/prefer-to-be-falsy": "off",
      "vitest-globals/prefer-to-be-object": "off",
      "vitest-globals/prefer-to-be-truthy": "off",
      "vitest-globals/prefer-to-contain": "off",
      "vitest-globals/prefer-to-have-length": "off",
      "vitest-globals/require-expect": "off",
      "vitest-globals/require-hook": "off",
      "vitest-globals/require-to-throw-message": "off",
      "vitest-globals/require-top-level-describe": "off",
      "vitest-globals/valid-expect": "off",
    },
  },
  {
    ignores: [
      "dist/**",
      "node_modules/**",
      "frontend/dist/**",
      "backend/dist/**",
      "backend/node_modules/**",
      "frontend/.eslintrc.cjs",
      "frontend/vite.config.js",
      "frontend/testSetup.js",
      "e2e/test-results/**",
      "e2e/playwright-report/**",
    ],
  },
];
