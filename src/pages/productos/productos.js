import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Especificaciones from "../../components/especificaciones/especificaciones";
import Footer from "../../components/footer/footer";
import Loading from "../../components/loading/loading";
import NavBar from "../../components/navBar/navBar";
import CardProducto from "../../components/productos/cardProducto";
import { getProductosRamaCategoria } from "../../services/consultas"

import './Style.css'

export default function PageProductos(params) {
    const [productos, setProductos] = useState(null)
    const [productosTmp, setProductosTmp] = useState(null)
    const [especifDB, setEspecifDB] = useState(null)
    const [abiertas, setAbiertas] = useState({
        acabado: false,
        apariencia: false,
        color: false,
        comercial: true,
        material: false,
        pei: false,
        pisoMuro: false,
        promocion: false,
        uso: false
    })
    const [detalle, setDetalle] = useState([
        {name: "material"},
        {name: "acabado"},
        {name: "apariencia"},
        {name: "color"},
        {name: "comercial"},
        {name: "pei"},
        {name: "pisoMuro"},
        {name: "promocion"},
        {name: "uso"}
    ])

    const location = useLocation()
    const uidRama = location.pathname.split("/")[2]
    const uidCategoria = location.pathname.split("/")[4]

    const getProductosCurrent = async () => {
        let res = await getProductosRamaCategoria(uidRama, uidCategoria)
        setProductos(res)
        setProductosTmp(res)
    }

    useEffect(() => {
        getProductosCurrent()
        setDetalle([
            {name: "material"},
            {name: "acabado"},
            {name: "apariencia"},
            {name: "color"},
            {name: "comercial"},
            {name: "pei"},
            {name: "pisoMuro"},
            {name: "promocion"},
            {name: "uso"}
        ])
        setAbiertas({
            acabado: false,
            apariencia: false,
            color: false,
            comercial: true,
            material: false,
            pei: false,
            pisoMuro: false,
            promocion: false,
            uso: false
        })
    }, [uidRama, uidCategoria])

    const tmpFiltro = (name, algo, lista, catAbiertas) => {
        let arr = []
        lista.forEach(e => {
            if(catAbiertas[name] && algo.value){
                let flag = false
                especifDB[name].forEach((esp, index) => {
                    if(algo.value[esp]) {
                        flag = true
                        if(e.data()[name] === esp) {
                            arr.push(e)
                        }
                    }
                    if(!flag && index === especifDB[name].length - 1){
                        arr.push(e)
                    }
                })
            } else {
                arr.push(e)
            }
        })
        return arr
    }

    const campos = ["material", "comercial", "uso", "acabado", "apariencia", "color", "pei", "promocion", "pisoMuro"]

    const auxDetalle = (algo) => {
        let arr = [];
        detalle.forEach(e => {
            if(e.name === algo.name){
                arr.push(algo)
            } else {
                arr.push(e)
            }
        })
        setDetalle(arr)
    }

    const filtro = (algo, catAbiertas) => {
        let arr = productos
        if(algo) {
            auxDetalle(algo)
            campos.forEach(e => {
                arr = tmpFiltro(e, algo, arr, abiertas) 
            })
        } else {
            campos.forEach(e => {
                arr = tmpFiltro(e, detalle, arr, catAbiertas)
            })
        }
        setProductosTmp(arr)
    }

    const abiertos = (algo) => {
        setAbiertas(algo)
        filtro(null, algo)
    }

    const especificaciones = (algo) => {
        setEspecifDB(algo)
    }
    
    return (
        <div className="bgProductos" >
            <NavBar />
            <div className="rowFiltro">
                <Especificaciones funcion={(e) => {filtro(e)}} abiertos={(e) => {abiertos(e)}} especif={(e) => {especificaciones(e)}} detalle={detalle} />
                <div className="espacio"></div>
                <div className="center">
                    {!productosTmp? <div><br/><br/><br/><Loading /></div> : 0<productosTmp.length? productos.map((doc) => <CardProducto key={doc.id} producto={doc} />) : <div><br/><br/><br/><br/><br/><h1>No hay productos</h1></div> }
                </div>
            </div>
            <Footer />
        </div>
    )
}