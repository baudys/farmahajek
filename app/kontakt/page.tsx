import ContactUs from '@/components/ContactUs'
import Container from '@/components/Container'
import Map from '@/components/Map'
import React from 'react'

export const metadata = {
  title: 'Farma Hájek - Kontakt 📞',
}

const KontaktPage = () => {
  return (
    <div className='py-20 bg-brown'>
      <Container>
        <div className='grid xl:grid-cols-2 gap-12'>
          <div>
            <h2 className='text-white font-bold text-4xl uppercase'>
              kontaktujte nás
            </h2>
            <p className='text-white font-medium mb-8'>
              Neváhejte a ptejte se nás na otázky kolem farmy, slepiček,
              techniky, či čehokoliv jiného vás napadne
            </p>
            <ContactUs />
          </div>
          <Map />
        </div>
      </Container>
    </div>
  )
}

export default KontaktPage
