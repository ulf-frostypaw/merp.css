import '../styles/merp.css'
import '../styles/app.css'
export const metadata = {
  title: 'MERP.css',
  description: 'Un framework simple para proyectos pequeños.',
}
import Link from 'next/link'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <main>
          {children}
        </main>
        <footer>
          <center>merp.css es mantenido por <Link href="https://github.com/Purrgrammers-Studios">Purrgrammers Studio's</Link> y <Link href="https://github.com/ulf-frostypaw">Ulf FrostyPaw</Link> - MIT &copy; 2023</center>
        </footer>
      </body>
    </html>
  )
}
