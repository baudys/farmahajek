'use client'

import Container from '@/components/container'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { slepicky } from '@/database/slepicky'
import { useState } from 'react'

export default function KonfiguratorPage() {
  const [barva, setBarva] = useState<string>()
  const [selectedSlepicka, setSelectedSlepicka] = useState<
    (typeof slepicky)[number] | null
  >(null)

  const handleBarvaChange = (value: string) => {
    setBarva(value)
    const filteredSlepicky = slepicky.filter((slepicka) => slepicka.color === value)
    if (filteredSlepicky.length === 0) {
      setSelectedSlepicka(null)
      return
    }

    const randomIndex = Math.floor(Math.random() * filteredSlepicky.length)
    setSelectedSlepicka(filteredSlepicky[randomIndex] ?? null)
  }

  return (
    <main className='pb-28 pt-24'>
      <Container className='mt-10'>
        <h1 className='text-3xl font-bold md:text-4xl lg:text-5xl'>
          Najděte si perfektní slepičku
        </h1>
        <p className='mt-1 max-w-prose'>
          Využijte náš nový konfigurátor pro nalezení perfektní slepičky přímo
          pro Vás. Navolte si požadavky a Vaše vyvolená slepička se zobrazí na
          obrazovce.
        </p>

        <section className='mt-10'>
          <div>
            <Select onValueChange={handleBarvaChange}>
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Barva Skořápky' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='bila'>Bílá</SelectItem>
                <SelectItem value='hneda'>Hnědá</SelectItem>
                <SelectItem value='kremova'>Krémová</SelectItem>
                <SelectItem value='modra'>Modrá</SelectItem>
                <SelectItem value='zelena'>Zelená</SelectItem>
                <SelectItem value='tmave-hneda'>Tmavě Hnědá</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className='mt-6 text-center'>
            {barva ? (
              selectedSlepicka ? (
                <>
                  <h2 className='text-xl font-semibold'>
                    {selectedSlepicka.name}
                  </h2>
                  <img
                    src={selectedSlepicka.img}
                    alt={selectedSlepicka.name}
                    className='mx-auto max-w-xs'
                  />
                </>
              ) : (
                <>
                  <h2 className='text-lg text-gray-500'>
                    Nevyhovuje žádná slepička
                  </h2>
                  <img
                    src='/konfigurator/random.webp'
                    alt='Obrys slepičky'
                    className='mx-auto max-w-xs opacity-50'
                  />
                </>
              )
            ) : (
              <>
                <h2 className='text-lg text-gray-500'>
                  Vyplňte alespoň jeden parametr
                </h2>
                <img
                  src='/konfigurator/random.webp'
                  alt='Obrys slepičky'
                  className='mx-auto max-w-xs opacity-50'
                />
              </>
            )}
          </div>
        </section>
      </Container>
    </main>
  )
}
