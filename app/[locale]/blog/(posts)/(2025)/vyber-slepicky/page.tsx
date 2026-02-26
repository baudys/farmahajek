export default function Page() {
  return (
    <main>
      <h1 className='blog-h1'>
        Barevné skořápky a velikosti vajec – jak vybrat správnou slepičku? 🥚🐔
      </h1>
      <img
        src='/blog/2025/vyber-slepicky/1.webp'
        alt='barevná vajíčka a slepičky'
        className='blog-img'
      />

      <p className='blog-p'>
        Ne každá slepice snáší stejná vajíčka. Rozdíly nejsou jen v počtu, ale i
        v barvě a velikosti skořápky. Pokud uvažujete, jaké slepice si pořídit,
        je dobré se na to zaměřit.
      </p>

      {/* --- */}
      <h2 className='blog-h2'>Barvy vajec 🎨</h2>
      <ul className='blog-ul'>
        <li className='blog-li'>
          <b>Bílé:</b> typické pro lehká plemena. Často jde o slepice, které
          snášejí hodně vajec ročně, ale menších rozměrů.
        </li>
        <li className='blog-li'>
          <b>Hnědé:</b> nejčastější barva, pevné skořápky a vyrovnaná velikost.
        </li>
        <li className='blog-li'>
          <b>Zelené a modré:</b> raritní, atraktivní a oblíbené u domácích
          chovatelů, kteří chtějí mít „barevný košíček“. Tyto barvy mají
          například Araukany nebo některé křížence.
        </li>
      </ul>

      {/* --- */}
      <h2 className='blog-h2'>Velikosti vajec 📏</h2>
      <p className='blog-p'>Velikost závisí na plemeni a věku slepice.</p>
      <ul className='blog-ul'>
        <li className='blog-li'>
          <b>S–M:</b> menší vajíčka, častější snáška.
        </li>
        <li className='blog-li'>
          <b>L–XL:</b> větší vajíčka, snáší se o něco méně často.
        </li>
      </ul>

      {/* --- */}
      <h2 className='blog-h2'>Jak vybírat slepice? ✅</h2>
      <p className='blog-p'>
        Pokud chcete hodně vajíček pro rodinu, sáhněte po slepicích s bílými
        nebo hnědými skořápkami. Jestli ale hledáte zpestření a chcete zaujmout
        barevným mixem, určitě stojí za to přidat pár nosnic se zelenými nebo
        modrými skořápkami.
      </p>

      {/* --- */}
      <h2 className='blog-h2'>Závěr 💚</h2>
      <p className='blog-p'>
        Každé vajíčko je jiné, stejně jako každá slepice. Výběr záleží na tom,
        jestli je pro vás důležitější počet, velikost nebo barevná pestrost.
      </p>

      <br />
      <span className='blog-greeting'>
        <b>Vaši farmáři z Farmy Hájek 💚</b>
      </span>
    </main>
  )
}
