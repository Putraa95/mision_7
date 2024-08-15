import React, { useState } from "react";
import { Link } from "react-router-dom";

//import navigasi
import navIcon from "../../assets/images/navigasi.png";
//import logo bca

//import FontAwesomeIcon

//link logo
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faFileAlt,
  faVideo,
  faCertificate,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

//import menu

import menu1 from "../../assets/images/menu/menu1.png";

const PaymentConfirmation = () => {
  const [activeMethod, setActiveMethod] = useState(null);

  const methods = [
    {
      name: "Transfer Bank",
      description: `Masukkan kartu ATM dan PIN BCA Anda
 Di menu utama, pilih "Transaksi Lainnya". Pilih "Transfer". Pilih "Ke BCA Virtual Account"
    Masukkan nomor Virtual Account
    Pastikan data Virtual Account Anda benar, kemudian masukkan angka yang perlu Anda bayarkan, kemudian pilih "Benar"
    Cek dan perhatikan konfirmasi pembayaran dari layar ATM, jika sudah benar pilih "Ya", atau pilih "Tidak" jika data di layar masih salah
    Transaksi Anda sudah selesai. Pilih "Tidak" untuk tidak melanjutkan transaksi lain`,
    },
    {
      name: "E-Wallet",
      description: `Buka Aplikasi BCA Mobile
Pilih "m-BCA", kemudian pilih "m-Transfer"
Pilih "BCA Virtual Account"
Masukkan nomor Virtual Account, lalu pilih "OK"
Klik tombol "Send" yang berada di sudut kanan atas aplikasi untuk melakukan transfer
Klik "OK" untuk melanjutkan pembayaran
Masukkan PIN Anda untuk meng-otorisasi transaksi
Transaksi Anda telah selesai`,
    },
    {
      name: "Internet Bangking BCA",
      description: `Login ke KlikBCA Individual
Pilih "Transfer", kemudian pilih "Transfer ke BCA Virtual Account"
Masukkan nomor Virtual Account
Pilih "Lanjutkan" untuk melanjutkan pembayaran
Masukkan "RESPON KEYBCA APPLI 1" yang muncul pada Token BCA Anda, lalu klik tombol "Kirim"
Pembayaran telah selesai`,
    },
  ];

  return (
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
          <div className="inline-flex flex-col lg:w-3/4 p-4 bg-white rounded-lg shadow-md max-w-full">
            <h1 className="font-bold text-xl ml-5">Ringkasan Pemesanan</h1>
            <div className="flex justify-between items-center mt-2 p-4">
              <p className="text-gray-500">
                Video Learning: Gapai Karier Impianmu Sebagai Seorang UI/UX
                Designer & Product Manager
              </p>
              <div className="flex items-center">
                <span className="text-gray-700 text-sm">Rp. 767.500</span>
              </div>
            </div>
            <div className="flex justify-between items-center p-4">
              <p className="text-gray-500">Biaya Admin</p>
              <div className="flex items-center">
                <span className="text-gray-700 text-sm">Rp. 7.000</span>
              </div>
            </div>
            <div className="border-b border-gray-300"></div>
            <div className="flex justify-between items-center mt-2 p-4">
              <p className="text-gray-500">Pembayaran</p>
              <div className="flex items-center">
                <span className="text-green-500 text-sm">Rp. 775.000</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/4 p-6 bg-white rounded-lg shadow-lg mx-auto lg:mx-0">
            <img
              src={menu1}
              alt="Kelas UI/UX"
              className="w-full h-auto rounded-lg"
            />
            <p className="text-lg mb-4 text-center lg:text-left mt-4">
              Gapai Karier Impianmu sebagai UI/UX Designer & Product Manager
            </p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-1xl font-bold text-green-500">
                Rp. 300.000
              </span>
              <span className="text-1xl text-gray-500 mr-4">
                <del>Rp. 500.000</del>
              </span>
              <span className="bg-orange-500 text-white rounded-xs px-2 py-1">
                Diskon 50%
              </span>
            </div>
            <button className="w-full bg-green-500 text-white py-2 rounded-lg mt-6">
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
          </div>
        </div>

        {/* Section Menu */}

        <div className="w-full lg:w-3/4 p-4 bg-white mx-auto  mb-12 lg:ml-48">
          <h2 className="text-xl font-bold mb-4">Metode Pembayaran</h2>
          {methods.map((method, index) => (
            <div
              key={index}
              className={`border rounded-lg mb-2 cursor-pointer ${
                activeMethod === method.name ? "bg-white" : ""
              }`}
              onClick={() =>
                setActiveMethod(
                  method.name === activeMethod ? null : method.name
                )
              }
            >
              <div className="flex justify-start items-center mt-2 p-4">
                <span className="font-bold">{method.name}</span>
              </div>
              {activeMethod === method.name && (
                <ul className="list-decimal list-inside space-y-2 text-gray-500 m-4">
                  {method.description.split("\n").map((line, index) => (
                    <li key={index}>{line}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <div className="flex space-x-4 mt-4">
            <Link
              to="/payment/summary
              "
              className="flex-1"
            >
              <button className="w-full bg-green-500 text-white py-2 px-4 rounded-lg">
                Bayar Sekarang
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentConfirmation;
