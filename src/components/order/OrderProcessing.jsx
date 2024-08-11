import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PencilIcon,
  ShoppingBagIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";
import navIcon from "../../assets/images/navigasi.png";
import SearchBar from "../SearchBar";
import DropdownButton from "../DropdownButton";
import image1 from "./gambar/Rectangle 22957.png";
import Invoice from "./invoice";
import Footer from "../Footer";
import Pagination from "../Pagination";

function OrderProcessing() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Definisikan state currentPage
  const [totalPages, setTotalPages] = useState(5); // Definisikan state totalPages (contoh)
  const navigate = useNavigate();

  const handleClick = (item) => {
    setSelectedItem(item);
    if (item === "order3") {
      navigate("/order/orderProcessing");
    }
    // Tambahkan logika untuk item lainnya jika diperlukan
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FFE58036] text-[#333] font-sans">
      <div className="bg-white shadow p-6 w-full flex flex-col lg:flex-row items-center justify-between">
        <nav className="flex flex-col lg:flex-row items-center justify-between w-full">
          <img src={navIcon} alt="Navigation Logo" className="mb-4 lg:mb-0" />
        </nav>
      </div>
      <div className="p-6">
        <h1 className="font-bold mb-2">Daftar Pesanan</h1>
        <p>Informasi terinci mengenai pembelian</p>
      </div>

      <div className="flex flex-col lg:flex-row flex-1 p-6">
        {/* Section 1 */}
        <div className="bg-white shadow p-6 lg:w-1/6 lg:mr-4 mb-4 lg:mb-0">
          <ul>
            <li
              onClick={() => handleClick("order3")}
              className={`flex items-center p-2 cursor-pointer ${
                selectedItem === "order3" ? "bg-orange-400 text-white" : ""
              }`}
            >
              <PencilIcon className="w-6 h-6 mr-2" />
              Profil Saya
            </li>
            <li
              onClick={() => handleClick("class")}
              className={`flex items-center p-2 cursor-pointer ${
                selectedItem === "class" ? "bg-orange-400 text-white" : ""
              }`}
            >
              <BookOpenIcon className="w-6 h-6 mr-2" />
              Kelas Saya
            </li>
            <li
              onClick={() => handleClick("orders")}
              className={`flex items-center p-2 cursor-pointer ${
                selectedItem === "orders" ? "bg-orange-400 text-white" : ""
              }`}
            >
              <ShoppingBagIcon className="w-6 h-6 mr-2" />
              Pesanan Saya
            </li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="bg-white shadow p-8 lg:w-3/5">
          <div className="flex gap-4 flex-wrap mb-6">
            <div className="px-4 py-2 cursor-pointer">Semua Kelas</div>
            <div className="px-4 py-2 cursor-pointer">Pemasaran</div>
            <div className="px-4 py-2 cursor-pointer">Desain</div>
            <div className="px-4 py-2 cursor-pointer">Pengembangan Diri</div>
            <div className="px-4 py-2 cursor-pointer">Bisnis</div>
            <SearchBar className="w-4/6 lg:w-auto" />
            <DropdownButton
              className="w-4/6 lg:w-auto"
              options={[
                "Harga Rendah",
                "Harga Tinggi",
                "A to Z",
                "Z to A",
                "Rating Tertinggi",
                "Rating Terendah",
              ]}
            />
          </div>
          <Invoice
            noInvoice="HEL/VI/10062023"
            waktuPembayaran="10 Juni 2023, 14.17"
            status="Berhasil"
            imageSrc={image1}
            judul="Belajar Microsoft Office dan Google Workspace untuk Pemula"
            harga="Rp 300.000"
          />
          {/* Tambahkan invoice lain jika diperlukan */}
          <Invoice
            noInvoice="HEL/VI/10062023"
            waktuPembayaran="10 Juni 2023, 14.17"
            status="Berhasil"
            imageSrc={image1}
            judul="Belajar Microsoft Office dan Google Workspace untuk Pemula"
            harga="Rp 300.000"
          />
          <Invoice
            noInvoice="HEL/VI/10062023"
            waktuPembayaran="10 Juni 2023, 14.17"
            status="Berhasil"
            imageSrc={image1}
            judul="Belajar Microsoft Office dan Google Workspace untuk Pemula"
            harga="Rp 300.000"
          />
          <Invoice
            noInvoice="HEL/VI/10062023"
            waktuPembayaran="10 Juni 2023, 14.17"
            status="Berhasil"
            imageSrc={image1}
            judul="Belajar Microsoft Office dan Google Workspace untuk Pemula"
            harga="Rp 300.000"
          />
          <Invoice
            noInvoice="HEL/VI/10062023"
            waktuPembayaran="10 Juni 2023, 14.17"
            status="Berhasil"
            imageSrc={image1}
            judul="Belajar Microsoft Office dan Google Workspace untuk Pemula"
            harga="Rp 300.000"
          />
          {/* Tambahkan invoice lain jika diperlukan */}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default OrderProcessing;
