import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { BlogGallery, IBlogGalleryProps } from '../../components/Blogs/BlogGallery'
import { Hero } from '../../components/Hero/Hero'
import { Meta } from '../../components/Layout/Meta'
import { Base } from '../../components/Templates/Base'
import { Config } from '../../helpers/_config'
import fetchContenful from '../../helpers/_fetchContentful'

type ICategoryUrl = {
  slug: string
}

type IDisplayPostProps = {
  categoryName: string
  gallery: IBlogGalleryProps
}

const DisplayCategory = (props: IDisplayPostProps) => {
  return (
    <Base
      meta={<Meta title={`Category ${props.categoryName}`} description={Config.description} />}
      hero={
        <Hero title={`Category ${props.categoryName}`} description={`${props.categoryName} ${Config.description}`} />
      }
    >
      <BlogGallery posts={props.gallery.posts} />
    </Base>
  )
}

export const getStaticPaths: GetStaticPaths<ICategoryUrl> = async () => {
  const { tagCollection } = await fetchContenful(
    'category',
    `{
        tagCollection {
          items {
            slug,
            name
          }
        }
      }`
  )
  const category = tagCollection.items

  return {
    paths: category.map((cat: any) => ({
      params: {
        slug: cat.slug,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<IDisplayPostProps, ICategoryUrl> = async ({ params }) => {
  const { tagCollection } = await fetchContenful(
    'category',
    `{
      tagCollection(where: { slug: "${params!.slug}" }, limit: 1) {
        items {
          slug,
          name,
          linkedFrom {
            blogEntryCollection {
              items {
                slug,
                title,
                heroImage {
                  url,
                  title
                },
                socialDescription,
                tagsCollection {
                  items {
                    name,
                    slug
                  }
                },
                publishDate
              }
            }
          }         
        }
      }
    }`
  )

  const category = tagCollection.items[0].name
  const posts = tagCollection.items[0].linkedFrom.blogEntryCollection.items

  return {
    props: {
      categoryName: category,
      gallery: {
        posts,
      },
    },
  }
}

export default DisplayCategory
