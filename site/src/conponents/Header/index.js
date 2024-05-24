import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container" id="nav-container">
      <nav className="navbar navbar-expand-lg fixed-top">
        <Link className="navbar-brand" href="/">
          <img id="logo" src="assets/imagens/LogoFeiraGreen.png" alt="Logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-links" aria-controls="nav-links" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav-links">
          <div className="navbar-nav">
            <Link className="nav-item nav-link" id="frutas-menu" href="/frutas">Frutas</Link>
            <Link className="nav-item nav-link" id="verdura-menu" href="/verduras">Verduras</Link>
            <Link className="nav-item nav-link" id="hortalica-menu" href="/hortalicas">Hortaliças</Link>
            <Link className="nav-item nav-link" id="legums-menu" href="/legumes">Legumes</Link>
            <Link className="nav-item nav-link" id="outros-menu" href="/outros">Outros</Link>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="nav-links">
          <div className="navbar-nav">
            <Link className="nav-item nav-link" href="/"><i className="fas fa-search"></i></Link>
            <Link className="nav-item nav-link" href="/login"><i className="fas fa-user"></i></Link>
            <Link className="nav-item nav-link" href="/carrinho"><i className="fas fa-shopping-cart"></i></Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;