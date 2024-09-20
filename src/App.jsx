import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Home } from "./pages/Home";
import MissionHome from "./pages/Game/missionHome/MissionHome";
import ExoBot from "./components/ExoBot/ExoBot";
import ExoMap from "./pages/Game/map/ExoMap";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<ExoMap />} />
        <Route path="/missionhome" element={<MissionHome />} />
        <Route path="/bot" element={<ExoBot />} />
      </Routes>
    </>
  );
};

export default App;
