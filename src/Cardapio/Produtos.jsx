import { Hamburger,CupSoda,Cupcake} from "lucide-react";
import { GiFrenchFries } from "react-icons/gi";
import "./Produtos.css";

function Produtos({setCategoria}){
    return(
        <>
         <section className="opções">

            <button onClick={() => setCategoria("Hambúrgueres")}>
                <Hamburger className="icone"/>
                Hambúrgueres
            </button>
            <button onClick={() => setCategoria("Porções")}>
                <GiFrenchFries className="icone"/>
                Porções
            </button>
            <button onClick={() => setCategoria("Bebidas")}>
                <CupSoda className="icone"/>
                Bebidas
            </button>
            <button onClick={() => setCategoria("Combos")}>

                <div className="icone-combo">
                <Hamburger className="icone"/> 
                <GiFrenchFries className="icone"/>
                </div>

                Combos
            </button>
            <button onClick={() => setCategoria("Sobremesas")}>
                <Cupcake className="icone"/>
                Sobremesas
            </button>
         </section>
        </>
    )
}
export default Produtos