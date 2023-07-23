import { useLanguage } from '@/hooks/useLanguage'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import emailjs from '@emailjs/browser'

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email('E-mail nesplňuje požadavky'),
  message: z.string().min(1),
})

const ContactUs = () => {
  const { language } = useLanguage(state => state)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: any) => {
    try {
      const emailResponse = await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        data,
        process.env.NEXT_PUBLIC_PUBLIC_API!
      )

      console.log(emailResponse)
    } catch (error) {
      console.log('Error sending email:', error)
      reset()
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='grid content-center gap-2'
    >
      <input
        id='name'
        type='text'
        placeholder={
          language === 'cs'
            ? 'Jméno'
            : language === 'en'
            ? 'Name'
            : language === 'de'
            ? 'Name'
            : ''
        }
        {...register('name')}
        className='rounded-md py-1.5 px-1 text-zinc-900 placeholder:text-zinc-500 shadow-sm sm:text-sm sm:leading-6 focus:outline-none focus:bg-zinc-100'
      />
      {errors.name && <div className='text-red-500'>Zadejte vaše jméno</div>}
      <input
        id='email'
        placeholder='E-mail'
        type='email'
        {...register('email')}
        className='rounded-md py-1.5 px-1 text-zinc-900 placeholder:text-zinc-500 shadow-sm sm:text-sm sm:leading-6 focus:outline-none focus:bg-zinc-100'
      />
      {errors.email && <div className='text-red-500'>Neplatný E-mail</div>}
      <textarea
        id='message'
        placeholder={
          language === 'cs'
            ? 'Zadejte dotaz'
            : language === 'en'
            ? 'Ask a question'
            : language === 'de'
            ? 'Eine Frage stellen'
            : ''
        }
        cols={3}
        rows={8}
        {...register('message')}
        className='rounded-md py-1.5 px-1 text-zinc-900 resize-none focus:outline-none focus:bg-zinc-100 transition placeholder:text-zinc-500'
      />
      {errors.message && <div className='text-red-500'>Zadejte zprávu</div>}
      <button className='bg-green p-2 rounded-md placeholder:text-zinc-500 hover:scale-[99%] text-lg font-semibold transition'>
        {language === 'cs' && <> ODESLAT!</>}
        {language === 'en' && <> SEND!</>}
        {language === 'de' && <> SENDEN SIE ES!</>}
      </button>
    </form>
  )
}

export default ContactUs
