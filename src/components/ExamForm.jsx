import { useMultiStepForm } from "../hooks/useMultiStepForm";
import ExamDetailsForm from "./ExamDetailsForm";
import QuestionsForm from "./QuestionsForm";

const ExamForm = () => {
  const { step, steps, currentStepIndex, prev, next, lastStep } =
    useMultiStepForm([1, 2, 3, 4]);

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
      <div className="pt-5 transition-all duration-300 ease-in-out">
        {step === 1 && <ExamDetailsForm next={next} />}
        {step === 2 && (
          <QuestionsForm
            prev={prev}
            next={next}
            lastStep={lastStep}
            subject={"physics"}
          />
        )}
        {step === 3 && (
          <QuestionsForm
            prev={prev}
            next={next}
            lastStep={lastStep}
            subject={"math"}
          />
        )}
        {step === 4 && (
          <QuestionsForm
            prev={prev}
            next={next}
            lastStep={lastStep}
            subject={"chemistry"}
          />
        )}
      </div>
    </div>
  );
};

export default ExamForm;
