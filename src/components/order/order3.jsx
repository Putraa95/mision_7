import React from "react";
import {
  PencilIcon,
  ShoppingBagIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline"; // Pastikan kamu telah menginstal heroicons
import navIcon from "../../assets/images/navigasi.png";
import sampleImage from "./gambar/Avatar (3).png"; // Ganti dengan path gambar yang sesuai
import Footer from "../Footer";

const Order3 = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFE58036] text-[#333] font-sans">
      <div className="bg-white shadow p-6 w-full flex flex-col lg:flex-row items-center justify-between">
        {/* Navbar */}
        <nav className="flex flex-col lg:flex-row items-center justify-between w-full">
          <img src={navIcon} alt="Navigation Logo" className="mb-4 lg:mb-0" />
        </nav>
      </div>
      {/* Konten utama */}
      <div className="flex flex-1 p-6">
        {/* Kontainer utama untuk kotak 1 dan kotak 2 */}
        <div className="flex flex-1 flex-row items-start">
          {/* Kotak 1 */}
          <div className="bg-white shadow p-6 w-auto min-w-[200px] lg:w-1/6 mr-4">
            <ul>
              <li className="flex items-center p-2 cursor-pointer hover:bg-orange-400 text-gray-700">
                <PencilIcon className="w-6 h-6 mr-2" />
                <a href="/profile">Profil Saya</a>
              </li>
              <li className="flex items-center p-2 cursor-pointer hover:bg-orange-400 text-gray-700">
                <BookOpenIcon className="w-6 h-6 mr-2" />
                <a href="/class">Kelas Saya</a>
              </li>
              <li className="flex items-center p-2 cursor-pointer hover:bg-orange-400 text-gray-700">
                <ShoppingBagIcon className="w-6 h-6 mr-2" />
                <a href="/orders">Pesanan Saya</a>
              </li>
            </ul>
          </div>
          {/* Kotak 2 */}
          <div className="flex-1 bg-white shadow p-8">
            <div className="flex flex-col lg:flex-row items-start">
              {/* Gambar di sebelah kiri */}
              <div className="flex-none w-full lg:w-1/3  lg:mb-0 lg:pr-4 flex-shrink-0">
                <img
                  src={sampleImage}
                  alt="Sample"
                  className=" h-auto object-cover rounded-lg"
                />
              </div>
              {/* Teks di sebelah kanan */}
              <div className="flex-1 lg:ml-4 ">
                <h1 className=" font-bold mb-2">Jannie Ruby Jane</h1>
                <h1 className=" mb-2">rubyjane@gmail.com</h1>
                <h1 className="text-orange-500 mb-2">ganti Foto Profile</h1>
              </div>
            </div>
            <div>
              <form>
                <div className="flex gap-2 mb-4">
                  {" "}
                  {/* Mengurangi jarak antar input dengan gap-2 */}
                  <div className="flex-1">
                    <label htmlFor="input1" className="block text-gray-700">
                      Input 1
                    </label>
                    <input
                      id="input1"
                      type="text"
                      className="w-full p-2 border border-gray-500 rounded"
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="input2" className="block text-gray-700">
                      Input 2
                    </label>
                    <input
                      id="input2"
                      type="text"
                      className="w-full p-2 border border-gray-500 rounded"
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="input3" className="block text-gray-700">
                      Input 3
                    </label>
                    <input
                      id="input3"
                      type="text"
                      className="w-full p-2 border border-gray-500 rounded"
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Order3;
