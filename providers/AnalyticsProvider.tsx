'use client'

import { useCookies } from '@/hooks/useCookies'
import Script from 'next/script'
import { useEffect, useState } from 'react'

export const AnalyticsProvider = () => {
  const { cookiesEnabled } = useCookies()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  })

  return (
    <>
      {mounted && (
        <>
          {cookiesEnabled ||
            (window &&
              window.localStorage
                .getItem('cookies-storage')
                ?.includes('"cookiesEnabled":true') && (
                <>
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
              ))}
        </>
      )}
    </>
  )
}
