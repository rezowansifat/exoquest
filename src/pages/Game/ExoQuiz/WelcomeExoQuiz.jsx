import React, { useState, useEffect } from "react";
import styled from "styled-components";
import quizbgfade from "../../../assets/games/ExoQuiz/quizbgfade.png";
import GameNav from "../../../components/GameNav";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ExoButton from "../../../components/ExoButton";

const WelcomeExoQuiz = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
  };

  return (
    <Main>
      <GameNav open={open} toggleDrawer={toggleDrawer} />
      <Container>
        <h1>Exo Quiz</h1>
        <WelcomeBox
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <p>
            Exo Quiz is a quiz game to <br />
            brainstorming your knowledge! <br />
            <br />
            Are you ready?
          </p>
        </WelcomeBox>
        <ExoButton name="Yes" navigateTo="/exoquiz" />
      </Container>
    </Main>
  );
};

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${quizbgfade});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 2;
  h1 {
    font-size: 40px;
    font-weight: 800;
  }
  p {
    font-size: 30px;
  }
`;

const WelcomeBox = styled(motion.div)`
  background: rgba(86, 106, 134, 0.69);
  width: 550px;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 30px;
  text-align: center;
  font-weight: bolder;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export default WelcomeExoQuiz;
