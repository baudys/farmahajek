'use client'

import L from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import { useMediaQuery } from '@/hooks/useMediaQuery'

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
})

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
      <Marker
        position={[49.355362810666996, 13.004856931980328]}
        eventHandlers={{
          mouseover: event => event.target.openPopup(),
          mouseout: event => event.target.closePopup(),
        }}
      >
        <Popup>
          <h3>Farma Hájek</h3>
          <p>Hájek 36</p>
          <p>34506 Všeruby - Hájek</p>
          <p>okres Domažlice, Plzeňský kraj, Česko</p>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
