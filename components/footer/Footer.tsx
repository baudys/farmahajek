'use client'

import Link from 'next/link'
import { FooterIcon } from './footer-icon'
import { AiFillYoutube, AiOutlineInstagram, AiFillPhone } from 'react-icons/ai'
import { IoLogoTiktok } from 'react-icons/io5'
import { FaFacebook } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Container from '../container'
import { useLanguage } from '@/hooks/useLanguage'
import Fade from 'react-reveal/Fade'

export const Footer = () => {
  const { language } = useLanguage((state) => state)

  return (
    <footer className='bg-green pb-5 pt-20 text-brown xl:pb-10 xl:pt-32'>
      <Container>
        <div className='flex flex-col items-center justify-between gap-8 xl:flex-row xl:gap-0'>
          <Fade left>
            <h4 className='text-2xl font-bold xl:text-4xl'>
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
          </Fade>
          <Fade bottom>
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
                href='https://www.facebook.com/people/Farma-Hájek/100092479713291/'
                icon={FaFacebook}
              />
              <FooterIcon
                href='https://www.youtube.com/@miloslavpolak4880'
                icon={AiFillYoutube}
              />
            </div>
          </Fade>
        </div>

        <Fade right>
          <div className='my-10 h-px w-full bg-brown/60' />
        </Fade>

        <div className='grid xl:grid-cols-3'>
          <div className='flex items-start justify-center gap-16 xl:justify-start'>
            <Fade top>
              <div>
                <Link href='https://www.eshop-farmahajek.cz/'>
                  <h3 className='pb-2 text-xl font-semibold hover:underline'>
                    E-shop
                  </h3>
                </Link>
                <ul>
                  <li>
                    <Link
                      href='https://www.eshop-farmahajek.cz/slepicky/'
                      className='hover:underline'
                    >
                      {language === 'cs' && <>Slepičky</>}
                      {language === 'en' && <>Chickens</>}
                      {language === 'de' && <>Hühner</>}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='https://www.eshop-farmahajek.cz/kurniky/'
                      className='hover:underline'
                    >
                      {language === 'cs' && <>Kurníky</>}
                      {language === 'en' && <>Hen houses</>}
                      {language === 'de' && <>Hühnerställe</>}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='https://www.eshop-farmahajek.cz/smesi-a-doplnky/'
                      className='hover:underline'
                    >
                      {language === 'cs' && <>Směsi</>}
                      {language === 'en' && <>Mixtures</>}
                      {language === 'de' && <>Gemische</>}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='https://www.eshop-farmahajek.cz/doplnky/'
                      className='hover:underline'
                    >
                      {language === 'cs' && <>Doplňky</>}
                      {language === 'en' && <>Zubehör</>}
                      {language === 'de' && <>Accessories</>}
                    </Link>
                  </li>
                </ul>
              </div>
            </Fade>

            <Fade top>
              <div>
                <h3 className='pb-2 text-xl font-semibold'>
                  {language === 'cs' && <>Odkazy</>}
                  {language === 'en' && <>Links</>}
                  {language === 'de' && <>Links</>}
                </h3>
                <ul>
                  <li>
                    <Link
                      href='https://farmahajek.cz/sluzby'
                      className='hover:underline'
                    >
                      {language === 'cs' && <>Služby</>}
                      {language === 'en' && <>Services</>}
                      {language === 'de' && <>Dienstleistungen</>}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='https://farmahajek.cz/kontakt'
                      className='hover:underline'
                    >
                      {language === 'cs' && <>Kontakt</>}
                      {language === 'en' && <>Contact</>}
                      {language === 'de' && <>Kontakt</>}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='https://farmahajek.cz/galerie'
                      className='hover:underline'
                    >
                      {language === 'cs' && <>Galerie</>}
                      {language === 'en' && <>Gallery</>}
                      {language === 'de' && <>Gallerie</>}
                    </Link>
                  </li>
                </ul>
              </div>
            </Fade>
          </div>

          <Fade left>
            <div className='my-10 h-px w-full bg-brown/60 xl:hidden' />
          </Fade>

          <Fade top>
            <div className='hidden rounded-md bg-brown p-4 text-zinc-400 shadow xl:block'>
              <h2 className='mb-5 text-lg font-semibold text-white'>
                Miloslav Polák Ml.
              </h2>

              <div className='mb-7 ml-6 text-zinc-200'>
                <p className='flex items-center gap-2'>
                  <AiFillPhone />
                  +420 720 566 212
                </p>
                <p className='flex items-center gap-2'>
                  <MdEmail />
                  farma.hajek@seznam.cz
                </p>
                <p>IČO: 04005198</p>
              </div>

              <div className='text-center text-sm'>
                <p>Hájek 36</p>
                <p>34506 Všeruby - Hájek</p>
                <p>okres Domažlice, Plzeňský kraj, Česko</p>
              </div>
            </div>
          </Fade>

          <Fade top>
            <div className='grid text-center xl:grid-cols-2 xl:text-left'>
              <div />
              <div>
                <h3 className='pb-2 text-xl font-semibold'>
                  {language === 'cs' && <>Otevírací doba</>}
                  {language === 'en' && <>Opening hours</>}
                  {language === 'de' && <>Öffnungszeit</>}
                </h3>
                <ul>
                  <li>
                    {language === 'cs' && <>pátek </>}
                    {language === 'en' && <>friday </>}
                    {language === 'de' && <>freitag </>}
                    <span className='ml-3 font-semibold'>16:00 - 18:00</span>
                  </li>
                  <li>
                    {language === 'cs' && <>Sobota </>}
                    {language === 'en' && <>Saturday </>}
                    {language === 'de' && <>Samstag </>}
                    <span className='ml-3 font-semibold'>16:00 - 18:00</span>
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
          </Fade>
        </div>
        <Fade right>
          <div className='my-10 h-px w-full bg-brown/60 xl:hidden' />
        </Fade>

        <Fade top>
          <div className='grid place-items-center xl:hidden'>
            <div className='rounded-md bg-brown p-4 text-zinc-400 shadow'>
              <h2 className='mb-5 text-lg font-semibold text-white'>
                Miloslav Polák Ml.
              </h2>

              <div className='mb-7 ml-6 text-zinc-200'>
                <p className='flex items-center gap-2'>
                  <AiFillPhone />
                  +420 720 566 212
                </p>
                <p className='flex items-center gap-2'>
                  <MdEmail />
                  farma.hajek@seznam.cz
                </p>
                <p>IČO: 04005198</p>
              </div>

              <div className='text-center text-sm'>
                <p>Hájek 36</p>
                <p>34506 Všeruby - Hájek</p>
                <p>okres Domažlice, Plzeňský kraj, Česko</p>
              </div>
            </div>
          </div>
        </Fade>

        <Fade left>
          <div className='my-10 h-px w-full bg-brown/60' />
        </Fade>

        <Fade bottom>
          <div className='flex flex-col justify-center gap-20 lg:flex-row'>
            <p className='text-light mt-12 text-center text-xs sm:mt-4 md:text-base'>
              &copy;{new Date().getFullYear()} Farmahájek.
              {language === 'cs' && <> Všechna práva vyhrazena.</>}
              {language === 'en' && <> All rights reserved.</>}
              {language === 'de' && <> Alle Rechte vorbehalten.</>}
            </p>
            <p className='text-light mt-12 rounded-md bg-brown px-2 py-1 text-center text-xs text-green sm:mt-4 md:text-base'>
              {language === 'cs' && <>Vytvořil </>}
              {language === 'en' && <>Created by </>}
              {language === 'de' && <>Erstellt von </>}
              <Link href='https://baudys.dev' className='underline'>
                Daniel Anthony Baudyš.
              </Link>
            </p>
          </div>
        </Fade>
      </Container>
    </footer>
  )
}
