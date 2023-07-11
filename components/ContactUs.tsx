import ContactSubmit from './buttons/ContactSubmit'
import ContactInput from './inputs/ContactInput'
import ContactTextarea from './inputs/ContactTextarea'

const ContactUs = () => {
  return (
    <form className='grid content-center gap-2'>
      <ContactInput id='jmeno' label='Jméno' type='text' />
      <ContactInput id='email' label='E-mail' type='email' />
      <ContactTextarea />
      <ContactSubmit />
    </form>
  )
}

export default ContactUs
