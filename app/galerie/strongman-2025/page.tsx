import Container from '@/components/container'
import { ModalGallery } from '@/components/modal-gallery'
import { strongman2025 } from '@/database/gallery'

export default function Strongman2025Page() {
  return (
    <div className='pb-28'>
      <div className='h-[70.72px] w-full bg-black xl:h-[84.81px]' />
      <Container className='mt-10'>
        <ModalGallery images={strongman2025} />
      </Container>
    </div>
  )
}
