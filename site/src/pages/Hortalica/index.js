import React from 'react';

function Hortalica() {
  return (
    <div>
      <div className="line"></div>
      <hr />
      <section className="categorias-quantidades">
        <span className="categorias-titulo">Hortaliças</span>
      </section>
      <hr />
      <div className="line"></div>

      <main className="row produto-page">
        <div className="row">
          {[
            {
              imagem: 'Milho.jpg',
              nome: 'Milho',
              preco: 0.50,
              unidade: 'Unidade',
            },
            {
              imagem: 'berinjela.jpg',
              nome: 'Berinjela',
              preco: 4.69,
              unidade: 'Kg',
            },
            {
              imagem: 'rabanete.jpg',
              nome: 'Rabanete',
              preco: 3.50,
              unidade: '250g',
            },
            {
              imagem: 'ervilha.jpg',
              nome: 'Ervilha',
              preco: 4.99,
              unidade: 'Kg',
            },
            {
              imagem: 'pimentão.jpg',
              nome: 'Pimentão',
              preco: 15.89,
              unidade: 'Kg',
            },
            {
              imagem: 'tomate.jpg',
              nome: 'Tomate',
              preco: 6.99,
              unidade: 'Kg',
            },
            {
              imagem: 'hortela.jpg',
              nome: 'Hortelã',
              preco: 3.49,
              unidade: '100g',
            },
            {
              imagem: 'espinafre.jpg',
              nome: 'Espinafre',
              preco: 9.95,
              unidade: '250g',
            },
            {
              imagem: 'couve flor.jpg',
              nome: 'Couve Flor',
              preco: 14.90,
              unidade: '250g',
            },
            {
              imagem: 'repolho.jpg',
              nome: 'Repolho',
              preco: 5.49,
              unidade: 'Kg',
            },
            {
              imagem: 'brocolis.jpg',
              nome: 'Brócolis',
              preco: 11.70,
              unidade: 'Kg',
            },
            {
              imagem: 'pepino.jpg',
              nome: 'Pepino',
              preco: 15.90,
              unidade: 'Kg',
            },
          ].map((produto, index) => (
            <div key={index} className="produto-container-prisncipal">
              <div className="produto-prisncipal">
                <img src={`/imagens/${produto.imagem}`} alt="" />
                <span>{produto.nome}</span>
                <span>
                  R$ <span className="price">{produto.preco}</span> <span className="unit">{produto.unidade}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Hortalica;