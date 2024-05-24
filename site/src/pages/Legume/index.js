import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      {/* carousel */}
      <div className="container-fluid">
        <div className="carousel slide" data-ride="carousel" id="carousel-feira">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="assets/imagens/1.png" className="d-block w-100" alt="" />
            </div>
            <div className="carousel-item ">
              <img src="assets/imagens/2.png" className="d-block w-100" alt="" />
            </div>
            <div className="carousel-item ">
              <img src="assets/imagens/3.png" className="d-block w-100" alt="" />
            </div>
          </div>
          <Link href="#carousel-feira" role="button" className="carousel-control-prev" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </Link>
          <Link href="#carousel-feira" role="button" className="carousel-control-next" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </Link>
        </div>
      </div>
      {/* fim-carousel */}
      <hr />
      <div className="container-fluid">
        <section className="row" id="section-cardapio">
          <div className="card" id="card-frutas">
            <img src="assets/imagens/LogoFeira.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Frutas</h5>
              <p className="card-text">Descrição sobre as frutas</p>
              <Link href="frutas.html" className="btn btn-primary">Veja Mais</Link>
            </div>
          </div>
          <div className="card" id="card-verduras">
            <img src="assets/imagens/LogoFeira.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Verduras</h5>
              <p className="card-text">Descrição sobre as verduras</p>
                <Link href="verduras.js" className="btn btn-primary">Veja Mais</Link>
            </div>
          </div>
          <div className="card" id="card-hortalicas">
            <img src="assets/imagens/LogoFeira.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Hortaliças</h5>
              <p className="card-text">Descrição sobre as hortaliças</p>
              <Link href="hortaliças.js" className="btn btn-primary">Veja Mais</Link>
            </div>
          </div>
          <div className="card" id="card-legums">
            <img src="assets/imagens/LogoFeira.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Legumes</h5>
              <p className="card-text">Descrição sobre os legumes</p>
              <Link href="legumes.js" className="btn btn-primary">Veja Mais</Link>
            </div>
          </div>
          <div className="card" id="card-outros">
            <img src="assets/imagens/LogoFeira.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Outros</h5>
              <p className="card-text">Descrição sobre outros</p>
              <Link href="outros.js" className="btn btn-primary">Veja Mais</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;