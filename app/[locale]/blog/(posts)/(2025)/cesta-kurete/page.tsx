'use client'

export default function Page() {
  return (
    <main>
      <h1 className='blog-h1'>Cesta kuřete: od líhně ke snášce 🐣🥚</h1>
      <img
        src='/blog/2025/cesta-kurete/1.webp'
        alt='kuřátko na farmě'
        className='blog-img'
      />

      <p className='blog-p'>
        Každé vajíčko, které si rozklepnete do pánve, má svůj příběh. Začíná ve
        chvíli, kdy se vylíhne malé kuřátko, a pokračuje celých několik měsíců,
        než z něj vyroste kuřice připravená ke snášce. Podívejme se, jak tato
        cesta probíhá u nás na farmě.
      </p>

      {/* --- */}
      <h2 className='blog-h2'>První dny života 🌱</h2>
      <p className='blog-p'>
        Kuřátko přichází na svět v líhni. V prvních dnech potřebuje především
        teplo, světlo a speciální startovací směs. Je to období, kdy se rychle
        vyvíjí jeho peří, kosti i imunita. Právě tady se rozhoduje, jestli z něj
        vyroste silná a zdravá slepička. Proto je v tomto období důležitá
        kvalitní výživa a dohled.
      </p>

      {/* --- */}
      <h2 className='blog-h2'>Období růstu 🌾</h2>
      <p className='blog-p'>
        Od 8. týdne už mluvíme o kuřicích. V té době mají za sebou rychlý start
        a postupně se připravují na dospělý život. Krmíme je směsí s vyváženým
        obsahem živin, aby příliš nepřibíraly, ale zároveň rostly rovnoměrně.
        Kuřice dostávají více prostoru k pohybu, učí se využívat výběh a
        posilují kondici.
      </p>

      {/* --- */}
      <h2 className='blog-h2'>Příprava na snášku 🥚</h2>
      <p className='blog-p'>
        Okolo 20. týdne života se kuřice mění na slepici. Její organismus je
        připravený na snášku a potřebuje více vápníku a energie. Právě tehdy
        přechází na krmné směsi pro nosnice. Zhruba ve stejnou dobu se objeví
        první vajíčka – menší, ale s pevnou skořápkou.
      </p>

      {/* --- */}
      <h2 className='blog-h2'>Závěr 🐔</h2>
      <p className='blog-p'>
        Cesta od kuřete ke slepici je náročná a vyžaduje každodenní péči. Díky
        správné výživě, prostoru a veterinárnímu dohledu se z malého kuřátka
        stává slepička, která dokáže několik let spolehlivě snášet vajíčka.
      </p>

      <br />
      <span className='blog-greeting'>
        <b>Vaši farmáři z Farmy Hájek 💚</b>
      </span>
    </main>
  )
}
