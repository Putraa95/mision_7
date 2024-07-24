// src/components/Footer.js
import React from "react";
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import navigasiImage from "../assets/images/navigasi.png"; // Pastikan path ini benar

const Footer = () => {
  return (
    <footer className="bg-white  p-8 W-full">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start">
        <div className="flex-1 mb-8 lg:mb-0 text-left sm:text-left">
          <img
            src={navigasiImage}
            alt="FooterImage"
            className="h-12 mb-4 mx-auto lg:mx-0"
          />
          <h4 className="font-bold text-sm md:text-lg">
            Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
          </h4>
          <p className="text-sm md:text-base">
            JL.Usman Effendi No. 50 Lowok waru, Malang
          </p>
          <p className="text-sm md:text-base">+62-877-7123-1234</p>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-10 text-left sm:text-left lg:justify-between w-full lg:w-auto">
          <div className="flex flex-col mb-8 lg:mb-0">
            <h4 className="font-bold mb-2 text-sm md:text-lg">Kategori</h4>
            <ul className="list-none p-0 hidden sm:block">
              <li className="mb-1 text-sm md:text-base">
                Digital & Perusahaan
              </li>
              <li className="mb-1 text-sm md:text-base">Pemasaran</li>
              <li className="mb-1 text-sm md:text-base">Manajmen Bisnis</li>
              <li className="mb-1 text-sm md:text-base">Pengembangan Diri</li>
              <li className="mb-1 text-sm md:text-base">Desain</li>
            </ul>
          </div>

          <div className="flex flex-col mb-8 lg:mb-0">
            <h4 className="font-bold mb-2 text-sm md:text-lg">Perusahaan</h4>
            <ul className="list-none p-0 hidden sm:block">
              <li className="mb-1 text-sm md:text-base">Tentang Kami</li>
              <li className="mb-1 text-sm md:text-base">FAQ</li>
              <li className="mb-1 text-sm md:text-base">Kebijakan Privasi</li>
              <li className="mb-1 text-sm md:text-base">Ketentuan Layanan</li>
              <li className="mb-1 text-sm md:text-base">Bantuan</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="font-bold mb-2 text-sm md:text-lg">Komunitas</h4>
            <ul className="list-none p-0 hidden sm:block">
              <li className="mb-1 text-sm md:text-base">Tips Sukses</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-b mt-8 mb-6"></div>

      <div className="flex flex-col lg:flex-row justify-between items-center">
        <p className="mt-4 text-left text-sm md:text-base">
          @2023 Gerobak Sayur All Right Reserved
        </p>
        <div className="flex items-center mt-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 mx-1"
          >
            <FaTwitter className="w-8 h-8 rounded-full bg-gray-200 p-2" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 mx-1"
          >
            <FaInstagram className="w-8 h-8 rounded-full bg-gray-200 p-2" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 mx-1"
          >
            <FaFacebook className="w-8 h-8 rounded-full bg-gray-200 p-2" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 mx-1"
          >
            <FaLinkedin className="w-8 h-8 rounded-full bg-gray-200 p-2" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
