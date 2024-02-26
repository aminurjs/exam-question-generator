import { useDispatch, useSelector } from "react-redux";
import { updateForm } from "../redux/formSlice";

const ExamDetailsForm = ({ next }) => {
  const { form } = useSelector((state) => state.formSlice);
  const { exName, description } = form;

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      exName: e.target.exName.value,
      description: e.target.description.value,
    };
    dispatch(updateForm({ ...form, ...data }));
    next();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-center text-xl font-bold text-gray-950 mb-2">
        Exam Details
      </h2>
      <div className="mb-4">
        <label htmlFor="exName" className="label">
          Name of exam:
        </label>
        <input
          placeholder="Type exam name..."
          type="text"
          defaultValue={exName}
          name="exName"
          id="exName"
          className="input"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="label">
          Description:
        </label>
        <textarea
          placeholder="Type exam's rule & desc..."
          defaultValue={description}
          id="description"
          name="description"
          className="input"
          required
        />
      </div>
      <div className="flex gap-2 items-center justify-center">
        <button disabled type="button" className="btn">
          Prev
        </button>
        <button type="submit" className="btn">
          Next
        </button>
      </div>
    </form>
  );
};

export default ExamDetailsForm;
