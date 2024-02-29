import { useEffect, useRef } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

const KaTeXComponent = ({ expression }) => {
  const katexContainer = useRef(null);

  useEffect(() => {
    renderKaTeX();
  }, [expression]);

  const renderKaTeX = () => {
    if (katexContainer.current) {
      try {
        katex.render(expression, katexContainer.current, {
          throwOnError: false,
        });
      } catch (error) {
        console.error("Error rendering LaTeX:", error);
        katexContainer.current.textContent = "Error rendering LaTeX";
      }
    }
  };

  return (
    <>
      <div ref={katexContainer} />
    </>
  );
};

export default KaTeXComponent;
