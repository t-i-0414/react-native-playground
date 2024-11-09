module.exports = {
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',

  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
};
