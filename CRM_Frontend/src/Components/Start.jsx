import React from 'react';
import { useNavigate } from 'react-router-dom';

const Start = () => {
const navigate = useNavigate()
    return (
        <div className='flex justify-center items-center h-screen loginPage'>
            <div className='p-6 rounded w-1/4 border loginForm'>

                <h2 className='text-center'>Login As</h2>
                <div className="mt-10">
                    <div className='flex justify-between'>
                        <button type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'
                        onClick={() => {navigate('/userlogin')}}
                        >User</button>
                        <button type='button' className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg'
                        onClick={() => {navigate('/adminlogin')}}
                        >Admin</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Start;
