import { Link } from 'react-router-dom'
import './Style.css'

export default function CardMarca({categoria}) {
    const {url, name, description} = categoria.data()

    return (
        <div className="card">
            <Link to={`/marcas/${categoria.id}`}>
                    <div className="imagenCard">
                        <img loading="lazy" alt={name} src={url} />
                    </div>
                    <div className="nombre">
                        <p>{name}</p>
                    </div> 
                    <div className="descripcion">
                        <p>{description}</p>
                    </div> 
            </Link>
        </div>
    )
}