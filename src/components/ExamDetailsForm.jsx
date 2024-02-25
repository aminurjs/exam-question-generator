const ExamDetailsForm = ({ exName, description, updateFields }) => {
  return (
    <div>
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
          onChange={(e) => updateFields({ exName: e.target.value })}
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
          onChange={(e) => updateFields({ description: e.target.value })}
          id="description"
          name="description"
          className="input"
          required
        />
      </div>
    </div>
  );
};

export default ExamDetailsForm;
