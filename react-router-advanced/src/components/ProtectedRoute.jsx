import { Navigate } from "react-router-dom";

// Simulated authentication status
const isAuthenticated = false; // toggle to true for testing

const ProtectedRoute = ({ children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
