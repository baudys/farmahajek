import Container from '@/components/container'
import { ModalGallery } from '@/components/modal-gallery'
import { farma } from '@/database/gallery'

export const metadata = {
  title: 'Farma Hájek - Galerie 🖼',
}

export default function GaleriePage() {
  return (
    <div className='pb-28 pt-24'>
      <Container className='mt-10'>
        <ModalGallery images={farma} />
      </Container>
    </div>
  )
}
