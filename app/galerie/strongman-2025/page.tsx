import Container from '@/components/container'
import { ModalGallery } from '@/components/modal-gallery'
import { strongman2025 } from '@/database/gallery'

export default function Strongman2025Page() {
  return (
    <div className='pb-28 pt-24'>
      <Container className='mt-10'>
        <ModalGallery images={strongman2025} />
      </Container>
    </div>
  )
}
