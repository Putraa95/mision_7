import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import googleIcon from "../../assets/images/logo_Google/google.png";
import navIcon from "../../assets/images/navigasi.png";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate("/home");
    } else {
      alert("Email atau password tidak boleh kosong.");
    }
  };

  const handleRegisterRedirect = () => {
    navigate("/register");
  };

  const handleForgotPasswordRedirect = () => {
    navigate("/forgot-password");
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#FFE58036] font-sans">
      <nav className="bg-white shadow p-4 w-full flex items-center justify-between">
        <img src={navIcon} alt="Navigation Logo" />
      </nav>
      <div className="flex-grow flex items-center justify-center w-full">
        <div className="w-full max-w-xl mx-auto p-4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-8">
            <h1 className="text-3xl font-bold text-center py-4">
              Masuk Ke Akun
            </h1>
            <p className="text-center text-gray-600">
              Selamat datang kembali di hariesok.id
            </p>
            <form className="mt-8" onSubmit={handleLogin}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded-lg"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded-lg"
                  required
                />
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="mr-2"
                  />
                  <label htmlFor="remember" className="text-sm">
                    Ingat Saya
                  </label>
                </div>
                <button
                  type="button"
                  onClick={handleForgotPasswordRedirect}
                  className="text-sm text-black-600 hover:underline bg-transparent border-none"
                >
                  Lupa password?
                </button>
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
              >
                <span className="text-white">Masuk</span>
              </button>
              <button
                type="button"
                onClick={handleRegisterRedirect}
                className="w-full text-green-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
                style={{
                  backgroundColor: "#E2FCD9CC", // Warna default
                }}
              >
                Daftar
              </button>
              <div className="flex items-center justify-center my-4">
                <hr className="flex-grow border-gray-300" />
                <span className="mx-2 text-gray-500">atau</span>
                <hr className="flex-grow border-gray-300" />
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

export default LoginForm;
