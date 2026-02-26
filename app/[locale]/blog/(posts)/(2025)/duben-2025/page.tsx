'use client'

export default function Page() {
  return (
    <main>
      <h1 className='blog-h1'>Dubnové novinky 🐓☕💪</h1>
      <img
        src='/blog/2025/duben/1.webp'
        alt='hero image'
        className='blog-img'
      />
      <p className='blog-p'>Milí přátelé,</p>
      <p className='blog-p'>
        jaro je v plném proudu a my pro vás máme spoustu novinek i jedno velké
        oznámení – <b>další ročník oblíbené akce Strongman je tu!</b> Navíc na
        farmě začala <b>stavba kavárny</b>, kde si už brzy budete moci vychutnat
        kávu s krásným výhledem na přírodu. Pojďme si to všechno představit!
      </p>
      {/* --- */}
      <h2 className='blog-h2'>Strongman 2025 – přihlášky otevřeny! 💪🚜</h2>
      <p className='blog-p'>
        Už 8. června 2025 se naše farma znovu promění v arénu plnou síly,
        odhodlání a skvělé atmosféry. Připravte se na další ročník soutěže
        Strongman!
      </p>
      <br />
      <p className='blog-p'>Disciplíny:</p>
      <ul className='blog-ul !space-y-0.5'>
        <li className='blog-li'>🏋 Deadlift</li>
        <li className='blog-li'>🏋 Loglift</li>
        <li className='blog-li'>🏃‍♂ Farmer&apos;s Walk</li>
        <li className='blog-li'>🚚 Tahání kamionu</li>
        <li className='blog-li'>🔄 Převracení pneumatiky</li>
      </ul>
      <br />
      <p className='blog-p font-bold'>
        Chcete se zůčastnit? Přihlášky najdete zde:
      </p>
      <a href='https://eshop.ceskystrongman.cz/farma/' className='blog-a'>
        ceskystrongman.cz/farma
      </a>
      <br /> <br />
      <p className='blog-p'>
        Přijďte fandit nebo si rovnou zasoutěžit – atmosféra bude jako vždy
        nezapomenutelná!
      </p>
      <div className='grid grid-cols-2 gap-4'>
        <img src='/blog/2025/duben/2.webp' alt='strongman kamion' />
        <img src='/blog/2025/duben/3.webp' alt='strongman loglift' />
      </div>
      {/* --- */}
      <h2 className='blog-h2'>Stavba kavárny 🚛🐔</h2>
      <p className='blog-p'>
        Máme velkou radost, že vám můžeme oznámit začátek stavby nové kavárny
        přímo na naší farmě! Už brzy si budete moci při návštěvě farmy vychutnat
        kávu a přitom sledovat dění kolem.
      </p>
      <br />
      {/* --- */}
      <h2 className='blog-h2'>Děkujeme za vaši důvěru 💚</h2>
      <p className='blog-p'>
        Prodeje slepiček i ostatního sortimentu běží skvěle a je to hlavně díky
        vám.{' '}
        <b>
          Vaše důvěra nám umožňuje rozšiřovat naši farmu, zlepšovat služby a
          přinášet vám stále něco nového.
        </b>
      </p>
      <br /> <br />
      <p className='blog-p'>
        Děkujeme, že jste s námi a těšíme se na všechna další setkání
      </p>
      <span className='blog-greeting'>
        <b>Tým Farma Hájek 🐔🚜</b>
      </span>
    </main>
  )
}
