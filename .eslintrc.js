module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    'cypress/globals': true
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'cypress'],
  rules: {}
}
