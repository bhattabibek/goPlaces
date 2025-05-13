import React from "react";
import LoginButton from "./LoginButton";
import { InputField } from "./InputField";

const Login = () => {
  return (
    <>
      <div className="flex flex-col m-10 gap-3 md:m-10 xl:m-100 xl:my-10">
        <h1>GO PLACES.</h1>
        <InputField />
        <input
          className="border bg-orange-100"
          type="password"
          placeholder="Enter Password"
        />
        <LoginButton />
      </div>
    </>
  );
};

export default Login;
