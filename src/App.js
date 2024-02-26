import React, { useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Twinkle Panchal", email: "twinkle.panchal@krishtechnolabs.com" }
  ]);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addUser = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    const newUser = {
      id: users.length + 1,
      name: formData.name,
      email: formData.email
    };
    setUsers([...users, newUser]);
    setFormData({ name: '', email: '' });
  };

  const editUser = (id) => {
    const userToEdit = users.find(user => user.id === id);
    setFormData({ name: userToEdit.name, email: userToEdit.email });
    deleteUser(id);
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="App">
      <h1>User Form</h1>

      <form onSubmit={addUser}>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required /><br /><br />
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required /><br /><br />
        <button type="submit">Add User</button>
      </form>

      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => editUser(user.id)}>Edit</button>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
