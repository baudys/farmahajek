'use client'

import Accordion from '@/components/Accordion'
import Container from '@/components/Container'
import { useLanguage } from '@/hooks/useLanguage'
import { useService } from '@/hooks/useService'
import Image from 'next/image'
import { motion } from 'framer-motion'

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
    brambory,
    handleBrambory,
  } = useService(state => state)

  const { language } = useLanguage(state => state)

  return (
    <div className='pb-28 bg-gradient-to-br from-zinc-200 to-zinc-400 '>
      <div className='w-full h-[70.72px] xl:h-[84.81px] bg-black' />
      <Container styles='mt-10'>
        <motion.div
          initial={{ x: -500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <Accordion
            src='bg-[url(/sluzby/drubezarna.webp)]'
            isOpen={drubezarna}
            handleToggle={handleDrubezarna}
            title={
              language === 'cs'
                ? 'Drůbežárna'
                : language === 'en'
                ? 'Poultry Farm'
                : language === 'de'
                ? 'Geflügelfarm'
                : ''
            }
          >
            {language === 'cs' && (
              <>
                <p>
                  Chov je prováděn na volné podestýlce, tudíž kuřice jsou vhodné
                  pro domácí chov na dvorech a zahradách (jsou zvyklé na pohyb).
                </p>
                <p>
                  Ke kuřicím možnost zakoupit i kohouta. Kuřice začíná snášet ve
                  20 týdnech věku.
                </p>
                <p>
                  Chov je prováděn od jednodenních kuřátek, které nakupujeme v
                  Líhni Studenec, až po finální výkrm kuřic.
                </p>
                <p>Kuřice dostávají vyváženou stravu ve formě krmných směsí.</p>
                <p>Chov je pod stálým veterinárním dohledem.</p>
                <p className='font-bold'>Jsme chovatelé, nejsme PŘEKUPNÍCI.</p>
              </>
            )}
            {language === 'en' && (
              <>
                <p>
                  The rearing is done on free litter, so the chickens are
                  suitable for for home breeding in yards and gardens (they are
                  accustomed to movement).
                </p>
                <p>
                  To the chickens you can also buy a rooster. Chickens begin to
                  lay at the age of 20 weeks.
                </p>
                <p>
                  Breeding is carried out from day-old chicks, which we buy in
                  Studenec hatchery, to the final fattening of chickens.
                </p>
                <p>
                  Chickens receive a balanced diet in the form of compound feed.
                </p>
                <p>The breeding is under constant veterinary supervision.</p>
                <p className='font-bold'>
                  We are breeders, we are not SELLERS.
                </p>
              </>
            )}
            {language === 'de' && (
              <>
                <p>
                  Die Aufzucht erfolgt auf freier Einstreu, so dass die Hühner
                  geeignet sind für für die Heimzucht in Höfen und Gärten (sie
                  sind an Bewegung gewöhnt).
                </p>
                <p>
                  Zu den Hühnern können Sie auch einen Hahn kaufen. Hühner
                  beginnen zu legen im Alter von 20 Wochen.
                </p>
                <p>
                  {' '}
                  Die Aufzucht erfolgt von den Eintagsküken, die wir in der
                  Brüterei Studenec kaufen, bis hin zur Endmast der Hühner.
                </p>
                <p>
                  Die Hühner erhalten eine ausgewogene Ernährung in Form von
                  Mischfutter.
                </p>
                <p>Die Zucht steht unter ständiger tierärztlicher Kontrolle.</p>
                <p className='font-bold'>
                  Wir sind Züchter, wir sind keine VERKÄUFER.
                </p>
              </>
            )}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ x: 500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Accordion
            src='bg-[url(/sluzby/vejce.webp)]'
            isOpen={vejce}
            handleToggle={handleVejce}
            title={
              language === 'cs'
                ? 'Prodej vajec'
                : language === 'en'
                ? 'Sale of eggs'
                : language === 'de'
                ? 'Verkauf von Eiern'
                : ''
            }
          >
            {language === 'cs' && (
              <>
                <p>
                  Zabýváme se produkcí konzumních vajec na VOLNÉ PODESTÝLCE.
                </p>
                <p>
                  Vejce prodáváme jak na naší rodinné farmě tak v ostatních
                  prodejnách
                </p>
                <p>Vejce třídíme do velikostí S, M, L a XL</p>
                <p>
                  Nyní disponujeme cca 700 nosnicemi, které jsou chovány v
                  zrekonstruované stodole s technologii snáškových hnízd od
                  Firmy kovobel s.r.o.
                </p>
              </>
            )}
            {language === 'en' && (
              <>
                <p>
                  We are engaged in the production of table eggs on a free range
                  basis.
                </p>

                <p>We sell eggs both on our family farm and in other stores</p>
                <p>Eggs are sorted into sizes S, M, L and XL</p>
                <p>
                  Now we have about 700 laying hens, which are kept in renovated
                  barn with laying nest technology from the Company kovobel
                  s.r.o.
                </p>
              </>
            )}
            {language === 'de' && (
              <>
                <p>
                  Wir beschäftigen uns mit der Produktion von Konsumeiern in der
                  FREE-FARM.
                </p>

                <p>
                  Wir verkaufen Eier sowohl in unserem Familienbetrieb als auch
                  in anderen Geschäften
                </p>
                <p>Die Eier sind nach den Größen S, M, L und XL sortiert.</p>
                <p>
                  Jetzt haben wir etwa 700 Legehennen, die in einem renovierten
                  Stall mit Legenesttechnologie der Firma kovobel s.r.o.
                </p>
              </>
            )}
            g
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ x: 500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Accordion
            src='bg-[url(/sluzby/brambory.webp)]'
            isOpen={brambory}
            handleToggle={handleBrambory}
            title={
              language === 'cs'
                ? 'Prodej brambor'
                : language === 'en'
                ? 'sale of potatoes'
                : language === 'de'
                ? 'Verkauf von Kartoffeln'
                : ''
            }
          >
            {language === 'cs' && (
              <>
                <p>
                  Možnost nakoupit v našem samooblužném obchůdku. Otevřeno 24
                  hodin, 7 dní v týdnu.
                </p>
                <p>Brambory jsou 100% české. Vypěstované v okolí farmy.</p>
              </>
            )}
            {language === 'en' && (
              <>
                <p>
                  You can buy in our self-service shop. Open 24 hours hours, 7
                  days a week.
                </p>
                <p>The potatoes are 100% Czech. Grown around the farm.</p>
              </>
            )}
            {language === 'de' && (
              <>
                <p>
                  Sie können in unserem Selbstbedienungsladen einkaufen.
                  Geöffnet 24 Stunden, 7 Tage die Woche.
                </p>
                <p>
                  Die Kartoffeln sind 100% tschechisch. Sie werden rund um den
                  Bauernhof angebaut.
                </p>
              </>
            )}
            <Image
              src='/gallery/9.jpg'
              alt='brambory'
              width={600}
              height={200}
            />
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ x: -500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Accordion
            src='bg-[url(/sluzby/zahradnictvi.webp)]'
            isOpen={zahradnictvi}
            handleToggle={handleZahradnictvi}
            title={
              language === 'cs'
                ? 'Zahradnictví'
                : language === 'en'
                ? 'Horticulture'
                : language === 'de'
                ? 'Gartenbau'
                : ''
            }
          >
            {language === 'cs' && (
              <>
                <p>
                  Na naší farmě disponujeme pěstebnímy foliovníky, ve kterých
                  pěstujeme sezonní okrasné květiny a zeleninu.
                </p>
                <p>
                  Naše výpěstky jsou k dostání na Farmě po telefonické domluvě
                </p>
              </>
            )}
            {language === 'en' && (
              <>
                <p>
                  On our farm, we have growing folios in which we grow seasonal
                  ornamental flowers and vegetables.
                </p>
                <p>Our cuttings are available at the Farm by appointment</p>
              </>
            )}
            {language === 'de' && (
              <>
                <p>
                  Auf unserem Hof haben wir Anbauflächen, in denen wir saisonale
                  Zierblumen und Gemüse anbauen.
                </p>
                <p>
                  Unsere Stecklinge sind auf dem Bauernhof nach Vereinbarung
                  erhältlich
                </p>
              </>
            )}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ x: 500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Accordion
            src='bg-[url(/sluzby/zemniprace.webp)]'
            isOpen={zemniprace}
            handleToggle={handleZemniprace}
            title={
              language === 'cs'
                ? 'Zemní práce'
                : language === 'en'
                ? 'Earthworks'
                : language === 'de'
                ? 'Erdarbeiten'
                : ''
            }
          >
            {language === 'cs' && (
              <>
                <p>New Holland ls 160w (paletizační vidle, nakládací lžíce)</p>
                <p>JCB 4CX (lžíce 30 – 50 – 70- 90, svahovací lžíce)</p>
                <p>
                  JCB JS 175W (lžíce 130 těžební, hydraulicky naklápěná
                  svahovačka)
                </p>
                <p>traktor john deere 7530 premium (odvoz zeminy)</p>
                <p>
                  traktor john deere 7530 premium + míchačka mammut 1200 l
                  (míchání betonu)
                </p>
              </>
            )}
            {language === 'en' && (
              <>
                <p>New Holland ls 160w (palletising fork, loading bucket)</p>
                <p>JCB 4CX (Schaufel 30 - 50 - 70 - 90, Hangschaufel)</p>
                <p>
                  {' '}
                  JCB JS 175W (bucket 130 mining, hydraulically tilting skid
                  steer)
                </p>
                <p>john deere 7530 premium tractor (soil removal)</p>
                <p>
                  {' '}
                  john deere 7530 premium tractor + mammut 1200 l mixer
                  (concrete mixing)
                </p>
              </>
            )}
            {language === 'de' && (
              <>
                <p>New Holland ls 160w (Palettiergabel, Ladeschaufel)</p>
                <p>JCB 4CX (bucket 30 - 50 - 70 - 90, slope bucket)</p>
                <p>
                  {' '}
                  JCB JS 175W (Schaufel 130 Bergbau, hydraulisch kippbar
                  Kompaktlader)
                </p>
                <p>john deere 7530 premium traktor (bodenentfernung)</p>
                <p>
                  {' '}
                  john deere 7530 premium traktor + mammut 1200 l mischer
                  (Betonmischung)
                </p>
              </>
            )}
            <div className='flex flex-col lg:flex-row'>
              <Image
                src='/sluzby/zemniprace/1.webp'
                alt=''
                width={300}
                height={300}
              />
              <Image
                src='/sluzby/zemniprace/2.webp'
                alt=''
                width={300}
                height={300}
              />
              <Image
                src='/sluzby/zemniprace/3.webp'
                alt=''
                width={300}
                height={300}
              />
              <Image
                src='/sluzby/zemniprace/4.webp'
                alt=''
                width={300}
                height={300}
              />
            </div>
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ x: -500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Accordion
            src='bg-[url(/sluzby/zemedelstvi.webp)]'
            isOpen={zemedelstvi}
            handleToggle={handleZemedelstvi}
            title={
              language === 'cs'
                ? 'Zemědělství'
                : language === 'en'
                ? 'Agriculture'
                : language === 'de'
                ? 'Landwirtschaft'
                : ''
            }
          >
            {language === 'cs' && (
              <>
                <h2>Rostlinná výroba</h2>
                <p>
                  Zabýváme se pěstováním konzumních brambor, které jsou k
                  zakoupení na farmě + ve smluvních prodejnách.
                </p>
                <p>Dále pěstujeme obilí pro potřebu farmy</p>
                <p>
                  - jetel nachový na semenařinu a na zlepšení půdní struktury
                </p>
                <p>- hořčici bílou na semenařinu</p>

                <h2>Živočišná výroba</h2>
                <p>Odchov kuřic dominant na volné podestýlce</p>
                <p>Produkce vajec z volné podestýlky</p>
                <p>Kamerunské ovce na vypásání špatně přístupných pozemků</p>
                <p>Včely – na farmě prodej včelích produktu</p>
                <p>Rybníky – extenzivní odchov ryb</p>

                <h2>Služby</h2>
                <h3>traktory John Deere 7530 premium</h3>
                <p>- orba Kuhn Multimaster 123</p>
                <p>- kypření, podmítky s přísevem (mandam top 4m)</p>
                <p>- doprava zemědělských komodit 20 t návěs</p>

                <h3>traktor John Deere 5055e</h3>
                <p>
                  - mulčovač cormino s horizontální osou rotace a kladivy se
                  záběrem 2 m
                </p>
              </>
            )}
            {language === 'en' && (
              <>
                <h2>Plant production</h2>
                <p>
                  We are engaged in the cultivation of potatoes for consumption,
                  which are available for purchase on the farm + in contract
                  stores.
                </p>
                <p>We also grow grain for farm use</p>
                <p>
                  - Purple clover for seed production and soil structure
                  improvement
                </p>
                <p>- white mustard for seeds</p>

                <h2>Livestock production</h2>
                <p>Raising dominant chickens on free litter</p>
                <p>Egg production from free litter</p>
                <p>Cameroonian sheep to graze poorly accessible land</p>
                <p>Bees - on-farm sale of bee products</p>
                <p>Ponds - extensive fish farming</p>

                <h2>Services</h2>
                <h3>traktory John Deere 7530 premium</h3>
                <p>- ploughing Kuhn Multimaster 123</p>
                <p>- loosening, top dressing (mandam top 4m)</p>
                <p>- transport of agricultural commodities 20 t semi-trailer</p>

                <h3>John Deere 5055e tractor</h3>
                <p>
                  - cormino mulcher with horizontal axis of rotation and hammers
                  with 2 m reach
                </p>
              </>
            )}
            {language === 'de' && (
              <>
                <h2>Pflanzliche Erzeugung</h2>
                <p>
                  Wir beschäftigen uns mit dem Anbau von Speisekartoffeln, die
                  ab Hof und in Vertragsläden zu kaufen sind.
                </p>
                <p>Wir bauen auch Getreide für den Eigenbedarf an</p>
                <p>
                  - Purpurklee zur Saatgutgewinnung und Verbesserung der
                  Bodenstruktur
                </p>
                <p>- weißer Senf für Samen</p>

                <h2>Tierische Erzeugung</h2>
                <p>Aufzucht dominanter Hühner auf freier Einstreu</p>
                <p>Eiererzeugung aus freier Einstreu</p>
                <p>Kamerunische Schafe zum Weiden auf unzugänglichem Land</p>
                <p>
                  Bienen - Verkauf von Bienenprodukten im landwirtschaftlichen
                  Betrieb
                </p>
                <p>Teiche - extensive Fischzucht</p>

                <h2>Dienstleistungen</h2>
                <h3>traktory John Deere 7530 premium</h3>
                <p>- pflügend Kuhn Multimaster 123</p>
                <p>- Auflockerung, Top-Dressing (mandam top 4m)</p>
                <p>
                  - Transport von landwirtschaftlichen Gütern 20
                  t-Sattelauflieger
                </p>

                <h3>John Deere 5055e Traktor</h3>
                <p>
                  - Mulchgerät Cormino mit horizontaler Drehachse und Hämmern
                  mit 2 m Reichweite
                </p>
              </>
            )}
          </Accordion>
        </motion.div>
      </Container>
    </div>
  )
}

export default SluzbyPage
