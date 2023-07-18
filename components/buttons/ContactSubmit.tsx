interface ContactSubmitProps {
  label: string
}

const ContactSubmit: React.FC<ContactSubmitProps> = ({ label }) => {
  return (
    <button className='bg-green p-2 rounded-md placeholder:text-zinc-500 hover:scale-[99%] text-lg font-semibold transition'>
      {label}
    </button>
  )
}

export default ContactSubmit
