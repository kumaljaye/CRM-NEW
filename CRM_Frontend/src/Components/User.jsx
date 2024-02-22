import React from 'react'
import { Link } from 'react-router-dom'

const User = () => {
  return (
    <><div className='px-5 mt-3'>
      <div className='d-flex justify-content-center'>
        <h3>User List</h3>
      </div>
      <div className="px-5 mt-4">
      </div>
      <Link
        to="/dashboard/add_user"
        className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Add User
      </Link>
    </div><div className='mt-3'>

      </div></>
    
  )
}

export default User