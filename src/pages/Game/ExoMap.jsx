import React from "react";
import styled from "styled-components";

const ExoMap = () => {
  return (
    <Main>
      <Container>hello</Container>
    </Main>
  );
};

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  position: relative;
`;

const Container = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;
`;

export default ExoMap;
