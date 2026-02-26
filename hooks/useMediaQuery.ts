'use client'

import { useSyncExternalStore } from 'react'

export function useMediaQuery(query: string): boolean {
  const subscribe = (onStoreChange: () => void) => {
    if (typeof window === 'undefined') {
      return () => undefined
    }

    const matchMedia = window.matchMedia(query)
    if (matchMedia.addEventListener) {
      matchMedia.addEventListener('change', onStoreChange)
    } else {
      matchMedia.addListener(onStoreChange)
    }

    return () => {
      if (matchMedia.removeEventListener) {
        matchMedia.removeEventListener('change', onStoreChange)
      } else {
        matchMedia.removeListener(onStoreChange)
      }
    }
  }

  const getSnapshot = () =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false

  return useSyncExternalStore(subscribe, getSnapshot, () => false)
}
