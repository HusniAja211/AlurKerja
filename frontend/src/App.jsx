import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<h1>Register Page</h1>} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
}
