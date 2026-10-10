import { useState, useEffect } from "react";
import Navbar from "./Cardapio/Navbar";
import Header from "./Cardapio/Header";
import Produtos from "./Cardapio/Produtos";
import Cardapio from "./Cardapio/Cardapio";
import Pedidos from "./Cardapio/Pedidos";
import {Routes, Route} from "react-router-dom";
import Lista from "./Cardapio/Lista";
import Modal from "./Cardapio/Modal";
import Sobre from "./Cardapio/Sobre";
import './App.css'

function App() {
  const [categoria, setCategoria] = useState("Hambúrgueres");

  // carrinho
  const [carrinho, setCarrinho] = useState(() =>{
    const carrinhoSalvo = localStorage.getItem("carrinho");

    return carrinhoSalvo ? JSON.parse(carrinhoSalvo): [];
  });
  
  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  }, [carrinho]);

  //Alterar quantidade de produto
  const aumentarQuantidade = (id) => {
    setCarrinho((carrinhoAtual) =>
    carrinhoAtual.map((item) =>
     item.id === id
      ? {
        ... item,
        quantidade: item.quantidade + 1
      }
      :item
   )

  )
  };
  const diminuirQuantidade = (id) => {
    setCarrinho((carrinhoAtual) => 
    carrinhoAtual.map((item) =>
    item.id === id
     ? {
      ... item,
      quantidade: item.quantidade -1
     }
     :item
    )
    .filter((item) => item.quantidade > 0)
  )
  }

  //Adicionar item ao carrinho
  const adicionarCarrinho = (produto) =>{
    setCarrinho((carrinhoAtual) => {

      const produtoExistente = carrinhoAtual.find(
         item => item.id === produto.id
      );

      if(produtoExistente){
         return carrinhoAtual.map(item =>
           item.id === produto.id
           ? {...item, quantidade: item.quantidade + 1}
           : item
         )
      };

       return [
        ...carrinhoAtual,
        {
          ...produto,
          quantidade: 1
        }
      ];
    });
  }
  //Função do modal
  const [modal, setModal]= useState(false);

  const finalizarPedido = () => {
    if(carrinho.length === 0){
      alert("Carrinho Vazio")
      return
    }
    setModal(true);
  }

  //manipulação do estado dos pedidos
  const [pedidos, setPedidos] = useState(() => {
  const pedidosSalvos = localStorage.getItem("pedidos");

  if (!pedidosSalvos) {
    return [];
  }

  try {
    return JSON.parse(pedidosSalvos);
  } catch (error) {
    console.error("Erro ao carregar pedidos:", error);
    return [];
  }
});
  useEffect(() =>{
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
  }, [pedidos]);

  const salvarPedido = (pedido) => {
  setPedidos((pedidosAtuais) => [
    ...pedidosAtuais,
    {
      ...pedido,
      id: Date.now(),
      data: new Date().toLocaleString("pt-BR")
    }
  ]);
};

const excluirPedido = (id) => {
  setPedidos((pedidosAtuais) =>
    pedidosAtuais.filter((pedido) => pedido.id !== id)
  );
};

  return (
    <>
    <Navbar />

    <Routes>

      <Route
        path="/"
        element={
          <>
            <Header />

            <Produtos
              categoria={categoria}
              setCategoria={setCategoria}
            />

            <Cardapio
              categoria={categoria}
              carrinho={carrinho}
              setCarrinho={setCarrinho}
              adicionarCarrinho={adicionarCarrinho}
              aumentarQuantidade={aumentarQuantidade}
              diminuirQuantidade={diminuirQuantidade}
              finalizarPedido={finalizarPedido}
            />
          </>
        }
      />

      <Route
        path="/lista"
        element={<Lista adicionarCarrinho={adicionarCarrinho}/>}
      />
      
      <Route
        path="/pedidos"
        element={<Pedidos pedidos={pedidos} excluirPedido={excluirPedido} />}
      />

      <Route path="/sobre" element={<Sobre/>} />
    </Routes>

    <Modal
            modalAberto={modal}
            fecharModal={() => setModal(false)}
            carrinho={carrinho}
            salvarPedido={salvarPedido}
    />


  </>
);
}

export default App
