/**
 * These rules enforce the Airbnb Style Guide
 *
 * Visit this repo for more information:
 * https://github.com/airbnb/javascript
 */

module.exports = {
  'extends': [
    'airbnb-base',
    'eslint:recommended',
    'plugin:react/recommended',
  ],

  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'rules': {
    'no-unused-vars': ["error", { "argsIgnorePattern": "^_" }],
    'no-console': ["error", { 'allow': ["warn", "error"] }]
  },
};
