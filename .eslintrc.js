module.exports = {
  extends: ['eslint-config-umi', 'prettier'],
  globals: {},
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'sort-vars': ['error', { ignoreCase: true }],
    'import/order': 'error',
  },
};
