import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();
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
        <ul className="d-flex flex-row gap-3 my-5">
          {links.map((link) => {
            const isActive = link.link === location.pathname;
            return (
              <li key={link.id} className="header-links ">
                <Link
                  to={link.link}
                  className={`texto ${isActive ? "active-link" : ""}`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
