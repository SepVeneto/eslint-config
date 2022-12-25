const { isPackageExists } = require('local-pkg')

const TS = isPackageExists('typescript')

if (!TS) {
  console.warn('[@sepveneto/eslint-config-vue] Typescript is not install, eslint js only')
}

module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {},
    }
  ],
  extends: [
    'plugin:vue/vue3-recommended',
    TS
      ? '@sepveneto/eslint-config-ts'
      : '@sepveneto/eslint-config-basic'
  ],
  rules: {},
}