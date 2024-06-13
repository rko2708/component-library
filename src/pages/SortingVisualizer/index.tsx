import "./styles.css";
import Button from "../../components/Button";
import { generateNewArray, bubbleSortSteps } from "./helpers";
import { useEffect, useState } from "react";

const SortingVisualizer = () => {
  const [initialArray, setInitialArray] = useState<Array<number> | null>(null);
  const [sortingSteps, setSortingSteps] = useState<any>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const buttonStyles = {
    fontSize: "20px",
    padding: "6px 12px",
    cursor: "pointer",
  };

  const onGenerateNewArrayClickHandler = () => {
    const arr = generateNewArray(10, 5, 20);
    setInitialArray(arr);
  };

  useEffect(() => {
    if (sortingSteps.length > 0 && currentIndex < sortingSteps.length) {
      const timeoutId = setTimeout(() => {
        setCurrentIndex((currentIndex) => currentIndex + 1);
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex, sortingSteps]);

  const displayGeneratedArray = (): React.ReactNode => {
    if (!initialArray) return <div>Array Not Found</div>;
    const currentStep = sortingSteps?.[currentIndex] || {
      array: initialArray,
      comparing: [],
      swapped: false,
    };
    // const comparing = currentStep?.comparing;
    // const swapped = currentStep?.swapped;
    return (
      <div className="sorting-visualizer-generated-array-container">
        {currentStep?.array?.map((element: number, index: number) => (
          <div
            key={index}
            className={`sorting-visualizer-array-element ${
              currentStep.comparing.includes(index) ? "comparing" : ""
            } ${currentStep.swapped && currentStep.comparing.includes(index) ? "swapped" : ""}`}
            style={{ height: `${20 * element}px` }}
          ></div>
        ))}
      </div>
    );
  };

  const handleBubbleSort = () => {
    if (!initialArray) return;
    const steps = bubbleSortSteps(initialArray);
    setSortingSteps(steps);
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
