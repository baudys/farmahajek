import Link from 'next/link'
import FooterIcon from './FooterIcon'
import { AiFillYoutube, AiOutlineInstagram } from 'react-icons/ai'
import { IoLogoTiktok } from 'react-icons/io5'
import { FaFacebook } from 'react-icons/fa'
import Container from '../Container'

const Footer = () => {
  return (
    <footer className='bg-green pt-20 pb-5 xl:pt-40 xl:pb-10'>
      <Container>
        <div className='flex flex-col xl:flex-row justify-between items-center gap-8 xl:gap-0'>
          <h4 className='text-2xl xl:text-4xl font-bold text-brown'>
            Nezapomeň nás sledovat na sociálních sítích!
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
              href='https://www.facebook.com/people/Farma-H%C3%A1jek/100092479713291/'
              icon={FaFacebook}
            />
            <FooterIcon
              href='https://www.youtube.com/@miloslavpolak4880'
              icon={AiFillYoutube}
            />
          </div>
        </div>

        <div className='h-px w-full bg-brown my-10' />

        <div className='flex items-start justify-center xl:justify-start gap-16 text-brown'>
          <div>
            <Link href=''>
              <h3 className='text-xl font-semibold pb-2 hover:underline'>
                E-shop
              </h3>
            </Link>
            <ul>
              <li>
                <Link href='' className='hover:underline'>
                  Slepičky
                </Link>
              </li>
              <li>
                <Link href='' className='hover:underline'>
                  Kurníky
                </Link>
              </li>
              <li>
                <Link href='' className='hover:underline'>
                  Směsi
                </Link>
              </li>
              <li>
                <Link href='' className='hover:underline'>
                  Doplňky
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-semibold pb-2'>Odkazy</h3>
            <ul>
              <li>
                <Link href='kontakt' className='hover:underline'>
                  Služby
                </Link>
              </li>
              <li>
                <Link href='kontakt' className='hover:underline'>
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='h-px w-full bg-brown my-10' />

        <div className='text-center'>
          <h2>Miloslav Polák Ml.</h2>
          <p>777 123 456</p>
        </div>

        <div className='h-px w-full bg-brown my-10' />

        <p className='text-brown text-center text-light text-xs md:text-base mt-12 sm:mt-4'>
          &copy;{new Date().getFullYear()}
          <Link href='https://github.com/ton1czech' className='underline'>
            {' '}
            Daniel Anthony Baudyš
          </Link>
          . Všechna práva vyhrazena.
        </p>
      </Container>
    </footer>
  )
}

export default Footer
