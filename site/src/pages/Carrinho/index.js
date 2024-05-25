import React from 'react';

function Carrinho() {
  return (
    <div className="container-carrinho">
      <div className="box-carrinho">
        <div>
          <img src="//imagens/carrinho-carrinho.png" alt="Carrinho" width="200" />
        </div>
        <div className="text-container-carrinho">
          <div className="name-carrinho">Seu Carrinho de Compras está Vazio.</div>
          <div className="texto-estra-carrinho">
            Volte as compras e Adicione ao seu Carrinho.
          </div>
          <a href="index">Produtos</a>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Carrinho;