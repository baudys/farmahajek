'use client'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Check, ChevronsUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/hooks/useLanguage'
import { FlagIcon } from './flag-icon'

const languages = [
  {
    value: 'cs',
  },
  {
    value: 'en',
  },
  {
    value: 'de',
  },
] as const

interface LanguageSelectorProps {
  isTopOfPage: boolean
}

export const LanguageSelector = ({ isTopOfPage }: LanguageSelectorProps) => {
  const { language, setLanguage } = useLanguage((state) => state)

  const [open, setOpen] = useState<boolean>(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='h-10 w-[82px] justify-between border-none bg-transparent px-2 text-white hover:bg-zinc-100/10 hover:text-white'
        >
          <FlagIcon locale={language} width={32} height={21} className='shrink-0' />
          <ChevronsUpDown
            className={cn(
              'ml-2 h-4 w-4 shrink-0 opacity-50 transition duration-300',
              !isTopOfPage && 'text-brown',
            )}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='z-[1112] w-[124px] border-zinc-200 bg-white/95 p-2 backdrop-blur-sm'>
        <div className='space-y-1'>
          {languages.map(({ value }) => (
            <button
              key={value}
              type='button'
              onClick={() => {
                setLanguage(value)
                setOpen(false)
              }}
              className={cn(
                'flex w-full cursor-pointer items-center rounded-md px-2 py-1.5 text-left transition hover:bg-zinc-100',
                language === value && 'bg-zinc-100',
              )}
              aria-label={`Switch language to ${value}`}
            >
              <Check
                className={cn(
                  'mr-2 h-4 w-4 text-zinc-700',
                  language === value ? 'opacity-100' : 'opacity-0',
                )}
              />
              <FlagIcon locale={value} width={34} height={22} className='shrink-0' />
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
