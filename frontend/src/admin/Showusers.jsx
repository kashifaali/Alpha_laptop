import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Showusers() {
  const [users, setusers] = useState([]);

  useEffect(() => {
    axios.get('/api/usersdata')
      .then((response) => {
        setusers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/delete-user/${id}`);
      setusers(users.filter((user) => user._id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleEdit = (id) => {
    console.log('Edit user:', id);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-emerald-500 mb-6">
      <h2 className="text-xl font-semibold text-emerald-700 mb-4">
        Registered Users
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-emerald-100 text-emerald-800">
            <tr>
              <th className="p-3">Username</th>
              <th className="p-3">Email</th>
              <th className="p-3">Registered At</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="hover:bg-slate-100 text-black">
                <td className="p-3">{user.username}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{new Date(user.createdAt).toLocaleDateString()}</td>
                <td className="p-3">
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                  
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan="4" className="p-3 text-gray-500 text-center">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
