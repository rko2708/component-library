import { useState } from "react";
import sampleAccordionData from "./sampleData";
import "./styles.css";

const Accordion = () => {
  const [selectedIndex, setSelectedIndex] = useState<null | number>(null);
  const onHideShowButtonClickHandler = (
    _e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    if (index === selectedIndex) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
    }
  };

  return (
    <div className="accordion-container">
      {sampleAccordionData.map((data, index) => (
        <div className="accordion-body">
          <div
            className="single-accordion"
            onClick={(e) => onHideShowButtonClickHandler(e, index)}
          >
            <div className="accordion-title">{data.title}</div>
            <div className="accordion-show-hide-button">
              {selectedIndex !== index ? "+" : "-"}
            </div>
          </div>
          {selectedIndex === index ? (
            <div className="accordion-content">{data.body}</div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
