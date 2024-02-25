import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Preview from "../pages/Preview";
import Private from "./Private";
import Login from "../pages/Login";

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
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
export default routes;
