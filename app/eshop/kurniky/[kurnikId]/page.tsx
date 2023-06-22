import Container from '@/components/Container'
import MultiProduct from '@/components/eshop/MultiProduct'

interface IParams {
  kurnikId?: string
}

const KurnikPage = async ({ params }: { params: IParams }) => {
  const { kurnikId } = params

  return (
    <div className='pt-40 pb-20'>
      <Container>
        {kurnikId === 'kurnik-6-netepleny' && (
          <MultiProduct
            label='Kurník na 6 slepic neteplený'
            price={9500}
            depth={80}
            height={120}
            width={80}
            images={[
              { url: '/kurniky/kurnik-6-netepleny/1.jpg' },
              { url: '/kurniky/kurnik-6-netepleny/2.jpg' },
              { url: '/kurniky/kurnik-6-netepleny/3.jpg' },
              { url: '/kurniky/kurnik-6-netepleny/4.jpg' },
            ]}
          />
        )}
      </Container>
    </div>
  )
}

export default KurnikPage
