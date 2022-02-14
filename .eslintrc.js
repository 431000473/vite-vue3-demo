module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
      alias: { map: [['@', './src']] }
    }
  },
  extends: [
    'plugin:vue/vue3-essential', // essential 改，vue3 The template root requires exactly one element错误
    'airbnb-base',
    'plugin:prettier/recommended',
    // 添加 prettier 插件
    'plugin:jest/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' }
    ],
    'vue/multi-word-component-names': 0
  }
}
