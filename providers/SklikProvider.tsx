'use client'

import { useCookies } from '@/hooks/useCookies'
import { useEffect } from 'react'

// Rozšíření typu window pro vlastnosti, které používáš
declare global {
  interface Window {
    sznIVA?: {
      IS: {
        updateIdentities: (identities: { eid: null }) => void
      }
    }
    rc?: {
      retargetingHit: (config: {
        rtgId: number
        consent: null | number
      }) => void
    }
  }
}

export const SklikProvider = () => {
  const { cookiesEnabled } = useCookies()

  useEffect(() => {
    if (!cookiesEnabled) {
      return
    }

    // Vložení externího skriptu pro retargeting
    const script = document.createElement('script')
    script.src = 'https://c.seznam.cz/js/rc.js'
    script.async = true
    document.body.appendChild(script)

    // Když je skript načten, spustí se retargeting
    script.onload = () => {
      if (window.sznIVA?.IS) {
        window.sznIVA.IS.updateIdentities({ eid: null })
      }

      const retargetingConf = {
        rtgId: 1355943,
        consent: 1,
      }

      if (window.rc) {
        window.rc.retargetingHit(retargetingConf)
      }
    }

    return () => {
      // Vyčištění skriptu při odmountování komponenty
      document.body.removeChild(script)
    }
  }, [cookiesEnabled])

  return null
}
