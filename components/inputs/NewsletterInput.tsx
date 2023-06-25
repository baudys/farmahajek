'use client'

import { TextField } from '@mui/material'
import { useState } from 'react'

const NewsletterInput = () => {
  const [email, setEmail] = useState('')

  const handleChange = (event: any) => {
    setEmail(event.target.value)
  }

  return (
    <div>
      <TextField
        label='E-mail'
        value={email}
        onChange={handleChange}
        fullWidth
        className='rounded-md'
        InputLabelProps={{
          sx: {
            color: '#3D1A04',
            fontSize: '16px',
            '&.Mui-focused': {
              color: '#3D1A04',
              fontSize: '18px',
            },
          },
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#3D1A04',
            },
            '&:hover fieldset': {
              borderColor: '#3D1A04',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#3D1A04',
            },
            '& input': {
              color: '#424242',
              fontSize: '16px',
            },
          },
        }}
      />
    </div>
  )
}

export default NewsletterInput
