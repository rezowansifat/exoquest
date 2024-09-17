import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ExoButton = ({ name, navigateTo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(navigateTo);
  };

  return <Button onClick={handleClick}>{name}</Button>;
};

const Button = styled.button`
  font-size: 20px;
  font-weight: 400px;
  width: 150px;
  gap: 0px;
  border-radius: 10px;
  border: 1px;
  background: #454858;
  border: 1px solid #a8b8c9;
  box-shadow: 0px 4px 12.2px 0px rgba(168, 184, 201, 0.3);
`;

export default ExoButton;
