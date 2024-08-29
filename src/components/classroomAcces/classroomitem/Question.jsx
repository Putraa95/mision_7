import React, { useState } from "react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image1 from "../../../assets/images/latar/team-meeting 1.png";
const Question = ({
  number,
  question,
  options,
  onAnswer,
  isLastQuestion,
  onNext,
  onPrevious,
}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    if (isLastQuestion) {
      // Jika ini adalah pertanyaan terakhir, buka modal konfirmasi
      setShowConfirmationModal(true);
    } else {
      onAnswer(selectedOption);
      onNext();
    }
  };

  const handleConfirmFinish = () => {
    onAnswer(selectedOption);
    onNext(); // Panggil fungsi dari parent untuk mengarahkan ke halaman selanjutnya
  };

  const handleCloseModal = () => {
    setShowConfirmationModal(false);
  };

  return (
    <div className="flex flex-col items-start w-full">
      <div className="rounded-lg p-8 bg-white w-full max-w-2xl">
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
            <div key={index} className="mb-2">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="option"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span>{option}</span>
              </label>
            </div>
          ))}
        </div>

        {/* Tombol Navigasi */}
        <div className="mt-4 flex justify-between space-x-2">
          {number > 1 && (
            <button
              onClick={onPrevious}
              className="bg-white text-green-500 text-1xl py-3 px-8 rounded-lg hover:bg-green-300 transition duration-300"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="text-green mr-2" />
              Sebelumnya
            </button>
          )}

          <button
            onClick={handleSubmit}
            className={`text-white text-1xl py-3 px-8 rounded-lg transition duration-300 ${
              isLastQuestion
                ? "bg-green-500 hover:bg-green-900"
                : "bg-green-500 hover:bg-green-700"
            }`}
          >
            {isLastQuestion ? "Selesai" : "Selanjutnya"}
            {!isLastQuestion && (
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-white ml-2"
              />
            )}
          </button>
        </div>
      </div>

      {/* Modal Konfirmasi */}
      {showConfirmationModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 shadow-lg w-96">
            <img src={image1} alt="" />
            <h3 className="text-lg font-bold mb-4 text-center">
              Selesaikan Pretest
            </h3>
            <p className="text-gray-700 mb-6 text-center">
              Apakah Anda yakin ingin menyelesaikan pretestm ini?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleCloseModal}
                className="bg-gray-300 text-gray-700 py-2 px-4 w-full rounded-lg hover:bg-gray-400"
              >
                Batal
              </button>
              <button
                onClick={handleConfirmFinish}
                className="bg-green-500 text-white py-2 px-4 w-full rounded-lg hover:bg-green-700"
              >
                Selesai
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Question;
