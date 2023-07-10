import Container from '@/components/Container'
import ModalGallery from '@/components/ModalGallery'

export const metadata = {
  title: 'Farma Hájek - Galerie 🖼',
}

const GaleriePage = () => {
  return (
    <div className='py-28'>
      <Container>
        <ModalGallery />
      </Container>
    </div>
  )
}

export default GaleriePage
