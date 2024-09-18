import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ExoDrawer from "../../components/ExoDrawer";
import mapbg from "../../assets/pages/bg/mapbg.png";

import {
  kepler186f,
  kepler22b,
  Gliese,
  trappist1e,
  kepler442b,
  kepler62f,
  Ellipse,
} from "../../assets/games/ExoPlanets";

const ExoMap = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <Main>
      <Container>
        <BackArrow onClick={handleBack}>
          <ArrowBackIcon />
        </BackArrow>
        <MenuBar onClick={() => toggleDrawer(true)}>
          <MenuIcon />
        </MenuBar>
        <ExoDrawer open={drawerOpen} toggleDrawer={toggleDrawer} />

        {/* map */}
      </Container>
    </Main>
  );
};

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  position: relative;
  background-image: url(${mapbg});
`;

const Container = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
  overflow: hidden;
`;

const BackArrow = styled.div`
  position: absolute;
  top: 10px;
  left: 0;
  z-index: 100;
  svg {
    font-size: 40px;
    font-weight: 800;
    color: #fff;
    cursor: pointer;
  }
`;

const MenuBar = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
  z-index: 100;
  svg {
    font-size: 40px;
    font-weight: 800;
    color: #fff;
    cursor: pointer;
  }
`;

export default ExoMap;
