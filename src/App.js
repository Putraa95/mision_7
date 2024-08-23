import React from "react";
import { Routes, Route } from "react-router-dom";
//auth
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";
import ForgotPasswordPage from "./components/auth/ForgotPasswordPage";
//home
import HomePage from "./components/home/HomePage";
import Kategori from "./components/home/kategori";
import ItemDetail from "./components/home/itemDetail";

import Footer from "./components/item/Footer";

import PaymentOverview from "./components/payment/PaymentOverview";
import PaymentDetails from "./components/payment/PaymentDetails";
import PaymentConfirmation from "./components/payment/PaymentConfirmation";
import PaymentSummary from "./components/payment/PaymentSummary";
import OrderProcessing from "./components/order/OrderProcessing";
import OrderConfirmation from "./components/order/OrderConfirmation";
import OrderComplete from "./components/order/OrderComplete";
import Invoice from "./components/order/invoice/invoice";
import Invoice2 from "./components/order/invoice/invoiceOrderComplete";
import Pagination from "./components/item/Pagination";
import ClassroomEntry from "./components/classroomAcces/ClaasroomEntry";
import ClassroomQuiz from "./components/classroomAcces/ClassroomQuiz";
import Question from "./components/classroomAcces/classroomQuestion/Question";
import QuestionNavigation from "./components/classroomAcces/classroomQuestion/QuestionNavigation";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/kategori" element={<Kategori />} />
      <Route path="/itemDetail/:id" element={<ItemDetail />} />
      <Route path="/payment/overview" element={<PaymentOverview />} />
      <Route path="/payment/details" element={<PaymentDetails />} />
      <Route path="/payment/confirmation" element={<PaymentConfirmation />} />
      <Route path="/payment/summary" element={<PaymentSummary />} />
      <Route path="/order/processing" element={<OrderProcessing />} />
      <Route path="/order/confirmation" element={<OrderConfirmation />} />
      <Route path="/order/complete" element={<OrderComplete />} />
      <Route path="/classroomAcces/Entry" element={<ClassroomEntry />} />
      <Route path="/classroomAcces/quiz" element={<ClassroomQuiz />} />
      <Route
        path="/classroomAcces/ClassroomQuestion/Question"
        element={<Question />}
      />
      <Route
        path="/classroomAcces/ClassroomQuestion/Questionnavigation"
        element={<QuestionNavigation />}
      />
      <Route path="/order/invoice" element={<Invoice />} />
      <Route path="/order/invoice2" element={<Invoice2 />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/pagination" element={<Pagination />} />
    </Routes>
  );
};

export default App;
