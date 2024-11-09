// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'expo',
    'prettier',
  ],
  plugins: ['unused-imports', 'prettier'],
  rules: {
    // prettier
    'prettier/prettier': 'error',

    // TypeScript
    'no-console': 'error',
    'no-debugger': 'error',
    'no-useless-catch': 'error',
  },
  overrides: [
    {
      files: ['src/**/*.ts', 'src/**/*.tsx'],
      rules: {
        // TypeScript
        'unused-imports/no-unused-imports': 'error',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            args: 'all',
            argsIgnorePattern: '^_',
            caughtErrors: 'all',
            caughtErrorsIgnorePattern: '^_',
            destructuredArrayIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            ignoreRestSiblings: true,
          },
        ],
        'import/no-default-export': 'error',
        'func-style': ['error', 'expression'],
        'object-shorthand': ['error', 'always'],
        'newline-before-return': 'error',

        // React
        'react/react-in-jsx-scope': 'off',
        'react/function-component-definition': [
          'error',
          {
            namedComponents: 'arrow-function',
            unnamedComponents: 'arrow-function',
          },
        ],
        'react/no-unescaped-entities': 'off',
      },
    },
    {
      files: ['**/*.stories.ts', '**/*.stories.tsx'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
};
