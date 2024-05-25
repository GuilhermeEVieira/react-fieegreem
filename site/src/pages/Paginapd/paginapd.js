import React from 'react';
import Link from 'react-router-dom';
import './styles.css';

function Paginapd() {
  return (
    <div>
      <hr />
      <div className="item-container">
        <div className="item-box">
          <div className="image-box">
            <img src="/imagens/abacaxi.jpg" alt="Abacaxi" />
          </div>
          <div className="text-container">
            <div className="category">Frutas</div>
            <div className="name">Abacaxi</div>
            <div className="price-porduto">R$ 10,00 Unidade</div>
            <hr />
            <div className="button-container">
              <button className="buy-button">Comprar</button>
              <button className="add-button">Adicionar ao Carrinho</button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="produto-page-product">
        <div className="oucompre">
          <h3>Ou Compre Outros</h3>
        </div>
      </div>
      {/* carousel */}
      <section id="home" className="d-flex">
        <div className="container align-self-center">
          <div className="row-product">
            <div className="col-md-12 banner-container">
              <div
                id="carousel-feira"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="produto-container-product">
                      <div className="row-product">
                        {[
                          {
                            imagem: 'morango.png',
                            nome: 'Morango',
                            preco: 12.00,
                            unidade: '250g',
                          },
                          {
                            imagem: 'alface.png',
                            nome: 'Alface',
                            preco: 3.99,
                            unidade: 'Unidade',
                          },
                          {
                            imagem: 'greem_aple.png',
                            nome: 'Maça Verde',
                            preco: 15.89,
                            unidade: 'kg',
                          },
                          {
                            imagem: 'beterrabas.jpg',
                            nome: 'Beterraba',
                            preco: 4.99,
                            unidade: 'Kg',
                          },
                        ].map((produto, index) => (
                          <div key={index} className="produto-container-product">
                            <div className="produto-product">
                              <img src={`/imagens/${produto.imagem}`} alt="" />
                              <span>{produto.nome}</span>
                              <span>
                                R$ <span className="price">{produto.preco}</span> <span className="unit">{produto.unidade}</span>
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="produto-container-product">
                      <div className="row-product">
                        {[
                          {
                            imagem: 'laranja.jpg',
                            nome: 'Laranja',
                            preco: 7.99,
                            unidade: 'kg',
                          },
                          {
                            imagem: 'verduras.png',
                            nome: 'Legumes',
                            preco: 7.99,
                            unidade: 'Kg',
                          },
                          {
                            imagem: 'verduras_verde.png',
                            nome: 'Verdura',
                            preco: 12.00,
                            unidade: '250g',
                          },
                          {
                            imagem: 'verdura.png',
                            nome: 'Cenoura',
                            preco: 3.75,
                            unidade: 'Kg',
                          },
                        ].map((produto, index) => (
                          <div key={index} className="produto-container-product">
                            <div className="produto-product">
                              <img src={`/imagens/${produto.imagem}`} alt="" />
                              <span>{produto.nome}</span>
                              <span>
                                R$ <span className="price">{produto.preco}</span> <span className="unit">{produto.unidade}</span>
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="#carousel-feira"
                  className="carousel-control-prev"
                  data-slide="prev"
                >
                  <i className="fa fa-angle-left fa-3x" />
                </a>
                <a
                  href="#carousel-feira"
                  className="carousel-control-next"
                  data-slide="next"
                >
                  <i className="fa fa-angle-right fa-3x" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Paginapd;