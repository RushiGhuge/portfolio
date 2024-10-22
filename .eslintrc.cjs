module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    // Removed React-specific linting rules
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  // Removed React settings and plugins
  rules: {
    // You can add other general ESLint rules here if needed
  },
}
