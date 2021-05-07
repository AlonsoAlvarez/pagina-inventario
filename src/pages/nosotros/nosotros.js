import Footer from "../../components/footer/footer"
import NavBar from "../../components/navBar/navBar"
import Tienda from "../../assets/tienda.jpg"
import Location from "../../assets/location.png"

import './Style.css'

export default function PageNosotros() {

    return (
        <div className="bgNosotros" >
            <NavBar />
            <div className="quienes">
                <h1>¿Quienes somos?</h1>
                <h3>Somos REyCO una empresa dedicada a la venta de recubrimientos, complementos, giferia, canceleria, pegamentos y todo lo necesario para embellecer sus espacios, con la finalidad de brindar soluciones decorativas para cualquier espacio, con más de 6 años de experiencia brindadnlo soluciones a la medida de las necesidades y gustos de nuestros clientes.</h3>
                <br/>
            </div>
            <div className="row">
                <div className="imagenTarjeta">
                    <img loading="lazy" src={Tienda} alt="tienda" />
                </div>
                <div className="tarjeta">
                    <h4>Mision:</h4>
                    <p>Ofrecer productos de calidad a nuestros clientes</p>
                    <h4>Vision:</h4>
                    <p>Mejorar el hogar de nuestros clientes brindadnloes precios competitivos en sus recubrimentos y complementos</p>
                    <h4>Valores:</h4>
                    <p>Honestidad, Honrrades, Competitividad, Amistad</p>
                </div>
            </div>
            <div className="center" >
                <a href="https://www.google.com/maps/place/REyCO+Recubrimientos+y+Complementos/@22.6431983,-102.9998306,16.5z/data=!4m19!1m13!4m12!1m4!2m2!1d-103.0011336!2d22.6463316!4e1!1m6!1m2!1s0x8682efe40057e13d:0x9216c8f69894b3d5!2sreyco+jerez!2m2!1d-102.9955176!2d22.6411287!3m4!1s0x8682efe40057e13d:0x9216c8f69894b3d5!8m2!3d22.6411287!4d-102.9955176">
                    <div className="direccion">
                        <div className="row">
                            <div className="imagenLocation">
                                <img src={Location} alt="location" />
                            </div>
                            <p>Av. 20 de Noviembre 34, Obrera, 99380 Jerez de García Salinas, Zac.</p>
                        </div>
                    </div>
                </a>
            </div>
            <Footer />
        </div>
    )
}