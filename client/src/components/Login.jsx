import React from "react";
import LoginButton from "./LoginButton";
import { InputField } from "./InputField";
import { FaGlobe } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const Login = () => {
  return (
    <>
    <div className="flex flex-col xl:flex-row ">
    <div>
      <img src="/trek.jpg"/>
    </div>
      <div className="flex flex-col m-10 w-50 h-70 rounded-lg gap-3 md:m-10 xl:m-130 xl:my-20 ">
        <h1 className="text-5xl flex items-center gap-2">
                         G <FaGlobe /> PLACES.
                       </h1>
        <InputField />
        <input
          className="border px-20 py-2 xl:px-15"
          type="password"
          placeholder="Enter Password"
        />
        <LoginButton />
        <h2 className="text-center">OR</h2>
        <div className="flex flex-col gap-2">
          <h2 className="flex items-center gap-2 border text-white bg-[#EA4335] border-gray-400 rounded-3xl p-10 py-2 xl:px-2  xl:w-80 ">
            <FaGoogle size={20} />
            Login with Google
          </h2>

          <h2 className="flex items-center gap-2 border text-white bg-[#1877F2] border-gray-400 rounded-3xl px-4 py-2 xl:px-3 xl:w-80 xl:text-center">
            <FaFacebook size={20} />
            Login with Facebook
          </h2>
        </div>

        <p className="text-center">Forgot Password</p>
        <button className="bg-amber-500 p-3  xl:w-80">
          Create New Account
        </button>
      </div>
      </div>
    </>
  );
};

export default Login;
