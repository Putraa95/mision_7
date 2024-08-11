import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import HomePage from "./components/HomePage";
import Kategori from "./components/kategori";
import ItemDetail from "./components/itemDetail";
import Footer from "./components/Footer";
import ForgotPasswordPage from "./components/ForgotPasswordPage";

import PaymentOverview from "./components/payment/PaymentOverview";
import PaymentDetails from "./components/payment/PaymentDetails";
import PaymentConfirmation from "./components/payment/PaymentConfirmation";
import PaymentSummary from "./components/payment/PaymentSummary";
import OrderProcessing from "./components/order/OrderProcessing";
import OrderConfirmation from "./components/order/OrderConfirmation";
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
      <Route path="/payment/overview" element={<PaymentOverview />} />
      <Route path="/payment/details" element={<PaymentDetails />} />
      <Route path="/payment/confirmation" element={<PaymentConfirmation />} />
      <Route path="/payment/summary" element={<PaymentSummary />} />
      <Route path="/order/processing" element={<OrderProcessing />} />
      <Route path="/order/confirmation" element={<OrderConfirmation />} />
      <Route path="/order/invoice" element={<Invoice />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/pagination" element={<Pagination />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
    </Routes>
  );
};

export default App;
