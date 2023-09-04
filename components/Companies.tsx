'use client'

import Container from './Container'
import { useLanguage } from '@/hooks/useLanguage'
import { motion } from 'framer-motion'
import Logos from './slider/Logos'

const Companies = () => {
  const { language } = useLanguage(state => state)

  return (
    <div className='pt-8 pb-2 overflow-hidden'>
      <Container>
        <motion.h1
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className='py-2 text-lg font-semibold tracking-wider text-center uppercase text-zinc-500/70 xl:text-4xl'
        >
          {language === 'cs' && (
            <>Naše produkty můžete najít také v těchto prodejnách</>
          )}
          {language === 'en' && (
            <>You can also find our products in the following stores</>
          )}
          {language === 'de' && (
            <>
              Sie können unsere Produkte auch in den folgenden Geschäften finden
            </>
          )}
        </motion.h1>
      </Container>
      <Logos />
    </div>
  )
}

export default Companies
