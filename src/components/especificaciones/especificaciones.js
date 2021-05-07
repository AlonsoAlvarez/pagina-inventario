import { useEffect, useState } from "react"
import { useLocation } from "react-router";
import { getEspecificaionesCategoria } from "../../services/consultas";
import CheckboxesGroup from "./grup";

import './Style.css'

export default function Especificaciones({funcion, abiertos, especif, detalle}) {
    const [especificaciones, setEspecificaciones] = useState(null);
    const [showMaterial, setShowMaterial] = useState(false);
    const [showComercial, setShowComercial] = useState(false);
    const [showUso, setShowUso] = useState(false);
    const [showAcabado, setShowAcabado] = useState(false);
    const [showApariencia, setShowApariencia] = useState(false);
    const [showColor, setShowColor] = useState(false);
    const [showPei, setShowPei] = useState(false);
    const [showPromocion, setShowPromocion] = useState(false);
    const [showPisoMuro, setShowPisoMuro] = useState(false);

    const location = useLocation()

//    const uidRama = location.pathname.split("/")[2]
    const uidCategoria = location.pathname.split("/")[4]

    useEffect(() => {
        setShowMaterial(false)
        setShowComercial(false)
        setShowUso(false)
        setShowAcabado(false)
        setShowApariencia(false)
        setShowColor(false)
        setShowPei(false)
        setShowPromocion(false)
        setShowPisoMuro(false)
    }, [uidCategoria])

    const getEspecificaciones = async () => {
        let tmp = await getEspecificaionesCategoria(uidCategoria)
        if(tmp) {
            especif(tmp.data())
        }
        setEspecificaciones(tmp)
    }

    const funcionAbiertos = (esp, val) => {
        let obj = {
            material: showMaterial,
            comercial: showComercial,
            uso: showUso,
            acabado: showAcabado,
            apariencia: showApariencia,
            color: showColor,
            pei: showPei,
            promocion: showPromocion,
            pisoMuro: showPisoMuro
        }
        obj[esp] = val
        abiertos(obj)
    }

    const handleMaterial = () => {
        funcionAbiertos("material", !showMaterial)
        setShowMaterial(!showMaterial)
    }

    const handleComercial = () => {
        funcionAbiertos("comercial", !showComercial)
        setShowComercial(!showComercial)
    }

    const handleUso = () => {
        funcionAbiertos("uso", !showUso)
        setShowUso(!showUso)
    }

    const handleAcabado = () => {
        funcionAbiertos("acabado", !showAcabado)
        setShowAcabado(!showAcabado)
    }

    const handleApariencia = () => {
        funcionAbiertos("apariencia", !showApariencia)
        setShowApariencia(!showApariencia)
    }

    const handleColor = () => {
        funcionAbiertos("color", !showColor)
        setShowColor(!showColor)
    }

    const handlePei = () => {
        funcionAbiertos("pei", !showPei)
        setShowPei(!showPei)
    }

    const handlePromocion = () => {
        funcionAbiertos("promocion", !showPromocion)
        setShowPromocion(!showPromocion)
    }

    const handlePisoMuro = () => {
        funcionAbiertos("pisoMuro", !showPisoMuro)
        setShowPisoMuro(!showPisoMuro)
    }

    useEffect(() => {
        getEspecificaciones()
    }, [uidCategoria])

    return (
        <div>
            {especificaciones && 
                <div className="especificaciones">
                    {especificaciones.data().material && 0 < especificaciones.data().material.length && <div>
                        <button onClick={handleMaterial}>Tipo de material</button>
                        {showMaterial && <CheckboxesGroup rama={"material"} valores={detalle} funcion={funcion} lista={especificaciones.data().material} /> }
                    </div>}
                    {especificaciones.data().comercial && 0 < especificaciones.data().comercial.length && <div>
                        <button onClick={handleComercial}>Comercial/Residencial</button>
                        {showComercial && <CheckboxesGroup rama={"comercial"} valores={detalle} funcion={funcion} lista={especificaciones.data().comercial} />}
                    </div>}
                    {especificaciones.data().uso && 0 < especificaciones.data().uso.length && <div>
                        <button onClick={handleUso}>Uso</button>
                        {showUso && <CheckboxesGroup rama={"uso"} valores={detalle} funcion={funcion} lista={especificaciones.data().uso} />}
                    </div>}
                    {especificaciones.data().acabado && 0 < especificaciones.data().acabado.length && <div>
                        <button onClick={handleAcabado}>Acabado</button>
                        {showAcabado && <CheckboxesGroup rama={"acabado"} valores={detalle} funcion={funcion} lista={especificaciones.data().acabado} />}
                    </div>}
                    {especificaciones.data().apariencia && 0 < especificaciones.data().apariencia.length && <div>
                        <button onClick={handleApariencia}>Apariencia</button>
                        {showApariencia && <CheckboxesGroup rama={"apariencia"} valores={detalle} funcion={funcion} lista={especificaciones.data().apariencia} />}
                    </div>}
                    {especificaciones.data().pisoMuro && 0 < especificaciones.data().pisoMuro.length && <div>
                        <button onClick={handlePisoMuro}>Piso o Muro</button>
                        {showPisoMuro && <CheckboxesGroup rama={"pisoMuro"} valores={detalle} funcion={funcion} lista={especificaciones.data().pisoMuro} />}
                    </div>}
                    {especificaciones.data().color && 0 < especificaciones.data().color.length && <div>
                        <button onClick={handleColor}>Color</button>
                        {showColor && <CheckboxesGroup rama={"color"} valores={detalle} funcion={funcion} lista={especificaciones.data().color} />}
                    </div>}
                    {especificaciones.data().pei && 0 < especificaciones.data().pei.length && <div>
                        <button onClick={handlePei}>PEI</button>
                        {showPei && <CheckboxesGroup rama={"pei"} valores={detalle} funcion={funcion} lista={especificaciones.data().pei} />}
                    </div>}
                    {especificaciones.data().promocion && 0 < especificaciones.data().promocion.length && <div>
                        <button onClick={handlePromocion}>Promocion</button>
                        {showPromocion && <CheckboxesGroup rama={"promocion"} valores={detalle} funcion={funcion} lista={especificaciones.data().promocion} />}
                    </div>}
                </div>
            }
        </div>
    )
}