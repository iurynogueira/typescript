module.exports = {
  extends: [
    'eslint:recommended',
    './rules/errors.js',
    './rules/node.js',
    './rules/style.js',
    './rules/variables.js',
    './rules/good-practices.js',
    './rules/imports.js',
    './rules/typescript.js',
    './rules/prettier.js',
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  globals: {
    __DEV__: true,
  },
}
