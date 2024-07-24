// src/App.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
//import navigasi
import navIcon from "../../assets/images/navigasi.png";

import sampleImage from "../../assets/images/logo_selesai/selesai.png";

function Pembayaran4() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFE58036] text-[#333] font-sans">
      <div className="bg-white shadow p-6 w-full flex flex-col lg:flex-row items-center justify-between">
        {/* Navbar */}
        <nav className="flex flex-col lg:flex-row items-center justify-between w-full">
          <img src={navIcon} alt="Navigation Logo" className="mb-4 lg:mb-0" />

          {/* Progress Bar for Desktop */}
          <div className="hidden lg:flex items-center space-x-6 lg:ml-auto mt-4 lg:mt-0">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-4 h-4 rounded-full bg-green-500 text-white">
                <FontAwesomeIcon icon={faCheckCircle} size="xs" />
              </div>
              <span className="ml-1 text-sm">Pilih Metode</span>
            </div>
            <div className="w-16 h-px bg-gray-300"></div>
            <div className="flex items-center">
              <div className="flex items-center justify-center w-4 h-4 rounded-full bg-gray-300">
                <span className="text-gray-600 text-sm">2</span>
              </div>
              <span className="ml-1 text-gray-600 text-sm">Bayar</span>
            </div>
            <div className="w-16 h-px bg-gray-300"></div>
            <div className="flex items-center">
              <div className="flex items-center justify-center w-4 h-4 rounded-full bg-gray-300">
                <span className="text-gray-600 text-sm">3</span>
              </div>
              <span className="ml-1 text-gray-600 text-sm">Selesai</span>
            </div>
          </div>
        </nav>
      </div>
      <div className="flex flex-1 items-center justify-center p-6">
        {/* Kotak di Tengah */}
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
          <img
            src={sampleImage}
            alt="Sample"
            className="w-full h-auto rounded-lg mb-4"
          />
          <p className="font-bold text-xl mb-5">Pembayaran Berhasil</p>
          <span className="text-gray-500 font-sans mb-5">
            Silakan cek email kamu untuk informasi lebih lanjut. Hubungi kami
            jika ada kendala.
          </span>
          <button className=" bg-green-500 text-white py-4 px-6 rounded-lg mt-6 ">
            Lihat Detail Pemesanan
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pembayaran4;
