import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Home } from "./pages/Home";
// import ExoMap from "./pages/Game/ExoMap";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/map" element={<ExoMap />} /> */}
      </Routes>
    </>
  );
};

export default App;
