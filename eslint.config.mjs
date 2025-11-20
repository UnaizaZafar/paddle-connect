const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // ============================
      // 🔥 HIGH PRIORITY — ERRORS
      // ============================
      "no-debugger": "error",
      "no-duplicate-imports": "error",
      "no-var": "error",
      "prefer-const": "error",
      "react-hooks/rules-of-hooks": "error",
      "react/jsx-no-undef": "error",
      "react/jsx-key": "error",
      "react/jsx-no-duplicate-props": "error",
      eqeqeq: ["error", "always", { null: "ignore" }],
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-new-wrappers": "error",
      "no-throw-literal": "error",
      "prefer-promise-reject-errors": "error",

      // TypeScript critical rules
      "@typescript-eslint/no-explicit-any": "error", // force safer types
      "@typescript-eslint/no-non-null-assertion": "error",

      // ============================
      // ⚠️ MEDIUM PRIORITY — WARNINGS
      // ============================
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-arrow-callback": "warn",
      "react-hooks/exhaustive-deps": "warn",
      "react/no-unescaped-entities": "warn",
      quotes: ["warn", "double", { avoidEscape: true }],
      semi: ["warn", "always"],
      "comma-dangle": ["warn", "always-multiline"],

      // TS helpers
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      // ============================
      // 💤 RULES YOU DON’T NEED
      // ============================
      // (Keeping them OFF so they don’t bother you)
      "max-len": "off",
      "react/jsx-uses-react": "off",
      "react/prop-types": "off",
      "@typescript-eslint/explicit-function-return-type": "off",

      // ============================
      // 🆕 NEXT.JS BEST PRACTICES
      // ============================
      "@next/next/no-img-element": "warn",         // encourage <Image/>
      "@next/next/no-html-link-for-pages": "error", // important for routing
      "@next/next/no-page-custom-font": "warn",     // enforce next/font
      "@next/next/google-font-display": "warn",
    },
  },
]);
