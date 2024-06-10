module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    "prettier",
  ],
  rules: {
    "prettier/prettier": ["error"],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    "react/require-default-props": [2, { functions: "defaultArguments" }]
  },
};
