import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserTable.css';

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:4000/getapi/take');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="mx-auto mt-10 bg-gray-200 max-w-7xl px-4 sm:px-6 lg:px-8">
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Country</th>
          <th>Address</th>
          <th>City</th>
          <th>Region</th>
          <th>Pin Code</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user._id}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.country}</td>
            <td>{user.address}</td>
            <td>{user.city}</td>
            <td>{user.region}</td>
            <td>{user.pinCode}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default UserTable;
