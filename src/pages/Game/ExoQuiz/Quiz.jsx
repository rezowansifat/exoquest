// Quiz.js
import React, { useState } from "react";
import styled from "styled-components";

const Quiz = ({ exoplanet, onAnswer }) => {
  const { pl_name, disc_year, hostname, pl_orbper } = exoplanet;
  const [selectedOption, setSelectedOption] = useState(null);

  const generateQuestion = () => {
    const questions = [
      {
        question: `In what year was the exoplanet ${pl_name} discovered?`,
        options: [1999, disc_year, 2010, 2015],
        correct: disc_year,
      },
      {
        question: `Which star does the exoplanet ${pl_name} orbit?`,
        options: [hostname, "Star X", "Star Y", "Star Z"],
        correct: hostname,
      },
      {
        question: `What is the orbital period of ${pl_name}?`,
        options: [3, 20, pl_orbper, 30],
        correct: pl_orbper,
      },
      {
        question: `How many days does ${pl_name} take to orbit its star?`,
        options: [5, pl_orbper, 200, 365],
        correct: pl_orbper,
      },
    ];

    return questions[Math.floor(Math.random() * questions.length)];
  };

  const { question, options, correct } = generateQuestion();

  const handleOptionClick = (option) => {
    const isCorrect = option === correct;
    onAnswer(isCorrect);
  };

  return (
    <QuizContainer>
      <p>{question}</p>
      {options.map((option, index) => (
        <Option key={index} onClick={() => handleOptionClick(option)}>
          {option}
        </Option>
      ))}
    </QuizContainer>
  );
};

const QuizContainer = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const Option = styled.button`
  margin: 5px;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
`;

export default Quiz;
