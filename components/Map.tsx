'use client'

import L from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import Link from 'next/link'
import { FullscreenControl } from 'react-leaflet-fullscreen'
import 'react-leaflet-fullscreen/styles.css'

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
})

const createEmojiIcon = (emoji: string) => {
  const iconHTML = `<div class="emoji-icon text-lg">${emoji}</div>`
  return L.divIcon({
    html: iconHTML,
    className: 'custom-icon',
  })
}

const Map = () => {
  const isDesktop = useMediaQuery('(min-width: 700px)')

  return (
    <MapContainer
      center={[49.9171208544799, 14.67178354882282] as L.LatLngExpression}
      zoom={isDesktop ? 8 : 6}
      scrollWheelZoom={false}
      className='rounded-lg h-[400px] md:h-[700px]'
    >
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      <FullscreenControl />

      <Marker
        position={[49.355362810666996, 13.004856931980328]}
        icon={createEmojiIcon('🧑‍🌾')}
        eventHandlers={{
          mouseover: event => event.target.openPopup(),
        }}
      >
        <Popup>
          <h3 className='text-lg font-bold'>Farma Hájek</h3>
          <div className='mt-2'>
            <p className='!m-0'>Hájek 36</p>
            <p className='!m-0'>
              <span className='mr-2'>345 06</span>Kdyně
            </p>
          </div>
        </Popup>
      </Marker>
      <Marker
        position={[50.66706246845249, 15.093818038881734]}
        icon={createEmojiIcon('🐔')}
        eventHandlers={{
          mouseover: event => event.target.openPopup(),
        }}
      >
        <Popup>
          <Link
            href='https://krmiva-ecofeed.cz/'
            className='text-lg font-bold underline'
          >
            Ecofeed
          </Link>
          <div className='mt-2'>
            <p className='!m-0'>Parkoviště ČD, Nádražní ul.</p>
            <p className='!m-0'>
              <span className='mr-2'>463 42</span> Hodkovice nad Mohelkou
            </p>
          </div>
          <div className='mt-4'>
            <h3 className='font-semibold !m-0'>Kontaktní údaje</h3>
            <p className='!m-0'>+420 734 257 555</p>
            <p className='!m-0'>+420 601 580 048</p>
            <p className='!m-0'>adabareska@seznam.cz</p>
          </div>
        </Popup>
      </Marker>
      <Marker
        position={[49.25440734518299, 13.920485639888442]}
        icon={createEmojiIcon('🐔')}
        eventHandlers={{
          mouseover: event => event.target.openPopup(),
        }}
      >
        <Popup>
          <Link
            href='https://www.cschstrakonice.cz/clanky/novinky/nedelni-trhy.html'
            className='text-lg font-bold underline'
          >
            Trhy Strakonice
          </Link>
          <div className='mt-2'>
            <p className='!m-0'>Podsrpenská 339</p>
            <p className='!m-0'>
              <span className='mr-2'>386 01</span> Strakonice
            </p>
          </div>
          <div className='mt-4'>
            <p className='!m-0'>každou neděli od 8 hodin</p>
          </div>
        </Popup>
      </Marker>
      <Marker
        position={[50.37943323600494, 13.269738104650584]}
        icon={createEmojiIcon('🐔')}
        eventHandlers={{
          mouseover: event => event.target.openPopup(),
        }}
      >
        <Popup>
          <Link
            href='https://zooarcha.cz/index.php?str=kadan'
            className='text-lg font-bold underline'
          >
            Archa ZOO
          </Link>
          <div className='mt-2'>
            <p className='!m-0'>Jungmannova 655</p>
            <p className='!m-0'>
              <span className='mr-2'>432 01</span> Kadaň
            </p>
          </div>
          <div className='mt-4'>
            <h3 className='font-semibold !m-0'>Kontaktní údaje</h3>
            <p className='!m-0'>+420 724 690 603</p>
          </div>
        </Popup>
      </Marker>
      <Marker
        position={[50.67884198277531, 14.546394201393023]}
        icon={createEmojiIcon('🌾')}
        eventHandlers={{
          mouseover: event => event.target.openPopup(),
        }}
      >
        <Popup>
          <Link
            href='https://www.amv-krmiva.cz/'
            className='text-lg font-bold underline'
          >
            AMV Krmiva
          </Link>
          <div className='mt-2'>
            <p className='!m-0'>Partyzánská 2345/14</p>
            <p className='!m-0'>
              <span className='mr-2'>470 01</span> Česká Lípa
            </p>
          </div>
        </Popup>
      </Marker>
      <Marker
        position={[49.61727895651927, 13.612682776462778]}
        icon={createEmojiIcon('🐔')}
        eventHandlers={{
          mouseover: event => event.target.openPopup(),
        }}
      >
        <Popup>
          <Link
            href='https://www.krmnesmesikvidera.cz/prodej-kuric'
            className='text-lg font-bold underline'
          >
            Krmné směsi Kvídera s.r.o.
          </Link>
          <div className='mt-2'>
            <p className='!m-0'>Varta 328</p>
            <p className='!m-0'>
              <span className='mr-2'>335 61</span> Spálené Poříčí
            </p>

            <p className='!m-0 !mt-4'>Kontaktní údaje:</p>
            <p className='!m-0'>+420 602 830 823</p>
            <p className='!m-0'>+420 724 981 414</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
