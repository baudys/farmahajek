import Container from '@/components/container'
import { GalleryGrid } from '@/components/gallery/gallery-grid'
import { farma } from '@/database/gallery'

export const metadata = {
  title: 'Farma Hájek - Galerie 🖼',
}

export default function GaleriePage() {
  return (
    <div className='pb-28 pt-24'>
      <Container className='mt-10'>
        <section>
          <GalleryGrid photos={farma} />
        </section>
      </Container>
    </div>
  )
}
