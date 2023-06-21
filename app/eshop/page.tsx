import Container from '@/components/Container'
import Gallery from '@/components/eshop/Gallery'
import Sidebar from '@/components/eshop/sidebar/Sidebar'

const Eshop = () => {
  return (
    <div className='bg-white pt-40'>
      <Container>
        <div className='grid lg:grid-cols-[25%_75%] gap-12'>
          <Sidebar />
          <Gallery />
        </div>
      </Container>
    </div>
  )
}

export default Eshop
