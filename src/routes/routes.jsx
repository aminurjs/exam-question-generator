import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Preview from "../pages/Preview";
import Private from "./Private";
import Login from "../pages/Login";
import MathSolver from "../pages/MathSolver";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <Private>
            <Home />
          </Private>
        ),
      },
      { path: "/preview", element: <Preview /> },
      { path: "/math", element: <MathSolver /> },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
export default routes;
