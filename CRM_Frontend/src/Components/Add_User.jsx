import React, { useState } from "react";
import axios from 'axios';


const Add_User = () => {
  const [user, setUser] = useState({
    name: "",
    department: "",
    type: "",
    email: "",
    password: "",
  });

const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3000/auth/add_user", user)
    .then(result => console.log(result.data))
    .catch(err => console.log(err))
}

  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="p-3 rounded w-50 border">
        <h2 className="mb-4">Add User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name:</strong>
            </label>
            <input
              type="text"
              id="inputName"
              className="form-control"
              placeholder="Enter Name"
              onChange={(e) => setUser({...user, name: e.target.value})}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="department">
              <strong>Department:</strong>
            </label>
            <input
              type="text"
              id="inputDepartment"
              className="form-control"
              placeholder="Enter Department"
              onChange={(e) => setUser({...user, department: e.target.value})}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="type">
              <strong>Type:</strong>
            </label>
            <select name="category" className="form-control"
            onChange={(e) => setUser({...user, type: e.target.value})}>
              <option>CR Creater</option>
              <option>Developer</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="Email">
              <strong>Email:</strong>
            </label>
            <input
              type="Email"
              id="inputEmail"
              className="form-control"
              placeholder="Enter Email"
              onChange={(e) => setUser({...user, email: e.target.value})}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Password">
              <strong>Password:</strong>
            </label>
            <input
              type="Password"
              id="inputPassword"
              className="form-control"
              placeholder="Enter Password"
              onChange={(e) => setUser({...user, password: e.target.value})}
            />
          </div>

          <button className="btn btn-success w-100 rounded-0 mb-2">
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add_User;
