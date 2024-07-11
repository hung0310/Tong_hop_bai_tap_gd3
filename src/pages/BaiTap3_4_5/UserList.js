import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserList() {
  const navigate = useNavigate();
  const [storedUsers, setStoredUsers] = useState([]);

  useEffect(() => {
    // const userData = JSON.parse(sessionStorage.getItem('users'));
    const userData = JSON.parse(localStorage.getItem('users'));
    if (userData) {
      setStoredUsers(userData);
    }
  }, []); 

  const handleUpdate = (id) => {
    navigate(`/user-edit/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa người dùng này không?")) {
      const updatedUsers = storedUsers.filter(user => user.id !== id);
      // sessionStorage.setItem('users', JSON.stringify(updatedUsers));
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      setStoredUsers(updatedUsers);
    }
  };

  return (
    <div className='container-fluid d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>
      <div className='container rounded' style={{ border: "2px solid #959CA9" }}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Email</th>
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Age</th>
              <th scope="col">Address</th>
              <th scope="col">Options</th>
            </tr>
          </thead>
          <tbody>
            {storedUsers.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.fullname}</td>
                <td>{user.gender}</td>
                <td>{user.age}</td>
                <td>{user.address}</td>
                <td className=''>
                  <button onClick={() => handleUpdate(user.id)} className="btn btn-primary px-4">Edit</button>
                  <button onClick={() => handleDelete(user.id)} className="btn btn-danger px-5 mx-3">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserList;