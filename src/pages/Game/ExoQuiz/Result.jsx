// Result.js
import React from "react";
import styled from "styled-components";

const Result = ({ totalCoins }) => {
  return (
    <ResultContainer>
      <p>Congratulations! You've completed the quiz!</p>
      <p>Total Coins Earned: {totalCoins}</p>
      <NextLevelButton onClick={() => alert("Go to the next level!")}>
        Go to Next Level
      </NextLevelButton>
    </ResultContainer>
  );
};

const ResultContainer = styled.div`
  text-align: center;
  font-size: 1.5em;
  color: white;
`;

const NextLevelButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
`;

export default Result;
