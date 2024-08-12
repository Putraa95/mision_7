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
import image1 from "../../assets/images/avatar/Avatar12.png";
import Invoice2 from "../../components/order/invoice2";
import Footer from "../Footer";
import Avatar1 from "../../assets/images/avatar/Avatar1.png";
const invoices = [0, 1, 2, 3, 4];
function OrderComplete() {
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  const handleClick = (item) => {
    setSelectedItem(item);
    switch (item) {
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

  return (
    <div className="flex flex-col min-h-screen bg-[#FFE58036] text-[#333] font-sans">
      <header className="bg-white shadow p-6 w-full flex flex-col lg:flex-row items-center justify-between">
        <nav className="flex items-center justify-between w-full">
          <img src={navIcon} alt="Navigation Logo" className="mb-4 lg:mb-0" />
        </nav>
      </header>

      <div className="p-6">
        <h1 className="font-bold text-2xl mb-2">Daftar Pesanan</h1>
        <p className="text-lg">Informasi terinci mengenai pembelian</p>
      </div>

      <main className="flex flex-col lg:flex-row flex-1 p-6 ">
        {/* Section 1 */}
        <aside className="p-4 lg:p-6 lg:w-1/4 max-w-xs mx-auto lg:mx-0 lg:mr-4 mb-4 lg:mb-0">
          <div className="bg-white shadow rounded-lg p-4">
            <ul>
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
        <section className="bg-white shadow p-4 lg:p-8 lg:w-3/4 flex-1 ">
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
          {invoices.map((index) => (
            <Invoice2
              key={index}
              noInvoice={`HEL/VI/10062023-${index}`}
              waktuPembayaran="10 Juni 2023, 14.17"
              status={
                index % 3 === 0
                  ? "Berhasil"
                  : index % 2 === 0
                  ? "Gagal"
                  : "Belum Bayar"
              }
              imageSrc={image1}
              judul="Belajar Microsoft Office dan Google Workspace untuk Pemula"
              p=""
              harga="Rp 300.000"
              paragraf={`Deskripsi untuk invoice ${index}.`}
              gambar={Avatar1}
              nama="Jannie Ruby Jane"
              jabatan="Customer Service"
            />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default OrderComplete;
