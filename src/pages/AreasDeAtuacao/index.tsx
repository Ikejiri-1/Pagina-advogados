import areasAtuacao from "../../assets/areas-atuacao.png";
import { Cards } from "../../components/Cards";
import { MainImage } from "../../components/MainImage";

export function AreasDeAtuacao() {
  return (
    <section>
      <div>
        <MainImage
          img={areasAtuacao}
          alt="imagem de uma balança dourada com muitos livros atrás e um martelo de juíz na frente"
          title="Areas de atuação"
        />
      </div>
      <div className="my-5">
        <Cards></Cards>
      </div>
    </section>
  );
}
