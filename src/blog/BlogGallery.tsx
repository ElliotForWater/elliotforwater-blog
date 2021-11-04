import React from 'react';

import { Pagination, IPaginationProps } from '../pagination/Pagination';
import { PostItems } from '../utils/Content';
import { BlogCard } from './BlogCard';

export type IBlogGalleryProps = {
  posts: PostItems[];
  pagination?: IPaginationProps;
};

const BlogGallery = (props: IBlogGalleryProps) => {
  return (
  <div className="w-full bg-gray-200">
    <div className="max-w-screen-xl px-3 py-12 mx-auto">
      <ul className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 xl:grid-cols-3">
        {props.posts.map(({ slug, title, publishDate, heroImage, tagsCollection}) => {
          return (
          <BlogCard
            key={slug}
            title={title}
            description={title}
            date={publishDate}
            image={heroImage}
            slug={slug}
            tags={tagsCollection.items}
          />
        )})}
      </ul>

      {props.pagination && (
        <Pagination previous={props.pagination.previous} next={props.pagination.next} />
      )}
    </div>
  </div>
)};

export { BlogGallery };
