import React, { useContext } from 'react';
import UserContext from '../UserContext'; // Adjust the path if needed

function UserProfile() {
  const { name, age, bio } = useContext(UserContext);

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h2 style={{ color: 'blue' }}>{name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{age}</span></p>
      <p>Bio: {bio}</p>
    </div>
  );
}

export default UserProfile;
