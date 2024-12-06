import { getPosts } from '@/actions/get-posts'
import { Categories } from '@/components/blog/categories'
import { Container } from '@/components/container'
import { Title } from '@/components/title'
import { Posts } from '@/containers/blog/posts'

export default async function Page() {
  const posts = await getPosts()

  return (
    <div className='space-y-20 lg:space-y-40'>
      <Container>
        <Title textCs='Blog' textDe='Blog' textEn='Blog' />
        <Categories />
        <Posts posts={posts} />
      </Container>
    </div>
  )
}
