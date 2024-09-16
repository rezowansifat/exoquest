import * as React from "react";

import Drawer from "@mui/material/Drawer";
import styled from "styled-components";
import profile from "../assets/pages/profile/profile.png";
import CloseIcon from "@mui/icons-material/Close";

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
          <h1>Menu</h1>

          <ManuBox></ManuBox>
        </ManuItems>
      </Container>
    </Drawer>
  );
};

const Container = styled.div``;
const Header = styled.div``;
const ManuItems = styled.div``;
const ManuBox = styled.div``;

export default ExoDrawer;
