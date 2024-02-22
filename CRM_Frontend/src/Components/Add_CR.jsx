import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Add_CR = () => {
    const [values, setValues] = useState({
        topic: '',
        description: '',
        prototype: ''
       })

    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/auth/add_cr', values )
        .then(result => {
            if(result.data.Status) {alert(result.data.Status)
                navigate('/dashboard')
            } else {
                alert(result.data.Error)
            }
        })
        .catch()
    }
  return (
    <div className='d-flex justify-content-center align-items-center  h-100'>
        <div className='p-3 rounded w-25 border'>

            <h2>Add CR</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='Topic'><strong>Topic:</strong></label>
                    <input type='text' name='topic'  placeholder='Enter Title'
                     onChange={(e) => setValues({...values, topic : e.target.value})} className='form-control rounded-0'/>
                </div>

                <div className='mb-3'>
                    <label htmlFor='Description'><strong>Description:</strong></label>
                    <input type='text' name='description'  placeholder='Enter Description'
                     onChange={(e) => setValues({...values, description : e.target.value})} className='form-control rounded-0'/>
                </div>

                <div className='mb-3'>
                <label htmlFor='Prototype'><strong>Prototype:</strong></label>
                <input type='file' id='inputPrototype'
                onChange={(e) => setUser({...user, prototype : e.target.files[0]})}/>
            </div>

                <button className='btn btn-success w-100 rounded-0 mb-2'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Add_CR