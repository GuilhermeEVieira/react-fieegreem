import { Link } from "react-router-dom";

function Frutas() {
  return (
    <main className="row produto-page">
      <div className="col-12">
        <div className="row">
          <Link to="/abacaxi" className="produto-container-principal">
            <div className="produto-principal">
              <img src="assets/imagens/abacaxi.jpg" alt="" />
              <span>Abacaxi</span>
              <span>R$ <span className="price">10,00</span> <span className="unit">Unidade</span></span>
            </div>
          </Link>
          <Link to="/amora" className="produto-container-principal">
            <div className="produto-principal">
              <img src="assets/imagens/amora.jpg" alt="" />
              <span>Amora</span>
              <span>R$ <span className="price">44,99</span> <span className="unit">Kg</span></span>
            </div>
          </Link>
          <Link to="/laranja" className="produto-container-principal">
            <div className="produto-principal">
              <img src="assets/imagens/laranja.jpg" alt="" />
              <span>Laranja</span>
              <span>R$ <span className="price">7,99</span> <span className="unit">Unidade</span></span>
            </div>
          </Link>
          <Link to="/banana" className="produto-container-principal">
            <div className="produto-principal">
              <img src="assets/imagens/banana.jpg" alt="" />
              <span>Banana Prata</span>
              <span>R$ <span className="price">4,99</span> <span className="unit">Kg</span></span>
            </div>
          </Link>
          <Link to="/figo" className="produto-container-principal">
            <div className="produto-principal">
              <img src="assets/imagens/figo.jpg" alt="" />
              <span>Figo</span>
              <span>R$ <span className="price">64,90</span> <span className="unit">Kg</span></span>
            </div>
          </Link>
          <Link to="/morango" className="produto-container-principal">
            <div className="produto-principal">
              <img src="assets/imagens/morango.png" alt="" />
              <span>Morango</span>
              <span>R$ <span className="price">14,99</span> <span className="unit">Kg</span></span>
            </div>
          </Link>
          <Link to="/mamão" className="produto-container-principal">
            <div className="produto-principal">
              <img src="assets/imagens/mamão.jpg" alt="" />
              <span>Mamão</span>
              <span>R$ <span className="price">7,99</span> <span className="unit">Kg</span></span>
            </div>
          </Link>
          <Link to="/manga" className="produto-container-principal">
            <div className="produto-principal">
              <img src="assets/imagens/manga.jpg" alt="" />
              <span>Manga</span>
              <span>R$ <span className="price">6,00</span> <span className="unit">250g</span></span>
            </div>
          </Link>
          <Link to="/maça" className="produto-container-principal">
            <div className="produto-principal">
              <img src="assets/imagens/maça.jpg" alt="" />
              <span>Maça</span>
              <span>R$ <span className="price">8,39</span> <span className="unit">Kg</span></span>
            </div>
          </Link>
          <Link to="/melancia" className="produto-container-principal">
            <div className="produto-principal">
              <img src="assets/imagens/melancia.jpg" alt="" />
              <span>Melancia</span>
              <span>R$ <span className="price">8,79</span> <span className="unit">Kg</span></span>
            </div>
          </Link>
          <Link to="/uva" className="produto-container-principal">
            <div className="produto-principal">
              <img src="assets/imagens/uva.jpg" alt="" />
              <span>Uva Thompson</span>
              <span>R$ <span className="price">14,97</span> <span className="unit">500g</span></span>
            </div>
          </Link>
          <Link to="/limão" className="produto-container-principal">
            <div className="produto-principal">
              <img src="assets/imagens/limão.jpg" alt="" />
              <span>Limão</span>
              <span>R$ <span className="price">6,98</span> <span className="unit">Kg</span></span>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Frutas;