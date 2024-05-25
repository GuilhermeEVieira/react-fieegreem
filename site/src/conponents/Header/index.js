import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from './LogoFeiraGreen.png'
import Carrinho from './carrinho-carrinho.png'
import Pesquisa from './pesquisa.png'
import Usuario from './usuario.png'

function Header() {
  return (
    <header>
      <div className="container" id="nav-container">
        <nav className="navbar navbar-expand-lg fixed-top">
          <Link to="/" className="navbar-brand">
          <img id="logo" src={Logo} alt="Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#nav-links-main"
            aria-controls="nav-links-main"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="nav-links-main">
            <div className="navbar-nav">
              <Link to="/fruta" className="nav-item nav-link" id="frutas-menu">
                Frutas
              </Link>
              <Link to="/verdura" className="nav-item nav-link" id="verdura-menu">
                Verduras
              </Link>
              <Link to="/hortalica" className="nav-item nav-link" id="hortalica-menu">
                Hortaliças
              </Link>
              <Link to="/legume" className="nav-item nav-link" id="legums-menu">
                Legumes
              </Link>
              <Link to="/outro" className="nav-item nav-link" id="outros-menu">
                Outros
              </Link>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="nav-links-secondary">
            <div className="navbar-nav">
              <Link to="/" className="nav-item nav-link">
                <img src={Pesquisa} alt="Search" width="20" />
              </Link>
              <Link to="/login" className="nav-item nav-link">
                <img src={Usuario} alt="User" width="20" />
              </Link>
              <Link to="/carrinho" className="nav-item nav-link">
                    <img src={Carrinho}alt="Cart" width="20" />
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;