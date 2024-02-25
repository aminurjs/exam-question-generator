import { useEffect, useState } from "react";

const PhysicsQuestionForm = ({ physics, updateFields }) => {
  const [question, setQuestion] = useState(physics.question);
  const [option_1, setOption_1] = useState(physics.options?.option_1 || "");
  const [option_2, setOption_2] = useState(physics.options?.option_2 || "");
  const [option_3, setOption_3] = useState(physics.options?.option_3 || "");

  useEffect(() => {
    updateFields({
      physics: {
        question: question,
        options: { option_1, option_2, option_3 },
      },
    });
  }, [question, option_1, option_2, option_3]);

  return (
    <div>
      <h2 className="text-center text-xl font-bold text-gray-950 mb-2">
        Physics
      </h2>

      <div className="mb-5">
        <h4 className="font-semibold text-lg text-gray-900">Question 1:</h4>
        <div className="p-2">
          <div className="mb-2">
            <label htmlFor="qName" className="label">
              Question Name:
            </label>
            <input
              defaultValue={physics.question}
              onChange={(e) => setQuestion(e.target.value)}
              autoFocus
              required
              placeholder="Question Name"
              type="text"
              id="qName"
              name="qName"
              className="input"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="option" className="label">
              Options:
            </label>
            <div className="flex gap-3">
              <input
                defaultValue={option_1}
                placeholder="Option 1"
                type="text"
                id="option1"
                name="option1"
                className="option"
                required
                onChange={(e) => setOption_1(e.target.value)}
              />
              <input
                defaultValue={option_2}
                placeholder="Option 2"
                type="text"
                id="option2"
                name="option2"
                className="option"
                required
                onChange={(e) => setOption_2(e.target.value)}
              />
              <input
                defaultValue={option_3}
                placeholder="Option 3"
                type="text"
                id="option3"
                name="option3"
                className="option"
                required
                onChange={(e) => setOption_3(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex gap-2">
        <button type="button">-</button>
        <button type="button">+</button>
      </div> */}
    </div>
  );
};

export default PhysicsQuestionForm;
