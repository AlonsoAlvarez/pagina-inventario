//import ReactPlayer from 'react-player'
import './Style.css'

export default function CardImagen({doc, funcion, name}) {

    const handleClick = () => {
        funcion(doc)
    }

    return (
        <div className="cardImagen">
            <button onClick={handleClick}>
                {name==="video"
                    ? <video src={doc.data().url} preload={`card${doc.id}`} autoplay ></video>
                    : <img loading="lazy" src={doc.data().url} />}
            </button>
        </div>
    )
}