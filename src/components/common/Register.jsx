import { Icon } from "@iconify/react";
import React, { useState } from "react";
import Button from "./Button";
import Input from "../auth/Input";
import { validation } from "../../utils/validation.js";
import axios from "axios";
const Register = ({ showLogin, onClose }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const formHandler = async (e) => {
    e.preventDefault();
    const validationErrors = validation(username, email, password);
    setError(validationErrors);
    if (Object.keys(validationErrors).length !== 0) return; //Checks if there is any error
    try {
      const response = await axios.post("/server/api/users/register", {
        username,
        email,
        password,
      });
      if (response.data.success === true) {
        setError({});
        setUsername("");
        setEmail("");
        setPassword("");
        onClose();
        showLogin();
      }
    } catch (error) {
      console.log("Error while registering user", error);
    }
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/40 backdrop-blur-sm ">
      <form
        onSubmit={(e) => formHandler(e)}
        className="relative bg-white flex flex-col items-center p-6 gap-5 rounded-xl w-100  shadow-[0_0_20px_rgba(0,0,0,0.35)]"
      >
        <Icon icon="tdesign:user-add" width={50} height={50} />

        <div className="flex flex-col items-center gap-2">
          <h1 className="text-xl font-bold">Create An Account</h1>
          <p className="text-center text-gray-500">
            Enter your details to get started
          </p>
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
            placeholder="john doe"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            error={error.username}
          />
          <Input
            label="Email"
            placeholder="johndoe@gmail.com"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            error={error.email}
          />
          <Input
            label="Password"
            placeholder="....."
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            error={error.password}
          />
        </div>
        <Button
          name="Create Account"
          type="submit"
          className="flex border bg-black text-white font-semibold w-full justify-center p-2 rounded-lg"
        />
        <div className="flex gap-2  text-gray-500">
          Already have an account?
          <span
            onClick={showLogin}
            className=" text-black font-semibold cursor-pointer"
          >
            Sign in
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

export default Register;
