'use client'

import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import { motion } from 'framer-motion'

interface PhotoProps {
  photo: string
}

export const Photo = ({ photo }: PhotoProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <Dialog>
        <DialogTrigger>
          <img src={photo} alt='photo' />
        </DialogTrigger>
        <DialogContent className='max-h-[80vh] max-w-[95vw]'>
          <img
            src={photo}
            alt='photo'
            className='max-h-[80vh] max-w-[95vw] rounded-lg'
          />
        </DialogContent>
      </Dialog>
    </motion.div>
  )
}
