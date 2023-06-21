import Container from '@/components/Container'
import D853C from '@/components/eshop/slepicky/D853C'

interface IParams {
  slepickaId?: string
}

const Slepicka = async ({ params }: { params: IParams }) => {
  const { slepickaId } = params

  return (
    <div className='pt-52 pb-20'>
      <Container>{slepickaId === 'D853' && <D853C />}</Container>
    </div>
  )
}

export default Slepicka
