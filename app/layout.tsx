import './globals.css'
import { Montserrat } from 'next/font/google'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/nav/Navbar'
import ToasterProvider from '@/providers/ToasterProvider'
import { AnalyticsProvider } from '@/providers/AnalyticsProvider'
import { Cookies } from '@/components/Cookies'
import { SklikProvider } from '@/providers/SklikProvider'
import Script from 'next/script'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://farmahajek.cz'),
  title: 'Farma Hájek 🐔',
  description: 'Rodinná farma již od roku 2000.',
  icons: {
    icon: 'favicon.ico',
  },
  applicationName: 'Farma Hájek',
  languages: {
    'cz-CS': '/',
    'en-US': '/',
    'de-DE': '/',
  },
  authors: [
    { name: 'Daniel Anthony Baudyš', url: 'https://github.com/ton1czech' },
  ],
  creator: 'Daniel Anthony Baudyš',
  category: 'zemědělství',
  keywords: [
    'zemědělství',
    'zemědělec',
    'milouš',
    'polák',
    'milouš polák',
    'miloslav',
    'miloslav polák',
    'míla',
    'míla polák',
    'farma',
    'hájek',
    'farma hájek',
    'slepice',
    'slepičky',
    'kohout',
    'králíkárna',
    'drůbežárna',
    'kurník',
    'kuře',
    'kuřátko',
    'krmení',
    'krmné směsi',
    'brambory',
    'zrní',
    'směsi',
    'prodejna',
    'eshop',
    'e-shop',
    'obchod',
    'kuřice',
    'dominant',
    'výběh',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      {/* <AnalyticsProvider />
      <SklikProvider /> */}
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
      <Script
        id='retargeting-script'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
                    window.sznIVA.IS.updateIdentities({
                        eid: null
                    });

                    var retargetingConf = {
                        rtgId: ${process.env.NEXT_PUBLIC_SEZNAM!},
                        consent: null
                    };
                    window.rc.retargetingHit(retargetingConf);
          `,
        }}
      />

      <body className={montserrat.className}>
        <ToasterProvider />

        <Newsletter />
        <Cookies />

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
