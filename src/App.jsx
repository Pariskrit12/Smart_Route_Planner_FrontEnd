import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import { Routes, Route } from "react-router-dom";
import Planner from "./pages/Planner";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planner" element={<Planner />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
