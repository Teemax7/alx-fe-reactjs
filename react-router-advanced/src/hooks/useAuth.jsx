import { useState } from "react";

// Simple hook to simulate authentication
const useAuth = () => {
  const [user, setUser] = useState(null); // null = not authenticated
  // Example login simulation
  const login = (username) => setUser({ name: username });
  const logout = () => setUser(null);

  return { user, login, logout };
};

export default useAuth;
