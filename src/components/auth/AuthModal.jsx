import React, { useState } from "react";
import Login from "../common/Login";
import Register from "../common/Register";

const AuthModal = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(false);
  return (
    <>
      {showLogin && (
        <Login
          openRegister={() => {
            setShowLogin(false);
            setShowRegister(true);
          }}
        />
      )}
      {showRegister && (
        <Register
          showLogin={() => {
            setShowRegister(false);
            setShowLogin(true);
          }}
        />
      )}
    </>
  );
};

export default AuthModal;
