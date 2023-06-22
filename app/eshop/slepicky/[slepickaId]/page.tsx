import Container from '@/components/Container'
import Product from '@/components/eshop/Product'
import MultiProduct from '@/components/eshop/MultiProduct'

interface IParams {
  slepickaId?: string
}

const SlepickaPage = async ({ params }: { params: IParams }) => {
  const { slepickaId } = params

  return (
    <div className='pt-32 pb-20'>
      <Container>
        {slepickaId === 'D853' && (
          <Product
            label='Kuřice Dominant Červený D853'
            description='DOMINANT ČERVENÝ D853 je velice atraktivně zbarveným programem s hnědou až červenou barvou peří na celém těle. Program využívá možnosti sexování podle geneticky podmíněné odlišné rychlosti růstu letek u jednodenních kohoutů s pomalým a u slepiček s rychlým růstem letek.'
            src='/slepicky/D853.png'
          >
            <p className='text-sm font-light'>
              Období chovu od 19 do 78 týdnů:
            </p>
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
              Tento program je výsledkem křížení rychle opeřující otcovské
              populace Rodajlendky červené = RIR s alelou recesivního genu "k"
              pro rychlost opeřování "K/k" a mateřská populace je pomalu
              opeřující červené Rodajlendky = RIR s dominantní alelou "K". Při
              líhnutí jednodenních kuřat se uplatňuje feathersexing při využití
              alel "K/k", kdy jednodenní kohoutek od matky získává dominantní
              alelu tohoto genu "K" a je pomalu opeřující a jednodenní slepička
              získává od otce alelu recesivní "k" a je rychle opeřující, což je
              patrné na letkách jednodenních kuřat.
            </p>
          </Product>
        )}
        {slepickaId === 'D159' && (
          <Product
            label='Kuřice Dominant Červeně Žíhaný D159'
            description='DOMINANT ČERVENĚ ŽÍHANÝ D159 je atraktivně zbarveným programem připomínajícím plemeno Plymutka žíhaná, ovšem v červenohnědé barvě peří s výrazným žíháním. Je velice oblíben jako finální hybrid pro samozásobitelské chovy nejen v Evropě, ale i ve světě.'
            src='/slepicky/D159.png'
          >
            <p className='text-sm font-light'>
              Období chovu od 19 do 78 týdnů:
            </p>
            <p> Životnost: 95 %</p>
            <p> Stáří při 50 % snášky: 23 týdnů</p>
            <p> Vrchol snášky ve 29 až 30 týdnu: 93 %</p>
            <p> Počet vajec: 305 ks</p>
            <p> Průměrná hmotnost vajec: 62 g</p>
            <p> Spotřeba krmiva na slepici a den: 120 g</p>
            <p> Hmotnost těla slepice v 68 týdnu: 2,15 kg</p>
            <p> Barva skořápky: hnědá</p>
            <p>
              Dominant Červeně Žíhaný je díky atraktivnímu zbarvení využíván i
              pro export rodičovských kompletů s cílem produkce vajec v
              rodinných samozásobitelských chovech.
            </p>
            <p>
              Předností jsou vysoké parametry snášky okolo 300 vajec. Kohouti
              tohoto programu jsou pro vyšší hmotnost těla velmi vhodní k
              produkci tradičního vysoce chutného drůbežího masa.
            </p>
            <p>
              Tento program je výsledkem křížení červeně žíhané otcovské
              populace RIR rychle opeřující s alelou recesivního genu " k" pro
              rychlost opeřování K/k a mateřské hnědé populace RIR pomalu
              opeřující s dominantní alelou K. Při líhnutí jednodenních kuřat se
              uplatňuje feathersexing při využití alel "K/k", kdy jednodenní
              kohoutek od matky získává dominantní alelu tohoto genu "K" a je
              pomalu opeřující a jednodenní slepička získává od otce alelu
              recesivní "k" a je rychle opeřující, což je patrné na letkách
              jednodenních kuřat.
            </p>
          </Product>
        )}
        {slepickaId === 'D109' && (
          <Product
            label='Kuřice Dominant Černý D109'
            description='DOMINANT ČERNÝ D109 je klasický, velmi populární program. Uplatňuje se jako finální hybrid pro samozásobitelské chovy v Česku a dalších zemích Evropy. Současně je také využíván i v exportech prarodičovských a rodičovských kompletů do Afriky, Asie a Ameriky, kde se využívá i pro intenzivní produkci konzumních vajec. Kohouti bývají vykrmováni k produkci tradičního vysoce chutného drůbežího masa.'
            src='/slepicky/D109.png'
          >
            <p className='text-sm font-light'>
              Období chovu od 19 do 78 týdnů:
            </p>
            <p>Životnost: 94 %</p>
            <p>Stáří při 50 % snášky: 23 týdnů</p>
            <p>Vrchol snášky ve 29 až 30 týdnu: 93 %</p>
            <p>Počet vajec: 315 ks</p>
            <p>Průměrná hmotnost vajec: 62 g</p>
            <p>Spotřeba krmiva na slepici a den: 125 g</p>
            <p>Hmotnost těla slepice v 68 týdnu: 2,15 kg</p>
            <p>Barva skořápky: hnědá</p>
            <p>
              Předností jsou vysoké parametry snášky nad 310 vajec ověřené v
              testační stanici v klecových podmínkách intenzivního typu chovu.
              Charakteristická je světle hnědá barva skořápky vajec. Atraktivní
              je černá barva peří dospělých nosnic s výrazným kovovým
              modrozeleným leskem, doplněná kontrastní hnědou kresbou peří na
              krku a hrudi nosnice. Kohout je žíhaný s hnědou barvou peří na
              krku, hrudi a křídlech.
            </p>
            <p>
              Tento program je výsledkem křížení červené otcovské populace
              rodajlendky = RIR a mateřské plymutky žíhané populace = BPR. Při
              líhnutí jednodenních kuřat se uplatňuje colorsexing při využití
              alely "B/b" genu žíhanosti = Barred, kdy jednodenní kohoutek od
              matky získává dominantní alelu tohoto genu "B" a je žíhaný s bílou
              tečkou na hlavě a jednodenní slepička získává od otce alelu
              recesivní "b", která nezpůsobuje žíhanou kresbu, a proto slepička
              je tmavá bez bílé kresby na hlavě.
            </p>
          </Product>
        )}
        {slepickaId === 'D959' && (
          <Product
            label='Kuřice Dominant Žíhaný D959'
            description='DOMINANT ŽÍHANÝ D959 je atraktivně zbarveným programem připomínajícím plemeno Plymutka žíhaná. Je velice oblíben jako finální hybrid pro samozásobitelské chovy v mnoha zemích. Díky atraktivnímu zbarvení je využíván i v exportu rodičovských kompletů.'
            src='/slepicky/D959.png'
          >
            <p className='text-sm font-light'>
              Období chovu od 19 do 78 týdnů:
            </p>
            <p>Životnost: 94 %</p>
            <p>Stáří při 50 % snášky: 22 týdnů</p>
            <p>Vrchol snášky ve 29 až 30 týdnu: 93 %</p>
            <p>Počet vajec: 308 ks</p>
            <p>Průměrná hmotnost vajec: 62 g</p>
            <p>Spotřeba krmiva na slepici a den: 120 g</p>
            <p>Hmotnost těla slepice v 68 týdnu: 2,20 kg</p>
            <p>Barva skořápky: hnědá</p>
            <p>
              V mnoha zemích jsou nosnice tohoto hybrida využívány ke snášce a
              kohouti k výkrmu. Předností jsou vysoké parametry snášky nad 310
              vajec ověřené v testační stanici v klecových podmínkách
              intenzivního typu chovu.
            </p>
            <p>
              Tento program je výsledkem křížení žíhané otcovské populace BPR
              rychle opeřující s alelou recesivního genu "k" pro rychlost
              opeřování K/k a mateřské červené Rodajlendky = RIR pomalu
              opeřující s dominantní alelou K. Při líhnutí jednodenních kuřat se
              uplatňuje feathersexing při využití alel "K/k", kdy jednodenní
              kohoutek od matky získává dominantní alelu tohoto genu "K" a je
              pomalu opeřující a jednodenní slepička získává od otce alelu
              recesivní "k" a je rychle opeřující, což je patrně na letkách
              jednodenních kuřat.
            </p>
          </Product>
        )}
        {slepickaId === 'D104' && (
          <Product
            label='Kuřice Dominant Sussex D104'
            description='DOMINANT SUSSEX D104 je velice atraktivně zbarveným programem připomínajícím původní anglické plemeno z hrabství Sussex s tím rozdílem, že náš program je autosexingový a má žlutou barvu kůže  a běháků, díky čemuž také lépe ukládá žlutooranžový pigment do žloutku. Je velice oblíben jako finální hybrid pro samozásobitelské chovy v České republice, Slovensku, Polsku, na Ukrajině a v Rusku.'
            src='/slepicky/D104.png'
          >
            <p className='text-sm font-light'>
              Období chovu od 19 do 78 týdnů:
            </p>
            <p>Životnost: 95 %</p>
            <p>Stáří při 50 % snášky: 22 týdnů</p>
            <p>Vrchol snášky ve 29 až 30 týdnu: 93 %</p>
            <p>Počet vajec: 308 ks</p>
            <p>Průměrná hmotnost vajec: 62 g</p>
            <p>Spotřeba krmiva na slepici a den: 122 g</p>
            <p>Hmotnost těla slepice v 68 týdnu: 2,20 kg</p>
            <p>Barva skořápky: hnědá</p>
            <p>
              Dominant Sussex D104 je díky atraktivnímu zbarvení využíván i v
              exportu rodičovských kompletů do Afriky, Asie i Ameriky pro
              produkci vajec v rodinných samozásobitelských chovech. Kohouti
              bývají využíváni i k produkci tradičního vysoce chutného drůbežího
              masa.
            </p>
            <p>
              Předností jsou vysoké parametry snášky nad 300 vajec ověřené v
              testační stanici v klecových podmínkách intenzivního typu chovu.
              Charakteristická je světle hnědá barva skořápky vajec. Takzvaná
              kolumbijská kresba opeření je tvořena černou barvou peří na krčním
              závěsu, na letkách a ocasu.
            </p>
            <p>
              Tento program je výsledkem křížení dvou populací kolumbijského
              zbarvení typu Sussex. Otcovská populace je rychle opeřující s
              alelou recesivního genu "k" pro rychlost opeřování "K/k" a
              mateřská populace je pomalu opeřující s dominantní alelou "K". Při
              líhnutí jednodenních kuřat se uplatňuje feathersexing při využití
              alel K/k, kdy jednodenní kohoutek od matky získává dominantní
              alelu tohoto genu "K" a je pomalu opeřující, kdežto jednodenní
              slepička získává od otce alelu recesivní "k" a je rychle
              opeřující, což je patrné na letkách jednodenních kuřat.
            </p>
          </Product>
        )}
        {slepickaId === 'D107' && (
          <Product
            label='Kuřice Dominant Modrý D107'
            description='DOMINANT MODRÝ D107 je jedním z našich nejžádanějších programů díky originalitě v modrém zbarvení peří a možnosti použití kolorsexingu u jednodenních kuřat. Uplatňuje se jako finální hybrid pro samozásobitelské chovy v Česku a v mnoha dalších zemích světa. Kohouti bývají využíváni i k produkci tradičního vysoce chutného drůbežího masa.'
            src='/slepicky/D107.png'
          >
            <p className='text-sm font-light'>
              Období chovu od 19 do 78 týdnů:
            </p>
            <p>Životnost: 94 %</p>
            <p>Stáří při 50 % snášky: 22 týdnů</p>
            <p>Vrchol snášky ve 29 až 30 týdnu: 93 %</p>
            <p>Počet vajec: 308 ks</p>
            <p>Průměrná hmotnost vajec: 62 g</p>
            <p>Spotřeba krmiva na slepici a den: 124 g</p>
            <p>Hmotnost těla slepice v 68 týdnu: 2,20 kg</p>
            <p>Barva skořápky: hnědá</p>
            <p>
              Díky atraktivnímu zbarvení je využíván i v exportu rodičovských
              kompletů do mnoha zemí, kde slouží především v rodinných
              samozásobitelských chovech pro produkci konzumních vajec.
            </p>
            <p>
              Předností jsou vysoké parametry snášky nad 290 až 300 vajec
              ověřené v testační stanici v klecových podmínkách intenzivního
              typu chovu. Charakteristická je světlá hnědá barva skořápky vajec.
            </p>
            <p>
              Atraktivní je šedá až modrá barva peří dospělých nosnic s žíhanou
              kresbou u kohoutů.
            </p>
            <p>
              Tento program je výsledkem křížení originální dominantně
              homozygotní populace genotypu BlBl otcovské populace modrých
              plymutek = BLPR a mateřské plymutky žíhané populace BPR. Při
              líhnutí jednodenních kuřat se uplatňuje kolorsexing při využití
              alely "B" genu žíhanosti = Barred, kdy jednodenní kohoutek od
              matky získává dominantní alelu tohoto genu a je žíhaný s bílou
              tečkou na hlavě a jednodenní slepička získává od otce alelu
              recesivní "b", která nezpůsobuje žíhanou kresbu, a proto slepička
              je tmavá bez bílé kresby na hlavě.
            </p>
          </Product>
        )}
        {slepickaId === 'D229' && (
          <Product
            label='Kuřice Dominant Leghorn D229'
            description='DOMINANT LEGHORN D229 je velice populární především pro vysokou snášku čistě bílých vajec a nízkou spotřebu krmiva.'
            src='/slepicky/D229.png'
          >
            <p className='text-sm font-light'>
              Období chovu od 19 do 78 týdnů:
            </p>

            <p>Životnost: 95 %</p>
            <p>Stáří při 50 % snášky: 23 týdnů</p>
            <p>Vrchol snášky ve 29 až 30 týdnu: 93 %</p>
            <p>Počet vajec: 320 ks</p>
            <p>Průměrná hmotnost vajec: 61 g</p>
            <p>Spotřeba krmiva na slepici a den: 105 g</p>
            <p>Hmotnost těla slepice v 68 týdnu: 1,90 kg</p>
            <p>Barva skořápky: bílá</p>
            <p>
              Nabízíme a dodáváme do mnoha zemí světa nejen finální hybridy, ale
              také rodičovské a prarodičovské komplety tohoto programu. Tento
              program je vysoce adaptován do různých produkčních systémů, a to
              jak z pohledu technologického, tak krmivářského.
            </p>
            <p>
              DOMINANT LEGHORN D 229 je výsledkem křížení 4 výchozích populací
              bílých leghorn a finální hybrid je fethersexingový. Jednodenní
              kohoutci jsou pomalu opeřující a slepičky jsou rychle opeřující.
            </p>
          </Product>
        )}
        {slepickaId === 'D300' && (
          <Product
            label='Kuřice Dominant Vlaška koroptví D300'
            description='DOMINANT černo-hnědý D300 je klasický, velmi populární program. Uplatňuje se jako finální hybrid pro samozásobitelské chovy v Česku a dalších zemích Evropy. Současně je také využíván i v exportech prarodičovských a rodičovských kompletů do Afriky, Asie a Ameriky, kde se využívá i pro intenzivní produkci konzumních vajec. Kohouti bývají vykrmováni k produkci tradičního vysoce chutného drůbežího masa.'
            src='/slepicky/D300.png'
          >
            <p className='text-sm font-light'>
              Období chovu od 19 do 78 týdnů:
            </p>
            <p>Životnost: 94 %</p>
            <p>Stáří při 50 % snášky: 23 týdnů</p>
            <p>Vrchol snášky ve 29 až 30 týdnu: 93 %</p>
            <p>Počet vajec: 315 ks</p>
            <p>Průměrná hmotnost vajec: 62 g</p>
            <p>Spotřeba krmiva na slepici a den: 125 g</p>
            <p>Hmotnost těla slepice v 68 týdnu: 2,15 kg</p>
            <p>Barva skořápky: bílá</p>
          </Product>
        )}
        {slepickaId === 'GS' && (
          <Product
            label='Kuřice Dominant Greenshell'
            description='DOMINANT GREENSHELL GS zahrnuje několik barevných programů s různou barvou opeření a různou barvou skořápky od světle modré přes tyrkysově zelenou až k tmavě olivově zelené. Takovéto zbarvení skořápky vajec finálních hybridů DOMINANT GREENSHELL je výsledkem křížení klasických rodičovských mateřských populací programů DOMINANT a jejich následným křížením s originální otcovskou linií DOMINANT GREENSHELL, vytvořenou na bázi linií drůbeže vyšlechtěných z jihoamerického plemene Araukána, které při domestikaci a následném šlechtění ustálilo geneticky podmíněnou zelenou až modrou barvu skořápky.'
            src='/slepicky/GS.png'
          >
            <p>
              Parametry snášky finálních hybridů všech barevných subprogramů
              GREENSHELL jsou zhruba okolo 240 až 260 vajec a každou generaci
              intenzivního šlechtění je budeme zvyšovat. Hmotnost vajec okolo 57
              až 59 g. Zbarvení opeření je dáno podle použití mateřské populace.
              Právě mateřská populace ovlivňuje i barvu skořápky u finálního
              hybrida.
            </p>
            <p>
              Subprogramy GS 300 s podobným opeřením jako má vlaška s žíhanou
              kresbou a GS 229 bílého zbarvení po matce bílá leghorna produkují
              vejce světlejší do modrého odstínu.
            </p>
            <p>
              Subrpogramy GS 107 modrého opeření, GS 959 žíhaného opeření, GS
              159 červeně žíhané, GS 902 gold - červeně žíhané s bílými letkami
              a ocasem a GS 459 světle červené s žíháním, všechny po matkách
              hnědovaječných linií, díky čemu produkují větší podíl vajec se
              skořápkou zelenou až olivově zelenou s mnoha odstíny.
            </p>
            <p>
              Program DOMINANT GREENSHEL uplatňuje při líhnutí jednodenních
              kuřat možnost sexování díky alelám genu K podle rychlosti opeření
              (feathersexing) nebo při uplatnění alel S nebo B také colorsexing.
            </p>
            <p>
              Pro snadnější odlišení Greenshell kuřiček od programů s klasickou
              barvou skořápky se snažíme u programu Greenshell vyšlechtit
              chocholku, která ale nijak nesouvisí s barvou skořápky. V
              současnosti má chocholku asi 70 % až 80% Greenshell nosnic.
            </p>
            <p>
              Naše Greenshell nosnice nemají zatím 100 % chocholku ani 100 %
              všech produkovaných vajec nebývá modré nebo zelené barvy.
              Geneticky komplikované řízení zbarvení skořápky u drůbeže
              způsobuje prozatím skutečnost, že zhruba 10 až 15 procent nosnic
              DOMINANT GREENSHELL snáší vejce klasické bílé, krémové nebo hnědé
              barvy. I přes tuto skutečnost je tento program žádaný v mnoha
              zemích po celém světě.
            </p>
          </Product>
        )}
        {slepickaId === 'DS' && (
          <Product
            label='Kuřice Dominant Darkshell'
            description='DOMINANT DARKSHELL je velmi populární program. Uplatňuje se jako finální hybrid pro samozásobitelské chovy v Česku a dalších zemích Evropy. Současně je také využíván i v exportech prarodičovských a rodičovských kompletů do Afriky, Asie a Ameriky, kde se využívá i pro intenzivní produkci konzumních vajec. Kohouti bývají vykrmováni k produkci tradičního vysoce chutného drůbežího masa.'
            src='/slepicky/DS.png'
          >
            <p>Životnost: 94%</p>
            <p>Stáří při 50 % snášky: 23týdnů</p>
            <p>Vrchol snášky ve 29 až 30 týdnu: 92%</p>
            <p>Počet vajec: 270ks</p>
            <p>Průměrná hmotnost vajec: 59g</p>
            <p>Spotřeba krmiva na slepici a den: 120g</p>
            <p>Hmotnost těla slepice v 68 týdnu: 2,15kg</p>
            <p>Barva skořápky: tmavě hnědá </p>
          </Product>
        )}
        {slepickaId === 'kohout' && (
          <MultiProduct
            label='Kohout'
            description='Druh kohouta bude dodán dle druhu kuřic.'
            price={300}
            images={[
              { url: '/slepicky/kohout/1.png' },
              { url: '/slepicky/kohout/2.png' },
              { url: '/slepicky/kohout/3.png' },
              { url: '/slepicky/kohout/4.png' },
              { url: '/slepicky/kohout/5.png' },
              { url: '/slepicky/kohout/6.png' },
              { url: '/slepicky/kohout/7.png' },
              { url: '/slepicky/kohout/8.png' },
              { url: '/slepicky/kohout/9.png' },
              { url: '/slepicky/kohout/10.png' },
              { url: '/slepicky/kohout/11.png' },
              { url: '/slepicky/kohout/12.png' },
              { url: '/slepicky/kohout/13.png' },
              { url: '/slepicky/kohout/14.png' },
              { url: '/slepicky/kohout/15.png' },
              { url: '/slepicky/kohout/16.png' },
            ]}
          />
        )}
      </Container>
    </div>
  )
}

export default SlepickaPage
