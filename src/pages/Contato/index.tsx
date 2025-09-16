import { Carousel } from "../../components/Carousel";
import { Form } from "../../components/Form";

const carouselItems = [
  {
    id: 1,
    img: "/src/assets/img.png",
  },
];

export function Contato() {
  return (
    <>
      <div>
        <Carousel carouselItems={carouselItems} />
      </div>
      <div>
        <Form />
      </div>
    </>
  );
}
