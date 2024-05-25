import { Link } from 'react-router-dom';
import 'bootstrap';


function Fruta() {
  return (
    <div>
      <hr />
      <section className="categorias-quantidades">
        <span className="categorias-titulo">Frutas</span>
      </section>
      <hr />
      <main className="row produto-page">
        <div className="col-12">
          <div className="row">
            {products.map((product, index) => (
              <div key={index} className="produto-container-prisncipal">
                <div className="produto-prisncipal">
                  <Link to={`/paginapd/${product.id}`} >
                    <img src={product.image} alt={product.name} className="img-fluid" />
                  </Link>
                  <span>{product.name}</span>
                  <span>
                    R$ <span className="price">{product.price}</span> <span className="unit">{product.unit}</span>
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
    image: 'imagens/abacaxi.jpg',
    name: 'Abacaxi',
    price: 10.00,
    unit: 'Unidade',
  },
  {
    id: 2,
    image: 'imagens/amora.jpg',
    name: 'Amora',
    price: 44.99,
    unit: 'Kg',
  },
  {
    id: 3,
    image: 'imagens/laranja.jpg',
    name: 'Laranja',
    price: 7.99,
    unit: 'Unidade',
  },
  {
    id: 4,
    image: 'imagens/banana.jpg',
    name: 'Banana Prata',
    price: 4.99,
    unit: 'Kg',
  },
  {
    id: 5,
    image: 'imagens/figo.jpg',
    name: 'Figo',
    price: 64.90,
    unit: 'Kg',
  },
  {
    id: 6,
    image: 'imagens/morango.png',
    name: 'Morango',
    price: 14.99,
    unit: 'Kg',
  },
  {
    id: 7,
    image: 'imagens/mamão.jpg',
    name: 'Mamão',
    price: 7.99,
    unit: 'Kg',
  },
  {
    id: 8,
    image: 'imagens/manga.jpg',
    name: 'Manga',
    price: 6.00,
    unit: '250g',
  },
  {
    id: 9,
    image: 'imagens/Maça.jpg',
    name: 'Maça',
    price: 8.39,
    unit: 'Kg',
  },
  {
    id: 10,
    image: 'imagens/melancia.jpg',
    name: 'Melancia',
    price: 8.79,
    unit: 'Kg',
  },
  {
    id: 11,
    image: 'imagens/uva.jpg',
    name: 'Uva Thompson',
    price: 14.97,
    unit: '500g',
  },
  {
    id: 12,
    image: 'imagens/limão.jpg',
    name: 'Limão',
    price: 6.98,
    unit: 'Kg',
  },

];

export default Fruta;