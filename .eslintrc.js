module.exports = {
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'airbnb/hooks'
  ],
  plugins: [
    'react',
    'react-native',
    'react-hooks'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  env: {
    jest: true,
    'react-native/react-native': true,
  },
  rules: {
    'no-use-before-define': 'off',
    'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'padded-blocks': 'off',
    'arrow-body-style': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 'off',
    'react-native/no-raw-text': 2,
    'react-native/no-single-element-style-arrays': 2,
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-bind': 'off',
    'react/style-prop-object': 'off'
  },
  globals: {
    fetch: false
  }
};
