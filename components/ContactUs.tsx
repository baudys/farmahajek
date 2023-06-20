import Input from './Input'

const ContactUs = () => {
  return (
    <form className='grid content-center gap-2'>
      <Input id='jmeno' label='Jméno' type='text' />
      <Input id='email' label='E-mail' type='email' />
    </form>
  )
}

export default ContactUs
