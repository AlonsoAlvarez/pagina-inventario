import { Link } from 'react-router-dom'
import './Style.css'

export default function CardCategoria({categoria}) {

    const {url, name, description} = categoria.data()
    
    return (
        <Link to={`/categorias/${categoria.id}`}>
            <div className="cardCategoria">
                <div className="imgCategoria">
                    <img loading="lazy" src={url} alt={name} />
                </div>
                <div className="datos">
                    <h2>{name}</h2>
                    <h3>{description}</h3>
                </div>
            </div>
        </Link>
    )
} 