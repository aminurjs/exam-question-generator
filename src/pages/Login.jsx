import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    dispatch(login({ email, password }));
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleLogin} className="max-w-sm mx-auto mt-10">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-medium text-gray-900 "
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="w-full rounded-md"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-lg font-medium text-gray-900 "
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="w-full rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 active:scale-95 font-medium rounded-lg text-lg w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
