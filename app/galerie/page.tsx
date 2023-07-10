import Container from '@/components/Container'
import ModalGallery from '@/components/ModalGallery'

export const metadata = {
  title: 'Farma Hájek - Galerie 🖼',
}

const GaleriePage = () => {
  return (
    <div className='pb-28'>
      <div className='w-full h-[70.72px] xl:h-[84.81px] bg-black' />
      <Container styles='mt-10'>
        <ModalGallery />
      </Container>
    </div>
  )
}

export default GaleriePage
