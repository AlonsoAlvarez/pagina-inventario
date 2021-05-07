import ImgFb from "../../assets/fb.png"
import Insta from "../../assets/insta.png"
import WP from "../../assets/wp.webp"
import './Style.css'

export default function Footer() {

    return (
        <>
        <div className="footer">
            <p className="containerFooter">Las marcas, logotipos e imagenes presentadas en 
                este sitio son propiedad de sus respectivos dueños 
                y son usadas bajo licencia.</p>
            <div className="links containerFooter">
                <a href="#">
                    Noticias
                </a>
                <a href="#">
                    Ofertas del mes
                </a>
                <a href="#">
                    Nuestras marcas
                </a>
                <a href="#">
                    Aviso de provacidad
                </a>
            </div>
            <div className="links containerFooter">
                <p>Redes</p>
                <div className="row">
                    <a href="#">
                        <img className="imagenCard" alt="fb" src={ImgFb} />
                    </a>
                    <img className="imagenCard" alt="insta" src={Insta} />
                    <a href="#">
                        <img className="imagenCard" alt="wp" src={WP} />
                    </a>
                </div>
            </div>
        </div>
            <h2>Derechos reservados, © 2021 Alonso Alvarez.</h2>
            <br/>
        </>
    )
}