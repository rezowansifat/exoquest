// Story.js
import React from "react";
import styled from "styled-components";

const Story = ({ exoplanet }) => {
  const { pl_name, hostname, disc_year, pl_orbper } = exoplanet;
  return (
    <StoryContainer>
      <p>{`${pl_name} is an exoplanet discovered in ${disc_year}, orbiting a star named ${hostname}. This planet completes its orbit around the star in just ${pl_orbper} days, meaning a year on ${pl_name} is incredibly short compared to Earth. Its discovery was part of a project that hunts for distant worlds beyond our solar system.`}</p>
    </StoryContainer>
  );
};

const StoryContainer = styled.div`
  text-align: center;
  font-size: 1.2em;
  color: white;
  margin: 20px 0;
`;

export default Story;
