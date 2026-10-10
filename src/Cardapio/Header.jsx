import bannerImage from "../img/banner-image.png";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./Header.css";
function Header(){

    const navigate = useNavigate()
    return(

        <>
         <section className="Banner">
         <div className="banner-content">
        <p className="banner-subtitle">
            Sabor de verdade em
        </p> 

         <h1>
            CADA <br /> 
            <span>MORDIDA</span>
        </h1>

         <p className="banner-descrição">
            Hambúrgueres artesanais, porções irresistiveis e bebidas geladas para deixar o seu dia mais saboroso!
         </p>

         <button className="banner-button" onClick={() => navigate("/lista")}>
            Ver cardápio
            <span><FiArrowRight/></span>
        </button>

         </div>
         <div className="banner-image">
            <img src={bannerImage} alt="" />
         </div>
         </section>
        </>
    )
}
export default Header