import "./Footer.css";
import logo from "../../assets/logo-caios.png";

export function Footer() {
  return (
    <footer>
      <div className="footer-logo-container">
        <figure>
          <img src={logo} alt="Logo dos advogados" />
        </figure>
        <p>texto</p>
      </div>
      <div className="address-container">
        <h3>Endereço</h3>
        <p className="street">rua x</p>
        <p className="neighborhood">bairro y</p>
        <p className="CEP">01234-567</p>
      </div>
      <div className="contact-container">
        <h3>Contato</h3>
        <p>(11) 1234-5678</p>
        <p>0X7oD@example.com</p>
      </div>
      <div className="social-media">
        <h3>Redes Sociais</h3>
        <div className="social-media-content">
          <p>Face</p>
          <p>Insta</p>
          <p> Linkedin</p>
        </div>
      </div>
    </footer>
  );
}
