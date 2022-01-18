import React from 'react'

import { format } from 'date-fns'
import { GetStaticPaths, GetStaticProps } from 'next'

import fetchContenful from '../../helpers/_fetchContentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { getRichTextRenderOptions } from '../../helpers/_richTextOptions'

import { Content } from '../../components/Content/Content'
import { Hero } from '../../components/Hero/Hero'
import { Meta } from '../../components/Layout/Meta'
import { RightSidebar } from '../../components/Templates/RightSidebar'

type IPostUrl = {
  slug: string
}

type IPostProps = {
  title: string
  slug: string
  heroImage: { name: string; url: string }
  socialDescription: string
  content: any
  tags: string[]
  author: { name: string; bio: string }
  publishDate: string
}

const DisplayPost = (props: IPostProps) => (
  <RightSidebar
    meta={
      <Meta
        title={props.title}
        description={props.socialDescription}
        post={{
          image: props.heroImage.url,
          date: props.publishDate,
          author: props.author.name,
        }}
      />
    }
    hero={
      <Hero
        title={props.title}
        description={`By ${props.author.name} · ${format(new Date(props.publishDate), 'LLLL d, yyyy')}`}
      />
    }
    author={props.author}
    // recentPosts={props.recentPosts}
    categoryCollection={props.tags}
  >
    <Content>
      <div>{documentToReactComponents(props.content.json, getRichTextRenderOptions(props.content.links))}</div>
    </Content>
  </RightSidebar>
)

export const getStaticPaths: GetStaticPaths<IPostUrl> = async () => {
  const { blogEntryCollection } = await fetchContenful(
    'blog',
    `{
        blogEntryCollection{
          items {
            slug
          }
        }
      }`
  )
  const posts = blogEntryCollection.items

  return {
    paths: posts.map((post: any) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<IPostProps> = async ({ params }) => {
  const { blogEntryCollection } = await fetchContenful(
    'blog',
    `{
        blogEntryCollection(where: { slug: "${params!.slug}" }, limit: 1) {
          items {
            slug,
            title,
            heroImage {
              url,
              title
            },
            socialDescription,
            content {
              json,
              links {
                assets {
                  block {
                    fileName
                    title
                    description
                    url
                    sys {
                      id
                    }
                  }
                }
              }
            },
            tagsCollection {
              items {
                name,
                slug
              }
            },
            author {
              name,
              bio,
              jobTitle,
              socialLinksCollection {
                items {
                  name,
                  link
                }
              }
            },
            publishDate,
          }
        }
      }`
  )

  const post = blogEntryCollection.items[0]

  return {
    props: {
      slug: post.slug,
      title: post.title,
      heroImage: post.heroImage,
      socialDescription: post.socialDescription,
      content: post.content,
      tags: post.tagsCollection.items,
      author: post.author,
      publishDate: post.publishDate,
    },
  }
}

export default DisplayPost
