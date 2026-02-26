export default function Page() {
  return (
    <main>
      <h1 className='blog-h1'>Máme Nový e-shop 🌐</h1>
      <img
        src='/blog/novy-eshop/2.webp'
        alt='hero image'
        className='blog-img'
      />
      <p className='blog-p'>Milí přátelé,</p>
      <p className='blog-p'>
        náš e-shop už možná znáte, ale teď pro vás máme velkou novinku – právě
        jsme ho spustili na <b>nové platformě a s řadou vylepšení!</b> 🎉
        Chceme, aby pro vás bylo objednávání produktů a slepiček z naší farmy
        ještě snadnější, rychlejší a pohodlnější.
      </p>
      <br />
      <h3 className='blog-h3'>Co je nového?</h3>
      <ul className='blog-ul'>
        <li>
          ✅ <b>Modernější a přehlednější design:</b> Lépe se zorientujete a
          rychle najdete, co hledáte.
        </li>
        <li>
          ✅ <b>Nové produkty:</b> Přidali jsme například dárkové poukazy, které
          můžete věnovat svým blízkým jako skvělý farmářský dárek.
        </li>
        <li>
          ✅ <b>Lepší funkčnost:</b> Novinkou je platební brána s možností
          platby kartou.
        </li>
      </ul>
      <br />
      <h3 className='blog-h3'> Co všechno si u nás můžete zamluvit?</h3>
      <ul className='blog-ul'>
        <li>🐔 Slepičky a kohouty</li>
        <li>🏠 Kurníky a králíkárny</li>
        <li>🥚 Krmivo a Vitamíny</li>
        <li>🎁 Dárkové poukazy</li>
      </ul>
      <br />
      <h3 className='blog-h3'>Jak e-shop funguje?</h3>
      <p className='blog-p'>
        E-shop slouží jako místo, kde si můžete pohodlně zamluvit náš sortiment.
        Stačí si produkty vybrat, vytvořit rezervaci a poté si vše vyzvednout
        přímo u nás na farmě. Žádné balíky, jen přímý kontakt s námi a našimi
        produkty.
      </p>
      <br />
      <h3 className='blog-h3'> Proč se podívat na nový e-shop?</h3>
      <ul className='blog-ul list-inside list-disc'>
        <li>Rychlé a snadné objednávání.</li>
        <li>Širší nabídka produktů.</li>
        <li>Stále stejná kvalita a osobní přístup, který znáte.</li>
      </ul>
      <br />
      <span className='blog-p'>
        Vyzkoušejte náš vylepšený e-shop a dejte nám vědět, jak se vám líbí! 😊
        Najdete ho zde:{' '}
        <a href='https://www.eshop-farmahajek.cz' className='blog-a'>
          https://www.eshop-farmahajek.cz
        </a>
      </span>
      <br /> <br />
      <p className='blog-p'>
        Děkujeme, že nám pomáháte růst a zůstat věrní poctivému farmaření.
      </p>
      <br />
      <span className='blog-greeting'>
        Těšíme se na vás! 🐓 <br />
        <b>Tým Farma Hájek</b>
      </span>
    </main>
  )
}
