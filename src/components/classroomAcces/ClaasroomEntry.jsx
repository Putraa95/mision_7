// src/components/ClassroomEntry.js
import React from "react";
import avatar13Image from "../../assets/images/avatar/Avatar13.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faVideo,
  faStar,
  faChevronDown,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Video1 from "../../assets/video/Video.png";

const modules = [
  { title: "Video: Introduction to HR", duration: "12 menit" },
  { title: "Video: Introduction to HR", duration: "12 menit" },
  { title: "Video: Introduction to HR", duration: "12 menit" },
  { title: "Video: Introduction to HR", duration: "12 menit" },
  { title: "Video: Introduction to HR", duration: "12 menit" },
  { title: "Rangkuman: Introduction to HR", duration: "12 menit" },
  { title: "QUIZ Introduction to HR", duration: "10 Pertanyaan" },
];

const ClassroomEntry = () => {
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
        {/* Section 1 */}
        <div className="w-full lg:w-3/4 p-4 flex flex-col">
          <img
            src={Video1}
            alt="Video Thumbnail"
            className="w-full h-auto rounded-lg"
          />

          <div className="mt-4 lg:ml-20">
            <h1 className="text-2xl font-bold mb-4">
              Praktikan Skill dengan Teknikal Book
            </h1>
            <p className="text-lg text-gray-500 mb-4">
              Pelajari dan praktikkan skill teknis dalam berbagai industri
              dengan Technical Book Riselearn
            </p>
            <div className="flex items-center space-x-4">
              <img
                src={avatar13Image}
                alt="Avatar"
                className="h-12 w-12 rounded-full"
              />
              <div>
                <p className="font-bold text-lg">Jenna Ortega</p>
                <p className="text-gray-500 text-sm">
                  Senior Accountant di Gojek
                </p>
                <div className="flex items-center mt-2">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-yellow-500 text-lg"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-yellow-500 text-lg"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-yellow-500 text-lg"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-gray-500 text-lg"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-gray-500 text-lg"
                  />
                  <p className="text-gray-500 ml-2">3.5(86)</p>
                </div>
              </div>
            </div>
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
          <Link
            to="/classroomAcces/quiz"
            className="text-xl font-semibold text-white hover:underline"
          >
            Foundations of User Experience Design
          </Link>
        </div>
        {/* Navigation Section - Visible only on Mobile */}
      </footer>
      <footer className="bg-green-500 w-full py-4"></footer>
    </div>
  );
};

export default ClassroomEntry;
