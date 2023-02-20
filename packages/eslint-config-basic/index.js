module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  reportUnusedDisableDirectives: true,
  extends: [
    './standard.js',
    'plugin:import/recommended',
    'plugin:eslint-comments/recommended',
    // 'plugin:jsonc/recommended-with-jsonc',
    // 'plugin:yml/standard',
    // 'plugin:markdown/recommended'
  ],
  ignorePatterns: [
    '*.min.*',
    '*.d.ts',
    'CHANGELOG.md',
    'dist',
    'public',
    'package-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '!.github',
    '!.vitepress',
    '!.vscode',
  ],
  plugins: [
    'html',
  ],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs'] },
    }
  },
  rules: {
    'semi': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'camelcase': 'off',
    'space-before-function-paren': 'off',

    'import/no-unresolved': 'off',

    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false,
      },
    ],
  }
}