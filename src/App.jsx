import React from "react";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Home } from "./pages/Home";
import MissionHome from "./pages/Game/missionHome/MissionHome";
import ExoBot from "./components/ExoBot/ExoBot";
import ExoMap from "./pages/Game/map/ExoMap";
import CosmicSearch from "./pages/Game/cosmicSearch/CosmicSearch";
import CosmicWelcome from "./pages/Game/cosmicSearch/CosmicWelcome";
import Puzzle from "./pages/Game/puzzle/Puzzle";
import RedWelcome from "./pages/Game/redDawnExploration/RedWelcome";
import WelcomeExoQuiz from "./pages/Game/ExoQuiz/WelcomeExoQuiz";
import ExoQuiz from "./pages/Game/ExoQuiz/ExoQuiz";
import ResultScreen from "./pages/Game/ExoQuiz/ResultScreen";
import Lavel1 from "./pages/Game/redDawnExploration/Lavels/Lavel1";
import Lavel2 from "./pages/Game/redDawnExploration/Lavels/Lavel2";
import Lavel3 from "./pages/Game/redDawnExploration/Lavels/Lavel3";
import Lavel4 from "./pages/Game/redDawnExploration/Lavels/Lavel4";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<ExoMap />} />
        <Route path="/missionhome" element={<MissionHome />} />
        <Route path="/bot" element={<ExoBot />} />
        <Route path="/level-1" element={<Lavel1 />} />
        <Route path="/cosmicwelcome" element={<CosmicWelcome />} />
        <Route path="/cosmicsearch" element={<CosmicSearch />} />
        <Route path="/level-2" element={<Lavel2 />} />
        <Route path="/exoquiz" element={<ExoQuiz />} />
        <Route path="/level-3" element={<Lavel3 />} />
        <Route path="/exo-grid" element={<Puzzle />} />
        <Route path="/level-4" element={<Lavel4 />} />
        <Route path="/redwelcome" element={<RedWelcome />} />
        <Route path="/quizwelcome" element={<WelcomeExoQuiz />} />

        <Route path="/playrout" element={<ResultScreen coins={60} />} />
      </Routes>
    </>
  );
};

export default App;
