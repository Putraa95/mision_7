//import react router
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

//import background
import background from "../../assets/images/latar/background.jpg";

//import Navigation
import navigasiImage from "../../assets/images/navigasi.png";

// import Font AweSome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faGlobe,
  faPlay,
  faStar,
  faStarHalfAlt,
  faCheckCircle,
  faFileAlt,
  faVideo,
  faCertificate,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

//import Avatar
import avatar1Image from "../../assets/images/avatar/Avatar1.png";
import avatar2Image from "../../assets/images/avatar/Avatar2.png";
import avatar3Image from "../../assets/images/avatar/Avatar3.png";

//import Menu
import menu1Image from "../../assets/images/menu/menu1.png";
import menu2Image from "../../assets/images/menu/menu2.png";
import menu3Image from "../../assets/images/menu/menu3.png";

// import footer
import Footer from "../item/Footer";

//import use navitve

const ItemDetail = () => {
  const [contentData, setContentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://66c5eabb134eb8f434961c3e.mockapi.io/blog/BlogContent"
        );
        setContentData(response.data.slice(0, 3));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const { id } = useParams();
  console.log("Item ID:", id); // Tambahkan log ini

  return (
    <div className="bg-[#FFE58036] min-h-screen overflow-hidden">
      <nav className="bg-white  p-4 w-full flex items-center justify-between">
        <img src={navigasiImage} alt="Navigation Logo" className="h-12" />
        <div className="flex items-center space-x-4"></div>
      </nav>

      {/* Section 1 */}

      <div className="px-4">
        <p className="md:text-xl p-2 md:ml-48 ">
          <span className="text-gray-500">Beranda / Desain</span> Gapai Karier
          sebagai seorang UI /UX Designer & Product Manager.
        </p>
      </div>

      {/* section 1 */}
      <section
        className="container mx-auto my-8 relative bg-cover bg-center rounded-lg overflow-hidden text-white"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "100%",
          backgroundPosition: "center",
          height: "50vh",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div
          className="flex justify-center items-center relative h-full px-4 md:px-12"
          style={{ paddingTop: "10%" }} // Atur padding atas untuk konten di dalam section
        >
          <div className="text-left relative z-10 w-4/5">
            <h1 className="text-2xl  md:text-4xl mb-2">
              Gapai Karir impianmu sebagai Seorang UI / UX Designer & Product
              Manager
            </h1>
            <p className="md:text-xl p-2 md:p-4">
              Belajar bersama tutor profesional divedio Course <br />
              kapanpun dan dimana pun
            </p>
            <div className="flex items-center mt-4 md:ml-4">
              <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              <FontAwesomeIcon
                icon={faStarHalfAlt}
                className="text-yellow-500"
              />
              <FontAwesomeIcon icon={faStar} className="text-gray-400" />
              <span className="ml-2 text-lg">3.5</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 Deskripsi */}
      <section className="container mx-auto my-8 flex flex-col-reverse lg:flex-row space-y-4 lg:space-y-1 lg:space-x-4">
        <div className="w-full lg:w-2/3 p-6 bg-white rounded-lg shadow-lg mb-4 lg:mb-0">
          <h2 className="text-2xl font-bold mb-4">Deskripsi</h2>
          <p className="text-lg text-gray-500">
            Foundations of User Experience (UX) Design adalah yang pertama dari
            rangkaian tujuh kursus yang akan membekali Anda dengan keterampilan
            yang dibutuhkan untuk melamar pekerjaan tingkat pemula dalam desain
            pengalaman pengguna. Desainer UX fokus pada interaksi yang dilakukan
            orang dengan produk seperti situs web, aplikasi seluler, dan objek
            fisik. Desainer UX membuat interaksi sehari-hari itu dapat
            digunakan, menyenangkan, dan dapat diakses. Peran seorang desainer
            UX tingkat pemula mungkin termasuk berempati dengan pengguna,
            menentukan poin rasa sakit mereka, memunculkan ide untuk solusi
            desain, membuat wireframe, prototipe, dan maket, dan menguji desain
            untuk mendapatkan umpan balik.
          </p>
        </div>

        {/* Section Diskon */}
        <div className="max-w-sm w-full lg:w-1/3 p-6 bg-white rounded-lg shadow-lg lg:order-1 mx-auto lg:mx-0">
          <p className="text-lg mb-4 text-center lg:text-left">
            Gapai Karier Impianmu sebagai UI / UX Designer & Product Manager
          </p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-1xl font-bold text-green-500">300k</span>
            <span className="text-1xl text-gray-500 mr-32">
              <del>500K</del>
            </span>
            <span className="bg-orange-500 text-white rounded-xs">
              Diskon 50%
            </span>
          </div>

          <Link
            to="/payment/overview" // Ganti dengan path ke halaman pembayaran
            className="bg-green-500 text-white py-2 px-28 rounded-lg mt-6 inline-block text-center"
          >
            Beli Sekarang
          </Link>
          <div className="mt-6">
            <h3 className="text-xl font-bold mb-2">Kelas ini sudah termasuk</h3>
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

          <div className="mt-6 text-gray-600">
            <h3>Bahasa Pengantar</h3>
            <ul>
              <li className="flex items-center ">
                <FontAwesomeIcon icon={faGlobe} className="mr-2" />
                Bahasa Indonesia
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3 Profile */}
      <section className="container mx-auto my-8 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
        <div className="w-full lg:w-3/4 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-left">
            Belajar Bersama Tutor Profesional
          </h2>
          {/* Profile 1 */}
          <div className="flex flex-col md:flex-row justify-between mb-4 space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex w-full md:w-1/2 p-4 border border-gray-200 rounded-lg">
              <img src={avatar1Image} alt="" className="h-12 w-12 mr-4" />
              <div className="flex flex-col">
                <p className="font-semibold">Gregoris Edrik Lawanto</p>
                <p className="text-gray-600">
                  Senior Talent Acquisition di Wings Group
                </p>
                <p className="text-lg text-gray-500">
                  Berkarir di bidang HR selama lebih dari 3 tahun. Saat ini
                  bekerja sebagai Senior Talent Acquisition Specialist di Wings
                  Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.
                </p>
              </div>
            </div>
            {/* Profile 2 */}
            <div className="flex w-full md:w-1/2 p-4 border border-gray-200 rounded-lg">
              <img src={avatar1Image} alt="" className="h-12 w-12 mr-4" />
              <div className="flex flex-col">
                <p className="font-semibold">Gregoris Edrik Lawanto</p>
                <p className="text-gray-600">
                  Senior Talent Acquisition di Wings Group
                </p>
                <p className="text-lg text-gray-500">
                  Berkarir di bidang HR selama lebih dari 3 tahun. Saat ini
                  bekerja sebagai Senior Talent Acquisition Specialist di Wings
                  Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4  */}

      <section>
        <div className="container mx-auto my-8 p- flex flex-col lg:flex-row space-y-4 lg:space-y-0 ">
          <div className=" lg:w-3/4 p-4 bg-white rounded-lg">
            <h2 className="text-xl font-bold mb-4">Kamu akan Mempelajari</h2>
            <div className="bg-white border rounded-lg">
              <div className="p-4 border-b">
                <h3 className="text-green-600 font-semibold">
                  Introduction to Course 1: Foundations of User Experience
                  Design
                </h3>
                <div className="flex justify-between items-center mt-2 border p-4">
                  <p className="text-gray-800">
                    The basics of user experience design
                  </p>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faPlay}
                      className="mr-4 text-gray-500"
                    />
                    <span className="text-gray-500 text-sm">Video</span>
                    <FontAwesomeIcon
                      icon={faClock}
                      className="ml-4 text-gray-500"
                    />
                    <span className="text-gray-500 text-sm ml-4">12 Menit</span>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2 border p-4">
                  <p className="text-gray-800">
                    Jobs in the field of user experience
                  </p>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faPlay}
                      className="mr-4 text-gray-500"
                    />
                    <span className="text-gray-500 text-sm">Video</span>
                    <FontAwesomeIcon
                      icon={faClock}
                      className="ml-4 text-gray-500"
                    />
                    <span className="text-gray-500 text-sm ml-4">12 Menit</span>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2 border p-4">
                  <p className="text-gray-800">
                    The product development life cycle
                  </p>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faPlay}
                      className="mr-4 text-gray-500"
                    />
                    <span className="text-gray-500 text-sm">Video</span>
                    <FontAwesomeIcon
                      icon={faClock}
                      className="ml-4 text-gray-500"
                    />
                    <span className="text-gray-500 text-sm ml-4">12 Menit</span>
                  </div>
                </div>
              </div>
              <div className="font-bold text-green-600 text-l m-6 text-lg">
                <ul>
                  <li className="flex justify-between items-center mb-4">
                    <h3>
                      Universal Design, inclusive design, and equity-focused
                      design
                    </h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </li>
                  <li className="flex justify-between items-center mb-4 text-lg">
                    <h3>Introduction to design sprints</h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </li>
                  <li className="flex justify-between items-center mb4 text-lg">
                    <h3>Introduction to UX reasearch</h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 5 */}
      <section className="container mx-auto my-8 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
        <div className="w-full lg:w-3/4 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-left ">
            Belajar Bersama Tutor Profesional
          </h2>
          {/* Profile 1 */}
          <div className="flex flex-col md:flex-row justify-between mb-4 space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex w-full md:w-1/2 p-4 border border-gray-200 rounded-lg">
              <img src={avatar1Image} alt="" className="h-12 w-12 mr-4" />
              <div className="flex flex-col">
                <p className="font-semibold">Gregoris Edrik Lawanto</p>
                <p className="text-gray-600">
                  Senior Talent Acquisition di Wings Group
                </p>
                <p className="text-lg text-gray-500">
                  Berkarir di bidang HR selama lebih dari 3 tahun. Saat ini
                  bekerja sebagai Senior Talent Acquisition Specialist di Wings
                  Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.
                </p>
                <div className="flex items-center mt-4">
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                  <FontAwesomeIcon
                    icon={faStarHalfAlt}
                    className="text-yellow-500"
                  />
                  <FontAwesomeIcon icon={faStar} className="text-gray-400" />
                  <span className="ml-2 text-lg">3.5</span>
                </div>
              </div>
            </div>

            {/* Profile 2 */}
            <div className="flex w-full md:w-1/2 p-4 border border-gray-200 rounded-lg">
              <img src={avatar1Image} alt="" className="h-12 w-12 mr-4" />
              <div className="flex flex-col">
                <p className="font-semibold">Gregoris Edrik Lawanto</p>
                <p className="text-gray-600">
                  Senior Talent Acquisition di Wings Group
                </p>
                <p className="text-lg text-gray-500">
                  Berkarir di bidang HR selama lebih dari 3 tahun. Saat ini
                  bekerja sebagai Senior Talent Acquisition Specialist di Wings
                  Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.
                </p>
                <div className="flex items-center mt-4">
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                  <FontAwesomeIcon
                    icon={faStarHalfAlt}
                    className="text-yellow-500"
                  />
                  <FontAwesomeIcon icon={faStar} className="text-gray-400" />
                  <span className="ml-2 text-lg">3.5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto mt12">
          <div>
            <h1 className="text-3xl font-bold mb-4">
              Vedio Pembelajaran Terkait Lainnya
            </h1>
            <p className="text-lg mb-4">
              Ekspansi Pengetahuan Anda dengan Rekomendasi Spesial Kami !
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 Main Content */}
      <section className="container mx-auto mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {contentData.map((item, index) => {
            // Tentukan gambar berdasarkan index
            const avatarImages = [avatar1Image, avatar2Image, avatar3Image];
            const menuImages = [menu1Image, menu2Image, menu3Image];

            return (
              <div key={item.id} className="bg-white shadow p-4 w-9/12 mx-0">
                <img
                  src={menuImages[index % menuImages.length]} // Mengambil gambar menu berdasarkan index
                  alt={`Gambar ${item.title}`}
                  className="w-full mb-2"
                />
                <p className="font-bold">{item.title}</p>
                <p className="text-sm mb-2">{item.description}</p>
                <div className="flex items-center mb-2">
                  <img
                    src={avatarImages[index % avatarImages.length]} // Mengambil gambar avatar berdasarkan index
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
                    {[...Array(3)].map((_, i) => (
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
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 7 Footer */}
      <Footer />
    </div>
  );
};

export default ItemDetail;
