'use client'

import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'
import { useLanguage } from '@/hooks/useLanguage'
import { allCategories } from '@/database/categories'

interface Props {
  categories: string[]
  setCategories: (state: string[]) => void
}

export const Categories = ({ categories, setCategories }: Props) => {
  const { language } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const toggleCategory = (category: string) => {
    // @ts-ignore
    setCategories((prev: string[]) => {
      if (!Array.isArray(prev)) return []
      return prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className='mb-4'
    >
      <h3
        onClick={() => setIsOpen((prev) => !prev)}
        className='inline-flex cursor-pointer select-none items-center gap-1'
      >
        {language === 'cs' && 'Kategorie'}
        {language === 'en' && 'Categories'}
        {language === 'de' && 'Kategorien'}
        <ChevronDown
          size={18}
          className={cn('transition', isOpen && 'rotate-180')}
        />
      </h3>

      {isOpen && (
        <div className='mt-2 flex flex-wrap gap-2'>
          {allCategories.map((category) => (
            <Button
              key={category}
              onClick={() => toggleCategory(category)}
              variant={categories.includes(category) ? 'default' : 'outline'}
              className='border'
            >
              {category}
            </Button>
          ))}
        </div>
      )}
    </motion.div>
  )
}
