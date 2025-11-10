export default function Page() {
  return (
    <main>
      <h1 className='blog-h1'>
        Podzim na dvoře: jak připravit slepice na zimu 🍂🐔
      </h1>
      <img
        src='/blog/2025/podzim-na-dvore/1.webp'
        alt='slepice na podzim'
        className='blog-img'
      />

      <p className='blog-p'>
        Podzim je obdobím, kdy příroda zpomaluje a slepice se začínají
        připravovat na chladnější dny. Aby zimu zvládly bez problémů, je dobré
        jim včas upravit podmínky a krmení.
      </p>

      {/* --- */}
      <h2 className='blog-h2'>Zateplení a suchý kurník 🏠</h2>
      <p className='blog-p'>
        S příchodem listopadu už teploty často klesají pod nulu. Není nutné mít
        kurník přetopený, ale musí být <b>suchý a bez průvanu</b>. Slepice sice
        snášejí chlad lépe než horko, ale vlhkost je jejich největší nepřítel.
        Ideální je, když se v kurníku netvoří kondenzát a je tam dostatek
        čerstvého vzduchu.
      </p>

      {/* --- */}
      <h2 className='blog-h2'>Světlo a délka dne 💡</h2>
      <p className='blog-p'>
        Když se dny zkracují, klesá i snáška. To je přirozené, protože slepice
        reagují na světlo. Pokud chcete snášku udržet, můžete použít{' '}
        <b>umělé osvětlení, které den prodlouží zhruba na 14 hodin</b>. Světlo
        by mělo být jemné a zapínat se brzy ráno, ne večer.
      </p>

      {/* --- */}
      <h2 className='blog-h2'>Krmení v chladných měsících 🌾</h2>
      <p className='blog-p'>
        V zimě potřebují slepice více energie, aby si udržely tělesnou teplotu.
        Můžete tedy zvýšit podíl obilí – hlavně kukuřice nebo pšenice. Kromě
        směsí je vhodné přidávat i{' '}
        <b>minerály a grit, které pomáhají trávení</b>.
      </p>

      {/* --- */}
      <h2 className='blog-h2'>Péče o vodu 💧</h2>
      <p className='blog-p'>
        Voda je v zimě často opomíjená, přitom slepice bez ní dlouho nevydrží.
        Pokud zamrzá, pomůže{' '}
        <b>ohřívaná napáječka nebo alespoň častější výměna</b>.
      </p>

      {/* --- */}
      <h2 className='blog-h2'>Závěr 💚</h2>
      <p className='blog-p'>
        Podzimní úprava chovu není složitá, ale vyžaduje trochu plánování. Suchý
        kurník, dostatek světla a kvalitní krmení – to je recept na spokojené
        slepice i v zimě.
      </p>

      <br />
      <span className='blog-greeting'>
        <b>Vaši farmáři z Farmy Hájek 💚</b>
      </span>
    </main>
  )
}
