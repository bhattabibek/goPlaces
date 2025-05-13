import React from 'react'

const Login = () => {
  return (
    <>
      <div className='flex flex-col m-10 gap-3 md:m-10 xl:m-100 xl:my-10'>
        <h1>GO PLACES.</h1>
        <input  className="border bg-orange-100" type='text' placeholder='Enter you Email or Username'/>
        <input className="border bg-orange-100" type='password' placeholder='Enter Password'/>
        <button className='border bg-[#154c79] text-white rounded-md  py-2'>Login</button>
      </div>
    </>
  
  )
}

export default Login