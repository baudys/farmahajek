'use client'

import { useCookies } from '@/hooks/useCookies'
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'

export const AnalyticsProvider = () => {
  const { cookiesEnabled } = useCookies()

  return (
    <>
      {cookiesEnabled && (
        <>
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GTAG!} />
          <Script
            async
            src='https://www.googletagmanager.com/gtag/js?id=G-XZY4E8TSVH'
          />
          <Script>
            {`
        window.dataLayer = window.dataLayer || []; 
        function gtag(){dataLayer.push(arguments);} 
        gtag('js', new Date()); 
        gtag('config', 'G-XZY4E8TSVH');`}
          </Script>
        </>
      )}
    </>
  )
}
