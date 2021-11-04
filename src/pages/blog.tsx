import React from 'react';

import { GetStaticProps } from 'next';

import { BlogGallery, IBlogGalleryProps } from '../blog/BlogGallery';
import { Hero } from '../hero/Hero';
import { Meta } from '../layout/Meta';
import { IPaginationProps } from '../pagination/Pagination';
import { Base } from '../templates/Base';
import { Config } from '../utils/Config';
import fetchContenful from '../utils/fetchContentful';

const Index = (props: IBlogGalleryProps) => (
  <Base
    meta={<Meta title={Config.title} description={Config.description} />}
    hero={<Hero title={Config.title} description={Config.description} />}
  >
    <BlogGallery posts={props.posts} pagination={props.pagination} />
  </Base>
);

export const getStaticProps: GetStaticProps<IBlogGalleryProps> = async () => {
  const { blogEntryCollection } = await fetchContenful(
    'blog',
    `{
      blogEntryCollection(limit: 10)  {
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

  const posts = blogEntryCollection.items
  const pagination: IPaginationProps = {};

  if (posts.length > Config.pagination_size) {
    pagination.next = '/page2';
  }

  return {
    props: {
      posts: posts.slice(0, Config.pagination_size),
      pagination,
    },
  };
};

export default Index;
