import Footer from "../../components/footer/footer"
import NavBar from "../../components/navBar/navBar"
import Loading from "../../components/loading/loading"

import './Style.css'
import { useEffect, useState } from "react"

import CardImagen from "../../components/home/cardImagen"
import { getPromociones } from "../../services/consultas"
import ReactPlayer from "react-player"


export default function PageHome() {

    const [imagen, setImagen] = useState(null)
    const [imagenes, setImagenes] = useState(null)

    const getPtods = async () => {
        let prods = await getPromociones()
        setImagenes(prods)
        if(0<prods.length) {
            setImagen(prods[0])
        }
    }

    const changeImage = (doc) => {
        setImagen(doc)
    }

    useEffect(() => {
        getPtods()
    }, [])

    return (
        <div className="bgHome">
            <NavBar />
            <div className="col">
                <div className="imgHome">
                    {!imagen? <p>Promo</p> 
                        : imagen.data().name === "video" ? 
                            <video src={imagen.data().url} preload="auto" autoPlay></video>
                        : <img loading="lazy" src={imagen.data().url} alt="actual" />}
                </div>
                <div className="imgsGrup">
                    {!imagenes? <Loading /> : 0<imagenes.length? imagenes.map((doc) => 
                        <CardImagen key={doc.id} doc={doc} name={doc.data().name} funcion={changeImage}/>
                    ) : <div><br/><br/><br/><br/><br/><h1>No hay productos</h1></div>}
                </div>
            </div>
            <Footer />
        </div>
    )
}