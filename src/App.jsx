import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import { Routes, Route } from "react-router-dom";
import Planner from "./pages/Planner";
import Map from "./pages/Map";
import Result from "./pages/Result";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/map" element={<Map />} />
        <Route path="/results" element={<Result />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
