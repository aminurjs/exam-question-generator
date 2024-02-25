import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Private = ({ children }) => {
  const { user } = useSelector((state) => state.userSlice);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
  }, [user, navigate]);

  return <div>{children}</div>;
};

export default Private;
