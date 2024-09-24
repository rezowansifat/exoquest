// Loading.js
import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <LoadingContainer>
      <p>Preparing game...</p>
      <p>
        Note: Please wait, Fetching exoplanet data from the NASA API might take
        a little time. I appreciate your patience!
      </p>
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div`
  text-align: center;
  font-size: 1.5em;
  color: white;
`;

export default Loading;
