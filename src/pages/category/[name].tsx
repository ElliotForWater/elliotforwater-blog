import React from 'react'
import { GetStaticProps } from 'next'
import { BlogGallery, IBlogGalleryProps } from '../../components/Blogs/BlogGallery'
import { Hero } from '../../components/Hero/Hero'
import { Meta } from '../../components/Layout/Meta'
import { Base } from '../../components/Templates/Base'
import { Config } from '../../helpers/_config'
// import { getCategoryCollection } from '../../helpers/_content'
// import { convertToSlug } from '../../helpers/_url'
import fetchContenful from '../../helpers/_fetchContentful'

type ICategoryUrl = {
  name: string
}

type IDisplayPostProps = {
  categoryName: string
  gallery: IBlogGalleryProps
}

const DisplayPost = (props: IDisplayPostProps) => (
  <Base
    meta={<Meta title={`Category ${props.categoryName}`} description={Config.description} />}
    hero={<Hero title={`Category ${props.categoryName}`} description={`${props.categoryName} ${Config.description}`} />}
  >
    <BlogGallery posts={props.gallery.posts} />
  </Base>
)

// export const getStaticPaths: GetStaticPaths<ICategoryUrl> = async () => {
//   const categoryCollection = getCategoryCollection(['slug', 'tags']);

//   return {
//     paths: categoryCollection.map((category) => ({
//       params: {
//         name: convertToSlug(category[0]),
//       },
//     })),
//     fallback: false,
//   }
// }

export const getStaticProps: GetStaticProps<IDisplayPostProps, ICategoryUrl> = async ({ params }) => {
  console.log({ params })
  const { tag } = await fetchContenful(
    'post',
    `{
      tag(where: { name: "${params!.name}" }, limit: 1) {
        items {
          name
        }
      }
    }`
  )

  const category = tag.items[0]

  return {
    props: {
      slug: category.name,
    },
  }
}

export default DisplayPost
