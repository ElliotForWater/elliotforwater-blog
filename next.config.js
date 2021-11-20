const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const baseUrl = '/blog'

module.exports = withBundleAnalyzer({
  basePath: baseUrl,
  assetPrefix: '/blog',
})
