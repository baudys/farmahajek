import Container from '@/components/Container'
import MultiProduct from '@/components/eshop/MultiProduct'
import Product from '@/components/eshop/Product'

interface IParams {
  doplnekId?: string
}

const DoplnekPage = async ({ params }: { params: IParams }) => {
  const { doplnekId } = params

  return (
    <div className='py-20 lg:pt-32'>
      <Container>
        {doplnekId === 'zasterka-velka' && (
          <Product
            label='Zástěrka s kapsami na sběr vajec velká'
            description=''
            price={425}
            src='/doplnky/zasterka-velka.jpg'
            href='/doplnky/zasterka-velka'
          />
        )}
        {doplnekId === 'zasterka-mala' && (
          <Product
            label='Zástěrka s kapsami na sběr vajec malá'
            description=''
            price={300}
            src='/doplnky/zasterka-mala.jpg'
            href='/doplnky/zasterka-mala'
          />
        )}
        {doplnekId === 'krmitko' && (
          <Product
            label='Krmítko 30L'
            description='Plastové sifonové krmítko na nožkách o obsahu suché pšenice a granulí 30L je určeno pro všechnu drůbež, která dosáhne do misky ve výšce 150mm od podlahy ke krmivu uvnitř misky. Miska ke dělená mřížkou.'
            price={1500}
            src='/doplnky/krmitko.png'
            href='/doplnky/krmitko'
          >
            <p>Zajišťuje:</p>
            <p>- šetření krmení</p>
            <p>- lepší hygienu</p>
            <p>- vyvážená krmná dávka</p>
            <p>- rovnoměrnost krmné dávky</p>
            <p>- méně stresu</p>
          </Product>
        )}
        {doplnekId === 'pitko' && (
          <Product
            label='Zástěrka s kapsami na sběr vajec velká'
            description='Sifonová napáječka plastová pro střední a velkou drůbež - 30 litrů, pro 25 až 40ks slepic'
            price={1000}
            src='/doplnky/pitko.png'
            href='/doplnky/pitko'
          >
            <p> Na kovových nohách.</p>
            <p>
              V teplých dnech přidáváme do vody Acidomid D, který dezinfikuje
              vodu a prodlužuje dobu použitelnosti, navíc je proti všem
              bakteriálním nemocem.
            </p>
            <p>Zajišťuje:</p>
            <p>- lepší hygiena</p>
            <p>- lepší konverze krmiva</p>
            <p>- méně stresu</p>
          </Product>
        )}
      </Container>
    </div>
  )
}

export default DoplnekPage
