const token = import.meta.env.VITE_APP_GITHUB_API_KEY;
import axios from 'axios';

export const fetchUserData = async (username) => {
  const res = await axios.get(`https://api.github.com/users/${username}`);
  return res.data;
};
