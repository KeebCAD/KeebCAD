import vitest from '@vitest/eslint-plugin';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import perfectionist from 'eslint-plugin-perfectionist';
import pluginPlaywright from 'eslint-plugin-playwright';
import sonarjs from 'eslint-plugin-sonarjs';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import pluginVue from 'eslint-plugin-vue';
import { globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfigWithVueTs([
  {
    files: ['**/*.{ts,mts,tsx,vue}'],
    name: 'app/files-to-lint',
  },
  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**', '**/typed-router.d.ts']),
  tseslint.configs.recommended,
  pluginVue.configs['flat/recommended'],
  vueTsConfigs.recommended,
  sonarjs.configs.recommended,
  perfectionist.configs['recommended-natural'],
  eslintPluginUnicorn.configs.recommended,
  {
    files: ['**/*.vue'],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          case: 'pascalCase',
        },
      ],
      'vue/multi-word-component-names': 'off',
      'vue/require-default-prop': 'off',
    },
  },
  {
    files: ['**/pages/**/*.vue'],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
        },
      ],
      'vue/multi-word-component-names': 'off',
      'vue/require-default-prop': 'off',
    },
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
    files: ['e2e/**/*.{test,spec}.ts'],
    ...pluginPlaywright.configs['flat/recommended'],
  },
  {
    rules: {
      'unicorn/prevent-abbreviations': [
        'error',
        {
          replacements: {
            props: false,
            utils: false,
          },
        },
      ],
    },
  },
  skipFormatting,
]);
