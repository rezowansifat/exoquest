import React, { useState } from "react";
import styled from "styled-components";
import boticon from "../../../assets/games/missionHome/chat-bot.png";
import missionbg from "../../../assets/games/missionHome/missionhomebg.png";
import RedDawnExploration from "../../../assets/games/missionHome/Red-Dawn-Exploration.png";
import GenesisQuest from "../../../assets/games/missionHome/Genesis-Quest.png";
import CrimsonAscent from "../../../assets/games/missionHome/Crimson-Ascent.png";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import GameNav from "../../../components/GameNav";

const MissionHome = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
  };

  return (
    <Main>
      <GameNav open={open} toggleDrawer={toggleDrawer} />

      <Container>
        <Headline>
          <h1>Kepler-186f</h1>
        </Headline>
        <Content>
          <MissonCard>
            <img src={RedDawnExploration} alt="Mission 1" />
            <Button className="unlock">
              Mission 1 <ArrowCircleRightOutlinedIcon />
            </Button>
          </MissonCard>
          <MissonCard>
            <img src={GenesisQuest} alt="Mission 2" />
            <Button>
              Mission 2 <LockOutlinedIcon />
            </Button>
          </MissonCard>
          <MissonCard>
            <img src={CrimsonAscent} alt="Mission 3" />
            <Button>
              Mission 3 <LockOutlinedIcon />
            </Button>
          </MissonCard>
        </Content>
      </Container>
    </Main>
  );
};

const Main = styled.div`
  color: #fff;
  width: 100vw;
  height: 100vh;
  background-image: url(${missionbg});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(168, 184, 201, 0.25);
  padding: 40px;
  border-radius: 12px;
  margin-right: 30px;
`;

const Headline = styled.div`
  font-size: 20px;
`;

const MissonCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .unlock {
    background: #566a86;
  }
  img {
    max-width: 250px;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.05);
      cursor: pointer;
    }
  }
`;

const Button = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #5c5c5e 0%, #a8a6a6 100%);
  border: 1px solid #a8b8c9;
  width: 130px;
  height: 35px;
  border-radius: 8px;
  color: #fff;
  font-size: 22px;
  font-weight: 900;
  transition: all 500ms ease;
  cursor: pointer;
  margin-right: 10px;

  svg {
    font-size: 18px;
    margin-left: 12px;
    color: #000 !important;
  }

  &:hover {
    background: #454858;
  }
`;

export default MissionHome;
