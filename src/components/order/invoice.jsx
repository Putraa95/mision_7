// src/components/Invoice.js
import React from "react";

const Invoice = ({
  noInvoice,
  waktuPembayaran,
  status,
  imageSrc,
  judul,
  harga,
}) => {
  // Menentukan warna latar belakang berdasarkan status
  const statusColors = {
    Berhasil: "bg-green-500",
    "Belum Bayar": "bg-orange-500",
    Gagal: "bg-red-500",
  };

  return (
    <div className="p-8 ">
      <div
        className="bg-[#e2fcd915] p-2 rounded-lg justify-between"
        style={{ backgroundColor: "#E2FCD933" }}
      >
        <p className="flex justify-between items-center">
          No. Invoice:
          <span className="text-[#0980E2]">{noInvoice}</span>
          Waktu Pembayaran: {waktuPembayaran}
          <span
            className={`text-white px-2 py-1 rounded ${
              statusColors[status] || "bg-gray-500"
            }`}
          >
            {status}
          </span>
        </p>
      </div>
      <div className="border p-2 rounded-lg flex items-center space-x-4">
        <img src={imageSrc} alt="" className="w-16 h-16 object-cover" />
        <div className="flex-1">
          <p className="mb-2">{judul}</p>
        </div>
        <p>
          Harga <br />
          <span className="font-bold">{harga}</span>
        </p>
      </div>
      <div
        className="bg-[#e2fcd915] border p-2 rounded-lg flex justify-between items-center"
        style={{ backgroundColor: "#E2FCD933" }}
      >
        <div>
          <p className="mb-2">Total Pembayaran</p>
        </div>
        <p>
          Harga <br />
          <span className="font-bold">{harga}</span>
        </p>
      </div>
    </div>
  );
};

export default Invoice;
