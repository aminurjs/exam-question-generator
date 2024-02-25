import { useState } from "react";
import { useMultiStepForm } from "../hooks/useMultiStepForm";
import ExamDetailsForm from "./ExamDetailsForm";
import PhysicsQuestionForm from "./PhysicsQuestionForm";
import MathQuestionForm from "./MathQuestionForm";
import ChemistryQuestionForm from "./ChemistryQuestionForm";

const initial_data = {
  exName: "",
  description: "",
  physics: {
    question: "",
    options: { option_1: "", option_2: "", option_3: "" },
  },

  math: { question: "", options: { option_1: "", option_2: "", option_3: "" } },

  chemistry: {
    question: "",
    options: { option_1: "", option_2: "", option_3: "" },
  },
};

const ExamForm = () => {
  const [data, setData] = useState(initial_data);

  const updateFields = (fields) => {
    setData((initial) => {
      return { ...initial, ...fields };
    });
  };

  const { step, steps, currentStepIndex, isFirstStep, prev, next, lastStep } =
    useMultiStepForm([
      <ExamDetailsForm key={1} {...data} updateFields={updateFields} />,
      <PhysicsQuestionForm key={2} {...data} updateFields={updateFields} />,
      <MathQuestionForm key={3} {...data} updateFields={updateFields} />,
      <ChemistryQuestionForm key={4} {...data} updateFields={updateFields} />,
    ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!lastStep) return next();
    console.log(data);
  };

  return (
    <div className="p-10 max-w-screen-sm mx-auto border-gray-200 border rounded-md mt-6">
      <p className="text-center mb-2 text-lg font-medium">
        Step {currentStepIndex + 1}/{steps.length}
      </p>
      <div className="relative bg-gray-200 rounded-md w-80 h-1.5 mx-auto transition-all duration-200 ease-in-out">
        <span
          style={{ width: `${(currentStepIndex * 100) / (steps.length - 1)}%` }}
          className="bg-blue-500 absolute top-0 left-0 w-full h-1.5 rounded-md transition-all duration-200 ease-in-out"
        ></span>
      </div>
      <form
        onSubmit={handleSubmit}
        className="pt-5 transition-all duration-300 ease-in-out"
      >
        {step}
        <div className="flex gap-2 items-center justify-center">
          {!isFirstStep && (
            <button onClick={() => prev()} type="button" className="btn">
              Prev
            </button>
          )}

          <button type="submit" className="btn">
            {lastStep ? "Submit" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExamForm;
