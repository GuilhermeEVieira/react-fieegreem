import React from 'react';

function Outro() {
  return (
    <div>
      <div className="line"></div>

      <section className="categorias-quantidades">
        <span className="categorias-titulo">Outros</span>
      </section>
      <hr />
      <div className="line"></div>

      <main className="row produto-page">
        <div className="row">
          {[
            {
              imagem: 'pao.jpg',
              nome: 'Pão Caseiro',
              preco: 9.99,
              unidade: 'Unidade',
            },
            {
              imagem: 'bolacha.jpg',
              nome: 'Bolacha Caseira',
              preco: 21.69,
              unidade: 'Kg',
            },
            {
              imagem: 'queijo.jpg',
              nome: 'Queijo Artesanal',
              preco: 27.90,
              unidade: 'Kg',
            },
            {
              imagem: 'geleia artesanal.jpg',
              nome: 'Geleia Artesanal',
              preco: 17.99,
              unidade: '500g',
            },
            {
              imagem: 'Mel de abelha.jpg',
              nome: 'Mel de Abelha',
              preco: 27.89,
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

export default Outro;