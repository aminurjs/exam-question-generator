import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <p>Hello</p>
        <Outlet />
      </div>
    </>
  );
}

export default App;
