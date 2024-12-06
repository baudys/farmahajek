import { Container } from '@/components/container'
import { ModalGallery } from '@/components/modal-gallery'
import { strongman } from '@/database/gallery'

export default function Rocnik1Page() {
  return (
    <div className='pb-28'>
      <div className='h-[70.72px] w-full bg-black xl:h-[84.81px]' />
      <Container className='mt-10'>
        <ModalGallery images={strongman} />
      </Container>
    </div>
  )
}
