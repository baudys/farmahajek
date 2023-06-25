'use client'

import { TextField } from '@mui/material'
import { useState } from 'react'

interface EmailInputProps {
  email: string
  setEmail: (arg: string) => void
}

const EmailInput: React.FC<EmailInputProps> = ({ email, setEmail }) => {
  const [error, setError] = useState(false)
  const [helperText, setHelperText] = useState('')

  const handleChange = (event: any) => {
    setEmail(event.target.value)

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const isValidEmail = emailRegex.test(event.target.value)

    if (!isValidEmail) {
      setError(true)
      setHelperText('Neplatný e-mail')
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
        label='E-mail'
        value={email}
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

export default EmailInput
