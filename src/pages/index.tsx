import React from 'react'

import { GetStaticProps } from 'next'

import { BlogGallery, IBlogGalleryProps } from '../components/Blogs/BlogGallery'
import { Hero } from '../components/Hero/Hero'
import { Meta } from '../components/Layout/Meta'
import { IPaginationProps } from '../components/Pagination/Pagination'
import { Base } from '../components/Templates/Base'
import { Config } from '../helpers/_config'
import fetchContenful from '../helpers/_fetchContentful'

const Blog = (props: IBlogGalleryProps) => (
  <Base
    meta={<Meta title={Config.title} description={Config.description} />}
    hero={<Hero title={Config.title} description={Config.description} />}
  >
    <BlogGallery posts={props.posts} pagination={props.pagination} />
  </Base>
)

export const getStaticProps: GetStaticProps<IBlogGalleryProps> = async () => {
  const { blogEntryCollection } = await fetchContenful(
    'blog',
    `{
      blogEntryCollection  {
        items {
          slug,
          title,
          heroImage {
            url,
            title
          },
          socialDescription,
          content {
            json
          },
          tagsCollection {
            items {
              name
            }
          },
          author {
            name,
            bio,
            jobTitle,
          },
          publishDate
        }
      }
    }`
  )

  const posts = blogEntryCollection.items
  const pagination: IPaginationProps = {}

  if (posts.length > Config.pagination_size) {
    pagination.next = '/page2'
  }

  return {
    props: {
      posts: posts.slice(0, Config.pagination_size),
      pagination,
    },
  }
}

export default Blog
