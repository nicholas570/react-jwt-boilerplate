import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  // eslint-disable-next-line no-unused-vars
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_ADDRESS}/users`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      })
      .then(({ data }) => setUsers(data))
      .catch((err) => {
        if (err.response.status === 403) {
          alert("Not authorized");
        }
        alert(err.response.data.errorMessage);
      });
  }, []);

  return (
    <div>
      <p>Users List</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id} - email: {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
