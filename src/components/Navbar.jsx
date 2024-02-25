import { Link, NavLink } from "react-router-dom";

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "My Questions",
    path: "/my-questions",
  },
];

const Navbar = () => {
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
    </nav>
  );
};

export default Navbar;
