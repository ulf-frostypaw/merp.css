import Link from 'next/link'
const Home = () =>{
  return(
    <>
      <div className="container">
        <div className="col col-12">
          <h1>merp.css</h1>
          <p>Framework para pequeños proyectos.</p>

          <ul>
            <h2>Estilos y componentes disponibles</h2>
            <li><Link href="/buttons">Botones</Link></li>
            <li><Link href="/links">Enlaces</Link></li>
            <li><Link href="/text">Títulos y textos</Link></li>
          </ul>
          <h1>¿Por qué usar merp.css?</h1>
          <p>Este es un framework de CSS que se enfoca al desarrollo de proyectos simples con su documentación en español.</p>
        </div>
      </div>
    </>
  )
}
export default Home;