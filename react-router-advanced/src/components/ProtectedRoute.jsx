import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth.jsx";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth(); // use the hook

  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
