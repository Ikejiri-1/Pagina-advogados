import "./Accordion.css";

interface AccordionItem {
  id: number;
  title: string;
  text: string;
}

interface AccordionProps {
  AccordionItems: AccordionItem[];
}

export function Accordion({ AccordionItems }: AccordionProps) {
  return (
    <div className="accordion" id="accordionExample">
      {AccordionItems.map((item, index) => (
        <div className="accordion-item" key={item.id}>
          <h2 className="accordion-header" id={`heading${item.id}`}>
            <button
              className={`accordion-button  collapsed`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${item.id}`}
              aria-expanded={index === 0 ? "true" : "false"}
              aria-controls={`collapse${item.id}`}
            >
              {item.title}
            </button>
          </h2>
          <div
            id={`collapse${item.id}`}
            className={`accordion-collapse collapse`}
            aria-labelledby={`heading${item.id}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">{item.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
