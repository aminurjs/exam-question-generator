import { useSelector } from "react-redux";
import Question from "../components/Question";

const Preview = () => {
  const { exam } = useSelector((state) => state.examSlice);
  return (
    <div className="bg-gray-100 py-5 min-h-[95vh]">
      <div className="max-w-screen-md mx-auto pb-5 px-5 bg-white">
        {exam && (
          <div className="p-5">
            <div className="pb-5 mb-5 border-b border-gray-200">
              <h1 className="font-medium text-3xl text-center mb-3">
                {exam.exName}
              </h1>
              <p className=" text-center">{exam.description}</p>
            </div>
            <div className="flex flex-col gap-5">
              <Question subject={"Physics"} questions={exam.physics} />
              <Question subject={"Math"} questions={exam.math} />
              <Question subject={"Chemistry"} questions={exam.chemistry} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Preview;
