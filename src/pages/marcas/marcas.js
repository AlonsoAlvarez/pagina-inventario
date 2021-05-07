import { useEffect, useState } from "react"
import Footer from "../../components/footer/footer"
import Loading from "../../components/loading/loading"
import CardMarca from "../../components/marcas/cardMarca"
import NavBar from "../../components/navBar/navBar"
import { getItems } from "../../services/consultas"

import './Style.css'

export default function PageMarcas() {
    const [marcas, setMarcas] = useState(null)

    const getMarcas = async () => {
        let tmp = await getItems("marcas")
        setMarcas(tmp)
    }

    useEffect(() => {
        getMarcas()
    }, [])

    return (
        <div className="bgMarcas">
            <NavBar />
            <br/>
            <div className="rowCategorias padding">
                {marcas? marcas.map((doc) => <CardMarca categoria={doc} key={doc.id} />) : <Loading />}
            </div>
            <Footer />
        </div>
    )
}