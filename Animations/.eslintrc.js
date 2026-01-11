module.exports = {
    root: true,
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-native/all',
      'plugin:prettier/recommended'
    ],
    plugins: ['react', 'react-native', 'prettier'],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    env: {
      'react-native/react-native': true,
      es6: true,
      node: true,
    },
    rules: {
        'prettier/prettier': 'error',
        'react-native/no-inline-styles': 'warn', // warns on inline styles
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  