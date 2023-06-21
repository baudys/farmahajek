import AddToCartButton from '@/components/buttons/AddToCartButton'
import Image from 'next/image'

const D853C = () => {
  return (
    <div className='grid xl:grid-cols-2'>
      <Image src='/slepicky/D853.png' alt='D853' width={500} height={500} />
      <div className='flex items-center w-full'>
        <div>
          <div>
            <h2 className='font-bold text-3xl uppercase mb-2'>
              Kuřice Dominant Červený D853
            </h2>
            <p>
              DOMINANT ČERVENÝ D853 je velice atraktivně zbarveným programem s
              hnědou až červenou barvou peří na celém těle. Program využívá
              možnosti sexování podle geneticky podmíněné odlišné rychlosti
              růstu letek u jednodenních kohoutů s pomalým a u slepiček s
              rychlým růstem letek.
            </p>
            <AddToCartButton />
          </div>
        </div>
      </div>

      <div />

      <div className='mt-20 space-y-4'>
        <h3 className='uppercase font-semibold text-2xl mb-8'>
          Více informací
        </h3>
        <p className='text-sm font-light'>Období chovu od 19 do 78 týdnů:</p>
        <p>Životnost: 95 %</p>
        <p>Stáří při 50 % snášky: 23 týdnů</p>
        <p>Vrchol snášky ve 29 až 30 týdnu: 92 %</p>
        <p>Počet vajec: 300 ks</p>
        <p>Průměrná hmotnost vajec: 62 g</p>
        <p>Spotřeba krmiva na slepici a den: 123 g</p>
        <p>Hmotnost těla slepice v 68 týdnu: 2,20 kg</p>
        <p>Barva skořápky: hnědá</p>
        <p>
          Je velice oblíben jako finální hybrid pro samozásobitelské chovy.
          Kohouti bývají využíváni i k produkci tradičního vysoce chutného
          drůbežího masa. Předností jsou vysoké parametry snášky okolo 300
          vajec. Charakteristická je hnědá barva skořápky vajec.
        </p>
        <p>
          Tento program je výsledkem křížení rychle opeřující otcovské populace
          Rodajlendky červené = RIR s alelou recesivního genu "k" pro rychlost
          opeřování "K/k" a mateřská populace je pomalu opeřující červené
          Rodajlendky = RIR s dominantní alelou "K". Při líhnutí jednodenních
          kuřat se uplatňuje feathersexing při využití alel "K/k", kdy
          jednodenní kohoutek od matky získává dominantní alelu tohoto genu "K"
          a je pomalu opeřující a jednodenní slepička získává od otce alelu
          recesivní "k" a je rychle opeřující, což je patrné na letkách
          jednodenních kuřat.
        </p>
      </div>
    </div>
  )
}

export default D853C
