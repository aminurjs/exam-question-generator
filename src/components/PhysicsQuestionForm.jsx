import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateForm } from "../redux/formSlice";

export const qusTemp = {
  question: "",
  options: { option_1: "", option_2: "", option_3: "" },
};

const PhysicsQuestionForm = ({ prev, next }) => {
  const { form } = useSelector((state) => state.formSlice);
  const { physics } = form;
  console.log({ ...form });

  const [questions, setQuestions] = useState(physics || []);
  const addExam = () => {
    setQuestions([...questions, qusTemp]);
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const field = new FormData(e.currentTarget);
    const data = questions.map((items, i) => {
      const question = field.get(`qName${i}`);
      const option_1 = field.get(`option1_${i}`);
      const option_2 = field.get(`option2_${i}`);
      const option_3 = field.get(`option3_${i}`);
      return { question, options: { option_1, option_2, option_3 } };
    });
    const updateData = { physics: data };
    dispatch(updateForm({ ...form, ...updateData }));

    next();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-center text-xl font-bold text-gray-950 mb-2">
        Physics
      </h2>
      {questions.map((item, i) => (
        <div key={i} className="mb-5">
          <h4 className="font-semibold text-lg text-gray-900">
            Question {i + 1}:
          </h4>
          <div className="p-2">
            <div className="mb-2">
              <label htmlFor={`qName${i}`} className="label">
                Question Name:
              </label>
              <input
                defaultValue={item.question}
                autoFocus
                required
                placeholder="Question Name"
                type="text"
                id={`qName${i}`}
                name={`qName${i}`}
                className="input"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="option" className="label">
                Options:
              </label>
              <div className="flex gap-3">
                <input
                  defaultValue={item?.options?.option_1}
                  placeholder="Option 1"
                  type="text"
                  className="option"
                  name={`option1_${i}`}
                  required
                />
                <input
                  defaultValue={item?.options?.option_2}
                  placeholder="Option 2"
                  type="text"
                  className="option"
                  name={`option2_${i}`}
                  required
                />
                <input
                  defaultValue={item?.options?.option_3}
                  placeholder="Option 3"
                  type="text"
                  className="option"
                  name={`option3_${i}`}
                  required
                />
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-end -mt-5 mb-5 mr-2">
        <button className="btn" type="button" onClick={addExam}>
          +
        </button>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <button onClick={() => prev()} type="button" className="btn">
          Prev
        </button>

        <button type="submit" className="btn">
          Next
        </button>
      </div>
    </form>
  );
};

export default PhysicsQuestionForm;
