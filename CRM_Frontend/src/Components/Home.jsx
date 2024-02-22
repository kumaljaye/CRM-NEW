import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [view_cr, setView_cr] = useState([])
  useEffect(()=> {
    axios.get("http://localhost:3000/auth/view_cr")   
    .then(result => {
        if(result.data.Status) {
          setView_cr(result.data.Result);
        } else {
          alert(result.data.Error)
        }
      console.log(result.data)
    }).catch(err => console.log(err))    
  }, [])

  return (
    <><div className="px-5 mt-4">
      <Link
        to="/dashboard/add_cr"
        className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Add CR
      </Link>
    </div><div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Topic</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {
              view_cr.map(c => (
                <tr>
                  <td>{c.topic}</td>
                  <td>{c.description}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div></>
  );
};

export default Home;
