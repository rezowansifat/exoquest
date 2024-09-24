import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Home } from "./pages/Home";
import MissionHome from "./pages/Game/missionHome/MissionHome";
import ExoBot from "./components/ExoBot/ExoBot";
import ExoMap from "./pages/Game/map/ExoMap";
import RedMissions from "./pages/Game/redDawnExploration/RedMissions";
import CosmicSearch from "./pages/Game/cosmicSearch/CosmicSearch";
import CosmicWelcome from "./pages/Game/cosmicSearch/CosmicWelcome";
import Puzzle from "./pages/Game/puzzle/Puzzle";
import RedWelcome from "./pages/Game/redDawnExploration/RedWelcome";
import WelcomeExoQuiz from "./pages/Game/ExoQuiz/welcomeExoQuiz";
import ExoQuiz from "./pages/Game/ExoQuiz/ExoQuiz";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<ExoMap />} />
        <Route path="/missionhome" element={<MissionHome />} />
        <Route path="/bot" element={<ExoBot />} />
        <Route path="/redlevel1" element={<RedMissions />} />
        <Route path="/cosmicwelcome" element={<CosmicWelcome />} />
        <Route path="/cosmicsearch" element={<CosmicSearch />} />
        <Route path="/puzzle" element={<Puzzle />} />
        <Route path="/redwelcome" element={<RedWelcome />} />
        <Route path="/quizwelcome" element={<WelcomeExoQuiz />} />
        <Route path="/exoquiz" element={<ExoQuiz />} />
      </Routes>
    </>
  );
};

export default App;
