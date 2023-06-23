import Container from '@/components/Container'
import Product from '@/components/eshop/Product'
import MultiProduct from '@/components/eshop/MultiProduct'

interface IParams {
  smesId?: string
}

const SlepickaPage = async ({ params }: { params: IParams }) => {
  const { smesId } = params

  return (
    <div className='pt-32 pb-20'>
      <Container>
        <h1>směs</h1>
      </Container>
    </div>
  )
}

export default SlepickaPage
