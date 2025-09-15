import { Link } from "react-router-dom";
import "./Cards.css";

const cards = [
  {
    id: 1,
    title: "Direito",
    path: "/direito-1",
  },
  {
    id: 2,
    title: "Direito",
    path: "/direito-2",
  },
  {
    id: 3,
    title: "Direito",
    path: "/direito-3",
  },
  {
    id: 4,
    title: "Direito",
    path: "/direito-trabalhista",
  },
];

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
              <h1>{card.title}</h1>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}
