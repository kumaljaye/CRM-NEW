import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const User = () => {
  const [user, setUser] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    axios.get("http://localhost:3000/auth/user")
      .then(result => {
        if (result.data.Status) {
          setUser(result.data.Result);
        } else {
          alert(result.data.Error)
        }
        console.log(result.data)
      }).catch(err => console.log(err))
  }, [])
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/auth/delete_user/${id}`)
    .then(result => {
      if(result.data.Status) {
        window.location.reload()
      } else {
        alert(result.data.Error)
      }
    })
  }

  return (
    <><div className='px-5 mt-3'>

      <div className="px-5 mt-4">
      </div>
      <Link
        to="/dashboard/add_user"
        className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Add User
      </Link>
    </div><div className='mt-3'>

      </div>
      <div className="mt-3">
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Department</th>
              <th>Type</th>
              <th>Email</th>
              <th>Action</th>

            </tr>
          </thead>
          <tbody>
            {user.map((c, index) => (
              <tr key={index}>
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>{c.department}</td>
                <td>{c.type}</td>
                <td>{c.email}</td>
                <td>
                <Link to={'/dashboard/edit_user/'+c.id} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4">Edit</Link>
                <button onClick={() => handleDelete(c.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4">Delete</button>

                </td>

              </tr>
            ))}
          </tbody>
        </table>

      </div></>

  )
}

export default User