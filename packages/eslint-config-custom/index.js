module.exports = {
  plugins: ["import", "simple-import-sort", "@typescript-eslint"],
  extends: [
    "plugin:import/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "turbo",
    "prettier",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  rules: {
    "react/jsx-key": "off",
    "import/named": 0,

    //error prevention
    "array-callback-return": ["error", { checkForEach: true }],
    "no-await-in-loop": "error",
    //"no-constant-binary-expression": "error",
    "no-constructor-return": "error",
    "no-promise-executor-return": "error",
    "no-self-compare": "error",
    "no-template-curly-in-string": "error",
    "no-unmodified-loop-condition": "error",
    "no-unreachable-loop": "error",
    //"no-unused-private-class-members": "error",
    "no-use-before-define": "error",
    "require-atomic-updates": "error",

    // good practises
    camelcase: ["error", { properties: "never" }],
    eqeqeq: "error",
    "new-cap": ["error", { capIsNew: false }],
    "no-array-constructor": "error",
    "no-console": ["error", { allow: ["error"] }],
    "no-else-return": ["error", { allowElseIf: false }],
    "no-extend-native": "error",
    "no-lonely-if": "error",
    "no-param-reassign": "error",
    "no-return-assign": "error",
    "no-throw-literal": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-const": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    radix: "error",
    yoda: "error",

    // style
    curly: "error",
    "lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: true },
    ],
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
    ],

    // plugins
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "import/no-unresolved": "error",
    "import/no-webpack-loader-syntax": "error",
    //"prettier/prettier": ["error", { printWidth: 82 }],
    "prettier/prettier": "error",
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
    "no-unused-vars": "off",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
  },
};
