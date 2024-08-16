import React, { useState } from 'react';

function UserForm({ addUser }) {
  const [userName, setUserName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userName) {
      addUser(userName);
      setUserName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a User</h2>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter user name"
      />
      <button type="submit">Add User</button>
    </form>
  );
}

export default UserForm;
