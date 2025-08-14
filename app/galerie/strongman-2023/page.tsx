import Container from '@/components/container'
import { ModalGallery } from '@/components/modal-gallery'
import { strongman2023 } from '@/database/gallery'

export default function Rocnik1Page() {
  return (
    <div className='pb-28 pt-24'>
      <Container className='mt-10'>
        <ModalGallery images={strongman2023} />
      </Container>
    </div>
  )
}
