const token = import.meta.env.VITE_APP_GITHUB_API_KEY;
import axios from 'axios';

export const fetchUserData = async (username) => {
  const res = await axios.get(`https://api.github.com/users/${username}`);
  return res.data;
};
export const fetchAdvancedUsers = async (username, location, minRepos) => {
  let query = `user:${username}`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;
  
  const res = await axios.get(`https://api.github.com/search/users?q=${query}`);
  return res.data.items;
};
{users.map((user) => (
  <div key={user.login}>
    <img src={user.avatar_url} />
    <p>{user.login}</p>
    <a href={user.html_url}>GitHub Profile</a>
  </div>
))}
