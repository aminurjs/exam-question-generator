import ExamForm from "../components/ExamForm";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5">
      <h1 className="font-medium text-4xl text-center">
        Generate Exam Question
      </h1>
      <ExamForm />
    </div>
  );
};

export default Home;
