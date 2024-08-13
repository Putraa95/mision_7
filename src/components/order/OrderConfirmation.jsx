import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PencilIcon,
  ShoppingBagIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline"; // Pastikan kamu telah menginstal heroicons
import navIcon from "../../assets/images/navigasi.png";
import sampleImage from "../../assets/images/avatar/Avatar10.png"; // Ganti dengan path gambar yang sesuai
import Footer from "../item/Footer";

const OrderConfirmation = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  const handleClick = (item) => {
    setSelectedItem(item);
    switch (item) {
      case "order3":
        navigate("/order/confirmation");
        break;
      case "processing":
        navigate("/order/processing"); // Perbarui rute ke order/confirmation
        break;
      case "complete":
        navigate("/order/complete"); // Perbarui rute ke order/confirmation
        break;
      default:
        break;
    }
  };
  const [fullName, setFullName] = useState("Jannie Ruby Jane");
  const [email, setEmail] = useState("rubyjane@gmail.com");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    countryCode: "+62",
  });
  const [profileText, setProfileText] = useState("ganti Foto Profile");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName(formData.name || fullName);
    setEmail(formData.email || email);
    setProfileText("Profil telah diperbarui");
  };

  const handleDelete = () => {
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      countryCode: "+62",
    });
    setProfileText("ganti Foto Profile");
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FFE58036] text-[#333] font-sans">
      <div className="bg-white shadow p-6 w-full flex flex-col lg:flex-row items-center justify-between">
        {/* Navbar */}
        <nav className="flex flex-col lg:flex-row items-center justify-between w-full">
          <img src={navIcon} alt="Navigation Logo" className="mb-4 lg:mb-0" />
        </nav>
      </div>
      {/* Section 1*/}

      <div className="m-4 ml-8">
        <h1 className="font-bold text-2xl">Ubah profil</h1>
        <h2 className="text-gray-700">Ubah data diri anda</h2>
      </div>
      <div className="flex flex-col lg:flex-row flex-1 p-6 space-y-4 lg:space-y-0">
        <div className="bg-white shadow p-6 w-full lg:w-1/6 lg:mr-4">
          <ul>
            <li
              onClick={() => handleClick("proceesing")} // Perbarui nilai ke "profile"
              className={`flex items-center p-2 cursor-pointer ${
                selectedItem === "proceesing" ? "bg-orange-400 text-white" : ""
              }`}
            >
              <PencilIcon className="w-6 h-6 mr-2" />
              Profil Saya
            </li>
            <li
              onClick={() => handleClick("complete")} // Perbarui nilai ke "profile"
              className={`flex items-center p-2 cursor-pointer ${
                selectedItem === "complete" ? "bg-orange-400 text-white" : ""
              }`}
            >
              <BookOpenIcon className="w-6 h-6 mr-2" />
              Kelas Saya
            </li>
            <li
              onClick={() => handleClick("proceesing")} // Perbarui nilai ke "profile"
              className={`flex items-center p-2 cursor-pointer ${
                selectedItem === "proceesing" ? "bg-orange-400 text-white" : ""
              }`}
            >
              <ShoppingBagIcon className="w-6 h-6 mr-2" />
              Pesanan Saya
            </li>
          </ul>
        </div>
        {/* Section 2 */}
        <div className="flex-1 bg-white shadow p-8">
          <div className="flex items-start space-x-4">
            {/* Gambar di sebelah kiri */}
            <div className="flex-none w-24 h-24 lg:w-32 lg:h-32 flex-shrink-0">
              <img
                src={sampleImage}
                alt="Sample"
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
            {/* Teks di sebelah kanan */}
            <div className="flex-1">
              <h1 className="font-bold mb-1 text-lg">{fullName}</h1>
              <h2 className="mb-1 text-gray-600 text-base">{email}</h2>
              {formData.phoneNumber && (
                <h2 className="mb-1 text-gray-600 text-baswe">
                  {formData.countryCode} {formData.phoneNumber}
                </h2>
              )}
              <h3 className="text-orange-500 text-base">{profileText}</h3>
            </div>
          </div>
          {/* section 3 isi form */}
          <div className="m-4">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col lg:flex-row gap-2 mb-4">
                <div className="flex-1">
                  <label htmlFor="name" className="block text-gray-700">
                    Nama Lengkap
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-500 rounded"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="email" className="block text-gray-700 ">
                    E-Mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-500 rounded"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="phoneNumber" className="block text-gray-700 ">
                    No Telpon
                  </label>
                  <div className="flex gap-2">
                    <select
                      id="countryCode"
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleInputChange}
                      className="w-1/4 p-2 border border-gray-500 rounded"
                    >
                      <option value="+62">+62</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      {/* Tambahkan lebih banyak opsi jika perlu */}
                    </select>
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="text"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="flex-1 p-2 border border-gray-500 rounded"
                      placeholder="Nomor Telepon"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button" // Ubah tipe menjadi button agar tidak mengirim formulir
                  onClick={handleDelete}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-300"
                >
                  Delete
                </button>
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
      <Footer />
    </div>
  );
};

export default OrderConfirmation;
