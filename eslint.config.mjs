import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';

export default [
  { ignores: ['dist/**', 'node_modules/**'] },
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['src/**/*.{js,vue}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        // Replaced at build time by Vue CLI's DefinePlugin.
        process: 'readonly'
      }
    },
    rules: {
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-unused-vars': ['error', { argsIgnorePattern: '^_', caughtErrors: 'none' }],
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-const': 'error',
      'vue/html-self-closing': [
        'error',
        {
          html: { void: 'never', normal: 'never', component: 'always' },
          svg: 'always',
          math: 'always'
        }
      ],
      'vue/max-attributes-per-line': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/no-unused-refs': 'error',
      'vue/no-useless-v-bind': 'error',
      'vue/singleline-html-element-content-newline': 'off'
    }
  },
  {
    files: ['*.js', '*.mjs', 'tests/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: { ...globals.node }
    },
    rules: {
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-const': 'error'
    }
  }
];
