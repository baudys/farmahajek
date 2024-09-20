'use client'

import { useCookies } from '@/hooks/useCookies'
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
            <head>
              <script
                type='text/javascript'
                src='https://c.seznam.cz/js/rc.js'
              />
              <script>
                {`
                    window.sznIVA.IS.updateIdentities({
                        eid: null
                    });

                    var retargetingConf = {
                        rtgId: 1355943,
                        consent: null
                    };
                    window.rc.retargetingHit(retargetingConf);
                `}
              </script>
            </head>
          )}
        </>
      )}
    </>
  )
}
