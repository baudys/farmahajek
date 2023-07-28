'use client'

import { useLanguage } from '@/hooks/useLanguage'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import emailjs from '@emailjs/browser'
import { toast } from 'react-hot-toast'

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
      toast.success(
        language === 'cs'
          ? 'Úspěšně odesláno.'
          : language === 'en'
          ? 'Sent Successfully.'
          : language === 'de'
          ? 'Erfolgreich gesendet.'
          : ''
      )
    } catch (error) {
      console.log('Error sending email:', error)
      toast.error(
        language === 'cs'
          ? 'Něco se pokazilo, zkuste to prosím později.'
          : language === 'en'
          ? 'Something went wrong, please try again later.'
          : language === 'de'
          ? 'Es ist ein Fehler aufgetreten, bitte versuchen Sie es später noch einmal.'
          : ''
      )
    } finally {
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
      {errors.name && (
        <div className='text-red-500'>
          {language === 'cs' && <>Zadejte vaše jméno</>}
          {language === 'en' && <>Enter your name</>}
          {language === 'de' && <>Geben Sie Ihren Namen ein</>}
        </div>
      )}
      <input
        id='email'
        placeholder='E-mail'
        type='email'
        {...register('email')}
        className='rounded-md py-1.5 px-1 text-zinc-900 placeholder:text-zinc-500 shadow-sm sm:text-sm sm:leading-6 focus:outline-none focus:bg-zinc-100'
      />
      {errors.email && (
        <div className='text-red-500'>
          {language === 'cs' && <>Neplatný E-mail</>}
          {language === 'en' && <>Invalid E-mail</>}
          {language === 'de' && <>Ungültige E-Mail</>}
        </div>
      )}
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
      {errors.message && (
        <div className='text-red-500'>
          {language === 'cs' && <>Zadejte zprávu</>}
          {language === 'en' && <>Enter message</>}
          {language === 'de' && <>Nachricht eingeben</>}
        </div>
      )}
      <button className='bg-green p-2 rounded-md placeholder:text-zinc-500 hover:scale-[99%] text-lg font-semibold transition'>
        {language === 'cs' && <> ODESLAT!</>}
        {language === 'en' && <> SEND!</>}
        {language === 'de' && <> SENDEN SIE ES!</>}
      </button>
    </form>
  )
}

export default ContactUs
