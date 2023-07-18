import { useLanguage } from '@/hooks/useLanguage'
import ContactSubmit from '../buttons/ContactSubmit'
import ContactInput from '../inputs/ContactInput'
import ContactTextarea from '../inputs/ContactTextarea'

const ContactUs = () => {
  const { language } = useLanguage(state => state)

  return (
    <form className='grid content-center gap-2'>
      <ContactInput
        id='jmeno'
        label={
          language === 'cs'
            ? 'Jméno'
            : language === 'en'
            ? 'Name'
            : language === 'de'
            ? 'Name'
            : ''
        }
        type='text'
      />
      <ContactInput id='email' label='E-mail' type='email' />
      <ContactTextarea
        placeholder={
          language === 'cs'
            ? 'Zadejte dotaz'
            : language === 'en'
            ? 'Ask a question'
            : language === 'de'
            ? 'Eine Frage stellen'
            : ''
        }
      />
      <ContactSubmit
        label={
          language === 'cs'
            ? 'ODESLAT!'
            : language === 'en'
            ? 'SEND!'
            : language === 'de'
            ? 'SENDEN SIE ES!'
            : ''
        }
      />
    </form>
  )
}

export default ContactUs
