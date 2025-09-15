import { Cards } from "../../Cards";
import { Carousel } from "../../Carousel";
import "./Home.css";

const carouselItems = [
  {
    id: 1,
    img: "/src/assets/img.png",
  },
  {
    id: 2,
    img: "/src/assets/img2.png",
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
