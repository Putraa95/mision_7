import React, { useState } from "react";
import Question from "./classroomQuestion/Question";
import QuestionNavigation from "./classroomQuestion/QuestionNavigation";
import avatar13Image from "../../assets/images/avatar/Avatar13.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faVideo,
  faStar,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

// Daftar modul yang akan ditampilkan di sidebar
const modules = [
  { title: "Video: Introduction to HR", duration: "12 menit" },
  { title: "Video: Introduction to HR", duration: "12 menit" },
  { title: "Video: Introduction to HR", duration: "12 menit" },
  { title: "Video: Introduction to HR", duration: "12 menit" },
  { title: "Video: Introduction to HR", duration: "12 menit" },
  { title: "Rangkuman: Introduction to HR", duration: "12 menit" },
  { title: "QUIZ: Introduction to HR", duration: "10 Pertanyaan" },
];

const ClassroomQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  // Daftar pertanyaan untuk kuis
  const questions = [
    {
      question:
        "Memikirkan dan mengantisipasi secara teliti adanya user secara tidak sengaja mengutak-atik konfigurasi, namun dapat diatasi dengan membuat default yang mengurangi kepanikan pada user adalah pengertian dari ...",
      options: [
        "Memikirkan tentang default ",
        "Mempertimbangkan page layout berdasarkan suatu tujuan",
        "Memastikan bahwa sistem berjalan sesuai dengan apa yang terjadi saat itu juga",
        "menciptakan konsistensi dengan menggunakan elemen UI umun",
      ],
    },
    {
      question: "Apa ibu kota Indonesia?",
      options: ["Jakarta", "Surabaya", "Bandung", "Medan"],
    },
    {
      question: "Siapa presiden pertama Indonesia?",
      options: ["Soekarno", "Soeharto", "Habibie", "Jokowi"],
    },
    {
      question: "Apa hasil bumi utama Indonesia?",
      options: ["Minyak", "Beras", "Kopi", "Timah"],
    },
    {
      question: "Pulau terbesar di Indonesia?",
      options: ["Jawa", "Sumatra", "Kalimantan", "Papua"],
    },
    {
      question: "Tahun berapa Indonesia merdeka?",
      options: ["1945", "1950", "1965", "1970"],
    },
    {
      question: "Apa ibukota negara Jepang?",
      options: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
    },
    {
      question: "Apa bahasa resmi Brasil?",
      options: ["Spanyol", "Portugis", "Inggris", "Prancis"],
    },
    {
      question: "Apa mata uang utama di Eropa?",
      options: ["Euro", "Dollar", "Pound", "Yen"],
    },
    {
      question: "Gunung tertinggi di dunia?",
      options: ["Fuji", "Everest", "Elbrus", "Aconcagua"],
    },
  ];

  const handleAnswer = (answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = answer;
    setAnswers(updatedAnswers);
  };

  const handleQuestionClick = (index) => {
    setCurrentQuestion(index);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white font-sans">
      {/* Navigasi Atas */}
      <nav className="bg-white shadow p-4 w-full flex items-center justify-between">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faArrowLeft} className="text-gray-600 mr-2" />
          <span className="text-lg font-semibold">
            Foundations of User Experience Design
          </span>
        </div>
        <div className="flex items-center">
          <div className="relative space-x-4 mr-4">
            <div className="w-12 h-2 bg-gray-200 rounded">
              <div className="w-12 h-full bg-orange-500 rounded"></div>
            </div>
            <span className="absolute top-1/2 right-0 transform -translate-y-1/2 text-xs text-gray-600 ml-2">
              10/12
            </span>
          </div>
          <img
            src={avatar13Image}
            alt="Avatar"
            className="h-8 w-8 rounded-full"
          />
        </div>
      </nav>

      {/* Konten Utama */}
      <div className="flex-grow flex flex-col lg:flex-row w-full">
        {/* Sidebar */}
        <div className="w-full lg:w-1/5 p-4">
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Soal</h2>
            <QuestionNavigation
              currentQuestion={currentQuestion}
              handleQuestionClick={handleQuestionClick}
            />
          </div>
        </div>

        {/* Section 1 */}
        <div className="w-full lg:w-3/4 p-4 flex flex-col">
          <Question
            question={questions[currentQuestion].question}
            options={questions[currentQuestion].options}
            onAnswer={handleAnswer}
          />
          <div className="mt-4">
            <h2>Jawaban Anda:</h2>
            <ul>
              {answers.map((answer, index) => (
                <li key={index}>{`Soal ${index + 1}: ${answer}`}</li>
              ))}
            </ul>
          </div>
        </div>
        {/* Section 1 END */}
        <div className="lg:hidden flex items-center justify-center py-4 bg-green-500">
          <FontAwesomeIcon icon={faArrowLeft} className="text-white mr-2" />
          <p className="text-lg font-semibold text-white">Sebelumnya</p>
          <p className="text-lg font-semibold text-white mx-4"></p>
          <p className="text-lg font-semibold text-white">Selanjutnya</p>
          <FontAwesomeIcon icon={faArrowRight} className="text-white ml-2" />
        </div>
        {/* Section 2 */}
        <div className="w-full lg:w-1/5 p-4">
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Modul</h2>
            <ul className="space-y-4">
              {modules.map((module, index) => (
                <li
                  key={index}
                  className="border border-gray-300 rounded p-4 flex items-start space-x-4 cursor-pointer hover:bg-gray-100"
                >
                  <FontAwesomeIcon
                    icon={faVideo}
                    className="text-gray-600 text-lg"
                  />
                  <div>
                    <div className="text-sm font-medium text-gray-500">
                      {module.title}
                    </div>
                    <div className="text-sm text-gray-500">
                      {module.duration}
                    </div>
                  </div>
                </li>
              ))}

              {/* Item Tambahan */}
              <div className="flex items-center justify-center mt-4">
                <p>Introduction to HR</p>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="text-gray-600 ml-2"
                />
              </div>
              <div className="flex items-center justify-center bg-yellow-400 text-white w-full p-2 mt-4 rounded">
                <FontAwesomeIcon icon={faStar} className="text-white mr-2" />
                <p>Beri Review & Rating</p>
              </div>
            </ul>
          </div>
        </div>
        {/* Section 2 END */}
      </div>

      {/* Footer */}
      <footer className="bg-green-500 w-full ">
        <div className="flex items-center justify-end mr-20 lg:mr-20 m-2">
          <FontAwesomeIcon icon={faArrowLeft} className="text-white mr-2" />
          <span className="text-xl font-semibold text-white">
            Foundations of User Experience Design
          </span>
        </div>
      </footer>
      <footer className="bg-green-500 w-full py-4"></footer>
    </div>
  );
};

export default ClassroomQuiz;
