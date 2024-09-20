'use client'

import { useCookies } from '@/hooks/useCookies'
import Head from 'next/head'
import Script from 'next/script'
import { useEffect, useState } from 'react'

export const SklikProvider = () => {
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
            <Head>
              <script
                type='text/javascript'
                src='https://c.seznam.cz/js/rc.js'
              />
              <script id='retargeting-script'>
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
              </script>
            </Head>
          )}
        </>
      )}
    </>
  )
}
