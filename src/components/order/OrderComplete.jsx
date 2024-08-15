import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PencilIcon,
  ShoppingBagIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";
import navIcon from "../../assets/images/navigasi.png";
import SearchBar from "../item/SearchBar";
import DropdownButton from "../item/DropdownButton";
import image1 from "../../assets/images/avatar/Avatar12.png";
import Invoice2 from "./invoice/invoiceOrderComplete";
import Footer from "../item/Footer";
import Avatar1 from "../../assets/images/avatar/Avatar1.png";
import Pagination from "../item/Pagination";

const invoices = [
  {
    status: "Selesai",
    imageSrc: image1,
    judul: "Be12/1",
    paragraf:
      "Mulai transformasi dengan instruktur profesional harga terjangkau dan kurikulum yang terbaik",
    AvatarSrc: Avatar1,
    author: "Jenna Ortega",
    position: "Senior Accountant di Gojek",
    progressPercentage: 80, // Persentase progres
  },
  {
    status: "Sedang Berjalan",
    imageSrc: image1,
    judul: "Be34/2",
    paragraf:
      "Program pelatihan dengan fasilitas premium dan mentor berpengalaman",
    AvatarSrc: Avatar1,
    author: "John Doe",
    position: "Project Manager di Grab",
    progressPercentage: 50, // Persentase progres
  },
  {
    status: "Sedang Berjalan",
    imageSrc: image1,
    judul: "Be56/3",
    paragraf: "Kursus dengan bahan ajar lengkap dan penilaian menyeluruh",
    AvatarSrc: Avatar1,
    author: "Alice Smith",
    position: "Marketing Lead di Tokopedia",
    progressPercentage: 20, // Persentase progres
  },
];

function OrderComplete() {
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  const handleClick = (item) => {
    setSelectedItem(item);
    switch (item) {
      case "class":

      case "complete":
        navigate("/order/complete"); // Perbarui rute ke order/confirmation
        break;

      case "order3":
        navigate("/order/processing");
        break;

      case "profile":
        navigate("/order/confirmation"); // Perbarui rute ke order/confirmation
        break;

      default:
        break;
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 6;

  return (
    <div className="flex flex-col min-h-screen bg-[#FFE58036] text-[#333] font-sans">
      <header className="bg-white shadow p-4 lg:p-6 w-full flex flex-col lg:flex-row items-center justify-between">
        <img src={navIcon} alt="Navigation Logo" className="mb-4 lg:mb-0" />
      </header>

      <div className="p-4 lg:p-6">
        <h1 className="font-bold text-2xl mb-2">Daftar Pesanan</h1>
        <p className="text-lg">Informasi terinci mengenai pembelian</p>
      </div>

      <main className="flex flex-col lg:flex-row flex-1 p-4 lg:p-6">
        {/* Section 1 */}
        <aside className="p-4 lg:w-1/4 lg:mr-4 mb-4 lg:mb-0">
          <div className="bg-white shadow rounded-lg p-4">
            <ul className="space-y-2">
              <li
                onClick={() => handleClick("profile")} // Perbarui nilai ke "profile"
                className={`flex items-center p-2 cursor-pointer ${
                  selectedItem === "profile" ? "bg-orange-400 text-white" : ""
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
        </aside>

        {/* Section 2 */}
        <section className="bg-white shadow rounded-lg p-4 lg:p-6 flex-1">
          <div className="flex flex-wrap gap-2 lg:gap-4 mb-4">
            <div className="px-4 py-2 cursor-pointer text-sm lg:text-base">
              Semua Kelas
            </div>
            <div className="px-4 py-2 cursor-pointer text-sm lg:text-base">
              Pemasaran
            </div>
            <div className="px-4 py-2 cursor-pointer text-sm lg:text-base">
              Desain
            </div>
            <div className="px-4 py-2 cursor-pointer text-sm lg:text-base">
              Pengembangan Diri
            </div>
            <div className="px-4 py-2 cursor-pointer text-sm lg:text-base">
              Bisnis
            </div>
            <SearchBar className="w-full lg:w-auto" />
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
          </div>
          {invoices.map((invoice, index) => (
            <Invoice2
              key={index}
              status={invoice.status}
              imageSrc={invoice.imageSrc}
              judul={invoice.judul}
              paragraf={invoice.paragraf}
              AvatarSrc={invoice.AvatarSrc}
              author={invoice.author}
              position={invoice.position}
              progressPercentage={invoice.progressPercentage}
            />
          ))}
          <Pagination totalPages={totalPages} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default OrderComplete;
