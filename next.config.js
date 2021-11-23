const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const withPlugins = require('next-compose-plugins')
const nextTranslate = require('next-translate')

const baseUrl = '/blog'

module.exports = withPlugins([[withBundleAnalyzer], nextTranslate], {
  basePath: baseUrl,
  assetPrefix: baseUrl,
})
