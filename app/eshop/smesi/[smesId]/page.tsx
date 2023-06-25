import Container from '@/components/Container'
import Product from '@/components/eshop/Product'
import MultiProduct from '@/components/eshop/MultiProduct'

interface IParams {
  smesId?: string
}

const SmesPage = async ({ params }: { params: IParams }) => {
  const { smesId } = params

  return (
    <div className='py-20 lg:pt-32'>
      <Container>
        {smesId === 'startovaci-balicek' && (
          <MultiProduct
            label='Startovací balíček'
            description='Doporučujeme k nákupu kuřic a to z důvodu přechodu kuřic do jiného prostředí, které obnáší stresovou zátěž. Obsah (směs z farmy, forticoad, nutrimix 1kg, Supervit D)'
            price={600}
            images={[
              { url: '/smesi/startovaci-balicek/1.jpg' },
              { url: '/smesi/startovaci-balicek/2.jpg' },
              { url: '/smesi/startovaci-balicek/3.jpg' },
              { url: '/smesi/startovaci-balicek/4.jpg' },
            ]}
            href='/smesi/startovaci-balicek'
          />
        )}
        {smesId === 'krouzky' && (
          <Product
            label='Kroužky'
            description='Různá barevnost a velikost'
            price={8}
            src='/smesi/krouzky.jpg'
            href='/smesi/krouzky'
          />
        )}
        {smesId === 'ochrana-proti-cmelikum-acaritec' && (
          <Product
            label='Ochrana proti čmelíkum - Acaritec (bio)'
            description='Složen z jemných částeček amorfního oxidu křemičitého a jedlé sody. Co to znamená v praxi? Velmi jemný produkt se smíchá s vodou a aplikuje mokrou cestou, pomocí odpovídajících postřikovačů.'
            price={400}
            src='/smesi/ochrana-proti-cmelikum.jpg'
            href='/smesi/ochrana-proti-cmelikum-acaritec'
          />
        )}
        {smesId === 'ochrana-proti-cmelikum-acariflash' && (
          <Product
            label='Ochrana proti čmelíkum - Acariflash (bio)'
            description='Jediný nechemický prostředek, který se dostane ke všem čmelíkům bez výjimky! Vznikl na základě vlastního výzkumu firmy CCPA. Jedná se o směs přírodních látek, které se dávkují do pitné vody a působí vůči čmelíkům repelentně. Čmelíky přímo nezabíjí, ale významně omezuje příjem krve, a tím omezuje jejich rozmnožování. Přípravek je s úspěchem používán u produkčních i u plemenných nosnic.'
            price={400}
            src='/smesi/ochrana-proti-cmelikum.jpg'
            href='/smesi/ochrana-proti-cmelikum-acarifalsh'
          />
        )}
        {smesId === 'ochrana-proti-cmelikum-mistral-layer' && (
          <Product
            label='Ochrana proti čmelíkum - Mistral Layer (bio)'
            description='Velmi jemně mleté diatomické usazeniny (křemelina), čili křemičité schránky druhohorních mořských živočichů. Mistral Layer se "nafouká" na technologii v chovech nosnic. Plošně a za jejich přítomnosti! Nosnicím to nepůsobí žádné problémy. Prakticky se jedná o náhražku popelení pro nosnice v klecových technologiích. Ve voliérách a v podestýlkových chovech jej lze využít právě v popelištích, nebo jej aplikovat přímo do snáškových hnízd.'
            price={400}
            src='/smesi/ochrana-proti-cmelikum.jpg'
            href='/smesi/ochrana-proti-cmelikum-mistral-layer'
          />
        )}
        {smesId === 'alize' && (
          <Product
            label='Alizé'
            description='Alizé 2 kg pohlcovač vlhkosti do podestýlky pro králíky a drůbež snižuje rozmnožovací schopnost bakterií v chovech drůbeže a králíků. Pohlcovač vlhkosti snižuje výskyt bakterií a redukuje uvolňování čpavku do ovzduší. Éterické oleje provoní stájové prostředí.'
            price={300}
            src='/smesi/alize.jpg'
            href='/smesi/alize'
          >
            <p>
              Díky obsahu specifických jílů (fylosilikátů) dojde k navázání vody
              do jejich struktury a tím ke snížení vlhkosti ve stájovém
              prostředí - nedojde k vytvoření blátivé podestýlky. Prostředek
              Alizé zabraňuje bakteriím využívat vodu pro další množení. Dochází
              k snížení mortality zvířat zejména během odchovů.
            </p>
            <p>
              Složení: Sušící minerální látky, sušící rostliny, esenciální
              oleje.
            </p>
            <p>Návod k použití a doporučení:</p>
            <p>
              Prostředek se aplikuje v suché formě (ručně nebo lopatkou) zejména
              na místa, kde lze očekávat vyšší vlhkost.
            </p>
            <p>Orientační spotřeba je cca 150 g na metr čtvereční.</p>
            <p>
              Aplikujte dle potřeby, ideálně před nastláním i pod podestýlku.
            </p>
          </Product>
        )}
        {smesId === 'galli-sweet' && (
          <Product
            label='Galli sweet'
            description='Minerální blok GALLI Sweet podporuje přirozené chování drůbeže a zároveň doplňuje nezbytné nutriční látky. Je účinnou prevencí kanibalismu, snižuje stres v chovech drůbeže.'
            price={380}
            src='/smesi/galli-sweet.jpg'
            href='/smesi/galli-sweet'
          >
            <p>Pomáhá přirozenému opotřebení zobáku.</p>
            <p>Určené pro všechny druhy hrabavé drůbeže a bažanty.</p>
            <p>Chutná forma s obsahem soli a třtinové melasy.</p>
            <p>
              Obsahuje stopové prvky jako je zinek, mangan, selen, měď a jód.
            </p>
            <p>
              Dávkování: Denní příjem by neměl překročit 8 % z celkového příjmu
              krmiva.
            </p>
            <p>Způsob použití: Umístěte blok na suché místo.</p>
            <p>
              Složení: Vápník 23 %, sodík 9 %, hořčík 3 %, fosfor 2,5 %, zinek
              667 mg/kg, mangan 333 mg/kg, měď
            </p>
            <p>
              100 mg/kg, jód 8 mg/kg, selen 3 mg/kg, směs z aromatických látek.
            </p>
          </Product>
        )}
        {smesId === 'calciplus-250ml' && (
          <Product
            label='Calciplus 250ml'
            description='Podporuje růst a vývoj kostí.'
            price={200}
            src='/smesi/calciplus-250ml.jpg'
            href='/smesi/calciplus-250ml'
          >
            <p>Zlepšuje kvalitu vaječných skořápek.</p>
            <p>Pozitivně ovlivňuje pevnost kostí.</p>
            <p>PROBLÉM</p>
            <p>
              Vápník spolu s vitaminem D jsou velmi důležité živiny ve výživě
              zvířat. Jejich nedostatek se u nosnic projevuje zhoršenou kvalitou
              skořápky a u rychle rostoucích kuřat špatným růstem a vývojem
              kostí, které se mohou projevit deformací a zvýšenou lámavostí
              (rachitis). U dospělých zvířat nedostatečná hladina vápníku s
              vitaminem D v krmné dávce vedou k demineralizaci kostí, což
              způsobuje jejich měknutí (osteomalacie) nebo řídnutí
              (osteoporóza). Všechny tyto stavy značně snižují užitkovost.
            </p>
            <p>ŘEŠENÍ</p>
            <p>
              NutriMix CalciPlus je vhodný zdroj vápníku a vitaminu D
              (aktivovaná forma - 25- hydroxycholekalciferol), v případě jejich
              nedostatku v krmné dávce. Pokrývá zvýšenou potřebu těchtoživin,
              zajišťuje správný růst a vývoj kostí rostoucích zvířat a zlepšuje
              kvalitu vaječné skořápky u nosnic.
            </p>
            <p>ZPŮSOB APLIKACE A DÁVKOVÁNÍ</p>
            <p>
              NutriMix Calciplus se přidává do pitné vody po dobu zvýšené
              potřeby vápníku nebo vitaminu D. Vzhledem k vyššímu obsahu
              doplňkových látek v porovnání s kompletním krmivem, nesmí dávka
              tohoto doplňkového krmiva překročit 1 % denní krmné dávky.
            </p>
          </Product>
        )}
        {smesId === 'supervitd' && (
          <Product
            label='Supervit D'
            description='Vodorozpustný a multivitaminový koncentrát pro drůbež Při zvýšené fyziologické zátěži.'
            price={40}
            src='/smesi/supervitd.jpg'
            href='/smesi/supervitd'
          >
            <p>
              • podporuje organismus při zvýšené fyziologické zátěži nebo stresu
            </p>
            <p>• zvyšuje líhnivost a oplozenost násadových vajec</p>
            <p>• udržuje intenzivní snášku</p>
            <p>PROBLÉM </p>
            <p>
              Při zvýšené fyziologické zátěži, která může být vyvolána vysokou
              užitkovostí, stresem (transportní, nutriční, technologický),
              zhoršeným zdravotním stavem nebo stájovým prostředím, dochází ke
              zvýšeným nárokům na metabolismus. Vitaminy, které se významně
              podílí na biochemických reakcích v těle, umožňují zvířatům se s
              touto situací lépe vyrovnat a udržet užitkovost na požadované
              úrovni.
            </p>
            <p>ŘEŠENÍ </p>
            <p>
              Supervit D je vhodný v období fyziologické zátěže nebo stresu.
              Používá se pro všechny druhy a kategorie drůbeže za účelem zvýšení
              líhnivosti a oplozenosti násadových vajec, udržení intenzivní
              snášky, podpory správného růstu a vývoje mláďat, zlepšení
              životaschopnosti a obranyschopnosti organismu.
            </p>
            <p>ZPŮSOB APLIKACE A DÁVKOVÁNÍ </p>
            <p>
              Přípravek je určen k aplikaci do pitné vody, případně k zamíchání
              do krmiva. Nejprve se denní dávka rozpustí v menším množství vody
              v poměru 1 : 10 a dále se tento roztok přidává do napáječek nebo
              zásobníku. Při podávání v krmivu je nutné dávku rovnoměrně
              zamíchat. Běžná doba aplikace je 4 - 5 dnů, dle potřeby je však
              možné použití po 3 - 4 týdnech opakovat.
            </p>
          </Product>
        )}
        {smesId === 'c-compositum-50-500g' && (
          <Product
            label='C-compositum 50 500g'
            description='Vodorozpustný 50% koncentrát vitaminu C Proti tepelnému a transportnímu stresu'
            price={300}
            src='/smesi/c-compositum-50-500g.jpg'
            href='/smesi/c-compositum-50-500g'
          >
            <p>• snižuje projevy tepelného a transportního stresu</p>
            <p>
              • stimuluje přirozenou obranyschopnost organismu vůči infekčním
              onemocněním
            </p>
            <p>• podporuje fyziologický vývoj chrupavek a kostí</p>
            <p>• pozitivně se podílí na hojení ran a vývoji embryí</p>
            <p>PROBLÉM </p>
            <p>
              V období s vysokou venkovní teplotou dochází ve stájích a halách k
              přehřátí organismu zvířat, které se projevuje zrychleným dýcháním,
              snížením obranyschopnosti a nedostatečným příjmem krmiva. Tyto
              příznaky vedou ke zhoršení ekonomických ukazatelů užitkovosti.
            </p>
            <p>ŘEŠENÍ </p>
            <p>
              C-compositum 50 stimuluje přirozenou obranyschopnost organismu
              proti infekcím, podporuje snížení projevů stresu zvláště při
              vysokých teplotách nebo transportu. Dále je nezbytný pro
              fyziologický vývoj chrupavek a pevnost kostí rostoucích zvířat. Je
              vhodný pro všechna zvířata (především s vysokou užitkovostí),
              mláďata a jedince v rekonvalescenci.
            </p>
            <p>ZPŮSOB APLIKACE A DÁVKOVÁNÍ</p>
            <p>
              Přípravek je určen k aplikaci do pitné vody, případně k zamíchání
              do krmiva. Nejprve se denní dávka rozpustí v menším množství vody
              v poměru 1 : 10 a dále se tento roztok přidává do napáječek nebo
              zásobníku. Při podávání v krmivu je nutné dávku rovnoměrně
              zamíchat. Při aplikaci je nutné se vyvarovat styku s kovem (kromě
              nerezové oceli). Nedoporučuje se také použití v silně železité
              vodě. Během skladování a používání zamezit přístupu vzduchu k
              přípravku. V době extrémní zátěže je možné dávku zvýšit 2 - 3x po
              dobu 5 - 7 dnů a pak pokračovat obvyklou dávkou.
            </p>
          </Product>
        )}
        {smesId === 'aminosol-1l' && (
          <Product
            label='Aminosol 1L'
            description='Tekutý koncentrát hydrofi lních vitaminů, aminokyselin a solí makroprvků Na podporu užitkovosti.'
            price={400}
            src='/smesi/aminosol-1l.jpg'
            href='/smesi/aminosol-1l'
          >
            <p>• podporuje užitkovost</p>
            <p>• napomáhá k vyrovnání s následky stresu</p>
            <p>• zlepšuje příjem krmiva</p>
            <p>PROBLÉM </p>
            <p>
              Vlivem stresu, při změně krmné dávky nebo onemocnění, dochází ke
              snížení příjmu krmiva. Důsledkem omezeného příjmu vzniká riziko
              zpomalení růstu, snížení užitkovosti, které následně vedou ke
              zhoršení ekonomických ukazatelů.
            </p>
            <p>ŘEŠENÍ</p>
            <p>
              Aminosol se používá v období intenzivního růstu, vysoké
              užitkovosti nebo při stresových stavech (např. nutriční,
              manipulační, technologický stres). Kromě snížení projevů stresu
              lze aplikací podpořit příjem krmiva nebo regeneraci organismu po
              onemocnění či po-operačních stavech.
            </p>
            <p>ZPŮSOB APLIKACE A DÁVKOVÁNÍ </p>
            <p>
              Aminosol se podává zvířatům řádně rozředěný v pitné vodě nebo
              mléce po dobu 5 - 15 dnů v uvedených dávkách. Aplikaci lze
              opakovat po 3 - 4 týdnech. Při použití po zvýšené námaze nebo
              onemocnění je možno dávkování zdvojnásobit po dobu 3 dnů. Roztok
              je nutno připravovat denně čerstvý, chránit před přímým slunečním
              světlem a co nejrychleji spotřebovat. Nepodávat neředěný
              přípravek!
            </p>
          </Product>
        )}
        {smesId === 'aminosol-250ml' && (
          <Product
            label='Aminosol 250ml'
            description='Tekutý koncentrát hydrofi lních vitaminů, aminokyselin a solí makroprvků Na podporu užitkovosti.'
            price={200}
            src='/smesi/aminosol-250ml.jpg'
            href='/smesi/aminosol-250ml'
          >
            <p>• podporuje užitkovost</p>
            <p>• napomáhá k vyrovnání s následky stresu</p>
            <p>• zlepšuje příjem krmiva</p>
            <p>PROBLÉM</p>
            <p>
              Vlivem stresu, při změně krmné dávky nebo onemocnění, dochází ke
              snížení příjmu krmiva. Důsledkem omezeného příjmu vzniká riziko
              zpomalení růstu, snížení užitkovosti, které následně vedou ke
              zhoršení ekonomických ukazatelů.
            </p>
            <p>ŘEŠENÍ</p>
            <p>
              Aminosol se používá v období intenzivního růstu, vysoké
              užitkovosti nebo při stresových stavech (např. nutriční,
              manipulační, technologický stres). Kromě snížení projevů stresu
              lze aplikací podpořit příjem krmiva nebo regeneraci organismu po
              onemocnění či po-operačních stavech.
            </p>
            <p>ZPŮSOB APLIKACE A DÁVKOVÁNÍ</p>
            <p>
              Aminosol se podává zvířatům řádně rozředěný v pitné vodě nebo
              mléce po dobu 5 - 15 dnů v uvedených dávkách. Aplikaci lze
              opakovat po 3 - 4 týdnech. Při použití po zvýšené námaze nebo
              onemocnění je možno dávkování zdvojnásobit po dobu 3 dnů. Roztok
              je nutno připravovat denně čerstvý, chránit před přímým slunečním
              světlem a co nejrychleji spotřebovat. Nepodávat neředěný
              přípravek!
            </p>
          </Product>
        )}
        {smesId === 'kombisol-ad3-30ml' && (
          <Product
            label='Kombisol AD3 30ml'
            description='Tekutý koncentrát vitaminů A a D3 Součinnost vitaminů A a D3'
            price={90}
            src='/smesi/kombisol-ad3-30ml.jpg'
            href='/smesi/kombisol-ad3-30ml'
          >
            <p>• ochraňuje epitelové buňky sliznic</p>
            <p>• podporuje tvorbu zrakového pigmentu</p>
            <p>• kontroluje hladinu vápníku v organismu</p>
            <p>• reguluje růst kostí</p>
            <p>PROBLÉM</p>
            <p>
              Při nedostatku vitaminu A dochází k omezení sekrece ochranného
              hlenu v dýchacích cestách a střevech. Je narušena funkce
              epitelových buněk sliznic, žláz a kůže s projevy poruch, jež
              odpovídají funkci příslušných orgánů, kde se epitel nachází. Při
              nedostatku vitaminu D dochází ke sníženému ukládání minerálních
              látek do rychle rostoucích kostí mláďat, což vede k jejich
              deformaci a zvýšené lámavosti. U dospělých zvířat způsobuje
              nedostatek vitaminu D demineralizaci kostí, které se projevují
              jako měknutí (osteomalacie) nebo řídnutí (osteoporóza). U drůbeže
              způsobuje nedostatek vitaminu D zhoršenou kvalitu skořápek.
              Všechny tyto stavy značně ovlivňují parametry užitkovosti.
            </p>
            <p>ŘEŠENÍ </p>
            <p>
              Kombisol AD3 je určen pro všechny druhy hospodářských zvířat se
              zvýšenou potřebou vitaminu A a D3. Používá se např. v době
              březosti, laktace, zpomaleného růstu mláďat, snížené odolnosti
              proti infekcím, poruchách osifi kace a růstu kostí, zhoršené
              kvalitě skořápky a nízké biologické hodnotě násadových vajec.
            </p>
            <p>ZPŮSOB APLIKACE A DÁVKOVÁNÍ </p>
            <p>
              Kombisol AD3 se přidává preventivně do pitné vody nebo mléka v
              doporučené dávce po dobu 5 - 10 dnů. Roztok je nutno připravovat
              denně čerstvý, chránit před přímým slunečním světlem a co
              nejrychleji spotřebovat. Nepodávat neředěný přípravek!
            </p>
          </Product>
        )}
        {smesId === 'kombisol-ad3e-1l' && (
          <Product
            label='Kombisol AD3E 1L'
            description='Tekutý koncentrát vitaminů A, D3 a E Součinnost vitaminů A, D3 a E'
            price={950}
            src='/smesi/kombisol-ad3e-1l.jpg'
            href='/smesi/kombisol-ad3e-1l'
          >
            <p>• ochraňuje epitelové buňky zejména v trávicím traktu</p>
            <p>• podporuje tvorbu zrakového pigmentu</p>
            <p>• kontroluje hladinu vápníku v organismu</p>
            <p>• reguluje růst kostí</p>
            <p>• zlepšuje reprodukční ukazatele</p>
            <p>• chrání jaterní parenchym</p>
            <p>PROBLÉM </p>
            <p>
              Při nedostatku vitaminu A dochází k omezení sekrece ochranného
              hlenu v dýchacích cestách a střevech. Je narušena funkce
              epitelových buněk sliznic, žláz a kůže s projevy poruch, jež
              odpovídají funkci příslušných orgánů, kde se epitel nachází. Při
              nedostatku vitaminu D dochází ke sníženému ukládání minerálních
              látek nebo k demineralizaci kostí. U drůbeže způsobuje nedostatek
              vitaminu D zhoršenou kvalitu skořápek. Při nedostatku vitaminu E
              dochází vlivem zvýšené tvorby toxických peroxidů k destrukci
              buněčných membrán, která může vyústit v degeneraci zejména
              kosterní a srdeční svaloviny, jater, mozku a cév. Nedostatečné
              hladiny těchto vitaminů snižují užitkovost.
            </p>
            <p>ŘEŠENÍ</p>
            <p>
              Kombisol AD3E je určen pro všechny druhy hospodářských zvířat se
              zvýšenou potřebou vitaminu A, D3 a E. Navyšuje příjem krmiva,
              podporuje reprodukci a životaschopnost mláďat, používá se při
              náhlém poklesu snášky, oplozenosti a líhnivosti. Dále eliminuje
              účinky (nejen) transportního stresu.
            </p>
            <p>ZPŮSOB APLIKACE A DÁVKOVÁNÍ </p>
            <p>
              Kombisol AD3E se přidává preventivně do pitné vody nebo mléka v
              doporučené dávce po dobu 5 - 10 dnů. Roztok je nutno připravovat
              denně čerstvý, chránit před přímým slunečním světlem a co
              nejrychleji spotřebovat. Nepodávat neředěný přípravek!
            </p>
          </Product>
        )}
        {smesId === 'kombisol-ad3e-250ml' && (
          <Product
            label='Kombisol AD3E 250ml'
            description='Tekutý koncentrát vitaminů A, D3 a E Součinnost vitaminů A, D3 a E'
            price={300}
            src='/smesi/kombisol-ad3e-250ml.jpg'
            href='/smesi/kombisol-ad3e-250ml'
          >
            <p>• ochraňuje epitelové buňky zejména v trávicím traktu</p>
            <p>• podporuje tvorbu zrakového pigmentu</p>
            <p>• kontroluje hladinu vápníku v organismu</p>
            <p>• reguluje růst kostí</p>
            <p>• zlepšuje reprodukční ukazatele</p>
            <p>• chrání jaterní parenchym</p>
            <p>PROBLÉM </p>
            <p>
              Při nedostatku vitaminu A dochází k omezení sekrece ochranného
              hlenu v dýchacích cestách a střevech. Je narušena funkce
              epitelových buněk sliznic, žláz a kůže s projevy poruch, jež
              odpovídají funkci příslušných orgánů, kde se epitel nachází. Při
              nedostatku vitaminu D dochází ke sníženému ukládání minerálních
              látek nebo k demineralizaci kostí. U drůbeže způsobuje nedostatek
              vitaminu D zhoršenou kvalitu skořápek. Při nedostatku vitaminu E
              dochází vlivem zvýšené tvorby toxických peroxidů k destrukci
              buněčných membrán, která může vyústit v degeneraci zejména
              kosterní a srdeční svaloviny, jater, mozku a cév. Nedostatečné
              hladiny těchto vitaminů snižují užitkovost.
            </p>
            <p>ŘEŠENÍ</p>
            <p>
              Kombisol AD3E je určen pro všechny druhy hospodářských zvířat se
              zvýšenou potřebou vitaminu A, D3 a E. Navyšuje příjem krmiva,
              podporuje reprodukci a životaschopnost mláďat, používá se při
              náhlém poklesu snášky, oplozenosti a líhnivosti. Dále eliminuje
              účinky (nejen) transportního stresu.
            </p>
            <p>ZPŮSOB APLIKACE A DÁVKOVÁNÍ </p>
            <p>
              Kombisol AD3E se přidává preventivně do pitné vody nebo mléka v
              doporučené dávce po dobu 5 - 10 dnů. Roztok je nutno připravovat
              denně čerstvý, chránit před přímým slunečním světlem a co
              nejrychleji spotřebovat. Nepodávat neředěný přípravek!
            </p>
          </Product>
        )}
        {smesId === 'kombisol-ad3e-30ml' && (
          <Product
            label='Kombisol AD3E 30ml'
            description='Tekutý koncentrát vitaminů A, D3 a E Součinnost vitaminů A, D3 a E'
            price={90}
            src='/smesi/kombisol-ad3e-30ml.jpg'
            href='/smesi/kombisol-ad3e-30ml'
          >
            <p>• ochraňuje epitelové buňky zejména v trávicím traktu</p>
            <p>• podporuje tvorbu zrakového pigmentu</p>
            <p>• kontroluje hladinu vápníku v organismu</p>
            <p>• reguluje růst kostí</p>
            <p>• zlepšuje reprodukční ukazatele</p>
            <p>• chrání jaterní parenchym</p>
            <p>PROBLÉM </p>
            <p>
              Při nedostatku vitaminu A dochází k omezení sekrece ochranného
              hlenu v dýchacích cestách a střevech. Je narušena funkce
              epitelových buněk sliznic, žláz a kůže s projevy poruch, jež
              odpovídají funkci příslušných orgánů, kde se epitel nachází. Při
              nedostatku vitaminu D dochází ke sníženému ukládání minerálních
              látek nebo k demineralizaci kostí. U drůbeže způsobuje nedostatek
              vitaminu D zhoršenou kvalitu skořápek. Při nedostatku vitaminu E
              dochází vlivem zvýšené tvorby toxických peroxidů k destrukci
              buněčných membrán, která může vyústit v degeneraci zejména
              kosterní a srdeční svaloviny, jater, mozku a cév. Nedostatečné
              hladiny těchto vitaminů snižují užitkovost.
            </p>
            <p>ŘEŠENÍ</p>
            <p>
              Kombisol AD3E je určen pro všechny druhy hospodářských zvířat se
              zvýšenou potřebou vitaminu A, D3 a E. Navyšuje příjem krmiva,
              podporuje reprodukci a životaschopnost mláďat, používá se při
              náhlém poklesu snášky, oplozenosti a líhnivosti. Dále eliminuje
              účinky (nejen) transportního stresu.
            </p>
            <p>ZPŮSOB APLIKACE A DÁVKOVÁNÍ </p>
            <p>
              Kombisol AD3E se přidává preventivně do pitné vody nebo mléka v
              doporučené dávce po dobu 5 - 10 dnů. Roztok je nutno připravovat
              denně čerstvý, chránit před přímým slunečním světlem a co
              nejrychleji spotřebovat. Nepodávat neředěný přípravek!
            </p>
          </Product>
        )}
        {smesId === 'nutrimix-forticoat-1l' && (
          <Product
            label='Nutrimix forticoat 1L'
            description='Tekutý koncentrát konzervantů s antimikrobiálním účinkem Na podporu trávení a hygieny napájecího systému.'
            price={300}
            src='/smesi/nutrimix-forticoat-1l.jpg'
            href='/smesi/nutrimix-forticoat-1l'
          >
            <p>• snižuje výskyt průjmů</p>
            <p>• podporuje trávení zvýšením kyselosti žaludečního obsahu</p>
            <p>• dezinfikuje napájecí vodu a napáječky</p>
            <p>PROBLÉM</p>
            <p>
              V letních měsících dochází velmi často ke zhoršení kvality
              napájecí vody, která se projevuje zvýšeným výskytem průjmů.
              Dehydratace organismu v důsledku průjmových onemocnění následně
              vede k oslabení organismu a snížení užitkovosti.
            </p>
            <p>ŘEŠENÍ</p>
            <p>
              NutriMix Forticoat je určen do pitné vody pro hospodářská a domácí
              zvířata. Slouží k podpoře trávení, prevenci zažívacích problémů
              nebo zmírnění jejich vlivu a zvýšení hygieny napájení. Aplikace je
              zvláště vhodná v období stresu (přesuny, výstavy, změna krmiva,
              vysoké a nízké teploty apod.).
            </p>
            <p>ZPŮSOB APLIKACE A DÁVKOVÁNÍ</p>
            <p>
              NutriMix Forticoat se podává zvířatům řádně rozředěný v pitné vodě
              nebo mléce po nezbytně dlouhou dobu. Roztok je nutno připravovat
              denně čerstvý, chránit před přímým slunečním světlem a co
              nejrychleji spotřebovat. Nepodávat neředěný přípravek!
            </p>
          </Product>
        )}
        {smesId === 'nutrimix-forticoat-250ml' && (
          <Product
            label='Nutrimix forticoat 250ml'
            description='Tekutý koncentrát konzervantů s antimikrobiálním účinkem Na podporu trávení a hygieny napájecího systému.'
            price={120}
            src='/smesi/nutrimix-forticoat-250ml.jpg'
            href='/smesi/nutrimix-forticoat-250ml'
          >
            <p>• snižuje výskyt průjmů</p>
            <p>• podporuje trávení zvýšením kyselosti žaludečního obsahu</p>
            <p>• dezinfikuje napájecí vodu a napáječky</p>
            <p>PROBLÉM</p>
            <p>
              V letních měsících dochází velmi často ke zhoršení kvality
              napájecí vody, která se projevuje zvýšeným výskytem průjmů.
              Dehydratace organismu v důsledku průjmových onemocnění následně
              vede k oslabení organismu a snížení užitkovosti.
            </p>
            <p>ŘEŠENÍ</p>
            <p>
              NutriMix Forticoat je určen do pitné vody pro hospodářská a domácí
              zvířata. Slouží k podpoře trávení, prevenci zažívacích problémů
              nebo zmírnění jejich vlivu a zvýšení hygieny napájení. Aplikace je
              zvláště vhodná v období stresu (přesuny, výstavy, změna krmiva,
              vysoké a nízké teploty apod.).
            </p>
            <p>ZPŮSOB APLIKACE A DÁVKOVÁNÍ</p>
            <p>
              NutriMix Forticoat se podává zvířatům řádně rozředěný v pitné vodě
              nebo mléce po nezbytně dlouhou dobu. Roztok je nutno připravovat
              denně čerstvý, chránit před přímým slunečním světlem a co
              nejrychleji spotřebovat. Nepodávat neředěný přípravek!
            </p>
          </Product>
        )}
        {smesId === 'nutrimix-3kg-odchov' && (
          <Product
            label='Nutrimix 3kg odchov'
            description='Minerální krmivo s vitaminy pro drůbež Denní doplnění minerálních látek a vitaminů.'
            price={220}
            src='/smesi/nutrimix-3kg-odchov.jpg'
            href='/smesi/nutrimix-3kg-odchov'
          >
            <p>• zajišťuje odpovídající růst a vývoj mladé drůbeže</p>
            <p>• zvyšuje přírůstky a využití krmiva u vykrmované drůbeže</p>
            <p>• potlačuje kokcidie a jiné střevní parazity</p>
            <p>PROBLÉM</p>
            <p>
              Nedostatečná nebo nevyvážená krmná dávka pro drůbež v odchovu nebo
              ve výkrmu má za následek snížené přírůstky, nižší využitelnost
              krmiva, menší životaschopnost a zhoršený zdravotní stav.
            </p>
            <p>ŘEŠENÍ</p>
            <p>
              NutriMix pro drůbež - odchov a výkrm je určen pro doplnění
              minerálních látek a vitaminů do krmných dávek pro kuřata,
              kachňata, housata, krůťata a další drůbež chovanou v
              drobnochovech. Podporuje dosažení maximálních přírůstků,
              využitelnost krmiv, životaschopnost a příznivý zdravotní stav
              rostoucí drůbeže. Přidává se do krmné dávky, která je založena na
              obilných šrotech, kuchyňských zbytcích nebo jiných
              neplnohodnotných krmivech.
            </p>
            <p>ZPŮSOB APLIKACE A DÁVKOVÁNÍ</p>
            <p>
              Odměřené množství přípravku se podává denně při rovnoměrném
              zamíchání do krmiva. Je nutné zajistit trvalý přístup k zdravotně
              nezávadné vodě.
            </p>
          </Product>
        )}
        {smesId === 'nutrimix-1kg-odchov' && (
          <Product
            label='Nutrimix 1kg odchov'
            description='Minerální krmivo s vitaminy pro drůbež Denní doplnění minerálních látek a vitaminů.'
            price={90}
            src='/smesi/nutrimix-1kg-odchov.jpg'
            href='/smesi/nutrimix-1kg-odchov'
          >
            <p>• zajišťuje odpovídající růst a vývoj mladé drůbeže</p>
            <p>• zvyšuje přírůstky a využití krmiva u vykrmované drůbeže</p>
            <p>• potlačuje kokcidie a jiné střevní parazity</p>
            <p>PROBLÉM</p>
            <p>
              Nedostatečná nebo nevyvážená krmná dávka pro drůbež v odchovu nebo
              ve výkrmu má za následek snížené přírůstky, nižší využitelnost
              krmiva, menší životaschopnost a zhoršený zdravotní stav.
            </p>
            <p>ŘEŠENÍ</p>
            <p>
              NutriMix pro drůbež - odchov a výkrm je určen pro doplnění
              minerálních látek a vitaminů do krmných dávek pro kuřata,
              kachňata, housata, krůťata a další drůbež chovanou v
              drobnochovech. Podporuje dosažení maximálních přírůstků,
              využitelnost krmiv, životaschopnost a příznivý zdravotní stav
              rostoucí drůbeže. Přidává se do krmné dávky, která je založena na
              obilných šrotech, kuchyňských zbytcích nebo jiných
              neplnohodnotných krmivech.
            </p>
            <p>ZPŮSOB APLIKACE A DÁVKOVÁNÍ</p>
            <p>
              Odměřené množství přípravku se podává denně při rovnoměrném
              zamíchání do krmiva. Je nutné zajistit trvalý přístup k zdravotně
              nezávadné vodě.
            </p>
          </Product>
        )}
        {smesId === 'nutrimix-3kg-vykrm' && (
          <Product
            label='Mutrimix 3kg výkrm'
            description='Minerální krmivo s vitaminy pro nosnice Denní doplnění minerálních látek a vitaminů.'
            price={200}
            src='/smesi/nutrimix-3kg-vykrm.jpg'
            href='/smesi/nutrimix-3kg-vykrm'
          >
            <p>• zvyšuje snášku a kvalitu vajec</p>
            <p>• zlepšuje oplozenost a líhnivost násadových vajec</p>
            <p>• podporuje stravitelnost krmiv</p>
            <p>PROBLÉM</p>
            <p>
              Nedostatečná nebo nevyvážená krmná dávka má za následek sníženou
              snášku, zhoršenou kvalitu, oplozenost a líhnivost násadových
              vajec.
            </p>
            <p>ŘEŠENÍ</p>
            <p>
              NutriMix pro nosnice je určen pro doplnění minerálních látek a
              vitaminů pro slepice, kachny, husy, krůty nebo perličky v
              drobnochovech. Podporuje zvýšení snášky, oplozenost a líhnivost
              násadových vajec. Zajišťuje požadovaný zdravotní stav drůbeže a
              zlepšuje využití přijatých krmiv. Přidává se do krmné dávky, která
              je založena na obilných šrotech, kuchyňských zbytcích nebo jiných
              neplnohodnotných krmivech.
            </p>
            <p>ZPŮSOB APLIKACE A DÁVKOVÁNÍ</p>
            <p>
              Odměřené množství přípravku se podává denně při rovnoměrném
              zamíchání do krmiva. Je nutné zajistit trvalý přístup k zdravotně
              nezávadné vodě.
            </p>
          </Product>
        )}
        {smesId === 'nutrimix-1kg-vykrm' && (
          <Product
            label='Nutrimix 1kg výkrm'
            description='Minerální krmivo s vitaminy pro nosnice Denní doplnění minerálních látek a vitaminů.'
            price={70}
            src='/smesi/nutrimix-1kg-vykrm.jpg'
            href='/smesi/nutrimix-1kg-vykrm'
          >
            <p>• zvyšuje snášku a kvalitu vajec</p>
            <p>• zlepšuje oplozenost a líhnivost násadových vajec</p>
            <p>• podporuje stravitelnost krmiv</p>
            <p>PROBLÉM</p>
            <p>
              Nedostatečná nebo nevyvážená krmná dávka má za následek sníženou
              snášku, zhoršenou kvalitu, oplozenost a líhnivost násadových
              vajec.
            </p>
            <p>ŘEŠENÍ</p>
            <p>
              NutriMix pro nosnice je určen pro doplnění minerálních látek a
              vitaminů pro slepice, kachny, husy, krůty nebo perličky v
              drobnochovech. Podporuje zvýšení snášky, oplozenost a líhnivost
              násadových vajec. Zajišťuje požadovaný zdravotní stav drůbeže a
              zlepšuje využití přijatých krmiv. Přidává se do krmné dávky, která
              je založena na obilných šrotech, kuchyňských zbytcích nebo jiných
              neplnohodnotných krmivech.
            </p>
            <p>ZPŮSOB APLIKACE A DÁVKOVÁNÍ</p>
            <p>
              Odměřené množství přípravku se podává denně při rovnoměrném
              zamíchání do krmiva. Je nutné zajistit trvalý přístup k zdravotně
              nezávadné vodě.
            </p>
          </Product>
        )}
      </Container>
    </div>
  )
}

export default SmesPage
