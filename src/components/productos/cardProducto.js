import { useContext } from "react"
import { Link } from "react-router-dom"
import ProductoContext from "../../providers/productoContext"

import './Style.css'

export default function CardProducto({producto}) {
    const {url, name, description, stock} = producto.data()
    const { setProducto } = useContext(ProductoContext)

    return (
        <Link to={`/productos/${producto.id}`} onClick={() => setProducto(producto)}>
            <div className="cardProducto">
                <div className="imgProducto">
                    <img loading="lazy" src={url} alt={name} />
                </div>
                <div className="datos">
                    <h3>{name}</h3>
                    <h4>{description}</h4>
                    <h5>Existencias: {(0<stock)? "Disponibles" : "Agotadas" }</h5>
                </div>
            </div>
        </Link>
    )
}