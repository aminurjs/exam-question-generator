import Editor from "../components/Maths/Editor";

const MathSolver = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 bg-gray-50 min-h-[calc(100vh-100px)]">
      <h1 className="font-medium text-4xl text-center mb-3">
        Create Post & Math Formula
      </h1>
      <p className="text-center mb-5">
        <a
          href="http://latex.codecogs.com/eqneditor/editor.php"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Get Latex Expression Here
        </a>
      </p>
      <div className="max-w-screen-md mx-auto">
        <div className="">
          <Editor></Editor>
        </div>
      </div>
    </div>
  );
};

export default MathSolver;
