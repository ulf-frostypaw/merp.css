const Colors = () => {
    return(
        <div className="container">
            <div className="col col-12">
                <h1>Colores</h1>
                <i>Añadir más color a la paleta de colores</i>
                <div className="card row container">
                    <p className="card color-primary">Color Primary</p>
                    <p className="card color-success">Color success</p>
                    <p className="card color-danger">Color danger</p>
                    <p className="card color-warning">Color warning</p>
                    <p className="card color-info">Color info</p>
                </div>
            </div>
        </div>
    )
}
export default Colors;