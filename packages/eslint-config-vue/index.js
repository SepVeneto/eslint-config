const { isPackageExists, getPackageInfoSync } = require('local-pkg')

const vue = getPackageInfoSync('vue')
const [, version] = vue?.packageJson.version.match(/(\d+)\.(?:\d+)\.(?:.+)/) ?? []
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
      ? 'plugin:vue/recommended'
      : 'plugin:vue/vue3-recommended',
    TS
      ? '@sepveneto/eslint-config-ts'
      : '@sepveneto/eslint-config-basic',
    MP
      ? '@sepveneto/eslint-config-mp'
      : ''
  ],
  rules: {
    // 'vue/multi-word-component-names': 'off',
    // Recommanded
    'vue/no-v-html': 'off',
    'vue/component-tags-order': ['error', {
      order: ['template', 'script', 'style'],
    }],
  
    // Uncategorized
    'vue/block-tag-newline': ['error', {
      singleline: 'always',
      multiline: 'always',
    }],
    /**
     * https://vuejs.org/style-guide/rules-strongly-recommended.html#component-name-casing-in-templates
     */
    'vue/component-options-name-casing': ['error', 'PascalCase'],
    'vue/custom-event-name-casing': ['error', isVue2 ? 'camelCase' | 'ebab-case' : 'camelCase'],
    'vue/html-comment-content-spacing': ['error', 'always', {
      exceptions: ['-'],
    }],
    'vue/no-useless-v-bind': 'error',
    'vue/no-v-text-v-html-on-component': 'error',
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/prefer-separate-static-class': 'error',
    // 'vue/html-comment-content-newline': 'error',

    // extensions
    // 'vue/max-len': 'warn',
    'vue/array-bracket-spacing': ['error', 'never'],
    'vue/arrow-spacing': ['error', { before: true, after: true }],
    'vue/block-spacing': ['error', 'always'],
    'vue/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
    'vue/comma-dangle': ['error', 'always-multiline'],
    'vue/comma-spacing': ['error', { before: false, after: true }],
    'vue/comma-style': ['error', 'last'],
    'vue/dot-location': ['error', 'property'],
    'vue/dot-notation': ['error', { allowKeywords: true }],
    'vue/eqeqeq': ['error', 'smart'],
    // 'vue/func-call-spacing': ['off', 'never'],
    'vue/key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'vue/keyword-spacing': ['error', { before: true, after: true }],
    'vue/no-constant-condition': 'warn',
    'vue/no-empty-pattern': 'error',
    'vue/no-extra-parens': ['error', 'functions'],
    'vue/no-irregular-whitespace': 'error',
    'vue/no-loss-of-precision': 'error',
    'vue/no-restricted-syntax': [
      'error',
      'DebuggerStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'vue/no-sparse-arrays': 'error',
    'vue/object-curly-newline': ['error', { multiline: true, consistent: true }],
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
    'vue/object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    'vue/operator-linebreak': ['error', 'before'],
    'vue/prefer-template': 'error',
    'vue/quote-props': ['error', 'consistent-as-needed'],
    'vue/space-in-parens': ['error', 'never'],
    'vue/space-infix-ops': 'error',
    'vue/space-unary-ops': ['error', { words: true, nonwords: false }],
    'vue/template-curly-spacing': 'error',
    'vue/component-name-in-template-casing': 'warn'
  },
}