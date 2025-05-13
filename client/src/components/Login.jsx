import React from "react";
import LoginButton from "./LoginButton";
import { InputField } from "./InputField";
import { FaGlobe } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const Login = () => {
  return (
    <>
      <div className="flex flex-col m-20 w-114 h-80 rounded-lg gap-3 md:m-10 xl:m-100 xl:my-10 ">
         <h1 className="text-5xl flex items-center gap-2">
         G <FaGlobe /> PLACES.
       </h1>
        <InputField />
        <input
          className="border bg-orange-100 px-20 rounded-4xl py-2" 
          type="password"
          placeholder="Enter Password"
        />
        <LoginButton />
        OR
        <div className="flex flex-row gap-2">
  <h2 className="flex items-center gap-2 border text-white bg-[#EA4335] border-gray-400 rounded-3xl px-4 py-2">
    <FaGoogle size={20} />
    Login with Google
  </h2>

  <h2 className="flex items-center gap-2 border text-white bg-[#1877F2] border-gray-400 rounded-3xl px-4 py-2">
    <FaFacebook size={20} />
    Login with Facebook
  </h2>
</div>


        <p>Forgot Password</p>
        <button className="bg-amber-500 p-3 rounded-4xl">Create New Account</button>
      </div>
    </>
  );
};

export default Login;
