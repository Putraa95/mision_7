import React from "react";
// import navigasiImage from "../assets/images/navigasi.png";
import { Link } from "react-router-dom";

import Footer from "../item/Footer";

//import navigasi

import navIcon from "../../assets/images/navigasi.png";

//import pembayaran bank
import BankBCA from "../../assets/images/logo_Pembayaran/bca.png";
import BankBNI from "../../assets/images/logo_Pembayaran/bni.png";
import BankBRI from "../../assets/images/logo_Pembayaran/bri.png";
import Dana from "../../assets/images/logo_Pembayaran/dana.png";
import LinkAja from "../../assets/images/logo_Pembayaran/link aja.png";
import Mandiri from "../../assets/images/logo_Pembayaran/mandiri.png";
import OVO from "../../assets/images/logo_Pembayaran/ovo.png";
import ShopeLogo from "../../assets/images/logo_Pembayaran/shope.png";
import AtmBersama from "../../assets/images/logo_Pembayaran/atmbersama.png";

//link logo
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faCheckCircle,
  faFileAlt,
  faVideo,
  faCertificate,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

//link menu
import menu1 from "../../assets/images/menu/menu1.png";

const PaymentOverview = () => {
  return (
    // section Pembayaran

    <div className="flex flex-col min-h-screen bg-[#FFE58036] text-[#333] font-sans">
      <div>
        <div className="bg-white shadow p-4 w-full flex flex-col lg:flex-row items-center justify-between">
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

        {/* Progress Bar for Mobile */}
        <div className="lg:hidden  w-full p-4 flex items-center justify-center">
          <div className="flex space-x-6">
            <div className="flex">
              <div className="flex items-center justify-center w-4 h-4 rounded-full bg-green-500 text-white">
                <FontAwesomeIcon icon={faCheckCircle} size="xs" />
              </div>
              <span className="ml-1 text-sm">Pilih Metode</span>
            </div>
            <div className="w-10 h-px bg-gray-300 hidden sm:block"></div>
            <div className="flex items-center">
              <div className="flex items-center justify-center w-4 h-4 rounded-full bg-gray-300">
                <span className="text-gray-600 text-sm">2</span>
              </div>
              <span className="ml-1 text-gray-600 text-sm">Bayar</span>
            </div>
            <div className="w-10 h-px bg-gray-300 hidden sm:block"></div>
            <div className="flex items-center">
              <div className="flex items-center justify-center w-4 h-4 rounded-full bg-gray-300">
                <span className="text-gray-600 text-sm">3</span>
              </div>
              <span className="ml-1 text-gray-600 text-sm">Selesai</span>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="container mx-auto my-8 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
          {/* Section Pembayaran */}
          <div className="lg:w-3/4 p-4 bg-white rounded-lg">
            <h2 className="text-xl font-bold mb-4">Metode Pembayaran</h2>
            <div className="bg-white border rounded-lg">
              <div className="p-4 border-b">
                <div className="flex justify-start items-center mt-2 border p-4">
                  <img src={BankBCA} alt="Bank BCA Logo" className="mr-2" />
                  <p className="text-gray-800">Bank BCA</p>
                </div>
                <div className="flex justify-start items-center mt-2 border p-4">
                  <img src={BankBNI} alt="Bank BNI Logo" className="mr-2" />
                  <p className="text-gray-800">Bank BNI</p>
                </div>
                <div className="flex justify-start items-center mt-2 border p-4">
                  <img src={BankBRI} alt="Bank BRI Logo" className="mr-2" />
                  <p className="text-gray-800">Bank BRI</p>
                </div>
                <div className="flex justify-start items-center mt-2 border p-4">
                  <img src={Mandiri} alt="Bank Mandiri Logo" className="mr-2" />
                  <p className="text-gray-800">Bank Mandiri</p>
                </div>
                <div className="flex justify-start items-center mt-2 border p-4">
                  <img src={Dana} alt="Logo Dana" className="mr-2" />
                  <p className="text-gray-800">Dana</p>
                </div>
                <div className="flex justify-start items-center mt-2 border p-4">
                  <img src={OVO} alt="OVO" className="mr-2" />
                  <p className="text-gray-800">OVO</p>
                </div>
                <div className="flex justify-start items-center mt-2 border p-4">
                  <img src={LinkAja} alt="Link Aja" className="w-8 h-8 mr-2" />
                  <p className="text-gray-800">LinkAja</p>
                </div>
                <div className="flex justify-start items-center mt-2 border p-4">
                  <img src={ShopeLogo} alt="Shoppe pay" className="mr-2" />
                  <p className="text-gray-800">Shoppe pay</p>
                </div>
                <h2 className="text-xl font-bold mb-4">Metode Pembayaran</h2>
                <div className="flex justify-start items-center mt-2 border p-4">
                  <img src={AtmBersama} alt="Bank BCA Logo" className="mr-2" />
                </div>
              </div>
            </div>
          </div>

          {/* Section Menu */}
          <div className="max-w-sm lg:w-1/2 p-6 bg-white rounded-lg shadow-lg lg:order-1 mx-auto lg:mx-0 ">
            <img src={menu1} alt="" />
            <p className="text-lg mb-4 text-center lg:text-left">
              Gapai Karier Impianmu sebagai UI / UX Designer & Product Manager
            </p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-1xl font-bold text-green-500">300k</span>
              <span className="text-1xl text-gray-500 mr-32">
                <del>500K</del>
              </span>
              <span className="bg-orange-500 text-white rounded-xs">
                Diskon 50%
              </span>
            </div>
            <button className="bg-green-500 text-white py-2 px-28 rounded-lg mt-6 inline-block text-center">
              Beli Sekarang
            </button>

            <div className="mt-6">
              <h3 className="text-xl font-bold mb-2">
                Kelas ini sudah termasuk
              </h3>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-gray-500">
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                  Ujian Akhir
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faFileAlt} className="mr-2" />7 Dokumen
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />
                  Pretest
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faVideo} className="mr-2" />
                  49 Video
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCertificate} className="mr-2" />
                  Sertifikat
                </li>
              </ul>
            </div>

            <div className="mt-6 text-gray-600">
              <h3>Bahasa Pengantar</h3>
              <ul>
                <li className="flex items-center ">
                  <FontAwesomeIcon icon={faGlobe} className="mr-2" />
                  Bahasa Indonesia
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex  items-center lg:items-end lg:ml-48 mb-8">
          <div className="w-full lg:w-1/2 p-4 bg-white rounded-lg">
            <h1 className="text-bold text-xl ml-5">Ringkasan Pemesanan</h1>
            <div className="flex justify-between items-center mt-2  p-4">
              <p className="text-gray-500">
                Vedio Learning: Gapai Karier Impianmu Sebagai Seorang UI/UX
                Designer & Product Manager
              </p>

              <div className="flex items-center">
                <span className="text-gray-700 text-sm">Rp. 767.500</span>
              </div>
            </div>
            <div className="flex justify-between items-center   p-4">
              <p className="text-gray-500">Biaya Admin</p>

              <div className="flex items-center">
                <span className="text-gray-700 text-sm">Rp. 7.000</span>
              </div>
            </div>
            <div class="border-b border-gray-300"></div>
            <div className="flex justify-between items-center mt-2  p-4">
              <p className="text-gray-500">Pembayaran</p>

              <div className="flex items-center">
                <span className="text-green-500 text-sm">Rp. 775.000</span>
              </div>
            </div>
            <Link
              to="/payment/summary" // Ganti dengan path ke halaman pembayaran
              className="bg-green-500 text-white py-2 px-28 rounded-lg mt-6 inline-block text-center w-full"
            >
              Beli Sekarang
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PaymentOverview;
