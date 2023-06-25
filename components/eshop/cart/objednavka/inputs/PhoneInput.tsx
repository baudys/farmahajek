'use client'

import { TextField } from '@mui/material'
import { useState } from 'react'

interface PhoneInputProps {
  telefon: string
  setTelefon: (arg: string) => void
}

const PhoneInput: React.FC<PhoneInputProps> = ({ telefon, setTelefon }) => {
  const [error, setError] = useState(false)
  const [helperText, setHelperText] = useState('')

  const handleChange = (event: any) => {
    setTelefon(event.target.value)

    const phoneNumberRegex =
      /^\+?(\d{1,3})?[-. ]?\(?\d{1,3}\)?[-. ]?\d{1,4}[-. ]?\d{1,4}[-. ]?\d{1,9}$/
    const isValidPhoneNumber = phoneNumberRegex.test(event.target.value)

    if (!isValidPhoneNumber) {
      setError(true)
      setHelperText('Neplatný telefon')
    } else {
      setError(false)
      setHelperText('')
    }
  }

  return (
    <div className='col-span-3'>
      <TextField
        required
        error={error}
        helperText={helperText}
        label='Telefon'
        value={telefon}
        onChange={handleChange}
        fullWidth
        InputLabelProps={{
          sx: {
            color: '#989898',
            '&.Mui-focused': {
              color: '#3D1A04',
              fontSize: '18px',
            },
          },
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#989898',
            },
            '&:hover fieldset': {
              borderColor: '#989898',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#BBD700',
            },
            '& input': {
              color: '#424242',
            },
          },
        }}
      />
    </div>
  )
}

export default PhoneInput
