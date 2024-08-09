import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import HomePage from "./components/HomePage";
import Kategori from "./components/kategori";
import ItemDetail from "./components/itemDetail";
import Footer from "./components/Footer";

import Pembayaran from "./components/payment/pembayaran";
import Pembayaran2 from "./components/payment/pembayaran2";
import Pembayaran3 from "./components/payment/pembayaran3";
import Pembayaran4 from "./components/payment/pembayaran4";
import Order from "./components/order/order";
import Order3 from "./components/order/order3";
import Invoice from "./components/order/invoice";
import Pagination from "./components/Pagination";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/kategori" element={<Kategori />} />
      <Route path="/itemDetail/:id" element={<ItemDetail />} />
      <Route path="/payment/pembayaran" element={<Pembayaran />} />
      <Route path="/payment/pembayaran2" element={<Pembayaran2 />} />
      <Route path="/payment/pembayaran3" element={<Pembayaran3 />} />
      <Route path="/payment/pembayaran4" element={<Pembayaran4 />} />
      <Route path="/order" element={<Order />} />
      <Route path="/order/order3" element={<Order3 />} />
      <Route path="/order/invoice" element={<Invoice />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/pagination" element={<Pagination />} />
    </Routes>
  );
};

export default App;
