import { FiX } from "react-icons/fi";
import "./Modal.css";
import { useState } from "react";


function Modal({modalAberto, fecharModal, carrinho, salvarPedido}){

    if(!modalAberto){
        return null
    }

    const [nome, setNome] = useState("");
    const [apelido, setApelido] = useState("");
    const [Endereço, setEndereço] = useState("");
    const [Referência, setReferência] = useState("");
    const [pagamento, setPagamento] = useState("");
     if(
        !nome ||
        !apelido ||
        !Endereço ||
        !Referência ||
        !pagamento
     ){}


    
const enviarPedido = () => {
  const itens = carrinho.map((produto) => {
    return {
      id: produto.id,
      nome: produto.nome,
      quantidade: produto.quantidade,
      preco: produto.preco
    };
  });

  const subtotal = carrinho.reduce(
    (total, produto) =>
      total + produto.preco * produto.quantidade,
    0
  );

  const taxaEntrega = subtotal > 0 ? 5 : 0;

  const total = subtotal + taxaEntrega;

  // PEDIDO QUE SERÁ SALVO NO HISTÓRICO
  const pedido = {
    cliente: {
      nome: nome,
      apelido: apelido,
      endereco: Endereço,
      referencia: Referência
    },

    itens: itens,

    pagamento: pagamento,

    subtotal: subtotal,

    taxaEntrega: taxaEntrega,

    total: total
  };

  // SALVA NO HISTÓRICO
  salvarPedido(pedido);

  // ITENS PARA O WHATSAPP
  const itensWhatsApp = carrinho
    .map((produto) => {
      return `${produto.quantidade}x ${produto.nome} - R$ ${(
        produto.preco * produto.quantidade
      )
        .toFixed(2)
        .replace(".", ",")}`;
    })
    .join("\n");

  const mensagem = `
      *NOVO PEDIDO*

       *Cliente:*

         Nome: ${nome}
         Apelido: ${apelido}

        *Endereço:*
        ${Endereço}

        *Ponto de referência:*
         ${Referência}

        *Pedido:*
        ${itensWhatsApp}

        *Pagamento:*
        ${pagamento}

       *Subtotal:* R$ ${subtotal.toFixed(2).replace(".", ",")}
       *Entrega:* R$ ${taxaEntrega.toFixed(2).replace(".", ",")}
       *Total:* R$ ${total.toFixed(2).replace(".", ",")}
       `;

  const numeroRestaurante = "5599984753745";

  const url = `https://wa.me/${numeroRestaurante}?text=${encodeURIComponent(
    mensagem
  )}`;

  // ABRE O WHATSAPP
  window.location.href = url;
};

    return(
        <>
         <div className="modal">
            <div className="modal-pedido">
               
               <button className="btn-fechar" onClick={fecharModal}>
                  <FiX className="icone" />
               </button>

               <h2>Finalizar Pedido</h2>

               <div className="campo">
                 <label>Nome:</label>
                 <input 
                  type="text"
                  placeholder="Digite seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)} />
               </div>

               <div className="campo">
                <label>Apelido:</label>
                <input 
                  type="text"
                  placeholder="Como poodemos te chamar"
                  value={apelido}
                  onChange={(e) => setApelido(e.target.value)} />
               </div>

               <div className="campo">
                 <label>Endereço:</label>
                 <input 
                   type="text" 
                   placeholder="Endereço"
                   value={Endereço}
                   onChange={(e) => setEndereço(e.target.value)} />
               </div>

               <div className="campo">
                <label>Ponto de referência:</label>
                <input 
                  type="text" 
                  placeholder="Ponto de referência"
                  value={Referência}
                  onChange={(e) => setReferência(e.target.value)} />
               </div>

               <div className="campo">
                <label>Forma de pagamento:</label>

                <select
                  value={pagamento}
                   onChange={(e) => setPagamento(e.target.value)}>
                    <option value="">
                        Selecione
                    </option>
                    <option value="Dinheiro">
                        Dinheiro
                    </option>
                    <option value="PIX">
                        PIX
                    </option>
                    <option value="Cartão">
                        Cartão
                    </option>
                </select>
               </div>

               <button className="btn-enviar" onClick={enviarPedido}>
                 Enviar
               </button>
            </div>
         </div>
        
        
        </>
    )
}

export default Modal