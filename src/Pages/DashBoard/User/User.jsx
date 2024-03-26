import React, { useEffect, useState } from "react";

const User = () => {
  const [users, setuser] = useState([]);
  console.log("hii");

  fetch("http://localhost:5000/user")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setuser(data);
    });
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/user${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  const makeAdmin = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/user${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>name</th>
            <th>email</th>

            <th>role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr className="hover" key={index}>
                <th>{index + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.role}</td>
                <td
                  className="btn 
         "
                  onClick={() => handleDelete(user._id)}
                >
                  Delete
                </td>
                <td
                  className="btn 
         "
                  onClick={() => makeAdmin(user._id)}
                >
                  admin
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default User;
