import "./Footer.css";

export function Footer() {
  return (
    <footer>
      <div className="footer-logo-container">
        <img src="logo" alt="Logo dos advogados" />
        <p>texto</p>
      </div>
      <div className="address-container">
        <h2>Endereço</h2>
        <p className="street">rua x</p>
        <p className="neighborhood">bairro y</p>
        <p className="CEP">01234-567</p>
      </div>
      <div className="contact-container">
        <h2>Contato</h2>
        <p>(11) 1234-5678</p>
        <p>0X7oD@example.com</p>
      </div>
      <div className="social-media">
        <h2>Redes Sociais</h2>
        <div className="social-media-content">
          <p>Face</p>
          <p>Insta</p>
          <p> Linkedin</p>
        </div>
      </div>
    </footer>
  );
}
