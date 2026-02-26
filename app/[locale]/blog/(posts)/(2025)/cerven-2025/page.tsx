'use client'

export default function Page() {
  return (
    <main>
      <h1 className='blog-h1'>Červnové novinky 🌞💪☕</h1>
      <img
        src='/blog/2025/cerven/1.webp'
        alt='hero image'
        className='blog-img'
      />
      <p className='blog-p'>Milí přátelé,</p>
      <p className='blog-p'>
        červen byl na Farmě Hájek opravdu nabitý! Proběhl u nás dlouho očekávaný{' '}
        <b>Strongman 2025</b> a zároveň jsme slavnostně
        <b> otevřeli naši novou kavárnu</b>. Obě události nás naplnily obrovskou
        radostí a děkujeme všem, kdo byli u toho.
      </p>

      {/* --- */}
      <h2 className='blog-h2'>Strongman 2025 – síla a zážitky 💪🔥</h2>
      <p className='blog-p'>
        V neděli 8. června se farma proměnila v arénu plnou energie, potu a
        radosti. Závodníci předvedli neuvěřitelné výkony v disciplínách jako
        Loglift, Axle Deadlift, Farmer&apos;s Walk, tahání kamionu nebo
        převracení pneumatiky.
      </p>
      <p className='blog-p'>
        Atmosféru doplnil bohatý program pro celou rodinu – od cowboy show
        Jimmyho Magury přes dog dancing, parkour, až po tombolu a disciplíny pro
        diváky. Nechyběl ani dětský koutek a skákací hrad.
      </p>
      <p className='blog-p'>
        Děkujeme všem divákům i závodníkům za nezapomenutelný den plný síly a
        dobré nálady!
      </p>

      {/* --- */}
      <h2 className='blog-h2'>Naše nová kavárna ☕🐔</h2>
      <p className='blog-p'>
        Velká novinka tohoto měsíce – <b>otevření kavárny na Farmě Hájek</b>!
        Najdete ji přímo u nás a funguje v režimu samoobsluhy, na který jste si
        už zvykli z našich krámků. Stačí přijít, vybrat si a užít si chvíli
        pohody s krásným výhledem na naši farmu.
      </p>
      <p className='blog-p'>
        Jsme nadšení, že vám můžeme nabídnout další místo pro odpočinek a
        věříme, že se stane oblíbeným místem všech návštěvníků.
      </p>
      <img src='/blog/2025/cerven/4.webp' alt='nová kavárna' />

      {/* --- */}
      <h2 className='blog-h2'>Děkujeme 💚</h2>
      <p className='blog-p'>
        Červen byl pro nás jedním z vrcholů roku – tolik energie a tolik
        skvělých setkání! Děkujeme vám za přízeň a podporu, bez vás by nic z
        toho nebylo možné. Těšíme se, co nám přinesou další letní měsíce.
      </p>
      <br />
      <span className='blog-greeting'>
        <b>Vaši farmáři 🐔🚜</b>
      </span>
    </main>
  )
}
