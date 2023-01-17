const { isPackageExists, getPackageInfoSync } = require('local-pkg')

const vue = getPackageInfoSync('vue')
const [, version] = vue.packageJson.version.match(/(\d+)\.(?:\d+)\.(?:.+)/) ?? []
const isVue2 = version === '2'

const TS = isPackageExists('typescript')
if (!TS) {
  console.warn('[@sepveneto/eslint-config-vue] Typescript is not install, eslint js only')
}

const MP = isPackageExists('@dcloudio/uni-mp-weixin')

module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        // https://github.com/vuejs/eslint-plugin-vue/issues/1625
        'no-undef': 'off',
      },
    }
  ],
  extends: [
    isVue2
      ? 'plugin:vue/vue-recommended'
      : 'plugin:vue/vue3-recommended',
    TS
      ? '@sepveneto/eslint-config-ts'
      : '@sepveneto/eslint-config-basic',
    MP
      ? 'sepveneto/eslint-config-mp'
      : ''
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
  },
}