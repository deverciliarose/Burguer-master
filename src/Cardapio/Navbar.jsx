import imageLogo from "../img/logo-burguer.png";
import { FiHome, FiShoppingCart, FiSmile, FiMenu, FiX } from "react-icons/fi";
import { FaBurger, FaWhatsapp } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

function Navbar(){

    const navigate = useNavigate();
    const [menuAberto, setMenuAberto] = useState(false);
    return(
        <>
         <section className="navbar">
            <div className="img">
             <img src={imageLogo} alt="" width="250" />
            </div>

            <button 
            className="menu-mobile"
             onClick={() => setMenuAberto(!menuAberto)} aria-label={menuAberto ? "Fechar menu" : "Abrir menu"} 
             aria-expanded={menuAberto} > 
                  {menuAberto ? <FiX /> : <FiMenu />}
            </button>
            
            <div className={`categorias ${menuAberto ? "ativo" : ""}`}>
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
                
                <button
                    className="sobre-mobile"
                    onClick={() => {
                    navigate("/sobre");
                    setMenuAberto(false);
                    }}
                >
                <FiSmile className="icone" />
                    Sobre Nós
                </button>
                
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