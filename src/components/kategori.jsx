import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropdownButton from "./DropdownButton";
import SearchBar from "./SearchBar";
import navigasiImage from "../assets/images/navigasi.png";
import avatar1Image from "../assets/images/avatar/Avatar1.png";
import menu1Image from "../assets/images/menu/menu1.png";
import menu2Image from "../assets/images/menu/menu2.png";
import menu3Image from "../assets/images/menu/menu3.png";
import menu4Image from "../assets/images/menu/menu4.png";
import avatar2Image from "../assets/images/avatar/Avatar2.png";
import avatar3Image from "../assets/images/avatar/Avatar3.png";
import avatar4Image from "../assets/images/avatar/Avatar4.png";

// import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
// import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faClock, faMessage } from "@fortawesome/free-solid-svg-icons";

import Footer from "../components/Footer";

import Pagination from "./Pagination";

const contentData = [
  {
    image: menu1Image,
    title: "Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    author: "Jenna Ortega",
    position: "Senior Accountant di Gojek",
    rating: 5,
    price: "Rp 300k",
    avatar: avatar1Image,
  },
  {
    image: menu2Image,
    title: "Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    author: "Jenna Ortega",
    position: "Senior Accountant di Gojek",
    rating: 5,
    price: "Rp 300k",
    avatar: avatar2Image,
  },
  {
    image: menu3Image,
    title: "Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    author: "Jenna Ortega",
    position: "Senior Accountant di Gojek",
    rating: 5,
    price: "Rp 300k",
    avatar: avatar3Image,
  },
  {
    image: menu4Image,
    title: "Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    author: "Jenna Ortega",
    position: "Senior Accountant di Gojek",
    rating: 5,
    price: "Rp 300k",
    avatar: avatar4Image,
  },
];

const Kategori = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 6;
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-[#FFE58036]  font-sans min-h-screen overflow-hidden">
      <nav className="bg-white  p-4 w-full flex items-center justify-between">
        <img src={navigasiImage} alt="Navigation Logo" className="h-12" />
        <div className="flex items-center space-x-4">
          <Link to="/kategori" className="text-black font-medium">
            Kategori
          </Link>
          <img src={avatar1Image} alt="Icon" className="h-8 w-8" />
        </div>
      </nav>

      {/* Seciton 2 judul */}
      <section className="p-5">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-10">
          <div className="order-1 lg:order-1">
            <h1 className="text-2xl font-bold">
              Koleksi Video Pembelajaran Unggulan
            </h1>
            <p>Jelajahi Dunia Pengetahuan Melalui Pilihan Kami</p>
          </div>

          {/* Section 3 dropdown */}
          <div className="order-3 lg:order-2 flex space-x-4 lg:mr-32 lg:mt-10 mt-5  w-full lg:w-auto">
            <DropdownButton
              className="w-full lg:w-auto"
              options={[
                "Harga Rendah",
                "Harga Tinggi",
                "A to Z",
                "Z to A",
                "Rating Tertinggi",
                "Rating Terendah",
              ]}
            />
            <SearchBar className="w-full  lg:w-auto" />
          </div>
        </div>

        {/* Section 4 dropdown kategori */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Sidebar Filter */}
          <div className="order-2 lg:order-1 col-span-1 flex flex-col items-center">
            {/* Konten Filter */}
            <div className="shadow bg-white p-2 w-full lg:w-3/5 mb-4">
              <h3 className="font-medium mb-4 text-green-400">
                Kategori utama
              </h3>
              <div className="border border-gray-200 p-4">
                <h3
                  className="font-medium mb-4 text-green-400"
                  onClick={handleDropdownToggle}
                >
                  <FontAwesomeIcon icon={faBook} className="mr-2" />
                  Bidang studi
                </h3>
                {isDropdownOpen && (
                  <div className="flex flex-col space-y-2">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox text-green-300"
                        value="kategori1"
                      />
                      <span className="ml-2">Pemasaran</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox text-green-300"
                        value="kategori2"
                      />
                      <span className="ml-2">Digital & Teknologi</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox text-green-300"
                        value="kategori3"
                      />
                      <span className="ml-2">Pengembangan Diri</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox text-green-300"
                        value="kategori3"
                      />
                      <span className="ml-2">Bisnis Manjemen</span>
                    </label>
                  </div>
                )}
              </div>
            </div>

            {/* Konten Filter (Kedua) */}
            <div className="shadow bg-white p-2 w-full lg:w-3/5 mb-4">
              <div className="border border-gray-200 p-4">
                <h3
                  className="font-medium mb-2 text-green-400"
                  onClick={handleDropdownToggle}
                >
                  <FontAwesomeIcon icon={faMessage} className="mr-2" />
                  Harga
                </h3>
                {isDropdownOpen && (
                  <div className="flex flex-col space-y-2">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox text-green-300"
                        value="kategori1"
                      />
                      <span className="ml-2">Pemasaran</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox text-green-300"
                        value="kategori2"
                      />
                      <span className="ml-2">Digital & Teknologi</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox text-green-300"
                        value="kategori3"
                      />
                      <span className="ml-2">Pengembangan Diri</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox text-green-300"
                        value="kategori3"
                      />
                      <span className="ml-2">Bisnis Manjemen</span>
                    </label>
                  </div>
                )}
              </div>
            </div>

            {/* Konten Filter (Ketiga) */}
            <div className="shadow bg-white p-2 w-full lg:w-3/5 mb-4">
              <div className="border border-gray-200 p-4">
                <h3
                  className="font-medium mb-2 text-green-400"
                  onClick={handleDropdownToggle}
                >
                  <FontAwesomeIcon icon={faClock} className="mr-2" />
                  Durasi
                </h3>
                {isDropdownOpen && (
                  <div className="flex flex-col space-y-2">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox text-green-300 rounded-full h-4 w-4"
                        value="kategori1"
                      />
                      <span className="ml-2">Kurang dari 4 Jam</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox text-green-300 rounded-full h-4 w-4"
                        value="kategori2"
                      />
                      <span className="ml-2">4-8 Jam</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox text-green-300 rounded-full h-4 w-4"
                        value="kategori3"
                      />
                      <span className="ml-2">lebih dari 8 Jam</span>
                    </label>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="order-3 lg:order-2 col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contentData.map((item, index) => (
                <div key={index} className="bg-white shadow p-4 w-full mb-4">
                  <img
                    src={item.image}
                    alt={`Gambar ${index + 1}`}
                    className="w-full mb-2"
                  />
                  <p className="font-bold">{item.title}</p>
                  <p className="text-sm mb-2 hiden sm:block ">
                    {item.description}
                  </p>
                  <div className="flex items-center mb-2">
                    <img
                      src={item.avatar}
                      alt="Menu Icon"
                      className="w-8 h-8 mr-2"
                    />
                    <div className="text-xs">
                      <p>{item.author}</p>
                      <p>{item.position}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {[...Array(item.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-yellow-500 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 1L12.245 6.432H18.364L13.818 10.568L16.064 16L10.001 12.999L3.937 16L6.183 10.568L1.636 6.432H7.755L10 1Z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-green-500 font-bold justify-between">
                      {item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </section>
      <Footer />
    </div>
  );
};

export default Kategori;
