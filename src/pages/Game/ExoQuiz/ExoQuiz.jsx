import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import Loading from "./Loading";
import Story from "./Story";
import Quiz from "./Quiz";
import Result from "./Result";

import quizbg from "../../../assets/games/ExoQuiz/quizbg.png";

const ExoQuiz = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentRound, setCurrentRound] = useState(0);
  const [coins, setCoins] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+top+5+pl_name,hostname,disc_year,pl_orbper+from+ps&format=json"
      );
      console.log(response.data);
      setData(response.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setCoins(coins + 20);
    }
    setCurrentRound(currentRound + 1);
  };

  if (loading) {
    return <Loading />;
  }

  if (currentRound < data.length) {
    return (
      <>
        <Story exoplanet={data[currentRound]} />
        <Quiz exoplanet={data[currentRound]} onAnswer={handleAnswer} />
      </>
    );
  }

  return <Result totalCoins={coins} />;
};

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${quizbg});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Container = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 2;
`;

export default ExoQuiz;
