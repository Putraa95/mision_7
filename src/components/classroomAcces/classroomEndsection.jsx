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
  faChevronRight,
  faBook,
  faCheckCircle,
  faChevronLeft,
  faDownload,
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

const ClassroomEndsection = () => {
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
            <h1 className="text-1xl font-bold mb-4">
              Download Rangkuman Modul
            </h1>
            <p className="text-lg text-gray-500 mb-4">
              Silahkan download rangkuman modul dari materi yang telah kamu
              pelajari
            </p>
            <button className=" bg-white text-green-500 border border-green-500 text-l py-2 px-6 rounded-lg hover:bg-green-300 transition duration-300 flex items-center mb-8 ">
              <FontAwesomeIcon
                icon={faDownload}
                className="text-green-500 ml-2"
              />
              <span className="m-2">Download Rangkuman</span>
            </button>
          </div>
        </div>
        {/* Section 1 END */}

        <footer className=" bg-green-500 w-full py-4 mt-10 lg:hidden">
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
        {/* Section 2 */}
        <div className="bg-white shadow-lg rounded-lg p-4">
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

        {/* Section 2 END */}
      </div>

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

export default ClassroomEndsection;
