// src/App.jsx
import ProfilePage from './components/ProfilePage';  // ✅ FIXED
import UserContext from './UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
