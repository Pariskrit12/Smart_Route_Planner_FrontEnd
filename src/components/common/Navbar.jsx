import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";
import LinkButton from "./LinkButton";
import Login from "./Login";
import Register from "./Register";
const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const navigation = (link) => {
    navigate(link);
  };
  const isHome = pathname === "/";
  const isSetting = pathname === "/settings";
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const loginButtonToggle = () => {
    setLoginOpen(true);
  };
  const registerButtonToggle = () => {
    setRegisterOpen(true);
  };

  const hamburgerHandler = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <nav
        className={`sticky z-50 top-0  bg-white/30 border-b border-gray-200 backdrop-blur-3xl  gap-4 p-3 flex items-center  justify-between `}
      >
        <div onClick={() => navigation("/")} className="flex ">
          <div className="flex items-center">
            <Icon color="blue" icon="majesticons:send" width="45" height="45" />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold">Smart Route Planner</h1>
            <p className=" text-sm leading-none">
              Optimize your journey, save time and money
            </p>
          </div>
        </div>
        {isHome ? (
          <>
            <div onClick={hamburgerHandler} className=" relative md:hidden ">
              <Icon icon="pajamas:hamburger" width="20" height="20" />
              {open && (
                <div className="absolute top-6 right-0 bg-white shadow-lg rounded-lg p-3 flex flex-col gap-3">
                  <Button name="Login" onClick={loginButtonToggle}/>
                  <Button name="SignUp" onClick={registerButtonToggle}/>
                </div>
              )}
            </div>
            <div className="hidden md:flex gap-2">
              <Button
                name="Sign Up"
                className="bg-blue-700 text-white p-1 px-2 rounded-xl font-semibold"
                onClick={registerButtonToggle}
              />
              <Button
                name="Login"
                className="bg-black text-white p-1 px-2 rounded-xl font-semibold"
                onClick={loginButtonToggle}
              />
            </div>
          </>
        ) : (
          <>
            <div onClick={hamburgerHandler} className=" relative md:hidden ">
              <Icon icon="pajamas:hamburger" width="20" height="20" />
              {open && (
                <div className="absolute top-6 right-0 bg-white shadow-lg rounded-lg p-3 flex flex-col gap-3">
                  <LinkButton name="Home" pageLink="/" />

                  {!isSetting && (
                    <LinkButton
                      name="Setting"
                      pageLink="/settings"
                      icon="uil:setting"
                    />
                  )}
                </div>
              )}
            </div>
            <div className="hidden md:flex gap-5">
              <LinkButton
                name="Home"
                pageLink="/"
                className="bg-white px-5 shadow-[0_0_5px_rgba(0,0,0,0.25)]  rounded-xl"
              />
              {!isSetting && (
                <LinkButton
                  name="Setting"
                  pageLink="/settings"
                  icon="uil:setting"
                  className="flex items-center bg-white px-2 p-1 rounded-xl shadow-[0_0_5px_rgba(0,0,0,0.25)]"
                />
              )}
            </div>
          </>
        )}
      </nav>
      {loginOpen && (
        <Login
          onClose={() => setLoginOpen(false)}
          openRegister={() => {
            setLoginOpen(false);
            setRegisterOpen(true);
          }}
        />
      )}
      {registerOpen && (
        <Register
          onClose={() => setRegisterOpen(false)}
          showLogin={() => {
            setRegisterOpen(false);
            setLoginOpen(true);
          }}
        />
      )}
    </>
  );
};

export default Navbar;
