import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="footer-top">
        <div className="footer-top--left">
          <Link to="/contato">Contato</Link>
          <Link to="/termos-de-servico">Termos de Serviço</Link>
          <Link to="/politica-de-privacidade">Política de Privacidade</Link>
          <Link to="/cancelamento-troca-e-reembolso">Cancelamento, Troca e Reembolso</Link>
        </div>
        <div className="footer-top--right">
          <span>Boletim de Notícias</span>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom--left">
          <Link to="/" target="_blank" rel="noopener noreferrer"><img className="footer-image" src="assets/imagens/instagram.png" alt="" /></Link>
          <Link to="/" target="_blank" rel="noopener noreferrer"><img className="footer-image" src="assets/imagens/facebook.png" alt="" /></Link>
        </div>
        <div>
          &copy; 2024 FeiraGreen. Todos os direitos reservados.
        </div>
        <div className="footer-bottom--right">
          <img className="footer-image" src="assets/imagens/mastercard.png" alt=""/>
          <img className="footer-image" src="assets/imagens/paypal.png" alt=""/>
          <img className="footer-image" src="assets/imagens/visa.png" alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Footer;