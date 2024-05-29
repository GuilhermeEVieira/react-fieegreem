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
          
          <div className="collapse navbar-collapse" id="nav-links-main">
            <div className="navbar-nav mr-auto">

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
            <div className="navbar-nav" id="nav-links-secondary">
              <Link to="/" className="nav-item nav-link btn btn-outline-success my-2 my-sm-0">
                <img src={Pesquisa} alt="Search" width="20" />
              </Link>
              <Link to="/login" className="nav-item nav-link">
                <img src={Usuario} alt="User" width="20" />
              </Link>
              <Link to="/carrinho" className="nav-item nav-link">
                <img src={Carrinho} alt="Cart" width="20" />
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;