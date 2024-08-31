import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Question from "./ClassRoomItem/Question";
import QuestionNavigation from "./ClassRoomItem/QuestionNavigation";
import avatar13Image from "../../assets/images/avatar/Avatar13.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faVideo,
  faStar,
  faChevronDown,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

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
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const navigate = useNavigate();

  const questions = [
    {
      question:
        "Memikirkan dan mengantisipasi secara teliti adanya user secara tidak sengaja mengutak-atik konfigurasi, namun dapat diatasi dengan membuat default yang mengurangi kepanikan pada user adalah pengertian dari ...",
      options: [
        "Memikirkan tentang default ",
        "Mempertimbangkan page layout berdasarkan suatu tujuan",
        "Memastikan bahwa sistem berjalan sesuai dengan apa yang terjadi saat itu juga",
        "menciptakan konsistensi dengan menggunakan elemen UI umum",
      ],
      correctAnswer: "Memikirkan tentang default ",
    },
    {
      question: "Apa ibu kota Indonesia?",
      options: ["Jakarta", "Surabaya", "Bandung", "Medan"],
      correctAnswer: "Jakarta",
    },
    {
      question: "Siapa presiden pertama Indonesia?",
      options: ["Soekarno", "Soeharto", "Habibie", "Jokowi"],
      correctAnswer: "Soekarno",
    },
    {
      question: "Apa hasil bumi utama Indonesia?",
      options: ["Minyak", "Beras", "Kopi", "Timah"],
      correctAnswer: "Beras",
    },
    {
      question: "Pulau terbesar di Indonesia?",
      options: ["Jawa", "Sumatra", "Kalimantan", "Papua"],
      correctAnswer: "Kalimantan",
    },
    {
      question: "Tahun berapa Indonesia merdeka?",
      options: ["1945", "1950", "1965", "1970"],
      correctAnswer: "1945",
    },
    {
      question: "Apa ibukota negara Jepang?",
      options: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
      correctAnswer: "Tokyo",
    },
    {
      question: "Apa bahasa resmi Brasil?",
      options: ["Spanyol", "Portugis", "Inggris", "Prancis"],
      correctAnswer: "Portugis",
    },
    {
      question: "Apa mata uang utama di Eropa?",
      options: ["Euro", "Dollar", "Pound", "Yen"],
      correctAnswer: "Euro",
    },
    {
      question: "Gunung tertinggi di dunia?",
      options: ["Fuji", "Everest", "Elbrus", "Aconcagua"],
      correctAnswer: "Everest",
    },
  ];

  const handleAnswer = (selectedOption) => {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOption && currentQuestion && currentQuestion.correctAnswer) {
      const isCorrect =
        selectedOption.trim().toLowerCase() ===
        currentQuestion.correctAnswer.trim().toLowerCase();

      if (isCorrect) {
        setCorrectAnswers(correctAnswers + 1);
      }
    } else {
      console.error("selectedOption atau correctAnswer tidak terdefinisi");
    }

    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = selectedOption;
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1;

    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      const score = (correctAnswers / questions.length) * 100;

      if (score >= 70) {
        // Jika nilai 70 atau lebih, navigasi ke halaman congrats
        navigate("/classroomAcces/congrats", {
          state: { correctAnswers, totalQuestions: questions.length },
        });
      } else {
        // Jika nilai di bawah 70, navigasi ke halaman try again
        navigate("/classroomAcces/tryagain", {
          state: { correctAnswers, totalQuestions: questions.length },
        });
      }
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleQuestionClick = (index) => {
    setCurrentQuestionIndex(index);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white font-sans">
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

      <div className="flex-grow flex flex-col lg:flex-row w-full">
        <div className="w-full lg:w-1/5 p-4">
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Soal</h2>
            <QuestionNavigation
              currentQuestion={currentQuestionIndex}
              handleQuestionClick={handleQuestionClick}
            />
          </div>
        </div>

        <div className="w-full lg:w-3/4 p-4 flex flex-col">
          <div className="flex flex-col items-center">
            <Question
              number={currentQuestionIndex + 1}
              question={questions[currentQuestionIndex].question}
              options={questions[currentQuestionIndex].options}
              onAnswer={handleAnswer}
              isLastQuestion={currentQuestionIndex === questions.length - 1}
              onNext={handleNextQuestion}
              onPrevious={handlePreviousQuestion}
            />
          </div>
        </div>

        <footer className="bg-green-500 w-full py-4 mt-10 lg:hidden">
          <div className="flex items-center justify-between mx-4 lg:mr-20 mb-2">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="text-white mr-2"
              />
              <div className="text-sm lg:text-xl font-semibold text-white hover:underline">
                <p className="mb-0">Foundations of User Experience Design</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-sm lg:text-xl font-semibold text-white hover:underline">
                <p className="mb-0">Foundations of User Experience Design</p>
              </div>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-white ml-2"
              />
            </div>
          </div>
        </footer>

        {/* section 2 */}
        <div className="p-14">
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

              <div className="flex items-center justify-center mt-4  ">
                <p className="">Introduction to HR</p>
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
      </div>

      {/* footer */}

      <footer className="bg-green-500 w-full py-4 mt-10 hidden lg:block">
        <div className="flex items-center justify-between mx-4 lg:mr-20 mb-2">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faChevronLeft} className="text-white mr-2" />
            <div className="text-sm lg:text-xl font-semibold text-white hover:underline">
              <p className="mb-0">Foundations of User Experience Design</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="text-sm lg:text-xl font-semibold text-white hover:underline">
              <p className="mb-0">Foundations of User Experience Design</p>
            </div>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-white ml-2"
            />
          </div>
        </div>
      </footer>

      {/* footer end */}
    </div>
  );
};

export default ClassroomQuiz;
