import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRouter({ children }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return isLoggedIn ? children : <Navigate to="/login" />;
}
