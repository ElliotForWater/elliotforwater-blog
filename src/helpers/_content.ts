import fs from 'fs'
import { join } from 'path'

import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')

export type PostItems = {
  title: string
  description: string
  publishDate: string
  modifiedDate: string
  heroImage: { url: string; title: string } | any
  content: string
  tagsCollection: string[] | any
  slug: string
  [key: string]: string | string[]
}

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const items: PostItems = {
    title: '',
    description: '',
    publishDate: '',
    modifiedDate: '',
    heroImage: '',
    content: '',
    tagsCollection: [],
    slug: '',
  }

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => new Date(post2.publishDate).getTime() - new Date(post1.publishDate).getTime())
  return posts
}

export function getCategoryCollection(fields: string[] = []) {
  const posts = getAllPosts(fields)
  const categoryCollection = new Map<string, PostItems[]>()

  posts.forEach((item) => {
    if (!item.tagsCollection) {
      return
    }

    item.tagsCollection.forEach((tag: any) => {
      if (!categoryCollection.get(tag)) {
        categoryCollection.set(tag, [])
      }

      categoryCollection.get(tag)!.push(item)
    })
  })

  return [...categoryCollection.entries()].sort((a, b) => b[1].length - a[1].length)
}
