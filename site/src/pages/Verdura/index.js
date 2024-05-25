import React from 'react';
import 'bootstrap';

function Verdura() {
  return (
    <div>
      <hr />
      <section className="categorias-quantidades">
        <span className="categorias-titulo">verduras</span>
      </section>
      <hr />
      <main className="row produto-page">
        <div className="col-12">
          <div className="row">
            {products.map((product, index) => (
              <div key={index} className="produto-container-prisncipal">
              <div className="produto-prisncipal">
                <img src={`/imagens/${product.imagem}`} alt="" />
                <span>{product.nome}</span>
                <span>
                  R$ <span className="price">{product.preco}</span> <span className="unit">{product.unidade}</span>
                </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}


  const products = [
    {
      id: 1,
      imagem: 'imagens/alface.png',
      nome: 'Alface',
      preco: 2.59,
      unidade: 'Unidade',
    },
    {
      id: 2,
      imagem: 'imagens/abobora.jpg',
      nome: 'Abobora',
      preco: 9.99,
      unidade: 'Kg',
    },
    {
      id: 3,
      imagem: 'imagens/Champiñones.jpg',
      nome: 'Champignon',
      preco: 5.75,
      unidade: '300g',
    },
    {
      id: 4,
      imagem: 'imagens/cebola roxa.jpg',
      nome: 'Cebola Roxa',
      preco: 6.99,
      unidade: 'Kg',
    },
    {
      id: 5,
      imagem: 'imagens/pimentão.jpg',
      nome: 'Pimentão',
      preco: 15.89,
      unidade: 'Kg',
    },
    {
      id: 6,
      imagem: 'imagens/tomate.jpg',
      nome: 'Tomate',
      preco: 6.99,
      unidade: 'Kg',
    },
    {
      id: 7,
      imagem: 'imagens/hortela.jpg',
      nome: 'Hortelã',
      preco: 3.49,
      unidade: '100g',
    },
    {
      id: 8,
      imagem: 'imagens/espinafre.jpg',
      nome: 'Espinafre',
      preco: 9.95,
      unidade: '250g',
    },
    {
      id: 9,
      imagem: 'imagens/couve flor.jpg',
      nome: 'Couve Flor',
      preco: 14.90,
      unidade: '250g',
    },
    {
      id: 10,
      imagem: 'imagens/repolho.jpg',
      nome: 'Repolho',
      preco: 5.49,
      unidade: 'Kg',
    },
    {
      id: 11,
      imagem: 'imagens/brocolis.jpg',
      nome: 'Brócolis',
      preco: 11.70,
      unidade: 'Kg',
    },
    {
      id: 12,
      imagem: 'imagens/pepino.jpg',
      nome: 'Pepino',
      preco: 15.90,
      unidade: 'Kg',
    },
  ];

export default Verdura;