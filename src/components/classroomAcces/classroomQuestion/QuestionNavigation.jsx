import React from "react";

const QuestionNavigation = ({ currentQuestion, handleQuestionClick }) => {
  const questions = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div>
      <ul className="flex space-x-2 mb-2">
        {questions.slice(0, 5).map((number, index) => (
          <li
            key={index}
            className={`border-2 p-4  font-bold text-center cursor-pointer ${
              currentQuestion === index ? "bg-orange-500 text-white" : ""
            }`}
            onClick={() => handleQuestionClick(index)}
          >
            {number}
          </li>
        ))}
      </ul>
      <ul className="flex space-x-2">
        {questions.slice(5).map((number, index) => (
          <li
            key={index + 5}
            className={`border-2 p-4 text-center  font-bold cursor-pointer ${
              currentQuestion === index + 5 ? "bg-orange-500 text-white" : ""
            }`}
            onClick={() => handleQuestionClick(index + 5)}
          >
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionNavigation;
