import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import avatar13Image from "../../assets/images/avatar/Avatar13.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faVideo,
  faStar,
  faChevronDown,
  faChevronLeft,
  faListOl,
  faCheckCircle,
  faTimesCircle,
  faRedo,
  faChevronRight,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import imageTryAgain from "../../assets/images/latar/tryAgain.png";

const modules = [
  { title: "Video: Introduction to HR", duration: "12 menit" },
  { title: "Video: Introduction to HR", duration: "12 menit" },
  { title: "Video: Introduction to HR", duration: "12 menit" },
  { title: "Video: Introduction to HR", duration: "12 menit" },
  { title: "Video: Introduction to HR", duration: "12 menit" },
  { title: "Rangkuman: Introduction to HR", duration: "12 menit" },
  { title: "QUIZ Introduction to HR", duration: "10 Pertanyaan" },
];

const ClaasroomTryAgain = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { correctAnswers, totalQuestions } = location.state || {};
  const incorrectAnswers = totalQuestions - correctAnswers;
  const handleClick = () => {
    navigate("/classroomAcces/quiz"); // Mengarahkan ke halaman classroomQuiz
  };
  return (
    <div className="min-h-screen flex flex-col items-center bg-white font-sans">
      {/* navigation */}
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
      {/* navigation end */}

      {/* section 1 */}
      <div className="flex-grow flex flex-col lg:flex-row w-full">
        <div className="w-full lg:w-3/4 p-2 flex flex-col ">
          <img
            src={imageTryAgain}
            alt="Video Thumbnail"
            className="w-full= h-auto rounded-lg mb-10"
          />
          <div className="flex justify-center">
            <div className=" w-3/4">
              <h1 className="text-xl font-bold mb-2">Tanggal Quiz</h1>
              <p className="text-gray-600 mb-6">23 September 2022, 10:20 AM</p>
              <ul className="flex border-t border-b border-gray-300 py-4">
                <li className="flex-1 text-center border-r border-gray-300">
                  <div className="flex items-center justify-center">
                    <span className="font-semibold">Nilai</span>
                  </div>
                  <p className="text-gray-600">
                    {(correctAnswers / totalQuestions) * 100}
                  </p>
                </li>
                <li className="flex-1 text-center border-r border-gray-300">
                  <div className="flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faListOl}
                      className="text-gray-600 mr-2"
                    />
                    <span className="font-semibold">Soal</span>
                  </div>
                  <p className="text-gray-600">{totalQuestions}</p>
                </li>
                <li className="flex-1 text-center border-r border-gray-300">
                  <div className="flex items-center justify-center">
                    <span className="font-semibold">Benar</span>
                  </div>
                  <p className="text-gray-600">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-green-500  mr-2"
                    />
                    {correctAnswers}
                  </p>
                </li>
                <li className="flex-1 text-center">
                  <div className="flex items-center justify-center">
                    <span className="font-semibold">Salah</span>
                  </div>
                  <p className="text-gray-600">
                    <FontAwesomeIcon
                      icon={faTimesCircle}
                      className="text-red-500 mr-2"
                    />
                    {incorrectAnswers}
                  </p>
                </li>
              </ul>
              <h1 className="text-xl font-bold mt-6 mb-2">Selesai</h1>
              <p className="text-gray-600 mb-4">
                Pretest sudah selesai dan kami sudah mengetahui progresmu.
              </p>
              <p className="text-gray-600 mb-4">Saatnya memulai kelas.</p>
              <button
                onClick={handleClick} // Menggunakan handleClick saat tombol diklik
                className=" bg-white text-green-500 border border-green-500 text-l py-2 px-8 rounded-lg hover:bg-green-300 transition duration-300 flex items-center mb-8 "
              >
                Ulangi Quiz
                <FontAwesomeIcon
                  icon={faRedo}
                  className="text-green-500 ml-2"
                />
              </button>
            </div>
          </div>
        </div>
        {/* Section 1 END */}

        {/* footer untuk responsive handphone */}
        <footer className="bg-green-500 w-full py-4 lg:hidden ">
          <div className="flex items-center justify-between mx-4 lg:mr-20 mb-2">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="text-white mr-2"
              />
              <Link
                to="/classroomAcces/quiz"
                className="text-sm lg:text-xl font-semibold text-white hover:underline"
              >
                <p className="mb-0 lg:text-s">
                  Foundations of User Experience Design
                </p>
              </Link>
            </div>
            <div className="flex items-center">
              <Link
                to="/classroomAcces/quiz"
                className="text-sm lg:text-xl font-semibold text-white hover:underline"
              >
                <p className="mb-0">Foundations of User Experience Design</p>
              </Link>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-white mr-2"
              />
            </div>
          </div>
        </footer>
        {/* footer untuk responsive handphone */}

        {/* Section 2 */}
        <div className="p-14">
          <h2 className="text-xl font-semibold mb-4">Modul</h2>
          <ul className="space-y-4">
            {modules.map((module, index) => (
              <li
                key={index}
                className="border border-gray-300 rounded p-4 flex items-start space-x-4 cursor-pointer hover:bg-gray-100"
              >
                {/* Kondisi untuk ikon FontAwesome yang berbeda */}
                {module.title.includes("Rangkuman") ? (
                  <FontAwesomeIcon
                    icon={faBook}
                    className="text-gray-600 text-lg"
                  />
                ) : module.title.includes("QUIZ") ? (
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-gray-600 text-lg"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faVideo}
                    className="text-gray-600 text-lg"
                  />
                )}

                <div>
                  <div className="text-sm font-medium text-gray-500">
                    {module.title}
                  </div>
                  <div className="text-sm text-gray-500">{module.duration}</div>
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

      {/* Footer */}
      <footer className="hidden lg:block bg-green-500 w-full py-4 mt-10">
        <div className="flex items-center justify-between mx-4 lg:mr-20 mb-2">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faChevronLeft} className="text-white mr-2" />
            <Link
              to="/classroomAcces/quiz"
              className="text-sm lg:text-xl font-semibold text-white hover:underline"
            >
              <p className="mb-0">Foundations of User Experience Design</p>
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              to="/classroomAcces/quiz"
              className="text-sm lg:text-xl font-semibold text-white hover:underline"
            >
              <p className="mb-0">Foundations of User Experience Design</p>
            </Link>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-white ml-2"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ClaasroomTryAgain;
