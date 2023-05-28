import '../styles/merp.css/merp.css'
import '../styles/app.css'
import modes from '../styles/modes.module.css'
export const metadata = {
  title: 'MERP.css',
  description: 'Un framework simple para proyectos pequeños.',
}
//import ToggleModeButton from '../components/ToggleModeButton' || className={`${darkMode ? modes.dark : modes.light}`}
import Link from 'next/link'
//import NextProgress from "next-progress"
import NextTopLoader from 'nextjs-toploader';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const darkMode = true;
  return (
    <html lang="es">
      <body>
        <NextTopLoader color="#3282B8" />
        <nav>
          <div className="container">
            <Link className='logo' href={'/'}><h2>merp.css</h2></Link>
            <div className="links">
              <Link href={'/templates'}>Plantillas</Link>
            </div>
          </div>
        </nav>
        <main>
          {children}
        </main>
        <footer>
          <center>merp.css es mantenido por <Link href="https://github.com/Purrgrammers-Studio">Purrgrammers Studio's</Link> y <Link href="https://github.com/ulf-frostypaw">Ulf FrostyPaw</Link> - MIT &copy; 2023</center>
        </footer>
      </body>
    </html>
  )
}
