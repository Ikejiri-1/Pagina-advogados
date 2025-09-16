import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo-caios.png";
const links = [
  {
    id: 1,
    name: "Áreas de atuação",
    link: "areas-de-atuacao",
  },
  {
    id: 2,
    name: "Equipe",
    link: "equipe",
  },
  {
    id: 3,
    name: "Contato",
    link: "contato",
  },
  {
    id: 4,
    name: "Portal de conteúdo",
    link: "Portal de conteudo",
  },
];

export function Header() {
  return (
    <header className="d-flex flex-row justify-content-around">
      <div>
        <figure>
          <Link to={"/"}>
            <img src={logo} alt="Logo dos advogados" />
          </Link>
        </figure>
      </div>
      <div>
        <ul className="d-flex flex-row gap-3">
          {links.map((link) => (
            <li key={link.name} className="py-4 header-links">
              <Link to={`/${link.link}`}>
                <button className="btn texto">{link.name}</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
