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
    <div className="p-2 bg-white shadow-md rounded-lg mb-2">
      {/* Header */}
      <div className=" p-4 rounded-lg mb-2">
        <p className="flex justify-between items-center">
          <span className="font-semibold">No. Invoice:</span>
          <span className="text-[#0980E2]">{noInvoice}</span>
          <span className="ml-4">{waktuPembayaran}</span>
          <span
            className={`text-white px-2 py-1 rounded ${
              statusColors[status] || "bg-gray-500"
            }`}
          >
            {status}
          </span>
        </p>
      </div>

      {/* Detail */}
      <div className="border p-4 rounded-lg flex items-center space-x-4 mb-4">
        <img src={imageSrc} alt="Invoice" className="w-16 h-16 object-cover" />
        <div className="flex-1">
          <p className="mb-2 font-semibold">{judul}</p>
        </div>
        <p className="text-right">
          Harga <br />
          <span className="font-bold">{harga}</span>
        </p>
      </div>

      {/* Total Pembayaran */}
      <div className=" p-4 rounded-lg flex justify-between items-center">
        <p className="font-semibold">Total Pembayaran</p>
        <p className="text-right">
          Harga <br />
          <span className="font-bold">{harga}</span>
        </p>
      </div>
    </div>
  );
};

export default Invoice;
