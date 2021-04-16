module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-use-before-define': ['error', { functions: false, classes: false, variables: true }],
    'no-alert': 'off',
  },
};
