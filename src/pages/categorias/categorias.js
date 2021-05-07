import { useEffect, useState } from "react"
import CardCategoria from "../../components/categorias/cardCategoria"
import Footer from "../../components/footer/footer"
import Loading from "../../components/loading/loading"
import NavBar from "../../components/navBar/navBar"
import { getItems } from "../../services/consultas"

import './Style.css'

export default function PageCategorias() {
    const [categorias, setCategorias] = useState(null)

    const getCategorias = async () => {
        let tmp = await getItems("categorias")
        setCategorias(tmp)
    }

    useEffect(() => {
        getCategorias()
    }, [])

    return (
        <div className="bgCategorias">
            <NavBar />
            <div className="center">
                {categorias? categorias.map((doc) => <CardCategoria key={doc.id} categoria={doc} />) : <Loading />}
            </div>
            <Footer />
        </div>
    )
}