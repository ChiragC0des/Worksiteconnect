import React from 'react';
import Header from './components/Header';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import useUsers from './hooks/useUsers';

function App() {
  const { users, addUser } = useUsers();

  return (
    <div className="App">
      <Header />
      <UserForm addUser={addUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
