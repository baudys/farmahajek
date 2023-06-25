'use client'

import Accordion from '@/components/Accordion'
import Container from '@/components/Container'
import { useService } from '@/hooks/useService'

const SluzbyPage = () => {
  const { drubezarna, handleDrubezarna, vejce, handleVejce } = useService(
    state => state
  )

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
      </Container>
    </div>
  )
}

export default SluzbyPage
