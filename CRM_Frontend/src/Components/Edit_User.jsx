import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit_User = () => {
    const { id } = useParams()
    const [user, setUser] = useState({
        name: "",
        department: "",
        type: "",
        email: "",
    });

    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3000/auth/user/' + id)
            .then(result => {
                setUser({
                    ...user,
                    name: result.data.Result[0].name,
                    department: result.data.Result[0].department,
                    type: result.data.Result[0].type,
                    email: result.data.Result[0].email,
                })
            })
            .catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3000/auth/edit_user/' + id, user)
            .then(result => {
                if(result.data.Status) {
                  navigate('/dashboard/user')
                } else {
                  alert(result.data.Error) 
                }
            }).catch(err => console.log(err))
    }

    return (
        <div className="d-flex justify-content-center align-items-center h-100">
            <div className="p-3 rounded w-50 border">
                <h2 className="mb-4">Edit User</h2>
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
                            value={user.name}
                            onChange={(e) => setUser({ ...user, name: e.target.value })}
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
                            value={user.department}
                            onChange={(e) => setUser({ ...user, department: e.target.value })}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="type">
                            <strong>Type:</strong>
                        </label>
                        <select name="category" className="form-control"
                            onChange={(e) => setUser({ ...user, type: e.target.value })}>
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
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                        />
                    </div>

                    <button className="btn btn-success w-100 rounded-0 mb-2 mr-2">Edit User</button>
                    <button className="btn btn-danger w-100 rounded-0 mb-2">Cancel</button>
                </form>
            </div>
        </div>
    )
}

export default Edit_User
