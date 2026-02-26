'use client'

import { cn } from '@/lib/utils'
import type { Locale } from '@/i18n/config'

interface FlagIconProps {
  locale: Locale
  className?: string
  width?: number
  height?: number
}

interface BaseFlagProps {
  className?: string
  width?: number
  height?: number
}

const CzechFlag = ({ className, width = 36, height = 24 }: BaseFlagProps) => (
  <svg
    viewBox='0 0 36 24'
    aria-hidden='true'
    width={width}
    height={height}
    className={cn('overflow-hidden rounded-sm', className)}
  >
    <rect width='36' height='24' fill='#fff' />
    <rect y='12' width='36' height='12' fill='#d7141a' />
    <polygon points='0,0 15,12 0,24' fill='#11457e' />
  </svg>
)

const GermanFlag = ({ className, width = 36, height = 24 }: BaseFlagProps) => (
  <svg
    viewBox='0 0 36 24'
    aria-hidden='true'
    width={width}
    height={height}
    className={cn('overflow-hidden rounded-sm', className)}
  >
    <rect width='36' height='8' y='0' fill='#000' />
    <rect width='36' height='8' y='8' fill='#dd0000' />
    <rect width='36' height='8' y='16' fill='#ffce00' />
  </svg>
)

const UkFlag = ({ className, width = 36, height = 24 }: BaseFlagProps) => (
  <svg
    viewBox='0 0 36 24'
    aria-hidden='true'
    width={width}
    height={height}
    className={cn('overflow-hidden rounded-sm', className)}
  >
    <rect width='36' height='24' fill='#012169' />

    <polygon points='0,0 4,0 36,20 36,24 32,24 0,4' fill='#fff' />
    <polygon points='36,0 32,0 0,20 0,24 4,24 36,4' fill='#fff' />
    <polygon points='0,0 2,0 36,22 36,24 34,24 0,2' fill='#c8102e' />
    <polygon points='36,0 34,0 0,22 0,24 2,24 36,2' fill='#c8102e' />

    <rect x='14' y='0' width='8' height='24' fill='#fff' />
    <rect x='0' y='8' width='36' height='8' fill='#fff' />
    <rect x='15.5' y='0' width='5' height='24' fill='#c8102e' />
    <rect x='0' y='9.5' width='36' height='5' fill='#c8102e' />
  </svg>
)

export const FlagIcon = ({
  locale,
  className,
  width = 12,
  height = 8,
}: FlagIconProps) => {
  if (locale === 'cs') {
    return <CzechFlag className={className} width={width} height={height} />
  }

  if (locale === 'de') {
    return <GermanFlag className={className} width={width} height={height} />
  }

  return <UkFlag className={className} width={width} height={height} />
}
