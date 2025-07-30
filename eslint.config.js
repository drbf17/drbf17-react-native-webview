// ESLint flat config for v9+

import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: new URL('.', import.meta.url).pathname,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...tseslint.configs['recommended-type-checked'].rules,
    },
  },
  {
    ignores: [
      '.yarn/',
      'eslint.config.mjs',
      'eslint.config.js',
      '*.config.js',
      '*.config.mjs',
      'babel.config.js',
      'metro.config.js',
      'jest.config.js',
      'react-native.config.js',
      '__tests__/',
      'example/babel.config.js',
      'example/metro.config.js',
      'example/jest.config.js',
      'example/react-native.config.js',
      'src/__tests__/',
    ],
  },
];
