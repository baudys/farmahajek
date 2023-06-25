'use client'

import { TextField } from '@mui/material'
import { useState } from 'react'

interface StreetInputProps {
  street: string
  setStreet: (arg: string) => void
}

const StreetInput: React.FC<StreetInputProps> = ({ street, setStreet }) => {
  const [error, setError] = useState(false)
  const [helperText, setHelperText] = useState('')

  const handleChange = (event: any) => {
    setStreet(event.target.value)

    if (!isNaN(event.target.value)) {
      setError(true)
      setHelperText('Zadejte textovou hodnotu')
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
        label='Ulice a číslo popisné'
        value={street}
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

export default StreetInput
