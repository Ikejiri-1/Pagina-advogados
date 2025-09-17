import { Cards } from "../../components/Cards";
import { Carousel } from "../../components/Carousel";
import img from "../../assets/img.png";
import img2 from "../../assets/img2.png";
import "./Home.css";

const carouselItems = [
  {
    id: 1,
    img: img,
    title: "Teste",
  },
  {
    id: 2,
    img: img2,
  },
];
export function Home() {
  return (
    <div>
      <div className="carousel">
        <Carousel carouselItems={carouselItems} />
      </div>
      <div>
        <h1 className="my-5 text-center title">Áreas de atuação</h1>
        <div>
          <Cards />
        </div>
      </div>
    </div>
  );
}
