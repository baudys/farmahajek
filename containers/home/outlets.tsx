import { Container } from '../../components/container'
import { Logos } from '../../components/slider/logos'
import { Title } from '@/components/title'

export const Outlets = () => {
  return (
    <div className='overflow-hidden pb-6 pt-12'>
      <Container>
        <Title
          textCs='Naše produkty můžete najít také zde'
          textEn='You can also find our products here'
          textDe='Sie können unsere Produkte auch hier finden'
        />
      </Container>
      <Logos />
    </div>
  )
}
