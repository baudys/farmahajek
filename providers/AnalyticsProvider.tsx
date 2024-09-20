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
          {(cookiesEnabled ||
            window?.localStorage
              .getItem('cookies-storage')
              ?.includes('"cookiesEnabled":true')) && (
            <>
              <Script
                strategy='afterInteractive'
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env
                  .NEXT_PUBLIC_GTAG!}`}
              />
              <Script
                id='google-analytics'
                strategy='afterInteractive'
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${process.env.NEXT_PUBLIC_GTAG!}');
                `,
                }}
              />

              <Script
                type='text/javascript'
                strategy='afterInteractive'
                src='https://c.seznam.cz/js/rc.js'
              />
              <Script id='retargeting-script' strategy='afterInteractive'>
                {`
                    window.sznIVA.IS.updateIdentities({
                        eid: null
                    });

                    var retargetingConf = {
                        rtgId: ${process.env.NEXT_PUBLIC_SEZNAM!},
                        consent: null
                    };
                    window.rc.retargetingHit(retargetingConf);
                `}
              </Script>
            </>
          )}
        </>
      )}
    </>
  )
}
