import {getRequestConfig} from 'next-intl/server'
import {defaultLocale, isLocale, locales} from '@/i18n/config'

export default getRequestConfig(async ({requestLocale}) => {
  const requestedLocale = await requestLocale
  const locale = isLocale(requestedLocale) ? requestedLocale : defaultLocale

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
    formats: {
      dateTime: {
        short: {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        },
      },
    },
    timeZone: 'Europe/Prague',
    now: new Date(),
  }
})

export {locales}
