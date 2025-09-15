import "./Footer.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
export function Footer() {
  return (
    <footer>
      <div className="contact-container">
        <h2>Contatos:</h2>
        <div className="contact-content">
          <p>
            <BsFillTelephoneFill className="icon" />: (11) 1234-5678
          </p>
          <p>
            <IoMdMail className="icon" />: 0X7oD@example.com
          </p>
        </div>
      </div>
      <div></div>
    </footer>
  );
}
