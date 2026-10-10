
import { FiTrash2 } from "react-icons/fi";
import "./Pedidos.css";

function Pedidos({ pedidos, excluirPedido }) {
  return (
    <section className="pedidos">
      <h1 className="pedido-title">Meus <span>pedidos</span></h1>

      {pedidos.length === 0 ? (
        <p>Você ainda não realizou nenhum pedido.</p>
      ) : (
        pedidos.map((pedido) => (
          <div className="pedido-card" key={pedido.id}>

            <div className="pedido-header">
              <div>
              <h2>Pedido #{pedido.id}</h2>
              <span>{pedido.data}</span>
              </div>

              <div>
                <button
                 className="btn-excluir-pedido"
                 onClick={() => excluirPedido(pedido.id)}>
                  <FiTrash2/>
                </button>
              </div>
            </div>

            <div className="pedido-itens">
              {pedido.itens.map((item) => (
                <div key={item.id}>
                  <span>
                    {item.quantidade}x {item.nome}
                  </span>

                  <span>
                    R${" "}
                    {(item.preco * item.quantidade)
                      .toFixed(2)
                      .replace(".", ",")}
                  </span>
                </div>
              ))}
            </div>

            <div className="pedido-info">
              <p>
                <strong>Pagamento:</strong>{" "}
                {pedido.pagamento}
              </p>

              <p>
                <strong>Subtotal:</strong> R${" "}
                {pedido.subtotal
                  .toFixed(2)
                  .replace(".", ",")}
              </p>

              <p>
                <strong>Entrega:</strong> R${" "}
                {pedido.taxaEntrega
                  .toFixed(2)
                  .replace(".", ",")}
              </p>

              <h3>
                Total: R${" "}
                {pedido.total
                  .toFixed(2)
                  .replace(".", ",")}
              </h3>
            </div>

          </div>
        ))
      )}
    </section>
  );
}

export default Pedidos;