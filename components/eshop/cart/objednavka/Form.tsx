'use client'

import { useState } from 'react'
import NameInput from './inputs/NameInput'
import Container from '@/components/Container'
import EmailInput from './inputs/EmailInput'
import PhoneInput from './inputs/PhoneInput'
import StreetInput from './inputs/StreetInput'
import CityInput from './inputs/CityInput'
import PscInput from './inputs/PscInput'

const Form = () => {
  const [name, setName] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [psc, setPsc] = useState<number | undefined>(undefined)
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  return (
    <Container>
      <div className='grid grid-cols-1 xl:grid-cols-3 xl:gap-x-3 gap-y-3 xl:gap-y-6'>
        <NameInput jmeno={name} setJmeno={setName} />
        <StreetInput street={street} setStreet={setStreet} />
        <CityInput city={city} setCity={setCity} />
        <PscInput psc={psc} setPsc={setPsc} />
        <EmailInput email={email} setEmail={setEmail} />
        <PhoneInput telefon={phone} setTelefon={setPhone} />
      </div>
      <button className='bg-brown text-green p-5 w-full uppercase rounded-md mt-5 font-bold text-xl'>
        Objednat!
      </button>
    </Container>
  )
}

export default Form
