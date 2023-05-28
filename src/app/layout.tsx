import '../styles/merp.css'
import '../styles/app.css'
export const metadata = {
  title: 'MERP.css',
  description: 'Un framework simple para proyectos pequeños.',
}
import Link from 'next/link'
//import NextProgress from "next-progress"
import NextTopLoader from 'nextjs-toploader';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <NextTopLoader color="#3282B8" />
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
