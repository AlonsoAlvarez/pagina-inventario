import { useEffect } from "react";
import { useState } from "react"
import { getByRef } from "../../../services/consultas";
import Loading from "../../loading/loading"

import './Style.css'
import { Link } from "react-router-dom";

export default function CategoriaRama({rama, close}) {
    const [categorias, setCategorias] = useState(null)

    const {name, uidCategorias} = rama.data()

    const getCategorias = async () => {
        let tmp = [];
        for (let i = 0; i < uidCategorias.length; i++) {
            tmp.push(await getByRef(uidCategorias[i]))
        }
        setCategorias(tmp)
    }

    useEffect(() => {
        if(uidCategorias && 0<uidCategorias.length) {
            getCategorias()
        } else {
            setCategorias([])
        }
    }, [])

    return (
        <div className="colRama">
            <h3>{name}</h3>
            {!categorias? <Loading /> 
                : 0<categorias.length? categorias.map((doc) => <Link to={`/ramas/${rama.id}/categorias/${doc.id}`} onClick={close}>{doc.data().name}</Link>) 
                : <h3>---</h3>}
        </div>
    )
}