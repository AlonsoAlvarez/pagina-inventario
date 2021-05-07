import { Link, useLocation } from "react-router-dom";
import ImgLogo from "../../assets/logo.png"
import Menu from '@material-ui/core/Menu';

import './Style.css'
import { useContext, useState } from "react";
import { getRamas } from "../../services/consultas";
import CategoriaRama from "./productos/productos"
import Loading from "../loading/loading";
import { useEffect } from "react";
import ProductoContext from "../../providers/productoContext";

export default function NavBar() {

    const location = useLocation()
    const [anchorEl, setAnchorEl] = useState(null)
    const {ramas, setRamas} = useContext(ProductoContext)

    const getRamasOrden = async () => {
        let tmp = await getRamas("ramas")
        setRamas(tmp)
    }

    useEffect(() => {
        if(!ramas){
            getRamasOrden()
        }
    }, [])

    const handleClick = async (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    
    function myFunction() {
        let x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }


    return (
        <div className="colNav">
            <Link to="/" className={location.pathname==="/" && "active"}  >
                <img loading="lazy" className="imagen" alt="logo" src={ImgLogo} /> 
            </Link>
            <div className="topnav" id="myTopnav" >
                <Link onClick={handleClick} className={location.pathname==="/categorias" && "active"} >
                    <p className="center">
                        Productos
                    </p>
                </Link>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <div className="row">
                        {ramas? ramas.map((doc) => <CategoriaRama rama={doc} close={handleClose} />) : <Loading />}
                    </div>
                </Menu>
                <Link to="/nosotros" className={location.pathname==="/nosotros" && "active"}>
                    <p className="center">
                        Nosotros
                    </p>
                </Link>
                <a onClick={myFunction} className="icon">
                    <i className="fa fa-bars"></i>
                </a>
            </div>
        </div>
    )
}