import Container from '@/components/container'
import { Photo } from '@/components/gallery/photo'
import { strongman2024 } from '@/database/gallery'

const totalItems = strongman2024.length
const itemsPer2Column = Math.ceil(totalItems / 2)
const itemsPer3Column = Math.ceil(totalItems / 3)

export default function Strongman2024Page() {
  return (
    <div className='pb-28 pt-24'>
      <Container className='mt-10'>
        <section>
          <div className='grid grid-cols-2 gap-2 md:hidden'>
            <div className='flex flex-col gap-2'>
              {strongman2024.slice(0, itemsPer2Column).map((item) => (
                <Photo key={item} photo={item} />
              ))}
            </div>
            <div className='flex flex-col gap-2'>
              {strongman2024.slice(itemsPer2Column).map((item) => (
                <Photo key={item} photo={item} />
              ))}
            </div>
          </div>

          <div className='hidden grid-cols-3 gap-6 md:grid'>
            <div className='flex flex-col gap-6'>
              {strongman2024.slice(0, itemsPer3Column).map((item) => (
                <Photo key={item} photo={item} />
              ))}
            </div>
            <div className='flex flex-col gap-6'>
              {strongman2024
                .slice(itemsPer3Column, itemsPer3Column * 2)
                .map((item) => (
                  <Photo key={item} photo={item} />
                ))}
            </div>
            <div className='flex flex-col gap-6'>
              {strongman2024
                .slice(itemsPer3Column * 2, itemsPer3Column * 3)
                .map((item) => (
                  <Photo key={item} photo={item} />
                ))}
            </div>
          </div>
        </section>
      </Container>
    </div>
  )
}
