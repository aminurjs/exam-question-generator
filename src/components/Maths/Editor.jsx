import { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "katex/dist/katex.min.css";
import "./editor.css";

const Editor = () => {
  const [editorHtml, setEditorHtml] = useState("");
  const savedHtmlRef = useRef(null);

  const handleChange = (html) => {
    console.log(html);
    setEditorHtml(html);
    savedHtmlRef.current.innerHTML = html;
  };

  const modules = {
    toolbar: [
      [{ header: ["1", "2", "3", "4", "5"] }],

      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "formula"],
      ["clean"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  return (
    <>
      <ReactQuill
        theme="snow"
        onChange={handleChange}
        value={editorHtml}
        modules={modules}
        bounds=".app"
        placeholder="Write something..."
      />
      <div className="py-5">
        <h3 className="mb-2">Preview:</h3>
        <div className="border border-gray-300 p-5 bg-white">
          <div ref={savedHtmlRef} />
        </div>
      </div>
    </>
  );
};

export default Editor;
