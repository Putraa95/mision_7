import React from "react";

//import navbar
import { Link } from "react-router-dom";
import navigasiImage from "../../assets/images/navigasi.png";

//import gambar menu
import menu1Image from "../../assets/images/menu/menu1.png";
import menu2Image from "../../assets/images/menu/menu2.png";
import menu3Image from "../../assets/images/menu/menu3.png";
import menu4Image from "../../assets/images/menu/menu4.png";
import menu5Image from "../../assets/images/menu/menu5.png";
import menu6Image from "../../assets/images/menu/menu6.png";
import menu7Image from "../../assets/images/menu/menu7.png";
import menu8Image from "../../assets/images/menu/menu8.png";
import menu9Image from "../../assets/images/menu/menu9.png";

//import avatar
import avatar1Image from "../../assets/images/avatar/Avatar1.png";
import avatar2Image from "../../assets/images/avatar/Avatar2.png";
import avatar3Image from "../../assets/images/avatar/Avatar3.png";
import avatar4Image from "../../assets/images/avatar/Avatar4.png";
import avatar5Image from "../../assets/images/avatar/Avatar5.png";
import avatar6Image from "../../assets/images/avatar/Avatar6.png";
import avatar7Image from "../../assets/images/avatar/Avatar7.png";
import avatar8Image from "../../assets/images/avatar/Avatar8.png";
import avatar9Image from "../../assets/images/avatar/Avatar9.png";

//import backgrund
import background from "../../assets/images/latar/background.jpg";
import background1 from "../../assets/images/latar/cover.jpg";

//menambahkan footer
import Footer from "../item/Footer";

const contentData = [
  {
    id: 1,
    image: menu1Image,
    title: "Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    author: "Jenna Ortega",
    position: "Senior Accountant di Gojek",
    rating: 5,
    price: "Rp 300k",
    avatar: avatar1Image,
  },
  {
    image: menu2Image,
    title: "Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    author: "Jenna Ortega",
    position: "Senior Accountant di Gojek",
    rating: 5,
    price: "Rp 300k",
    avatar: avatar2Image,
  },
  {
    image: menu3Image,
    title: "Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    author: "Jenna Ortega",
    position: "Senior Accountant di Gojek",
    rating: 5,
    price: "Rp 300k",
    avatar: avatar3Image,
  },
  {
    image: menu4Image,
    title: "Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    author: "Jenna Ortega",
    position: "Senior Accountant di Gojek",
    rating: 5,
    price: "Rp 300k",
    avatar: avatar4Image,
  },
  {
    image: menu5Image,
    title: "Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    author: "Jenna Ortega",
    position: "Senior Accountant di Gojek",
    rating: 5,
    price: "Rp 300k",
    avatar: avatar5Image,
  },
  {
    image: menu6Image,
    title: "Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    author: "Jenna Ortega",
    position: "Senior Accountant di Gojek",
    rating: 5,
    price: "Rp 300k",
    avatar: avatar6Image,
  },
  {
    image: menu7Image,
    title: "Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    author: "Jenna Ortega",
    position: "Senior Accountant di Gojek",
    rating: 5,
    price: "Rp 300k",
    avatar: avatar7Image,
  },
  {
    image: menu8Image,
    title: "Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    author: "Jenna Ortega",
    position: "Senior Accountant di Gojek",
    rating: 5,
    price: "Rp 300k",
    avatar: avatar8Image,
  },
  {
    image: menu9Image,
    title: "Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    author: "Jenna Ortega",
    position: "Senior Accountant di Gojek",
    rating: 5,
    price: "Rp 300k",
    avatar: avatar9Image,
  },
  // Tambahkan data untuk kotak lainnya di sini
];
const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFE58036]  text-[#333] font-sans">
      {/* Navbar */}
      <nav className="bg-white  p-4 w-full flex items-center justify-between">
        <img src={navigasiImage} alt="Navigation Logo" className="h-12" />
        <div className="flex items-center space-x-4">
          <Link to="/kategori" className="text-black font-medium">
            Kategori
          </Link>
          <img src={avatar1Image} alt="Icon" className="h-8 w-8" />
        </div>
      </nav>

      {/* Section 1 */}
      <section
        className="container mx-auto my-8 relative bg-cover bg-center rounded-lg overflow-hidden text-white"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "", // Ukuran latar belakang menyesuaikan container
          backgroundPosition: "center", // Posisi latar belakang di tengah
          height: "50vh", // Tinggi section
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div
          className="flex justify-center items-center relative p-6 md:p-12 h-full"
          style={{ paddingTop: "10%" }} // Atur padding atas untuk konten di dalam section
        >
          <div className="text-center relative z-10 w-full md:w-4/5 px-4 md:px-0">
            <h1 className="text-lg md:text-4xl">
              Revolusi Pembelajaran: Temukan Ilmu baru melalui Platform Video
              Interaktif
            </h1>
            <p className="text-sm md:text-xl mt-4 md:mt-6 md:p-4">
              Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
              pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
              berpartisipasi dalam latihan interaktif yang akan meningkatkan
              pemahaman Anda.
            </p>
            <br />
            <h4 className="bg-green-500 px-4 py-2 md:py-4 rounded-lg max-w-xs md:max-w-md mx-auto text-sm md:text-base">
              Temukan Video Course Untuk Dipelajari
            </h4>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="text-left p-5 mx-20 max-w-4xl">
        <h1 className="text-2xl font-bold mb-2">
          Koleksi Video Pembelajaran Unggulan
        </h1>
        <p className="mb-4">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami</p>
        <div className="flex  gap-4 flex-wrap">
          <div className="px-4 py-2 cursor-pointer">Semua Kelas</div>
          <div className="px-4 py-2 cursor-pointer">Pemasaran</div>
          <div className="px-4 py-2 cursor-pointer">Desain</div>
          <div className="px-4 py-2 cursor-pointer">Pengembangan Diri</div>
          <div className="px-4 py-2 cursor-pointer">Bisnis</div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          {contentData.map((item, index) => (
            <Link
              to={`/itemDetail/${item.id}`}
              key={index}
              className="bg-white shadow p-4 w-9/12 mx-0"
            >
              <img
                src={item.image}
                alt={`Gambar ${index + 1}`}
                className="w-full mb-2"
              />
              <p className="font-bold">{item.title}</p>
              <p className="text-sm mb-2 h hidden">{item.description}</p>
              <div className="flex items-center mb-2">
                <img
                  src={item.avatar}
                  alt="Menu Icon"
                  className="w-8 h-8 mr-2"
                />
                <div className="text-xs">
                  <p>{item.author}</p>
                  <p>{item.position}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {[...Array(item.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-500 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 1L12.245 6.432H18.364L13.818 10.568L16.064 16L10.001 12.999L3.937 16L6.183 10.568L1.636 6.432H7.755L10 1Z" />
                    </svg>
                  ))}
                </div>
                <span className="text-green-500 font-bold">{item.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* {section 4} */}
      <section
        className="container mx-auto my-12 relative bg-cover bg-center rounded-lg overflow-hidden text-white"
        style={{
          backgroundImage: `url(${background1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>{" "}
        {/* Mengatur opasitas latar belakang menjadi lebih gelap */}
        <div
          className="flex justify-center items-center relative p-12 h-full"
          style={{ paddingTop: "10%" }}
        >
          <div className="text-center relative z-10 md:w-4/5">
            <h1 className="text-3xl font-bold mb-4 md:mb-4">NEWSLETTER</h1>{" "}
            <h1 className="text-4xl font-bold mb-4 md:mb-4">
              Mau Belajar Lebih Banyak
            </h1>{" "}
            <p className="text-xl mb-4">
              {" "}
              Daftarkan dirimu untuk mendapatkan informasi terbaru dan <br />
              penawaran spesial dari program program terbaik hariesok.id
            </p>
            <div className="flex justify-center mt-4">
              <div className="relative w-full max-w-md  md:max-w-md">
                <input
                  type="text"
                  placeholder="Email Anda"
                  className="p-4 w-full pr-32 text-black rounded-l-md focus:outline-none"
                />
                <button className="absolute right-0 top-0 bottom-0 bg-yellow-500 text-white p-2 rounded-r-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
