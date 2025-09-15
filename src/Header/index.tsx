import { Link } from "react-router-dom";
import "./Header.css";
const links = [
  {
    name: "Áreas de atuação",
    link: "areas-de-atuacao",
  },
  {
    name: "Equipe",
    link: "equipe",
  },
  {
    name: "Contato",
    link: "contato",
  },
  {
    name: "Portal de conteúdo",
    link: "Portal de conteudo",
  },
];

export function Header() {
  return (
    <header className="d-flex flex-row py-5 justify-content-around">
      <div>
        <figure>
          <Link to={"/"}>
            <img src="logo" alt="Logo dos advogados" />
          </Link>
        </figure>
      </div>
      <div>
        <ul className="d-flex flex-row gap-3">
          {links.map((link) => (
            <li key={link.name} className="py-4">
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
