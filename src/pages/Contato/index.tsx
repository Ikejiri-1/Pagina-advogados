import { Carousel } from "../../Carousel";
import { Form } from "../../Form";

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
