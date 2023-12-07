import Link from 'next/link';

export default function Home() {
  return (
    <div>
{/*       <nav>
        <ul className="w-14 flex flex-row justify-between">
          <li>
            <Link href="/about">About me</Link>
          </li>
          <li>
            <Link href="/about">Subjects</Link>
          </li>
        </ul>
      </nav> */}
      <h1>HOME PAGE</h1>

      <div className="container">
        <div className="centered-content menu-list" >
          <p>Zapeo si s učenjem? Propustio predavanja i sad ne znaš kako dalje? Ova stranica je 
          prava za tebe! Dobrodošli na mjesto gdje ćete pronaći sve materijale koji su potrebni 
          za uspješno studiranje na Fakultetu elektrotehnike, strojarstva i brodogradnje, smjer 
          računarstvo. Spremni za izazov? Ova stranica je vodič prema uspjehu.</p>
        </div>
      </div>

      
    </div>

  );
}
