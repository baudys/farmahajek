import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-green pt-20 pb-5 xl:pt-40 xl:pb-10'>
      <p className='text-center text-light mt-12 sm:mt-4'>
        &copy;{new Date().getFullYear()}
        <Link href='https://github.com/ton1czech' className='underline'>
          {' '}
          Daniel Anthony Baudyš
        </Link>
        . Všechna práva vyhrazena.
      </p>
    </footer>
  )
}

export default Footer
