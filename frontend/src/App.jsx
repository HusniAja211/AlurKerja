// import komponen yang diperlukan
import { Routes, Route } from "react-router-dom";
// import page yang sudah dibuat
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import {Register, VerifyEmail, BuatKataSandi } from "./pages/Register";

// Komponen utama aplikasi
export default function App() {
  return (
    // membuat route
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/forgot-password" element={<BuatKataSandi />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
}
