import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import HomePage from "./components/HomePage";
import Kategori from "./components/kategori";
import ItemDetail from "./components/itemDetail";
import Pembayaran from "./components/payment/pembayaran";
import Footer from "./components/Footer";
import Pembayaran2 from "./components/payment/pembayaran2";
import Pembayaran3 from "./components/payment/pembayaran3";
import Pembayaran4 from "./components/payment/pembayaran4";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/kategori" element={<Kategori />} />
      <Route path="/itemDetail/:id" element={<ItemDetail />} />
      <Route path="//:id" element={<ItemDetail />} />
      <Route path="/Footer" element={<Footer />} />
      <Route path="/payment/pembayaran" element={<Pembayaran />} />
      <Route path="/payment/pembayaran2" element={<Pembayaran2 />} />
      <Route path="/payment/pembayaran3" element={<Pembayaran3 />} />
      <Route path="/payment/pembayaran4" element={<Pembayaran4 />} />
    </Routes>
  );
};
export default App;
