'use client'

import L, { LatLngExpression } from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import Link from 'next/link'
// import { FullscreenControl } from 'react-leaflet-fullscreen'
// import 'react-leaflet-fullscreen/styles.css'
import { ReactNode } from 'react'

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

const ZoomableMarker = ({
  position,
  icon,
  zoomLevel,
  popupContent,
}: {
  position: LatLngExpression
  icon: L.Icon<L.IconOptions> | L.DivIcon
  zoomLevel: number
  popupContent: ReactNode
}) => {
  const map = useMap()

  return (
    <Marker
      position={position}
      icon={icon}
      eventHandlers={{
        click: () => map.setView(position, zoomLevel, { animate: true }),
        mouseover: (event) => event.target.openPopup(),
      }}
    >
      <Popup>{popupContent}</Popup>
    </Marker>
  )
}

const ZoomableMap = () => {
  const isDesktop = useMediaQuery('(min-width: 700px)')

  return (
    <MapContainer
      center={[49.9171208544799, 14.67178354882282]}
      zoom={isDesktop ? 8 : 6}
      scrollWheelZoom={false}
      className='h-[400px] rounded-lg md:h-[700px]'
    >
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      {/* <FullscreenControl /> */}

      <ZoomableMarker
        position={[49.355362810666996, 13.004856931980328]}
        icon={createEmojiIcon('🧑‍🌾')}
        zoomLevel={17}
        popupContent={
          <>
            <h3 className='text-lg font-bold'>Farma Hájek</h3>
            <p>Hájek 36, 345 06 Kdyně</p>
          </>
        }
      />
      <ZoomableMarker
        position={[50.66706246845249, 15.093818038881734]}
        icon={createEmojiIcon('🐔')}
        zoomLevel={17}
        popupContent={
          <>
            <Link
              href='https://krmiva-ecofeed.cz/'
              className='text-lg font-bold underline'
            >
              Ecofeed
            </Link>
            <p>Parkoviště ČD, Nádražní ul., 463 42 Hodkovice nad Mohelkou</p>
          </>
        }
      />
      <ZoomableMarker
        position={[49.25440734518299, 13.920485639888442]}
        icon={createEmojiIcon('🐔')}
        zoomLevel={17}
        popupContent={
          <>
            <Link
              href='https://www.cschstrakonice.cz/clanky/novinky/nedelni-trhy.html'
              className='text-lg font-bold underline'
            >
              Trhy Strakonice
            </Link>
            <p>Podsrpenská 339, 386 01 Strakonice</p>
          </>
        }
      />
      <ZoomableMarker
        position={[49.61727895651927, 13.612682776462778]}
        icon={createEmojiIcon('🐔')}
        zoomLevel={17}
        popupContent={
          <>
            <Link
              href='https://www.krmnesmesikvidera.cz/prodej-kuric'
              className='text-lg font-bold underline'
            >
              Krmné směsi Kvídera s.r.o.
            </Link>
            <p>Zámecká 200, 335 61 Spálené Poříčí</p>
          </>
        }
      />
      <ZoomableMarker
        position={[50.38785533623291, 13.19428235875933]}
        icon={createEmojiIcon('🐔')}
        zoomLevel={17}
        popupContent={
          <>
            <Link
              href='https://zooarcha.cz/index.php?str=klasterec'
              className='text-lg font-bold underline'
            >
              Archa ZOO
            </Link>
            <p>Osvobozená 777 200, 431 51 Klášterec nad Ohří</p>
          </>
        }
      />
      <ZoomableMarker
        position={[50.187113540129545, 14.036750534651851]}
        icon={createEmojiIcon('🐔')}
        zoomLevel={17}
        popupContent={
          <>
            <Link href='#' className='text-lg font-bold underline'>
              Prodejní sklad Smečno
            </Link>
            <p>Kačická 514, 273 05 Smečno</p>
          </>
        }
      />
      <ZoomableMarker
        position={[50.505117522156155, 14.260882544285527]}
        icon={createEmojiIcon('🐔')}
        zoomLevel={17}
        popupContent={
          <>
            <Link href='#' className='text-lg font-bold underline'>
              Prodejní sklad Polepy
            </Link>
            <p>Areál firmy HARIS, 431 51 Polepy</p>
          </>
        }
      />
      <ZoomableMarker
        position={[50.17989393225716, 12.642782139517404]}
        icon={createEmojiIcon('🐔')}
        zoomLevel={17}
        popupContent={
          <>
            <Link href='#' className='text-lg font-bold underline'>
              Sokolov
            </Link>
            <p>Přesná adresa bude zveřejněna 2 dny před prodejem</p>
          </>
        }
      />
      <ZoomableMarker
        position={[49.711377214851, 12.77723709663926]}
        icon={createEmojiIcon('🐔')}
        zoomLevel={17}
        popupContent={
          <>
            <Link href='#' className='text-lg font-bold underline'>
              Bor u Tachova
            </Link>
            <p>Přesná adresa bude zveřejněna 2 dny před prodejem</p>
          </>
        }
      />
      {/* <ZoomableMarker
        position={[50.28549046671445, 14.828549212785425]}
        icon={createEmojiIcon('🐔')}
        zoomLevel={17}
        popupContent={
          <>
            <Link href='#' className='text-lg font-bold underline'>
              Benátky nad Jizerou
            </Link>
            <p>Přesná adresa bude zveřejněna týden před prodejem</p>
          </>
        }
    /> */}
      <ZoomableMarker
        position={[49.96452413388497, 14.070017316932102]}
        icon={createEmojiIcon('🐔')}
        zoomLevel={17}
        popupContent={
          <>
            <Link href='#' className='text-lg font-bold underline'>
              Beroun
            </Link>
            <p>Přesná adresa bude zveřejněna 2 dny před prodejem</p>
          </>
        }
      />
      {/*  */}
      <ZoomableMarker
        position={[50.0971790501268, 16.086025029110775]}
        icon={createEmojiIcon('🐔')}
        zoomLevel={17}
        popupContent={
          <>
            <Link href='#' className='text-lg font-bold underline'>
              Borohrádek
            </Link>
            <p>vlakové nádraží</p>
          </>
        }
      />
      <ZoomableMarker
        position={[50.101915406162995, 15.193056657999412]}
        icon={createEmojiIcon('🐔')}
        zoomLevel={17}
        popupContent={
          <>
            <Link href='#' className='text-lg font-bold underline'>
              Velký Osek
            </Link>
            <p>vlakové nádraží</p>
          </>
        }
      />
      <ZoomableMarker
        position={[50.290511455129625, 14.739606212663302]}
        icon={createEmojiIcon('🐔')}
        zoomLevel={17}
        popupContent={
          <>
            <Link href='#' className='text-lg font-bold underline'>
              Mečeříž
            </Link>
            <p>Mečeříž 41, parkoviště ZD Mečeříž</p>
          </>
        }
      />
    </MapContainer>
  )
}

export default ZoomableMap
