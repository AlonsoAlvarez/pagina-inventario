import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import Footer from "../../components/footer/footer"
import NavBar from "../../components/navBar/navBar"
import ProductoContext from "../../providers/productoContext"
import { getItem } from "../../services/consultas"
import Loading from "../../components/loading/loading";

import './Style.css'
import CardImagen from "../../components/productoDetail/cardImage"

export default function PageProductoDetail() {
    const { uid } = useParams()
    const { producto, setProducto } = useContext(ProductoContext)
    const [ urlCurrent, setUrlCurrent ] = useState(null)

    const getProducto = async () => {
        let res = await getItem(uid, "productos")
        setUrlCurrent(res.data().url)
        setProducto(res)
        console.log(res.data());
        console.log(res.data().urlsFotos);
        res.data().urlsFotos.forEach(e => {
            console.log(e);
        })
    }

    useEffect(() => {
        if(!producto) {
            getProducto()
        } else {
            setUrlCurrent(producto.data().url)
        }
    }, [])

    const handleChangeImage = (url) => {
        setUrlCurrent(url)
    }

    return (
        <div className="bgProducto">
            <NavBar />
            {producto? 
                <div className="row">
                    <div className="imgProducto">
                        <div className="colImagenes">
                            <img loading="lazy" src={urlCurrent} alt={producto.id} />
                            <div className="rowGaleria imgGaleria">
                                <CardImagen url={producto.data().url} funcion={handleChangeImage}/> 
                                {producto.data().urlsFotos?.map((e) => <CardImagen url={e} funcion={handleChangeImage}/> )}
                            </div>
                        </div>
                    </div>
                    <div className="info">
                        <h2>{producto.data().name}</h2>
                        <h3>{producto.data().description}</h3>
                        <h4>Existencias: {(0<producto.data().stock)? "Disponibles" : "Agotadas" }</h4>
                        <h5>Precio: ${producto.data().precioVenta} MXN</h5>
                    </div>
                </div>
                : <Loading />}
            <Footer />
        </div>
    )
}