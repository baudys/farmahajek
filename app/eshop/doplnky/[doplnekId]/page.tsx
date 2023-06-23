import Container from '@/components/Container'
import MultiProduct from '@/components/eshop/MultiProduct'

interface IParams {
  doplnekId?: string
}

const DoplnekPage = async ({ params }: { params: IParams }) => {
  const { doplnekId } = params

  return (
    <div className='pt-32 pb-20'>
      <Container>
        <h1>hehe</h1>
      </Container>
    </div>
  )
}

export default DoplnekPage
