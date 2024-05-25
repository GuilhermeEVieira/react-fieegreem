import { Link } from "react-router-dom";
import { imagens } from "./imagens";

function Home() {
  return (
    <div>
    {/* carousel */}
    <div className="container-fluid">
        <div className="carousel slide" data-ride="carousel" id="carousel-feira">
            <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="1.png" className="d-block w-100" alt="" />
            </div>
            <div className="carousel-item ">
              <img src= { imagens } className="d-block w-100" alt="" />
            </div>
            <div className="carousel-item ">
              <img src="3.png" className="d-block w-100" alt="" />
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
    <main className="row produto-page">
        <div className="col-12">
            <div className="row">
                <div className="produto-container-prisncipal">
                    <div className="produto-prisncipal">
                        <a href="paginapd.html"><img src="abacaxi.jpg" alt="Abacaxi" className="img-fluid" /></a>
                        <span>Abacaxi</span>
                        <span>R$ <span className="price">10,00</span> <span className="unit">Unidade</span></span>
                    </div>
                </div>
                <div className="produto-container-prisncipal">
                    <div className="produto-prisncipal">
                        <img src="morango.png" alt="Morango" className="img-fluid" />
                        <span>Morango</span>
                        <span>R$ <span className="price">12,00</span> <span className="unit">250g</span></span>
                    </div>
                </div>
                <div className="produto-container-prisncipal">
                    <div className="produto-prisncipal">
                        <img src="alface.png" alt="Alface" className="img-fluid"/>
                        <span>Alface</span>
                        <span>R$ <span className="price">3,99</span> <span className="unit">Unidade</span></span>
                    </div>
                </div>
                <div className="produto-container-prisncipal">
                    <div className="produto-prisncipal ">
                        <img src="greem_aple.png" alt="Maça Verde" className="img-fluid"/>
                        <span>Maça Verde</span>
                        <span>R$ <span className="price">15,89</span> <span className="unit"> kg</span></span>
                    </div>
                </div>
                <div className="produto-container-prisncipal">
                    <div className="produto-prisncipal" >
                        <img src="beterrabas.jpg" alt="Beterraba" className="img-fluid"/>
                        <span>Beterraba</span>
                        <span>R$ <span className="price">4,99</span> <span className="unit"> Kg</span></span>
                    </div>
                </div>
                <div className="produto-container-prisncipal">
                    <div className="produto-prisncipal" >
                        <img src="laranja.jpg" alt="Laranja" className="img-fluid"/>
                        <span>Laranja</span>
                        <span>R$ <span className="price">7,99</span> <span className="unit"> kg</span></span>
                    </div>
                </div>
                <div className="produto-container-prisncipal">
                    <div className="produto-prisncipal" >
                        <img src="verduras.png" alt="Legumes" className="img-fluid"/>
                        <span>Legumes</span>
                        <span>R$ <span className="price">7,99</span> <span className="unit"> Kg</span></span>
                    </div>
                </div>
                <div className="produto-container-prisncipal">
                    <div className="produto-prisncipal" >
                        <img src="verduras_verde.png" alt="Verdura" className="img-fluid"/>
                        <span>Verdura</span>
                        <span>R$ <span className="price">12,00</span> <span className="unit">250g</span></span>
                    </div>
                </div>
                <div className="produto-container-prisncipal">
                    <div className="produto-prisncipal" >
                        <img src="verdura.png" alt="Cenoura" className="img-fluid"/>
                        <span>Cenoura</span>
                        <span>R$ <span className="price">3,75</span> <span className="unit">Kg</span></span>
                    </div>
                </div>
                <div className="produto-container-prisncipal">
                    <div className="produto-prisncipal" >
                        <img src="melão.jpg" alt="Melão" className="img-fluid"/>
                        <span>Melão</span>
                        <span>R$ <span className="price">6,99</span> <span className="unit">Unidade</span></span>
                    </div>
                </div>
                <div className="produto-container-prisncipal">
                    <div className="produto-prisncipal" >
                        <img src="uva.jpg" alt="Uva Thompson" className="img-fluid"/>
                        <span>Uva Thompson</span>
                        <span>R$ <span className="price">14,97</span> <span className="unit">500g</span></span>
                    </div>
                </div>
                <div className="produto-container-prisncipal">
                    <div className="produto-prisncipal" >
                        <img src="banana.jpg" alt="Banana Prata" className="img-fluid"/>
                        <span>Banana Prata</span>
                        <span>R$ <span className="price">6,98</span> <span className="unit">Kg</span></span>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </div>
  );
}

export default Home;