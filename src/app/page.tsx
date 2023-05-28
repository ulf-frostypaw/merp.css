import Link from 'next/link'
const Home = () =>{
  return(
    <>
      <div className="container">
        <div className="col col-12">
          <h1>merp.css</h1>
          <p>Un framework de CSS y otros componentes para pequeños proyectos.</p>

          <ul>
            <h2>Estilos y componentes disponibles</h2>
            <li><Link href="/buttons">Botones</Link></li>
            <li><Link href="/links">Enlaces</Link></li>
            <li><Link href="/text">Títulos y textos</Link></li>
            <li><Link href="/cards">Tarjetas</Link></li>
            <li><Link href="/colors">Colores</Link></li>
            <li><Link href="/colums">Columnas</Link></li>
          </ul>
          <h1>¿Por qué se llama <i>merp.css</i>?</h1>
          <p>La palabra <i>merp</i> es el peculiar sonido que las miticas criaturas llamadas <i><Link href="https://en.wikifur.com/wiki/Sergal">Sergales</Link></i> hacen cuando están felices. Aunque no está documentado realmente, muchas persoans en internet así lo declaran.</p>
          <h1>Y, ¿Por qué usar merp.css?</h1>
          <p>Este es un framework de CSS que se enfoca al desarrollo de proyectos simples con su documentación en español. Además de que estaba un poco aburrido y me gustaría ya tenr una guía definitiva para mis diseños.</p>
        </div>
      </div>
    </>
  )
}
export default Home;