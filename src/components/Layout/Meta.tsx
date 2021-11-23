import React from 'react'
import Head from 'next/head'
import { Config } from '../../helpers/_config'

type IMetaProps = {
  title: string
  description: string
  canonical?: string
  post?: {
    image: string
    author: string
    date: string
    modifiedDate?: string
  }
}

const Meta = (props: IMetaProps) => {
  const publishDate = props.post ? new Date(props.post.date).toISOString() : new Date().toISOString()
  const modifiedDate =
    props.post && props.post.modifiedDate ? new Date(props.post.modifiedDate).toISOString() : publishDate

  return (
    <>
      <Head>
        <meta charSet='UTF-8' key='charset' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />

        {/* <!-- Favicons --> */}
        <link rel='apple-touch-icon' sizes='180x180' href='images/metas/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='images/metas/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='images/metas/favicon-16x16.png' />
        <link rel='manifest' href='images/metas/manifest.json' />
        <link rel='mask-icon' href='images/metas/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />

        <title>{`${props.title} | ${Config.site_name}`}</title>
        <meta name='description' content={props.description} key='description' />
        <meta name='author' content={props.post?.author || 'Elliot for Water'} key='author' />
        {props.canonical && <link rel='canonical' href={props.canonical} key='canonical' />}

        {/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
        <meta name='og:title' content={`${props.title} | ${Config.title}`} />
        <meta name='og:description' content={props.description} />
        <meta name='og:url' content={`${process.env.NEXT_PUBLIC_WEBAPP_URL}/blog`} />
        <meta name='og:site_name' content={Config.locale} />
        <meta property='og:locale' content={Config.locale} key='og:locale' />

        {props.post && (
          <>
            <meta property='og:type' content='article' key='og:type' />
            <meta property='og:image' content={`${props.post.image}`} key='og:image' />
            <meta name='twitter:card' content='summary_large_image' key='twitter:card' />
            <meta property='article:published_time' content={publishDate} key='article:published_time' />
            <meta property='article:modified_time' content={modifiedDate} key='article:modified_time' />
            <script
              type='application/ld+json'
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: `
          {
            "description": "${props.description}",
            "author": {
              "@type": "Person",
              "name": "${props.post.author}"
            },
            "@type": "BlogPosting",
            "url": "${process.env.NEXT_PUBLIC_WEBAPP_URL}/blog",
            "publisher": {
              "@type": "Organization",
              "logo": {
                "@type": "ImageObject",
                "url": "${process.env.NEXT_PUBLIC_WEBAPP_URL}/assets/images/logo.png"
              },
              "name": "${props.post.author}"
            },
            "headline": "${props.title} | ${Config.title}",
            "image": ["${props.post.image}"],
            "datePublished": "${publishDate}",
            "dateModified": "${modifiedDate}",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "${process.env.NEXT_PUBLIC_WEBAPP_URL}/blog"
            },
            "@context": "http://schema.org"
          }`,
              }}
              key='ldjson'
            />
          </>
        )}
      </Head>
    </>
  )
}

export { Meta }
