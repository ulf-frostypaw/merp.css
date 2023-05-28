const Buttons = () =>{
    return(
        <div className="container">
            <div className="col col-12">
                <h1>Botones</h1>
                <p>Los botones son importantes para dar una presentación a los formularios y otras cosas interesantes que puedes añadir en tu proyecto.</p>
                <div className="card">
                    <span>Estilos de botones por defecto. Usa la clase <code>.btn</code></span>
                    <div className="buttons">
                        <button className="btn normal">Button default</button>
                        <button className="btn primary">Button primary</button>
                        <button className="btn success">Button success</button>
                        <button className="btn warning">Button warning</button>
                        <button className="btn danger">Button danger</button>
                    </div>
                    <span>Para aplicar otros colores: <code>normal</code>, <code>primary</code>, <code>success</code>, <code>warning</code>, <code>danger</code></span>
                </div>
                <div className="card">
                    <span>Estilos de botones redondeados. Usa la clase <code>.btn-rounded</code></span>
                    <div className="buttons">
                        <button className="btn normal btn-rounded">Button default</button>
                        <button className="btn primary btn-rounded">Button primary</button>
                        <button className="btn success btn-rounded">Button success</button>
                        <button className="btn warning btn-rounded">Button warning</button>
                        <button className="btn danger btn-rounded">Button danger</button>
                    </div>
                </div>
                <div className="card">
                    <span>Estilos de botones por defecto. Usa la clase con el prefijo <code>.border</code>.</span>
                    <div className="buttons">
                        <button className="btn border-normal">Button default</button>
                        <button className="btn border-primary color-primary">Button primary</button>
                        <button className="btn border-success color-success">Button success</button>
                        <button className="btn border-warning color-warning">Button warning</button>
                        <button className="btn border-danger color-danger">Button danger</button>
                    </div>
                    <span><b>Nota: Puedes usar las clases <code>.color-X</code></b> y aplicar otros colores: <code>normal</code>, <code>primary</code>, <code>success</code>, <code>warning</code>, <code>danger</code></span>
                </div>
                <div className="card">
                    <span>Estilos de botones deshabilitados. Usa la propiedad <code>disabled</code></span>
                    <div className="buttons">
                        <button className="btn" disabled>Button default</button>
                        <button className="btn btn-rounded" disabled>Button disabled rounded</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Buttons;