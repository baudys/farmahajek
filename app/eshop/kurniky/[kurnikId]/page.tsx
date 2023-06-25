import Container from '@/components/Container'
import MultiProduct from '@/components/eshop/MultiProduct'

interface IParams {
  kurnikId?: string
}

const KurnikPage = async ({ params }: { params: IParams }) => {
  const { kurnikId } = params

  return (
    <div className='py-20 lg:pt-32'>
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
            href='/kurniky/kurnik-6-netepleny'
          />
        )}
        {kurnikId === 'kurnik-20-tepleny' && (
          <MultiProduct
            label='Kurník na 20 slepic teplený'
            price={45980}
            depth={250}
            height={180}
            width={140}
            images={[
              { url: '/kurniky/kurnik-20-tepleny/1.jpg' },
              { url: '/kurniky/kurnik-20-tepleny/2.jpg' },
              { url: '/kurniky/kurnik-20-tepleny/3.jpg' },
            ]}
            href='/kurniky/kurnik-20-tepleny'
          />
        )}
        {kurnikId === 'kurnik-10-tepleny' && (
          <MultiProduct
            label='Kurník na 10 slepic teplený'
            price={39930}
            depth={200}
            height={180}
            width={140}
            images={[
              { url: '/kurniky/kurnik-10-tepleny/1.jpg' },
              { url: '/kurniky/kurnik-10-tepleny/2.jpg' },
              { url: '/kurniky/kurnik-10-tepleny/3.jpg' },
              { url: '/kurniky/kurnik-10-tepleny/4.jpg' },
            ]}
            href='/kurniky/kurnik-10-tepleny'
          />
        )}
        {kurnikId === 'kurnik-20-netepleny' && (
          <MultiProduct
            label='Kurník na 20 slepic neteplený'
            price={27830}
            depth={230}
            height={180}
            width={170}
            images={[
              { url: '/kurniky/kurnik-20-netepleny/1.jpg' },
              { url: '/kurniky/kurnik-20-netepleny/2.jpg' },
              { url: '/kurniky/kurnik-20-netepleny/3.jpg' },
            ]}
            href='/kurniky/kurnik-20-netepleny'
          />
        )}
        {kurnikId === 'kurnik-10-netepleny' && (
          <MultiProduct
            label='Kurník neteplený na 10 slepic'
            price={24200}
            depth={220}
            height={180}
            width={140}
            images={[
              { url: '/kurniky/kurnik-10-netepleny/1.jpg' },
              { url: '/kurniky/kurnik-10-netepleny/2.jpg' },
            ]}
            href='/kurniky/kurnik-10-netepleny'
          />
        )}
        {kurnikId === 'kurnik-terasovy' && (
          <MultiProduct
            label='Kurník terasový / balkonový s trusníkem'
            price={15125}
            depth={165}
            height={110}
            width={110}
            images={[
              { url: '/kurniky/kurnik-terasovy/1.jpg' },
              { url: '/kurniky/kurnik-terasovy/2.jpg' },
              { url: '/kurniky/kurnik-terasovy/3.jpg' },
            ]}
            href='/kurniky/kurnik-terasovy'
          />
        )}
        {kurnikId === 'vybeh-bez-vstupu' && (
          <MultiProduct
            label='Uzavřený výběh bez vstupu 1/2 krytý'
            price={7865}
            depth={200}
            height={100}
            width={200}
            images={[
              { url: '/kurniky/vybeh-bez-vstupu/1.jpg' },
              { url: '/kurniky/vybeh-bez-vstupu/2.jpg' },
              { url: '/kurniky/vybeh-bez-vstupu/3.jpg' },
            ]}
            href='/kurniky/vybeh-bez-vstupu'
          />
        )}
        {kurnikId === 'vybeh-se-vstupem' && (
          <MultiProduct
            label='Uzavřený výběh se vstupem'
            price={15125}
            depth={250}
            height={170}
            width={250}
            images={[
              { url: '/kurniky/vybeh-se-vstupem/1.jpg' },
              { url: '/kurniky/vybeh-se-vstupem/2.jpg' },
              { url: '/kurniky/vybeh-se-vstupem/3.jpg' },
            ]}
            href='/kurniky/vybeh-se-vstupem'
          />
        )}
        {kurnikId === 'kralikarna-6' && (
          <MultiProduct
            label='Králíkárna 6 kotcová'
            price={30250}
            depth={260}
            height={180}
            width={105}
            images={[
              { url: '/kurniky/kralikarna-6/1.jpg' },
              { url: '/kurniky/kralikarna-6/2.jpg' },
              { url: '/kurniky/kralikarna-6/3.jpg' },
            ]}
            href='/kurniky/kralikarna-6'
          />
        )}
        {kurnikId === 'kralikarna-4' && (
          <MultiProduct
            label='Králíkárna 4 kotcová'
            price={22990}
            depth={170}
            height={190}
            width={105}
            images={[
              { url: '/kurniky/kralikarna-4/1.jpg' },
              { url: '/kurniky/kralikarna-4/2.jpg' },
              { url: '/kurniky/kralikarna-4/3.jpg' },
            ]}
            href='/kurniky/kralikarna-4'
          />
        )}
        {kurnikId === 'bedna-preprava' && (
          <MultiProduct
            label='Bedna na přepravu slepic'
            price={800}
            depth={77}
            height={33}
            width={50}
            images={[
              { url: '/kurniky/bedna-preprava/1.jpg' },
              { url: '/kurniky/bedna-preprava/2.jpg' },
              { url: '/kurniky/bedna-preprava/3.jpg' },
            ]}
            href='/kurniky/bedna-preprava'
          />
        )}
        {kurnikId === 'vybeh' && (
          <MultiProduct
            label='Výběh'
            price={10890}
            description='Výběh kompatibilní s oběma velikostmi rozměr 2,5 * 2,5 m + krytí proti dravcům'
            images={[{ url: '/kurniky/vybeh/1.jpg' }]}
            href='/kurniky/vybeh'
          />
        )}
      </Container>
    </div>
  )
}

export default KurnikPage
