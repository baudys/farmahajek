import Container from '@/components/container'
import { GalleryGrid } from '@/components/gallery/gallery-grid'
import { strongman2024 } from '@/database/gallery'

export default function Strongman2024Page() {
  return (
    <div className='pb-28 pt-24'>
      <Container className='mt-10'>
        <section>
          <GalleryGrid photos={strongman2024} />
        </section>
      </Container>
    </div>
  )
}
