const fs = require('fs')
const { join } = require('path')
const basic = require('@sepveneto/eslint-config-basic')

const tsconfig = process.env.ESLINT_TSCONFIG || 'tsconfig.eslint.json'

module.exports = {
  extends: [
    '@sepveneto/eslint-config-basic',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] },
    },
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
  }
}