export default function CardImagen({url, funcion}){

    const handleClick = () => {
        funcion(url)
    }

    return (
        <div className="cardImagen">
            <button onClick={handleClick}>
                <img loading="lazy" src={url} />
            </button>
        </div>
    )
}