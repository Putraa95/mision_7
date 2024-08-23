import React, { useState } from "react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Question = ({ number, question, options, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    onAnswer(selectedOption);
  };

  return (
    <div className="flex flex-col items-start w-full">
      <div className=" rounded-lg p-8 bg-white w-full max-w-2xl">
        {/* Nomor Soal */}
        <div className="text-left mb-2">
          <h2 className="text-2xl font-bold">Soal {number}</h2>
        </div>

        {/* Pertanyaan */}
        <div className="text-left mb-2">
          <h3 className="text-1xl">{question}</h3>
        </div>

        <div className="border-2 border-gray-300 mb-8"></div>

        {/* Opsi Jawaban */}
        <div className="space-y-4">
          {options.map((option, index) => (
            <div
              key={index}
              className={`border-2 border-gray-400 rounded-lg p-4 text-s cursor-pointer ${
                selectedOption === option ? "bg-blue-100 border-blue-500" : ""
              }`}
              onClick={() => setSelectedOption(option)}
            >
              <input
                type="radio"
                id={`option${index}`}
                name="question"
                value={option}
                checked={selectedOption === option}
                onChange={handleChange}
                className="mr-4"
              />
              <label htmlFor={`option${index}`}>{option}</label>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-start space-x-2">
          <button
            onClick={handleSubmit}
            className="  bg-white text-green-500 text-1xl py-3 px-8 w-full rounded-lg hover:bg-green-300 transition duration-300"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-green mr-2" />
            Submit
          </button>

          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white text-1xl py-3 px-8 w-full rounded-lg hover:bg-green-700 transition duration-300"
          >
            Selanjutnya
            <FontAwesomeIcon icon={faArrowRight} className="text-white ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
