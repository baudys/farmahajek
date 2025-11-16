import dynamic from 'next/dynamic'
const Map = dynamic(() => import('@/components/map'), { ssr: false })

export default function VydejniMistaPage() {
  return (
    <main className='pt-16 lg:pt-20'>
      <Map />
    </main>
  )
}
