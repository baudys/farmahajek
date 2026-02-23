import Container from '@/components/container'
import { GalleryGrid } from '@/components/gallery/gallery-grid'
import { strongman2025 } from '@/database/gallery'

export default function Strongman2025Page() {
  return (
    <div className='pb-28 pt-24'>
      <Container className='mt-10'>
        <section>
          <GalleryGrid photos={strongman2025} />
        </section>
      </Container>
    </div>
  )
}
