import Container from '@/components/container'
import { GalleryGrid } from '@/components/gallery/gallery-grid'
import { strongman2023 } from '@/database/gallery'

export default function Strongman2023Page() {
  return (
    <div className='pb-28 pt-24'>
      <Container className='mt-10'>
        <section>
          <GalleryGrid photos={strongman2023} />
        </section>
      </Container>
    </div>
  )
}
