import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch {
      setError('Looks like we can’t find the user.');
    }
    setLoading(false);
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSearch}>
        <input
          className="border p-2 mr-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button className="bg-blue-500 text-white px-4 py-2" type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {user && (
        <div className="mt-4 border p-4">
          <img src={user.avatar_url} className="w-16 h-16" />
          <h2>{user.name || user.login}</h2>
          <a href={user.html_url} className="text-blue-500">View Profile</a>
        </div>
      )}
    </div>
  );
}

export default Search;
