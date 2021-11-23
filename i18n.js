module.exports = {
  locales: ['en', 'it', 'es'],
  defaultLocale: 'en',
  pages: {
    '*': ['common'],
    '/': ['home'],
    '/blog': ['blog'],
    '/post': ['post'],
  },
  react: {
    useSuspense: false,
    wait: true,
  },
  // make sure pages' `getInitialProps` are accessible via
  // `App.getInitialProps` in `_app`
  // https://github.com/vinissimus/next-translate#3-configuration
  staticsHoc: require('hoist-non-react-statics'),
}
