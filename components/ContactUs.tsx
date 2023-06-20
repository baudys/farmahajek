import ContactInput from './inputs/ContactInput'

const ContactUs = () => {
  return (
    <form className='grid content-center gap-2'>
      <ContactInput id='jmeno' label='Jméno' type='text' />
      <ContactInput id='email' label='E-mail' type='email' />
    </form>
  )
}

export default ContactUs
