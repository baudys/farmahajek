'use client'

import Accordion from '@/components/Accordion'
import Container from '@/components/Container'
import { useService } from '@/hooks/useService'
import Image from 'next/image'

const SluzbyPage = () => {
  const {
    drubezarna,
    handleDrubezarna,
    vejce,
    handleVejce,
    zahradnictvi,
    handleZahradnictvi,
    zemniprace,
    handleZemniprace,
    zemedelstvi,
    handleZemedelstvi,
  } = useService(state => state)

  return (
    <div className='py-28 bg-brown'>
      <Container>
        <Accordion
          src='bg-[url(/sluzby/drubezarna.jpg)]'
          isOpen={drubezarna}
          handleToggle={handleDrubezarna}
          title='Drůbežárna'
        >
          <p>
            Chov je prováděn na volné podestýlce, tudíž kuřice jsou vhodné pro
            domácí chov na dvorech a zahradách (jsou zvyklé na pohyb).
          </p>
          <p>
            Ke kuřicím možnost zakoupit i kohouta. Kuřice začíná snášet ve 20
            týdnech věku.
          </p>
          <p>
            Chov je prováděn od jednodenních kuřátek, které nakupujeme v Líhni
            Studenec, až po finální výkrm kuřic.
          </p>
          <p>Kuřice dostávají vyváženou stravu ve formě krmných směsí.</p>
          <p>Chov je pod stálým veterinárním dohledem.</p>
          <p className='font-bold'>Jsme chovatelé, nejsme PŘEKUPNÍCI.</p>
        </Accordion>

        <Accordion
          src='bg-[url(/sluzby/vejce.jpg)]'
          isOpen={vejce}
          handleToggle={handleVejce}
          title='Prodej vajec'
        >
          <p>Zabýváme se produkcí konzumních vajec na VOLNÉ PODESTÝLCE.</p>
          <p>
            Vejce prodáváme jak na naší rodinné farmě tak v prodejnách uvedených
            níže.
          </p>
          <p>Vejce třídíme do velikostí S, M, L a XL</p>
          <p>
            Nyní disponujeme cca 700 nosnicemi, které jsou chovány v
            zrekonstruované stodole s technologii snáškových hnízd od Firmy
            kovobel s.r.o.
          </p>
        </Accordion>

        <Accordion
          src='bg-[url(/sluzby/zahradnictvi.jpg)]'
          isOpen={zahradnictvi}
          handleToggle={handleZahradnictvi}
          title='Zahradnictví'
        >
          <p>
            Na naší farmě disponujeme pěstebnímy foliovníky, ve kterých
            pěstujeme sezonní okrasné květiny a zeleninu.
          </p>
          <p>Naše výpěstky jsou k dostání na Farmě po telefonické domluvě</p>
        </Accordion>

        <Accordion
          src='bg-[url(/sluzby/zemni-prace.jpeg)]'
          isOpen={zemniprace}
          handleToggle={handleZemniprace}
          title='Zemní práce'
        >
          <p>New Holland ls 160w (paletizační vidle, nakládací lžíce)</p>
          <p>JCB 4CX (lžíce 30 – 50 – 70- 90, svahovací lžíce)</p>
          <p>
            JCB JS 175W (lžíce 130 těžební, hydraulicky naklápěná svahovačka)
          </p>
          <p>traktor john deere 7530 premium (odvoz zeminy)</p>
          <p>
            traktor john deere 7530 premium + míchačka mammut 1200 l (míchání
            betonu)
          </p>
          <div className='flex flex-col lg:flex-row'>
            <Image
              src='/sluzby/zemniprace/1.jpg'
              alt=''
              width={300}
              height={300}
            />
            <Image
              src='/sluzby/zemniprace/2.jpg'
              alt=''
              width={300}
              height={300}
            />
            <Image
              src='/sluzby/zemniprace/3.jpg'
              alt=''
              width={300}
              height={300}
            />
            <Image
              src='/sluzby/zemniprace/4.jpg'
              alt=''
              width={300}
              height={300}
            />
          </div>
        </Accordion>

        <Accordion
          src='bg-[url(/sluzby/zemedelstvi.jpg)]'
          isOpen={zemedelstvi}
          handleToggle={handleZemedelstvi}
          title='Zemědělství'
        >
          <h2>Rostlinná výroba</h2>
          <p>
            Zabýváme se pěstováním konzumních brambor, které jsou k zakoupení na
            farmě + ve smluvních prodejnách.
          </p>
          <p>Dále pěstujeme obilí pro potřebu farmy</p>
          <p>- jetel nachový na semenařinu a na zlepšení půdní struktury</p>
          <p>- hořčici bílou na semenařinu</p>

          <h2>Živočišná výroba</h2>
          <p>Odchov kuřic dominant na volné podestýlce</p>
          <p>Produkce vajec z volné podestýlky</p>
          <p>Kamerunské ovce na vypásání špatně přístupných pozemků</p>
          <p>Včely – na farmě prodej včelích produktu</p>
          <p>Rybníky – extenzivní odchov ryb</p>

          <h2>Služby</h2>
          <h3>traktory John Deere 7530 premium</h3>
          <p>- orba kuhn multimaster 123</p>
          <p>- kypření, podmítky s přísevem (mandam top 4m)</p>
          <p>- doprava zemědělských komodit 20 t návěs</p>

          <h3>traktor John Deere 5055e</h3>
          <p>
            - mulčovač cormino s horizontální osou rotace a kladivy se záběrem 2
            m
          </p>
        </Accordion>
      </Container>
    </div>
  )
}

export default SluzbyPage
