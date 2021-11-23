import React, { ReactNode } from 'react'

import Link from 'next/link'

import { SidebarBlock } from '../Sidebar/SidebarBlock'
// import { SidebarIconList } from '../sidebar/SidebarIconList';
// import { Config } from '../utils/Config';
import { PostItems } from '../../helpers/_content'
import { convertToSlug } from '../../helpers/_url'
import { Base } from './Base'

type IMainProps = {
  meta: ReactNode
  hero: ReactNode
  author: { name: string; bio: string }
  recentPosts?: PostItems[]
  categoryCollection: any[]
  children: ReactNode
}

const RightSidebar = (props: IMainProps) => (
  <Base meta={props.meta} hero={props.hero}>
    <div className='w-full bg-gray-200'>
      <div className='max-w-screen-xl py-12 mx-auto flex flex-wrap'>
        <div className='w-full md:w-2/3 md:pl-3 md:pr-5'>
          <div className='bg-white rounded-sm shadow-md px-4 py-3 sm:px-16'>{props.children}</div>
        </div>

        <div className='w-full md:w-1/3 px-3 md:pr-3 md:pl-5'>
          {/* <SidebarBlock title="Recent posts">
            <ul>
              {props.recentPosts.map((elt) => (
                <li key={elt.slug} className="my-4">
                  <Link href="/posts/[slug]" as={`/posts/${elt.slug}`}>
                    <a className="border-b-2 border-blue-200 hover:text-gray-800 hover:border-b-2 hover:border-primary">
                      {elt.title}
                    </a>
                  </Link>
                </li>          <SidebarBlock title="Newsletter">
            <>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, assumenda voluptatem.
              </div>

              <form className="mt-3">
                <input
                  className="w-full bg-white py-2 px-4 rounded appearance-none border border-transparent hover:border-gray-300 focus:outline-none focus:ring"
                  placeholder="Enter your email address"
                />

                <button className="btn mt-3 bg-primary" type="submit">
                  Subscribe
                </button>
              </form>
            </>
          </SidebarBlock>
              ))}
            </ul>
          </SidebarBlock> */}

          <SidebarBlock title='Categories'>
            <ul>
              {props.categoryCollection.map((tag, index) => (
                <li key={index} className='py-4 border-b border-gray-400 last:border-none'>
                  <Link href='/category/[name]' as={`/category/${convertToSlug(tag.name)}`}>
                    <a className='flex justify-between hover:text-gray-800'>
                      <div>{tag.name}</div>

                      {/* <div>{elt[1].length}</div> */}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </SidebarBlock>

          {/* <SidebarBlock title="Newsletter">
            <>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, assumenda voluptatem.
              </div>

              <form className="mt-3">
                <input
                  className="w-full bg-white py-2 px-4 rounded appearance-none border border-transparent hover:border-gray-300 focus:outline-none focus:ring"
                  placeholder="Enter your email address"
                />

                <button className="btn mt-3 bg-primary" type="submit">
                  Subscribe
                </button>
              </form>
            </>
          </SidebarBlock> */}

          <SidebarBlock title='About the author'>
            <>
              {/* <img
                className="h-24 w-24 mx-auto border-4 border-white rounded-full shadow-md"
                src={`${process.env.baseUrl}/assets/images/avatar.png`}
                alt={`${Config.author} avatar`}
              /> */}
              <div className='font-semibold text-center mt-1'>{props.author.name}</div>
              <div className='text-center mt-1'>{props.author.bio}</div>

              {/* <SidebarIconList /> */}
            </>
          </SidebarBlock>
        </div>
      </div>
    </div>
  </Base>
)

export { RightSidebar }
