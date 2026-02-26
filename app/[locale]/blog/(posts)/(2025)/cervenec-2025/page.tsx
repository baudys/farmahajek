'use client'

export default function Page() {
  return (
    <main>
      <h1 className='blog-h1'>Červenecové novinky 💚🎶💪</h1>
      <img
        src='/blog/2025/cervenec/1.webp'
        alt='hero image'
        className='blog-img'
      />
      <p className='blog-p'>Milí přátelé,</p>
      <p className='blog-p'>
        červenec byl na naší farmě ve znamení hudby, setkávání a příprav na
        další akce. 🌾 Bylo nám ctí přivítat vás u nás a společně si užít léto
        naplno!
      </p>
      {/* --- */}
      <h2 className='blog-h2'>30 let kapely Starci na chmelu 🎸🍻</h2>
      <p className='blog-p'>
        V sobotu <b>26. července 2025</b> jsme na farmě hostili koncert kapely{' '}
        <b>Starci na chmelu</b>, která oslavila své <b>30. výročí</b>. Večer byl
        plný hudby, přátelské atmosféry a skvělého občerstvení. Děkujeme všem,
        kdo dorazili – vytvořili jste nezapomenutelnou atmosféru! 🙌
      </p>
      <img
        src='/blog/2025/cervenec/2.webp'
        alt='koncert kapely Starci na chmelu'
        className='blog-img'
      />
      <br />
      {/* --- */}
      <h2 className='blog-h2'>Strongman Klatovy 💪</h2>
      <p className='blog-p'>
        V červenci jsme vám připomínali nadcházející <b>Strongman Klatovy</b>,
        který proběhl hned začátkem srpna. Byla to akce podobná našim farmářským
        závodům, jen s tím rozdílem, že tentokrát soutěžili opravdoví
        profesionálové. Rádi jsme tuto show podpořili a věříme, že jste si ji
        užili stejně jako my! 🎉
      </p>
      <img
        src='/blog/2025/cervenec/3.webp'
        alt='plakát Strongman Klatovy'
        className='blog-img'
      />
      <br />
      {/* --- */}
      <h2 className='blog-h2'>Poděkování 🌞</h2>
      <p className='blog-p'>
        Děkujeme vám, že jste součástí našeho léta plného hudby, setkávání i
        sportu. Bez vaší podpory by nic z toho nebylo možné. ❤️
      </p>
      <p className='blog-p'>
        Léto je u nás vždy plné života a radosti a jsme rádi, že ho můžeme
        sdílet právě s vámi.
      </p>
      <br />
      <span className='blog-greeting'>
        <b>Vaši farmáři 🐓🚜</b>
      </span>
    </main>
  )
}
