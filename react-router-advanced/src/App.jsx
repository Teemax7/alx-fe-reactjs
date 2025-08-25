import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home.jsx";
import Profile from "./components/Profile.jsx";
import ProfileDetails from "./components/ProfileDetails.jsx";
import ProfileSettings from "./components/ProfileSettings.jsx";
import Post from "./components/Post.jsx";
import Login from "./components/Login.jsx";

// Simulated authentication status
const isAuthenticated = false; // toggle to true for testing

// Protected route wrapper
const ProtectedRoute = ({ children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Protected route for Profile */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        >
          {/* Nested routes */}
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Dynamic route example */}
        <Route path="/post/:postId" element={<Post />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
