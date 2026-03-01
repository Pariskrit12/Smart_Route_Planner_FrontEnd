import { Icon } from "@iconify/react";
import React, { useState } from "react";
import Button from "./Button";
import Input from "../auth/Input";
import { validation } from "../../utils/validation";

const Login = ({ openRegister,onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const [error, setError] = useState({});
  const formHandler = (e) => {
    e.preventDefault();

    const validationErrors = validation(username, undefined, password);
    setError(validationErrors);

    if (Object.keys(validationErrors).length !== 0) return;

    setError({});
    setPassword("");
    setUsername("");
   
  };
 
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/40 backdrop-blur-sm ">
      <form
        onSubmit={(e) => formHandler(e)}
        className="relative bg-white w-100 flex flex-col gap-5 items-center p-6 rounded-xl  shadow-[0_0_20px_rgba(0,0,0,0.35)]"
      >
        <div className="bg-gray-300 rounded-full p-2">
          <Icon icon="icon-park-outline:to-right" width={50} height={50} />
        </div>
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-xl font-bold">Welcome back</h1>
          <p className="text-center text-gray-500">Sign in to your account</p>
        </div>
        <Button
          type="button"
          name="Sign up with Google"
          icon="flat-color-icons:google"
          className="flex border w-full items-center justify-center gap-3 font-semibold py-2 rounded-lg border-gray-300"
        />
        <div className="flex items-center w-full gap-3">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-sm text-gray-500 whitespace-nowrap">
            OR CONTINUE WITH
          </span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
        <div className="w-full flex flex-col gap-5">
          <Input
            label="Username"
            placeholder="johnDoe"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={error.username}
          />
          <Input
            label="Password"
            placeholder="...."
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={error.password}
          />
        </div>
        <Button
          type="submit"
          name="Sign In"
          className="bg-black text-white w-full flex justify-center p-1 rounded-lg"
        />
        <div className="flex gap-2  text-gray-500">
          Don't have an account?
          <span
            onClick={openRegister}
            className=" text-black font-semibold cursor-pointer "
          >
            Sign up
          </span>
        </div>
        <Icon
          className="absolute right-2 top-2 rounded-full hover:bg-gray-300 hover:cursor-pointer  "
          icon="gridicons:cross"
          width={30}
          height={30}
          onClick={onClose}
        />
      </form>
    </div>
  );
};

export default Login;
