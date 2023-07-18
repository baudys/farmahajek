'use client'

import ContactUs from '@/components/contact/ContactUs'
import Container from '@/components/Container'
import Map from '@/components/contact/Map'
import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/hooks/useLanguage'

const KontaktPage = () => {
  const { language } = useLanguage(state => state)

  return (
    <div className='py-28 bg-brown'>
      <Container>
        <div className='grid xl:grid-cols-2 gap-12'>
          <div>
            <motion.div
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <h2 className='text-white font-bold text-4xl uppercase'>
                {language === 'cs' && <>kontaktujte nás</>}
                {language === 'en' && <>contact us</>}
                {language === 'de' && <>Kontaktieren Sie uns</>}
              </h2>
            </motion.div>
            <motion.div
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <p className='text-white font-medium mb-8'>
                {language === 'cs' && (
                  <>
                    Neváhejte a ptejte se nás na otázky kolem farmy, slepiček,
                    techniky, či čehokoliv jiného vás napadne
                  </>
                )}
                {language === 'en' && (
                  <>
                    Feel free to ask us questions about the farm, the chickens,
                    technology, or anything else you can think of
                  </>
                )}
                {language === 'de' && (
                  <>
                    Sie können uns gerne Fragen über den Hof, die Hühner, die
                    Technik Technik oder was Ihnen sonst noch einfällt
                  </>
                )}
              </p>
            </motion.div>
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <ContactUs />
            </motion.div>
          </div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <Map />
          </motion.div>
        </div>
      </Container>
    </div>
  )
}

export default KontaktPage
