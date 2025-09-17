import { Link } from "react-router-dom";
import "./Cards.css";
import { cards } from "../../utils/cards/cards";

export function Cards() {
  return (
    <>
      <ul className="row text-center justify-content-center gap-4">
        {cards.map((card) => (
          <Link
            to={card.path}
            className={`col-4 w-40 cards cards-${card.id} text-decoration-none`}
            style={{ height: "300px" }}
            key={card.id}
          >
            <li>
              <h2>{card.title}</h2>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}
