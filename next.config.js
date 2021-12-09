const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const withPlugins = require('next-compose-plugins')
const nextTranslate = require('next-translate')

const baseUrl = '/blog'

module.exports = withPlugins([[withBundleAnalyzer], nextTranslate], {
  basePath: baseUrl,
  assetPrefix: baseUrl,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'it', 'es'],
  },
  async rewrites() {
    return [
      // {
      //   source: '/blog',
      //   destination: `${process.env.NEXT_PUBLIC_BLOG_URL}/blog`,
      // },
      {
        source: '/blog/it/:path*',
        destination: `${process.env.NEXT_PUBLIC_BLOG_URL}/it/blog/:path*`,
      },
    ]
  },
})
