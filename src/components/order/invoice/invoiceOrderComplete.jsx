// src/components/Invoice.js
import React from "react";
import { FaClock, FaBook } from "react-icons/fa";

const Invoice = ({
  status,
  imageSrc,
  judul,

  paragraf,
  author,
  position,
  AvatarSrc,
}) => {
  // Menentukan warna latar belakang berdasarkan status
  const statusColors = {
    Selesai: "bg-green-500",
    "Sedang Berjalan": "bg-orange-300",
    Gagal: "bg-red-500",
  };

  return (
    <div className="p-2 bg-white shadow-md rounded-lg mb-2">
      <div className="p-4 rounded-lg mb-2 border bg-green-">
        <p className="flex justify-between items-center">
          <span className="font-semibold">12/12 Modul Terselesaikan</span>

          <span
            className={`text-white px-2 py-1 rounded-lg ${
              statusColors[status] || "bg-gray-500"
            }`}
          >
            {status}
          </span>
        </p>
      </div>

      {/* Detail */}
      <div className="border p-4 rounded-lg flex">
        <div className="flex items-start space-x-4">
          <img
            src={imageSrc}
            alt="Invoice"
            className="w-52 h-auto object-cover rounded-lg"
          />
          <div className="flex-1">
            <p className="mb-2 font-semibold">{judul}</p>
            <p className="text-gray-500 mb-4">{paragraf}</p>{" "}
            {/* Jarak dengan avatar */}
            {/* Biodata */}
            <div className="flex items-center space-x-4 mb-4">
              {" "}
              {/* Jarak dengan ikon */}
              <img src={AvatarSrc} alt="Avatar" />
              <div>
                <p className="font-bold">{author}</p>
                <p className="text-gray-500">{position}</p>
              </div>
            </div>
            {/* Ikon dan Deskripsi */}
            <div className="flex space-x-8 items-center">
              <div className="flex items-center space-x-2">
                <FaBook className="text-gray-500" /> {/* Ikon modul */}
                <p className="text-gray-500">modul</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaClock className="text-gray-500" /> {/* Ikon waktu */}
                <p className="text-gray-500">360 menit</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Total Pembayaran */}
      <div className="p-4 rounded-lg flex flex-col relative border bg-green-50">
        {/* Progress Indicator */}
        <div className="flex items-center mb-4">
          <p className="text-gray-500 text-sm mr-2">Progres Kelas:</p>
          <div className="flex-1 max-w-2xl bg-gray-200 rounded-full h-1">
            <div
              className="bg-orange-500 h-full rounded-full"
              style={{ width: "80%" }} // Sesuaikan dengan persentase yang diinginkan
            ></div>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-end">
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
            Lanjutkan Pembelanjaan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
