import "./styles.css";
import Button from "../../components/Button";
import { generateNewArray, bubbleSort } from "./helpers";
import { useState } from "react";

const SortingVisualizer = () => {
  const [initialArray, setInitialArray] = useState<Array<number> | null>(null);

  const buttonStyles = {
    fontSize: "20px",
    padding: "6px 12px",
    cursor: "pointer",
  };

  const onGenerateNewArrayClickHandler = () => {
    const arr = generateNewArray(10, 5, 20);
    setInitialArray(arr);
  };

  const displayGeneratedArray = (): React.ReactNode => {
    if (!initialArray) return <div>Array Not Found</div>;
    return (
      <div className="sorting-visualizer-generated-array-container">
        {initialArray.map((element, index) => (
          <div
            key={index}
            className="sorting-visualizer-array-element"
            style={{ height: `${20 * element}px` }}
          ></div>
        ))}
      </div>
    );
  };

  const handleBubbleSort = () => {
    if (!initialArray) return;
    const sortedArray = bubbleSort(initialArray);
    setInitialArray([...sortedArray]);
  };

  return (
    <div className="sorting-visualizer-container">
      <div className="sorting-visualizer-heading">Sorting Visualizer</div>
      <div className="sorting-visualizer-options">
        <Button
          text="Generate New Array"
          onClick={onGenerateNewArrayClickHandler}
          styles={buttonStyles}
        />
        <Button
          text="Bubble Sort"
          onClick={handleBubbleSort}
          styles={buttonStyles}
        />
        <Button
          text="Insertion Sort"
          onClick={onGenerateNewArrayClickHandler}
          styles={buttonStyles}
        />
      </div>
      {initialArray ? displayGeneratedArray() : null}
    </div>
  );
};

export default SortingVisualizer;
