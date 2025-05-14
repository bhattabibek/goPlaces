import React from 'react'
import { FaGlobe } from "react-icons/fa";

const Register = () => {
  return (
    <>
    <div className='flex flex-col xl:flex-row '>
    <div className=''>
      <img src='/hiking.jpg'/>
    </div>
    <div className='flex flex-col m-10 gap-5 h-screen'>
      <h1 className="text-5xl flex items-center gap-2">
                  G <FaGlobe /> PLACES.
                </h1>
      <input className='border border-gray-400 px-3 rounded py-2' type="text" placeholder='Enter Your Name' />
      <input className='border border-gray-400 px-3 rounded py-2' type='email' placeholder='Enter Your Email'/>
      <input className='border border-gray-400 px-3 rounded py-2' type="password" placeholder='Enter the password'/>
      <input className='border border-gray-400 px-3 rounded py-2' type='password' placeholder="Confirm Password"/>
      <button className='border border-gray-400 px-3 rounded py-2 bg-[#154c79] text-white'>Register</button>
    </div>
    </div>
    </>
  )
}

export default Register