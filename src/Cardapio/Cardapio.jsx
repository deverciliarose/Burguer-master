import produtos from "../Data/Dados";
import { FiShoppingCart, FiArrowRight, FiCheckCircle, FiClock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./Cardapio.css";


function Cardapio({categoria, carrinho, setCarrinho, adicionarCarrinho, aumentarQuantidade, diminuirQuantidade, finalizarPedido}){
   
    const navigate = useNavigate();

    const produtosFiltrados = produtos.filter(
        produto => produto.categoria === categoria
    );
    
    const subtotal = carrinho.reduce(
        (total, produto) => total + produto.preco * produto.quantidade,
        0
    );

    const taxaEntrega = subtotal > 0 ? 5:0;

    const total = subtotal + taxaEntrega

    return(
        <>
         <section className="area-cardapio">
            <div className="cardapio">
            <div className="titulo-cardapio">
             <div className="titulo">
            <h2>{categoria}</h2>
            <p>Feitos com ingredientes selecionados, e muito sabor!</p>
            </div>
            <button onClick={() => navigate("/lista")}>
                Ver todos
                <FiArrowRight/>
            </button>
            </div>

            <div className="lista-produtos">
                {produtosFiltrados.map((produto) => (

                    <div className="card-produto"
                    key={produto.id}>

                    <img src={produto.image} alt={produto.nome} />
                    <h3>{produto.nome}</h3>
                    <p>{produto.descricao}</p>
                    <p className="Preço">
                        R$ {produto.preco.toFixed(2).replace(".", ",")}
                    </p>
                    <button onClick={() => adicionarCarrinho(produto)}>
                        Adicionar
                        <FiShoppingCart/>
                    </button>
                    </div>
                ))}
            </div>
            </div>

          <aside className="pedido">
            <div className="pedido-titulo">
                <h2><FiShoppingCart/> Seu pedido</h2>
                <span>
                    {carrinho.reduce(
                        (total, produto) => total + produto.quantidade,
                        0
                    )}
                </span>
            </div>
            <div className="itens">
                {carrinho.map((produto) => (

                    <div className="item-carrinho" key={produto.id}>

                      <img
                       src={produto.image}
                       alt={produto.nome}
                      />

                    <div className="item-info">

                      <h3>{produto.nome}</h3>

                      <p>
                        R$ {produto.preco.toFixed(2).replace(".", ",")}
                      </p>

                     <div className="quantidade">

                        <button onClick={() => diminuirQuantidade(produto.id)}>
                            -
                        </button>

                        <span>{produto.quantidade}</span>

                       <button onClick={() => aumentarQuantidade(produto.id)}>
                        +
                      </button>

                    </div>

                    </div>

            </div>

  ))}

            </div>

            <div className="itens-subtotal">
                <p>
                    Subtotal: 
                    <span>
                        R$ {subtotal.toFixed(2).replace(".",",")}
                    </span>
                </p>
                <p>
                    Entrega: 
                    <span>
                        R$ {taxaEntrega.toFixed(2).replace(".",",")}
                    </span>
                </p>
            </div>

            <div className="total">
                <h2>
                    Total:
                    <span>
                        R$ {total.toFixed(2).replace(".",",")}
                    </span>
                </h2>
            </div>

            <button className="btn-confirmar" onClick={finalizarPedido}>
                <FiCheckCircle/>
                Finalizar Pedido
            </button>

            <div className="tempo-entrega">
                <div className="icone">
                    <FiClock className="svg"/>
                </div>
                <div className="dados">
                    <p>Tempo estimado de entrega</p>
                    <span>25 a 30 minutos</span>
                </div>
            </div>
         </aside>
         </section>
         
        </>
    )
}
export default Cardapio