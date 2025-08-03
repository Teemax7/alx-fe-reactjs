import React, { useState } from 'react';
import { fetchAdvancedUsers } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUsers([]);

    try {
      const data = await fetchAdvancedUsers(username, location, minRepos);
      setUsers(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSearch} className="mb-4 space-y-2">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="GitHub username"
          className="border p-2 w-full"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          className="border p-2 w-full"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Min Repos"
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Looks like we cant find the user</p>}

      {users.length > 0 && users.map((user) => (
        <div key={user.login} className="border p-4 mb-4">
          <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
          <p className="font-bold">{user.login}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            GitHub Profile
          </a>
        </div>
      ))}
    </div>
  );
}

export default Search;
