export default {
  // Specify the environment in which your code will run (e.g., browser, node).
  env: {
    browser: true,
    node: false,
  },
  // Extend configurations for popular coding styles or frameworks.
  extends: [
    'eslint:recommended', // Use ESLint's recommended rules.
    // Add more configurations as needed, e.g., 'plugin:react/recommended' for React projects.
  ],
  // Define your own rules or override existing ones.
  rules: {
    // Indentation: Use 2 spaces for indentation (you can adjust this to your preference).
    'indent': ['error', 2],
    // Enforce the use of single quotes for strings.
    'quotes': ['error', 'single'],
    // Require a semicolon at the end of each statement.
    'semi': ['error', 'always'],
    // Prevent trailing whitespace at the end of lines.
    'no-trailing-spaces': 'error',
    // Allow console.log and other console methods for development.
    'no-console': 'error',
    // Add more custom rules or overrides as needed.
  },
};