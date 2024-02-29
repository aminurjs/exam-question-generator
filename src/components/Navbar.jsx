import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logOut } from "../redux/userSlice";

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Math Formula",
    path: "/math",
  },
];

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userSlice);
  const handleLogOut = () => {
    dispatch(logOut("logout"));
  };
  return (
    <nav className="max-w-screen-xl mx-auto flex items-center justify-between p-5 border-b border-gray-200">
      <Link to="/" className="text-3xl font-medium">
        Logo
      </Link>
      <ul className="flex gap-5">
        {navItems.map((item) => (
          <li key={item.name}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "p-2 rounded-md bg-gray-200 text-gray-900"
                  : "p-2 rounded-md group hover:bg-gray-200  transition-all"
              }
              to={item.path}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
      {!user ? (
        <Link to="/login">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 active:scale-95 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Login
          </button>
        </Link>
      ) : (
        <button
          onClick={handleLogOut}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 active:scale-95 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Log Out
        </button>
      )}
    </nav>
  );
};

export default Navbar;
