'use client'

import dynamic from 'next/dynamic'
const Map = dynamic(() => import('@/components/map'), { ssr: false })

export default function Page() {
  return (
    <main>
      <h1 className='blog-h1'>Děkujeme za skvělý rok 2024! 🎉🐔</h1>

      <img src='/blog/2025/2024/2.webp' alt='hero image' className='blog-img' />

      <p className='blog-p'>Milí přátelé,</p>
      <p className='blog-p'>
        rok 2024 byl pro naši farmu výjimečný, a to hlavně díky vám! Vaše
        podpora, důvěra a zájem o naši práci nás motivují k tomu, abychom se
        stále zlepšovali a přinášeli vám to nejlepší. Pojďme si společně
        připomenout, co všechno jsme letos zažili a co nás čeká v roce 2025.
      </p>
      <h2 className='blog-h2'>Co se nám v roce 2024 podařilo?</h2>
      <ul className='blog-ul'>
        <li>
          <b> 💪 Strongman akce v květnu:</b> Naše farma se na jeden den
          proměnila v arénu plnou siláků a skvělé atmosféry. Byla to
          nezapomenutelná akce a moc nás těší, že jste ji s námi sdíleli.
        </li>
        <li>
          <b>📱 Rozšíření na sociálních sítích:</b>
          Díky vám jsme rostli nejen na farmě, ale i online. Navázali jsme
          skvělé spolupráce a měli jsme radost z vaší aktivity – lajků,
          komentářů i sdílení.
        </li>
        <li>
          <b>🏪 Nová samoobslužná prodejna v Domažlicích:</b> Kromě rozšířeného
          sortimentu v naší stávající prodejně jsme letos otevřeli úplně novou
          samoobslužnou prodejnu v Domažlicích. Teď je to k našim produktům
          ještě blíž!
        </li>
        <li>
          <b>🐔 Rozšířený výběr slepiček:</b>
          Letos jsme nabídli více druhů slepiček, abyste si mohli vybrat přesně
          ty, které nejlépe zapadnou do vašeho chovu.
        </li>
        <li>
          <b>🛒 Nový e-shop:</b> Spustili jsme vylepšenou verzi našeho e-shopu,
          kde si můžete snadno zamluvit vše, co potřebujete, ať už jde o
          slepičky, krmivo, nebo nové kurníky.
        </li>
      </ul>
      <h2 className='blog-h2'>Co nás čeká v roce 2025?</h2>
      <h3 className='blog-h3'>📅 Startujeme prodej slepiček!</h3>
      <p className='blog-p'>
        První prodej slepiček proběhne v{' '}
        <b>pátek 21. února 2025 od 16:00 do 18:00. </b>
        Najíždíme na náš již zaběhlý systém, takže vše proběhne hladce, tak jak
        to znáte.
      </p>
      <h3 className='blog-h3'>📍 Můžete využít i naše franšízy!</h3>
      <p className='blog-p'>
        Pokud to máte daleko, slepičky si můžete zamluvit a vyzvednout v některé
        z našich franšízových poboček:
      </p>

      <Map />

      <h2 className='blog-h3'>Děkujeme vám! 💚</h2>

      <p className='blog-p'>
        Vaše podpora nám umožňuje růst a přinášet vám stále lepší služby. Moc si
        vážíme každého, kdo nás letos navštívil, sledoval na sociálních sítích,
        využil náš e-shop nebo si odnesl produkty z našich prodejen.
      </p>

      <br />

      <h2 className='blog-h3'>Přejeme vám šťastný nový rok 2025! 🎆</h2>

      <p className='blog-p'>
        Ať je plný zdraví, radosti a úspěchů. Už teď se těšíme na další společné
        chvíle, akce a projekty, které nás v novém roce čekají.
      </p>

      <br />

      <span className='blog-p'>
        S vděčností a přáním všeho nejlepšího, <br />
        <b>Tým Farma Hájek</b>
      </span>
    </main>
  )
}
