import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FESBbas',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <div className="header-content">
            <div className="icon-container">
              <img src="icon.png"/>
              <p>FESBbaš</p>
            </div>
            <nav>
              <ul className="menu-list">
              <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/subjects?_page=1&_limit=10">Subjects</Link>
                </li>
                <li>
                  <Link href="/myprofile">My profile</Link>
                </li>
                <li>
                  <Link href="/sites">Useful sites</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
        {/* <footer>
          <p className='centered-content'>Iva Medvidović & Ivona Mlinarević</p>
          <p className='centered-content'>2023 FESB</p>
        </footer> */}
      </body>
    </html>
  )
}
