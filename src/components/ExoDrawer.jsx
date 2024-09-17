import * as React from "react";
import Drawer from "@mui/material/Drawer";
import styled from "styled-components";
import profile from "../assets/pages/profile/profile.png";
import CloseIcon from "@mui/icons-material/Close";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const ExoDrawer = ({ open, toggleDrawer }) => {
  return (
    <Drawer
      anchor="right"
      style={{ background: "rgba(61, 77, 100, 0.4)" }}
      open={open}
      onClose={() => toggleDrawer(false)}
    >
      <Container>
        <Header>
          <img src={profile} />
          <CloseIcon />
        </Header>
        <ManuItems>
          <p>Menu</p>

          <ManuBox>
            <ManuItem>
              <HomeOutlinedIcon />
              <p>HOME</p>
            </ManuItem>
          </ManuBox>
        </ManuItems>
      </Container>
    </Drawer>
  );
};

const Container = styled.div`
  width: 500px;
  padding: 20px;
  height: 100%;
  background: rgba(61, 77, 100, 1);
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;

  border-bottom: 2px solid rgba(255, 255, 255, 1);
  padding-bottom: 20px;
  img {
    width: 45px;
    height: 45px;
  }
  svg {
    font-size: 45px;
    font-weight: 800;
    cursor: pointer;
  }
`;
const ManuItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  flex-direction: column;

  p {
    font-size: 45px;
    font-weight: 400;
  }
`;
const ManuBox = styled.div``;
const ManuItem = styled.div``;

export default ExoDrawer;
