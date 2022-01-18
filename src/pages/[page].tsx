import React from 'react'

import { GetStaticPaths } from 'next'

import { BlogGallery, IBlogGalleryProps } from '../components/Blogs/BlogGallery'
import { Hero } from '../components/Hero/Hero'
import { Meta } from '../components/Layout/Meta'
import { IPaginationProps } from '../components/Pagination/Pagination'
import { Base } from '../components/Templates/Base'
import { Config } from '../helpers/_config'
import { convertTo2D } from '../helpers/_pagination'
import fetchContenful from '../helpers/_fetchContentful'

type IPageUrl = {
  page: string
}

type IPaginatePostsProps = {
  pageNumber: number
  gallery: IBlogGalleryProps
}

const PaginatePosts = (props: IPaginatePostsProps) => (
  <Base
    meta={<Meta title={`${Config.title} | Page ${props.pageNumber}`} description={Config.description} />}
    hero={<Hero title={Config.title} description={Config.description} />}
  >
    <BlogGallery posts={props.gallery.posts} pagination={props.gallery.pagination} />
  </Base>
)

export const getStaticPaths: GetStaticPaths<IPageUrl> = async () => {
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
  const pages = convertTo2D(posts, Config.pagination_size)

  return {
    paths: pages.slice(1).map((_, index) => ({
      params: {
        // index starts from zero so we need to do index + 1
        // slice(1) removes the first page so we do another index + 1
        // the first page is implemented in index.tsx
        page: `page${index + 2}`,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
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
              name,
              slug
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
  const pages = convertTo2D(posts, Config.pagination_size)
  const currentPage = Number(params!.page.replace('page', ''))
  const currentInd = currentPage - 1

  const pagination: IPaginationProps = {}

  if (currentPage < pages.length) {
    pagination.next = `page${currentPage + 1}`
  }

  if (currentPage === 2) {
    pagination.previous = '/'
  } else {
    pagination.previous = `page${currentPage - 1}`
  }

  return {
    props: {
      pageNumber: currentPage,
      gallery: {
        posts: pages[currentInd],
        pagination,
      },
    },
  }
}

export default PaginatePosts
