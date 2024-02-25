import { useSelector } from "react-redux";
import Question from "../components/Question";

const Preview = () => {
  const { exam } = useSelector((state) => state.examSlice);
  console.log(exam);
  return (
    <>
      <div className="max-w-screen-md mx-auto bg-white">
        {exam && (
          <div className="p-5">
            <div className="pb-5 mb-5 border-b border-gray-200">
              <h1 className="font-medium text-3xl text-center mb-3">
                {exam.exName}
              </h1>
              <p className=" text-center">{exam.description}</p>
            </div>
            <div className="flex flex-col gap-5">
              <Question subject={"Physics"} question={exam.physics} />
              <Question subject={"Math"} question={exam.math} />
              <Question subject={"Chemistry"} question={exam.chemistry} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Preview;
