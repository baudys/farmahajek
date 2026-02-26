'use client'

export default function Page() {
  return (
    <main>
      <h1 className='blog-h1'>Únorové novinky 🐔❄️</h1>
      <img src='/blog/2025/unor/1.webp' alt='hero image' className='blog-img' />
      <p className='blog-p'>Milí přátelé,</p>
      <p className='blog-p'>
        únor je u nás na farmě ve znamení{' '}
        <b>příprav, prvních prodejů slepiček a péče o naše zvířata.</b> Kromě
        toho jsme rozšířili samoobslužnou prodejnu o další <b>chladicí box</b>,
        aby byly naše produkty ještě čerstvější. Pojďme se podívat, co je u nás
        nového!
      </p>
      <h2 className='blog-h2'>Přípravy a start prodejů 🛠️🐓</h2>
      <p className='blog-p'>
        Po měsících příprav jsme konečně odstartovali letošní{' '}
        <b>prodej slepiček!</b>
        Už od prvních dnů byl velký zájem a jsme rádi, že si k nám našlo cestu
        tolik chovatelů. Doufáme, že vám nové slepičky přinesou spoustu radosti
        a hlavně <b>spoustu vajíček!</b> 🥚
      </p>
      <br />
      <p className='blog-p'>
        Abychom vše zvládli hladce, věnovali jsme spoustu času i{' '}
        <b>opravám a údržbě techniky.</b> Přepravní boxy, krmné systémy i další
        vybavení dostalo potřebnou péči, aby bylo všechno připravené na celou
        sezónu.
      </p>
      <br />
      <p className='blog-p'>
        Pokud jste si letos slepičky ještě nepořídili, nebo plánujete rozšíření
        chovu, sledujte nás – další termíny prodejů oznámíme brzy!
      </p>
      <h2 className='blog-h2'>Nové barvy slepiček! 🎨🐔</h2>
      <p className='blog-p'>
        Letos jsme rozšířili nabídku o <b>nové barevné varianty slepiček</b>.
        Kromě osvědčených druhů si nyní můžete vybrat i slepičky s netradičně
        zbarveným peřím.
      </p>
      <br />
      <div className='grid grid-cols-2 gap-4'>
        <img src='/blog/2025/unor/2.webp' alt='slepicka' className='w-full' />
        <img src='/blog/2025/unor/3.webp' alt='slepicka' className='w-full' />
      </div>
      <br />
      <span className='blog-p'>
        Pokud ještě nemáte objednáno, neváhejte navštívit náš e-shop:{' '}
        <a href='https://www.eshop-farmahajek.cz' className='blog-a'>
          https://www.eshop-farmahajek.cz
        </a>
      </span>
      <br />
      <h2 className='blog-h2'>Péče o dobytek 🐔</h2>
      <p className='blog-p'>
        Na farmě dbáme na správnou výživu a zdravotní stav našich zvířat. V
        únoru se věnujeme:
      </p>
      <ul className='blog-ul'>
        <li className='blog-li'>
          ✅ Míchání speciálních krmných směsí – aby měly slepičky i dobytek
          vyváženou stravu.
        </li>
        <li className='blog-li'>
          💊 Medikaci a prevenci nemocí – pravidelné zdravotní kontroly a péče
          jsou u nás samozřejmostí.
        </li>
      </ul>
      <br />
      <h2 className='blog-h2'>
        Nový chladicí box v samoobslužné prodejně! 🏪❄️
      </h2>
      <p className='blog-p'>
        Abychom vám mohli nabídnout ještě více kvalitních a čerstvých produktů,
        přidali jsme do naší <b>samoobslužné prodejny nový chladicí box.</b>{' '}
        Nyní zde najdete ještě širší výběr potravin!
      </p>
      <br />
      <p className='blog-p'>
        📍 Přijďte se podívat a nakoupit si kdykoliv – máme otevřeno 24/7!
      </p>
      <br />
      <p className='blog-p'>
        <b>🎥 Mrkněte na video zde:</b>
      </p>
      <a
        href='https://www.instagram.com/reel/DF-c814sAo2/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA=='
        target='_blank'
        rel='noreferrer'
        className='blog-a'
      >
        Otevřít Instagram video
      </a>
      <br /> <br />
      <p className='blog-p'>
        <b>Těšíme se na vás! 💚</b>
      </p>
      <p className='blog-p'>
        Děkujeme, že nás podporujete a že můžeme společně pokračovat v budování
        poctivé farmy. Uvidíme se brzy – ať už u nás, na sociálních sítích, nebo
        při vyzvednutí slepiček!
      </p>
      <br />
      <span className='blog-greeting'>
        <b>Tým Farma Hájek 🐔🚜</b>
      </span>
    </main>
  )
}
