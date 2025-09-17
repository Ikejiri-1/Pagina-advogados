import { Carousel } from "../../components/Carousel";
import areasAtuacao from "../../assets/areas-atuacao.png";
import { Cards } from "../../components/Cards";
const carouselItems = [
  {
    id: 1,
    img: areasAtuacao,
    title: "Áreas de Atuação",
  },
];

export function AreasDeAtuacao() {
  return (
    <section>
      <div>
        <Carousel carouselItems={carouselItems} />
      </div>
      <div className="my-5">
        <Cards></Cards>
      </div>
    </section>
  );
}
