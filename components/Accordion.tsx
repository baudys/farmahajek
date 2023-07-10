import { useLanguage } from '@/hooks/useLanguage'
import { TbHandClick } from 'react-icons/tb'

interface AccordionProps {
  children: React.ReactNode
  src: string
  isOpen: boolean
  handleToggle: () => void
  title: string
}

const Accordion: React.FC<AccordionProps> = ({
  children,
  src,
  isOpen,
  handleToggle,
  title,
}) => {
  const { language } = useLanguage(state => state)

  return (
    <div className='group mb-10 shadow-md'>
      <div
        className={`relative flex items-center justify-center w-full h-[150px] bg-cover bg-center cursor-pointer rounded-t-lg ${src}`}
        onClick={handleToggle}
      >
        <div className='group absolute top-0 left-0 w-full h-full bg-black/70 backdrop-blur-sm rounded-t-lg' />
        <div className='z-[1]'>
          <h1 className='uppercase text-white text-2xl xl:text-4xl 2xl:text-6xl font-bold z-[1] group-hover:text-zinc-200 text-center'>
            {title}
          </h1>
          <p className='z-[1] text-zinc-300 flex gap-2 items-center justify-center group-hover:text-zinc-400'>
            {language === 'cs' && <>pro více informací klikněte</>}
            {language === 'en' && <>click for more information</>}
            {language === 'de' && <>Klicken Sie für weitere Informationen</>}
            <TbHandClick />
          </p>
        </div>
      </div>
      {isOpen && (
        <div className='bg-white text-black rounded-b-lg p-3'>{children}</div>
      )}
    </div>
  )
}

export default Accordion
