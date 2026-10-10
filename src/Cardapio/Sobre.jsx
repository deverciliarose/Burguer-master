import imageSobre from "../img/img-sobre.png";
import { FiMapPin, FiMap } from "react-icons/fi";
import "./Sobre.css";

function Sobre(){
    return(
        <>
          <div className="sobre">
            <div className="sobre-img">
                <img src={imageSobre} alt="" />
            </div>
            <div className="conteudo">
                <h1>Burguer <span>Master</span></h1>
                <p>
                    No Burguer Master, acreditamos que um bom hambúrguer 
                    transforma qualquer momento em uma experiência especial! Trabalhamos com ingredientes selecionados, sabores irresistíveis e muito carinho em cada preparo, oferecendo hambúrgueres artesanais, porções deliciosas, bebidas geladas e sobremesas especiais. Nosso objetivo é proporcionar sabor, qualidade e um atendimento acolhedor em cada pedido.
                </p>
            </div>
            <div className="localização-container">
                <div className="localização">
                    <div className="localização-info">
                    <FiMapPin className="icone-loc"/>
                    <h2>Onde estamos</h2>
                </div>
                <p>Venha conhecer o Burguer Master! </p>
                <span>Rua São José, 103</span>
            </div>
               <a href="https://maps.app.goo.gl/96RzFdMjEg3fFsuj7"
                target="_blank"
                rel="noreferrer"
                className="btn-rota">
                    <FiMap/>
                    Como chegar
                </a>
                <div className="mapa">
                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.7014859034953!2d-47.368522!3d-6.170710399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92d07bd6b7f470c9%3A0x15be5663192386d6!2sR.%20S%C3%A3o%20Jose%2C%20103%2C%20Campestre%20do%20Maranh%C3%A3o%20-%20MA%2C%2065968-000!5e0!3m2!1spt-BR!2sbr!4v1791664730361!5m2!1spt-BR!2sbr"
                      width="100%"
                      height="350" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="strict-origin-when-cross-origin"
                      title="Localização do Burguer Master" /> 
                      </div>
                </div>
          </div>
        </>
    )
}
export default Sobre;