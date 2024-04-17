'use client'

import { useCookies } from '@/hooks/useCookies'
import { GoogleAnalytics } from '@next/third-parties/google'

export const AnalyticsProvider = () => {
  const { cookiesEnabled } = useCookies()

  return (
    <>
      {cookiesEnabled && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GTAG!} />
      )}
    </>
  )
}
