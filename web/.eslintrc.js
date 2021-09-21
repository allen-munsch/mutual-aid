module.exports = {
  extends: ["next/core-web-vitals", "airbnb-typescript", "plugin:prettier/recommended", "plugin:@next/next/recommended"],

  plugins: ["simple-import-sort", "prettier"],

  rules: {
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/quotes": "off",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "no-nested-ternary": "off",
    "react/jsx-props-no-spreading": "off",
    "react/no-children-prop": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",

    "prettier/prettier": "error",

    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Node.js builtins.
          [
            "^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)",
          ],
          // Packages.
          ["^@?\\w"],
          // Side effect imports.
          ["^\\u0000"],
          // Parent imports. Put `..` last.
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Other relative imports. Put same-folder imports and `.` last.
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
        ],
      },
    ],
  },

  parserOptions: {
    project: './tsconfig.json',
  },
};