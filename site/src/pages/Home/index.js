import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import './Home.css';
import 'bootstrap';

function Home() {
  return (
    <div className="container-fluid">
      <Carousel id="carousel" className="d-flex" indicators={false} interval={3000} >
        <Carousel.Item className="d-inline-block">
          <img src="imagens/baner_I.png" className="d-block " alt="I" width={'100%'}/>
        </Carousel.Item>
        <Carousel.Item className="d-inline-block">
          <img src="imagens/baner_II.png" className="d-block " alt="II" width={'100%'}/>
        </Carousel.Item>
        <Carousel.Item className="d-inline-block">
          <img src="imagens/baner_III.png" className="d-block " alt="III" width={'100%'}/>
        </Carousel.Item>
      </Carousel>

      <hr/>

      <div className="container-fluid">
        <section className="promocao-header col-12 mb-0">
          <span className="promocao-header-title">PROMOÇÕES</span>
          <span>Produtos</span>
        </section>
      </div>

      <hr/>

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
  { id: 1, image: 'imagens/abacaxi.jpg', name: 'Abacaxi', price: 10.00, unit: 'Unidade' },
  { id: 2, image: 'imagens/morango.png', name: 'Morango', price: 12.00, unit: '250g' },
  { id: 3, image: 'imagens/alface.png', name: 'Alface', price: 3.99, unit: 'Unidade' },
  { id: 4, image: 'imagens/greem_aple.png', name: 'Maça Verde', price: 15.89, unit: 'kg' },
  { id: 5, image: 'imagens/beterrabas.jpg', name: 'Beterraba', price: 4.99, unit: 'Kg' },
  { id: 6, image: 'imagens/laranja.jpg', name: 'Laranja', price: 7.99, unit: 'kg' },
  { id: 7, image: 'imagens/verduras.png', name: 'Legumes', price: 7.99, unit: 'Kg' },
  { id: 8, image: 'imagens/verduras_verde.png', name: 'Verdura', price: 12.00, unit: '250g' },
  { id: 9, image: 'imagens/verdura.png', name: 'Cenoura', price: 3.75, unit: 'Kg' },
  { id: 10, image: 'imagens/melão.jpg', name: 'Melão', price: 6.99, unit: 'Unidade' },
  { id: 11, image: 'imagens/uva.jpg', name: 'Uva Thompson', price: 14.97, unit: '500g' },
  { id: 12, image: 'imagens/banana.jpg', name: 'Banana Prata', price: 6.98, unit: 'Kg' },
];
  

export default Home;
