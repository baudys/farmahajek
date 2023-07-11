import React from 'react'

const ContactTextarea = () => {
  return (
    <textarea
      className='rounded-md py-1.5 px-1 text-zinc-900 resize-none focus:outline-none focus:bg-zinc-100 transition placeholder:text-zinc-500'
      placeholder='Zadejte dotaz'
      cols={3}
      rows={8}
    />
  )
}

export default ContactTextarea
