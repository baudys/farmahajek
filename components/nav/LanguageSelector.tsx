'use client'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Command, CommandGroup, CommandItem } from '@/components/ui/command'
import { Check, ChevronsUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/hooks/useLanguage'

const languages = [
  {
    value: 'cs',
    src: '/flags/cz.png',
  },
  {
    value: 'en',
    src: '/flags/gb.png',
  },
  {
    value: 'de',
    src: '/flags/de.png',
  },
]

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage(state => state)

  const [open, setOpen] = useState<boolean>(false)
  const [src, setSrc] = useState<string>('/flags/cz.png')

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-[70px] justify-between bg-transparent text-white border-none hover:bg-zinc-100/10 hover:text-white'
        >
          <Image src={src} width={30} height={30} alt={language} />
          <ChevronsUpDown className='w-4 h-4 ml-2 opacity-50 shrink-0' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[100px] p-2 z-[1112] bg-zinc-300'>
        <Command>
          <CommandGroup className='space-y-2 bg-zinc-300'>
            {languages.map(({ src, value }: { src: string; value: string }) => (
              <CommandItem
                key={value}
                onSelect={() => {
                  setLanguage(value)
                  setSrc(src)
                  setOpen(false)
                }}
                className='mb-2 cursor-pointer hover:bg-zinc-400/30'
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    language === value ? 'opacity-100' : 'opacity-0'
                  )}
                />
                <Image src={src} width={30} height={30} alt={value} />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default LanguageSelector
