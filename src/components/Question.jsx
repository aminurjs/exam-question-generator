const Question = ({ subject, questions }) => {
  return (
    <div>
      <h3 className="font-medium text-2xl mb-3">{subject}</h3>
      {questions.map((question, i) => (
        <div className="mt-2" key={i}>
          <h4 className="text-lg font-medium mb-1">
            {i + 1}. {question?.question}
          </h4>
          <div className="flex flex-col gap-1">
            <div className="flex gap-1 items-center">
              <input type="radio" id="" />
              <p className="text-sm">{question?.options?.option_1}</p>
            </div>
            <div className="flex gap-1 items-center">
              <input type="radio" id="" />
              <p className="text-sm">{question?.options?.option_2}</p>
            </div>
            <div className="flex gap-2 items-center">
              <input type="radio" id="" />
              <p className="text-sm">{question?.options?.option_3}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Question;
