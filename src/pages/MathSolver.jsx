import { useState } from "react";
import KaTeXComponent from "../components/Maths/Formulla";

const MathSolver = () => {
  const [expression, setExpression] = useState("");
  return (
    <div className="max-w-screen-xl mx-auto p-5 bg-gray-50 min-h-[calc(100vh-100px)]">
      <h1 className="font-medium text-4xl text-center mb-3">
        Math equation generator
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
        <form className="flex flex-col justify-center items-center mb-5">
          <textarea
            type="text"
            className="w-full rounded-md border border-gray-200"
            placeholder="Type your equation ( LaTeX format ex: e=mc^2 )..."
            onChange={(e) => setExpression(e.target.value)}
            rows={5}
          />
        </form>
        <div className="flex items-center justify-center flex-col gap-4">
          <h1 className="text-3xl font-medium text-center">Result</h1>
          <KaTeXComponent expression={expression} />
        </div>
      </div>
    </div>
  );
};

export default MathSolver;
