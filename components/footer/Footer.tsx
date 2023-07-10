'use client'

import Link from 'next/link'
import FooterIcon from './FooterIcon'
import { AiFillYoutube, AiOutlineInstagram, AiFillPhone } from 'react-icons/ai'
import { IoLogoTiktok } from 'react-icons/io5'
import { FaFacebook } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Container from '../Container'
import { useLanguage } from '@/hooks/useLanguage'

const Footer = () => {
  const { language } = useLanguage(state => state)

  return (
    <footer className='bg-green pt-20 pb-5 xl:pt-32 xl:pb-10 text-brown'>
      <Container>
        <div className='flex flex-col xl:flex-row justify-between items-center gap-8 xl:gap-0'>
          <h4 className='text-2xl xl:text-4xl font-bold'>
            {language === 'cs' && (
              <>Nezapomeň nás sledovat na sociálních sítích!</>
            )}
            {language === 'en' && (
              <>Don't forget to follow us on social media!</>
            )}
            {language === 'de' && (
              <>Vergessen Sie nicht, uns auf den sozialen Medien zu folgen!</>
            )}
          </h4>
          <div className='flex justify-between gap-5'>
            <FooterIcon
              href='https://www.instagram.com/farmahajek/'
              icon={AiOutlineInstagram}
            />
            <FooterIcon
              href='https://www.tiktok.com/@farmahajek'
              icon={IoLogoTiktok}
            />
            <FooterIcon
              href='[https://www.facebook.com/people/Farma-Hájek/100092479713291/](https://www.facebook.com/people/Farma-H%C3%A1jek/100092479713291/)'
              icon={FaFacebook}
            />
            <FooterIcon
              href='https://www.youtube.com/@miloslavpolak4880'
              icon={AiFillYoutube}
            />
          </div>
        </div>

        <div className='h-px w-full bg-brown/60 my-10' />

        <div className='grid xl:grid-cols-3'>
          <div className='flex items-start justify-center xl:justify-start gap-16'>
            <div>
              <Link href=''>
                <h3 className='text-xl font-semibold pb-2 hover:underline'>
                  E-shop
                </h3>
              </Link>
              <ul>
                <li>
                  <Link href='' className='hover:underline'>
                    {language === 'cs' && <>Slepičky</>}
                    {language === 'en' && <>Chickens</>}
                    {language === 'de' && <>Hühner</>}
                  </Link>
                </li>
                <li>
                  <Link href='' className='hover:underline'>
                    {language === 'cs' && <>Kurníky</>}
                    {language === 'en' && <>Hen houses</>}
                    {language === 'de' && <>Hühnerställe</>}
                  </Link>
                </li>
                <li>
                  <Link href='' className='hover:underline'>
                    {language === 'cs' && <>Směsi</>}
                    {language === 'en' && <>Mixtures</>}
                    {language === 'de' && <>Gemische</>}
                  </Link>
                </li>
                <li>
                  <Link href='' className='hover:underline'>
                    {language === 'cs' && <>Doplňky</>}
                    {language === 'en' && <>Zubehör</>}
                    {language === 'de' && <>Accessories</>}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className='text-xl font-semibold pb-2'>
                {language === 'cs' && <>Odkazy</>}
                {language === 'en' && <>Links</>}
                {language === 'de' && <>Links</>}
              </h3>
              <ul>
                <li>
                  <Link href='kontakt' className='hover:underline'>
                    {language === 'cs' && <>Služby</>}
                    {language === 'en' && <>Services</>}
                    {language === 'de' && <>Dienstleistungen</>}
                  </Link>
                </li>
                <li>
                  <Link href='kontakt' className='hover:underline'>
                    {language === 'cs' && <>Kontakt</>}
                    {language === 'en' && <>Contact</>}
                    {language === 'de' && <>Kontakt</>}
                  </Link>
                </li>
                <li>
                  <Link href='Galerie' className='hover:underline'>
                    {language === 'cs' && <>Galerie</>}
                    {language === 'en' && <>Gallery</>}
                    {language === 'de' && <>Gallerie</>}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='xl:hidden h-px w-full bg-brown/60 my-10' />

          <div className='bg-brown p-4 text-zinc-400 rounded-md shadow hidden xl:block'>
            <h2 className='text-white font-semibold mb-5 text-lg'>
              Miloslav Polák Ml.
            </h2>

            <div className='mb-7 text-zinc-200 ml-6'>
              <p className='flex gap-2'>
                <AiFillPhone />
                +420 720 566 212
              </p>
              <p className='flex gap-2'>
                <MdEmail />
                farma.hajek@seznam.cz
              </p>
            </div>

            <div className='text-center text-sm'>
              <p>Hájek 36</p>
              <p>34506 Všeruby - Hájek</p>
              <p>okres Domažlice, Plzeňský kraj, Česko</p>
            </div>
          </div>

          <div className='grid xl:grid-cols-2 text-center xl:text-left'>
            <div />
            <div>
              <h3 className='text-xl font-semibold pb-2'>
                {language === 'cs' && <>Otevírací doba</>}
                {language === 'en' && <>Opening hours</>}
                {language === 'de' && <>Öffnungszeit</>}
              </h3>
              <ul>
                <li>
                  {language === 'cs' && <>pátek </>}
                  {language === 'en' && <>friday </>}
                  {language === 'de' && <>freitag </>}
                  <span className='font-semibold ml-3'>16:00 - 18:00</span>
                </li>
                <li>
                  {language === 'cs' && <>Sobota </>}
                  {language === 'en' && <>Saturday </>}
                  {language === 'de' && <>Samstag </>}
                  <span className='font-semibold ml-3'>16:00 - 18:00</span>
                </li>
                <li>
                  {language === 'cs' && <>Možnost se domluvit na jiný čas</>}
                  {language === 'en' && (
                    <>Possibility to arrange a different time</>
                  )}
                  {language === 'de' && (
                    <>Möglichkeit, einen anderen Termin zu vereinbaren</>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='h-px w-full bg-brown/60 my-10 xl:hidden' />

        <div className='grid place-items-center xl:hidden'>
          <div className='bg-brown p-4 text-zinc-400 rounded-md shadow'>
            <h2 className='text-white font-semibold mb-5 text-lg'>
              Miloslav Polák Ml.
            </h2>

            <div className='mb-7 text-zinc-200 ml-6'>
              <p className='flex gap-2'>
                <AiFillPhone />
                +420 720 566 212
              </p>
              <p className='flex gap-2'>
                <MdEmail />
                farma.hajek@seznam.cz
              </p>
            </div>

            <div className='text-center text-sm'>
              <p>Hájek 36</p>
              <p>34506 Všeruby - Hájek</p>
              <p>okres Domažlice, Plzeňský kraj, Česko</p>
            </div>
          </div>
        </div>

        <div className='h-px w-full bg-brown/60 my-10' />

        <p className='text-center text-light text-xs md:text-base mt-12 sm:mt-4'>
          &copy;{new Date().getFullYear()}
          <Link href='<https://github.com/ton1czech>' className='underline'>
            {' '}
            Daniel Anthony Baudyš.
          </Link>
          {language === 'cs' && <>Všechna práva vyhrazena.</>}
          {language === 'en' && <>All rights reserved.</>}
          {language === 'de' && <>Alle Rechte vorbehalten.</>}
        </p>
      </Container>
    </footer>
  )
}

export default Footer
