interface ContactInputProps {
  id: string
  type: 'email' | 'text'
  label: string
}

const ContactInput: React.FC<ContactInputProps> = ({ id, type, label }) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={label}
      className='rounded-md py-1.5 px-1 text-zinc-900 placeholder:text-zinc-500 shadow-sm sm:text-sm sm:leading-6'
    />
  )
}

export default ContactInput
