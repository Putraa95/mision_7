import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import navIcon from "../../assets/images/navigasi.png";
import ImageCertificate from "../../assets/images/latar/sartifikat.png";
import avatar13Image from "../../assets/images/avatar/Avatar1.png";
import { faStar, faDownload } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/item/Footer";

const ClassroomCertificate = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFE58036] text-[#333] font-sans">
      <div className="bg-white shadow p-6 w-full flex flex-col lg:flex-row items-center justify-between">
        {/* Navbar */}
        <nav className="flex flex-col lg:flex-row items-center justify-between w-full">
          <img src={navIcon} alt="Navigation Logo" className="mb-4 lg:mb-0" />
          {/* Progress Bar for Desktop */}
        </nav>
      </div>

      <div className="flex flex-1 items-center justify-center p-6">
        {/* Kotak di Tengah */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full lg:w-3/4 text-center">
          {/* Responsive Gambar */}
          <img
            src={ImageCertificate}
            alt="Sample"
            className="w-full h-auto rounded-lg mb-4 lg:mb-8"
          />
          {/* Section 1 */}
          <div className="text-left">
            <h1 className="text-xl lg:text-2xl font-bold mb-4">
              Praktikan Skill dengan Teknikal Book
            </h1>
            <p className="text-base lg:text-lg text-gray-500 mb-4">
              Pelajari dan praktikkan skill teknis dalam berbagai industri
              dengan Technical Book Riselearn
            </p>
            {/* Flex Container untuk Avatar dan Tombol */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0 lg:space-x-4">
              {/* Avatar dan Rating */}
              <div className="flex items-center mb-4 lg:mb-0">
                <img src={avatar13Image} alt="Avatar" className="h-12 w-12 " />
                <div className="ml-4">
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

              {/* Tombol Download Sertifikat */}
              <button className=" bg-white text-green-500 border border-green-500 text-l py-2 px-4 lg:px-6 rounded-lg hover:bg-green-300 transition duration-300 flex items-center mb-4 lg:mb-0">
                <FontAwesomeIcon icon={faDownload} className="text-green-500" />
                <span className="ml-2">Download Sertifikat</span>
              </button>
            </div>
          </div>
          {/* Section 1 end */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ClassroomCertificate;
