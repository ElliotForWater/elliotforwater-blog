import React from 'react'

import { format } from 'date-fns'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

// type IBlogCardProps = {
//   title: string
//   description: string
//   date: string
//   image: { url: string; title: string }
//   slug: string
//   tags: { name: string; slug: string }[]
// }

const BlogCard = (props) => (
  <li className='max-w-sm rounded-lg overflow-hidden bg-white shadow-sm mx-auto transform hover:shadow-xl hover:-translate-y-1'>
    <Link href='/posts/[slug]' as={`/posts/${props.slug}`}>
      <a className='flex flex-col h-full'>
        <div className='imgWrap'>
          <img className='w-full' src={props.image.url} alt={`Preview ${props.image.title}`} />
        </div>

        <div className='px-6 py-4 flex-grow'>
          <h3 className='font-bold text-xl text-gray-800'>{props.title}</h3>
          <p className='text-gray-500 text-xs mb-2'>{format(new Date(props.date), 'LLL d, yyyy')}</p>
          <p className='text-gray-700'>
            <ReactMarkdown>{props.description}</ReactMarkdown>
          </p>
        </div>

        <div className='px-6 py-4 flex flex-wrap'>
          {props.tags.map((tag) => {
            if (!tag) return
            return (
              <div
                key={tag.slug}
                className='bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
              >
                {`#${tag.name}`}
              </div>
            )
          })}
        </div>
      </a>
    </Link>

    <style jsx>
      {`
        a:focus {
          outline-offset: -1px;
        }

        .imgWrap {
          max-height: 300px;
        }

        img {
          height: 100%;
          object-fit: cover;
        }
      `}
    </style>
  </li>
)

export { BlogCard }
