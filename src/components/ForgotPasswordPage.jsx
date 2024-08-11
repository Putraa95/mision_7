import React, { useState } from "react";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Simulasi reset password
    alert("Jika email terdaftar, instruksi reset password akan dikirim.");
    setEmail("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#FFE58036] font-sans">
      <div className="w-full max-w-md mx-auto p-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden p-8">
          <h1 className="text-3xl font-bold text-center py-4">
            Reset Kata Sandi
          </h1>
          <form onSubmit={handleResetPassword}>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Kirim Instruksi Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
