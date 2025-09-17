import "./MainImage.css";

interface MainImageProps {
  img: string;
  alt?: string;
  title?: string;
}

export function MainImage({ img, title, alt }: MainImageProps) {
  return (
    <div className="main-image-content">
      <img src={img} alt={alt} />

      <h2 className="main-image-title">{title}</h2>
    </div>
  );
}
