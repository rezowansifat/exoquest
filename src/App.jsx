import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Home } from "./pages/Home";
import MissionHome from "./pages/Game/missionHome/MissionHome";
import ExoBot from "./components/ExoBot/ExoBot";
import ExoMap from "./pages/Game/map/ExoMap";
import Redwelcome from "./pages/Game/redDawnExploration/Redwelcome";
import RedMissions from "./pages/Game/redDawnExploration/RedMissions";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<ExoMap />} />
        <Route path="/missionhome" element={<MissionHome />} />
        <Route path="/bot" element={<ExoBot />} />
        <Route path="/redwelcome" element={<Redwelcome />} />
        <Route path="/redlevel1" element={<RedMissions />} />
      </Routes>
    </>
  );
};

export default App;
