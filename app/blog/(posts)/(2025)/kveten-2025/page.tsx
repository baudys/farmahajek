'use client'

export default function Page() {
  return (
    <main>
      <h1 className='blog-h1'>Květnové novinky 🌸☕💪</h1>
      <img
        src='/blog/2025/kveten/1.webp'
        alt='kavárna farma hájek'
        className='blog-img'
      />
      <p className='blog-p'>Milí přátelé,</p>
      <p className='blog-p'>
        Květen byl pro nás měsícem velkých změn a novinek! Máme za sebou
        dokončení
        <b> nové kavárny přímo na farmě</b>, finišujeme přípravy na{' '}
        <b>Strongman 2025</b> a kvůli vysokému zájmu spouštíme{' '}
        <b>letní turnus prodeje slepiček</b>. Děkujeme vám za neustálou podporu
        – pojďme se společně podívat, co je u nás nového.
      </p>
      {/* --- */}
      <h2 className='blog-h2'>Nová kavárna na farmě ☕🏡</h2>
      <p className='blog-p'>
        S radostí vám oznamujeme, že naše kavárna je <b>dokončena!</b> A nejen
        tak ledajaká – funguje na stejném principu jako naše samoobslužné
        prodejny. Zkrátka{' '}
        <b>starý dobrý systém, který všichni znáte a máte rádi</b>. Přijďte si
        dát kávu, posedět a užít si atmosféru farmy.
      </p>
      <br />
      <img src='/blog/2025/kveten/2.webp' alt='kavárna' className='' />
      {/* --- */}
      <h2 className='blog-h2'>Strongman 2025 – už 8. června! 💪🔥</h2>
      <p className='blog-p'>
        <b>Přijď zažít sílu a zábavu na maximum!</b> Už{' '}
        <b>v neděli 8. června 2025 od 12:00</b> se naše farma promění v centrum
        adrenalinu, výkonu a rodinné zábavy.
      </p>
      <p className='blog-p'>
        Na STRONGMAN SHOW vás čeká 22 závodníků, kteří se utkají v těchto
        disciplínách:
      </p>
      <ul className='blog-ul !space-y-0.5'>
        <li className='blog-li'>🏋 Loglift – 90 kg / minuta</li>
        <li className='blog-li'>🏋 Axle Deadlift – 200 kg / minuta</li>
        <li className='blog-li'>🏃‍♂ Farmer&apos;s Walk – 110 kg / 20 m</li>
        <li className='blog-li'>🚚 Tahání kamionu</li>
        <li className='blog-li'>🔄 Převracení pneumatiky</li>
      </ul>
      <br />
      <span className='blog-p'>
        <b>Speciální hosté:</b>{' '}
        <a
          href='https://www.instagram.com/filip.grznar/?hl=cs'
          className='blog-a'
        >
          @filip.grznar
        </a>{' '}
        a{' '}
        <a
          href='https://www.instagram.com/lukas_duchek_official/?hl=cs'
          className='blog-a'
        >
          @frantisekhrom
        </a>
      </span>
      <div className='grid grid-cols-2 gap-4'>
        <img src='/blog/2025/kveten/3.webp' alt='filip grznár' />
        <img src='/blog/2025/kveten/4.webp' alt='františek hrom' />
      </div>
      <br />
      <p className='blog-p'>
        A tím to nekončí! Připravili jsme{' '}
        <b>bohatý doprovodný program pro celou rodinu:</b>
      </p>
      <ul className='blog-ul !space-y-0.5'>
        <li className='blog-li'>🤠 Jimmy Magura – Classic Cowboy Show</li>
        <li className='blog-li'>🐶 Dog Dancing vystoupení</li>
        <li className='blog-li'>🤸‍♂ Parkour show</li>
        <li className='blog-li'>🎯 Disciplíny pro diváky</li>
        <li className='blog-li'>🎟 Tombola</li>
        <li className='blog-li'>🏰 Skákací hrad a dětský koutek</li>
        <li className='blog-li'>☕ Slavnostní otevření nové kavárny</li>
      </ul>
      <br />
      <p className='blog-p'>
        Vstupné je <b>dobrovolné</b> a na místě vás čeká{' '}
        <b>občerstvení a pohodová atmosféra</b>. Přijďte s celou rodinou –
        zábava i zážitky jsou zaručeny!
      </p>
      {/* --- */}
      <h2 className='blog-h2'>Letní turnus slepiček 🐔☀️</h2>
      <p className='blog-p'>
        Díky vysokému zájmu o slepičky jsme se rozhodli spustit{' '}
        <b>letní turnus prodeje</b>. Slepičky můžete nadále objednávat jednoduše
        přes náš e-shop a vyzvednout si je u nás na farmě nebo ve výdejních
        místech.
      </p>
      <br />
      <a href='https://eshop-farmahajek.cz' className='blog-a'>
        eshop-farmahajek.cz
      </a>
      {/* --- */}
      <h2 className='blog-h2'>Děkujeme, že jste s námi 💚</h2>
      <p className='blog-p'>
        Díky vaší důvěře a podpoře můžeme neustále růst a posouvat naši farmu
        dál. Ať už jste si od nás letos pořídili slepičky, zastavili se v
        samoobslužné prodejně nebo jen sledujete dění – vážíme si toho!
      </p>
      <br /> <br />
      <p className='blog-p'>
        Těšíme se na vás u kávy, při prodeji i na červnovém Strongmanovi!
      </p>
      <span className='blog-greeting'>
        <b>Tým Farma Hájek 🐔☕💪</b>
      </span>
    </main>
  )
}
