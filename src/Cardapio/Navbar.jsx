import imageLogo from "../img/logo-burguer.png";
import { FiHome, FiShoppingCart, FiSmile } from "react-icons/fi";
import { FaBurger, FaWhatsapp } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar(){

    const navigate = useNavigate();
    return(
        <>
         <section className="navbar">
            <div className="img">
             <img src={imageLogo} alt="" width="250" />
            </div>
            <div className="categorias">
                <button onClick={() => navigate("/")}>
                    <FiHome className="icone"/>
                    Início
                </button>
                <button onClick={() => navigate("/lista")}>
                    <FaBurger className="icone"/>
                    Cárdapio
                </button>
                <button onClick={() => navigate("/pedidos")}>
                    <FiShoppingCart className="icone"/>
                    Meu pedido
                </button>
                
                <a href="https://wa.me/5599984753745"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-contato">
                    <FaWhatsapp className="icone" />
                    Contato
                </a>

            </div>
            <div className="btn-pedido">
                <button onClick={() => navigate("/sobre")}>
                    <FiSmile className="icone-pedido"/>
                    Sobre Nós
                </button>
            </div>
         </section>
        </>
    )
}
export default Navbar