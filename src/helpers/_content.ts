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
