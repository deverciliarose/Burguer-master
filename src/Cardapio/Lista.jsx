import produtos from "../Data/Dados";
import "./Lista.css";

function Lista({adicionarCarrinho}){


   return(
    <section className="lista-geral">
        <h2>Cardápio</h2>

        <div className="lista-geral-produtos">
            {produtos.map((produto) => (
                <div className="card-produto-geral" key={produto.id}>

                    <img src={produto.image} alt={produto.nome} />
                    <h3>{produto.nome}</h3>
                    <p>{produto.descricao}</p>

                    <strong>
                        R$ {produto.preco.toFixed(2).replace(".", ",")}
                    </strong>

                    <button className="btn-adicionar" onClick={() => adicionarCarrinho(produto)}>
                        Adicionar
                    </button>
                </div>
            ))}
        </div>
    </section>
   )
}
export default Lista