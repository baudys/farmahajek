import Container from '@/components/container'
import { ModalGallery } from '@/components/modal-gallery'
import { farma } from '@/database/gallery'

export const metadata = {
  title: 'Farma Hájek - Galerie 🖼',
}

export default function GaleriePage() {
  return (
    <div className='pb-28'>
      <div className='h-[70.72px] w-full bg-black xl:h-[84.81px]' />
      <Container className='mt-10'>
        <ModalGallery images={farma} />
      </Container>
    </div>
  )
}
