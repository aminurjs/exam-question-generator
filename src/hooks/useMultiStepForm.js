import { useState } from "react";

export const useMultiStepForm = (steps) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = () => {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) {
        return i;
      }
      return i + 1;
    });
  };
  const prev = () => {
    setCurrentStepIndex((i) => {
      if (i <= 0) {
        return i;
      }
      return i - 1;
    });
  };

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    lastStep: currentStepIndex === steps.length - 1,
    steps,
    next,
    prev,
  };
};
