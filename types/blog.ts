import { categories } from '@/database/categories'

export type Category = (typeof categories)[number]

export interface Post {
  slug: string
  title: string
  image: string
  publishDate: string
  formattedDate: string
  categories: Category[]
  lang: 'cs' | 'en' | 'de'
}
