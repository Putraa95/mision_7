import React from "react";
import googleIcon from "../assets/images/logo_Google/google.png";
import navIcon from "../assets/images/navigasi.png";

const RegisterForm = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#FFE58036] font-sans">
      <nav className="bg-white shadow p-4 w-full flex items-center justify-between">
        <img src={navIcon} alt="Navigation Logo" />
      </nav>
      <div className="flex-grow flex items-center justify-center w-full">
        <div className="w-full max-w-xl mx-auto p-4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-8">
            <h1 className="text-3xl font-bold text-center py-4">
              Daftar Akun Baru
            </h1>
            <p className="text-center text-gray-600">
              Yuk, mulai perjalanan belajarmu dengan mendaftar
            </p>

            <form
              className="px-6 py-4"
              method="post"
              action="register_submit.html"
            >
              <div className="mb-4">
                <label
                  htmlFor="nama"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="nama"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="nohp"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nomor HP
                </label>
                <input
                  type="tel"
                  id="nohp"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Kata Sandi
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Konfirmasi Kata Sandi
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
                style={{
                  backgroundColor: "#E2FCD9CC", // Warna default
                  ":active": {
                    backgroundColor: "#94F08B", // Warna saat tombol sedang ditekan
                  },
                }}
              >
                <span className="text-green-500">Daftar</span>
              </button>

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
              >
                Masuk
              </button>

              <div className="submit_line text-center my-4">
                <p className="text-sm text-gray-600">atau</p>
              </div>
              <button
                type="button"
                className="w-full bg-white hover:bg-gray-100 text-gray-700 font-bold py-2 px-4 rounded border border-gray-300 shadow-sm focus:outline-none focus:shadow-outline flex items-center justify-center"
              >
                <img
                  src={googleIcon}
                  alt="Google Icon"
                  className="w-5 h-5 mr-2"
                />
                Daftar dengan Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
