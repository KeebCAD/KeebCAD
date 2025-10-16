import css from '@eslint/css';
import js from '@eslint/js';
import vitest from '@vitest/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import depend from 'eslint-plugin-depend';
import perfectionist from 'eslint-plugin-perfectionist';
import sonarjs from 'eslint-plugin-sonarjs';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import pluginVue from 'eslint-plugin-vue';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    extends: ['js/recommended', 'depend/flat/recommended'],
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    plugins: { depend, js },
  },
  tseslint.configs.recommended,
  pluginVue.configs['flat/essential'],
  sonarjs.configs.recommended,
  perfectionist.configs['recommended-natural'],
  eslintPluginUnicorn.configs.recommended,
  eslintConfigPrettier,
  {
    files: ['**/*.vue'],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
  {
    files: ['**/*.spec.ts'],
    ...vitest.configs.recommended,
    languageOptions: {
      globals: {
        ...vitest.environments.env.globals,
      },
    },
    settings: {
      vitest: {
        typecheck: true,
      },
    },
  },
  {
    extends: ['css/recommended'],
    files: ['**/*.css'],
    language: 'css/css',
    plugins: { css },
  },
]);
