import Navbar from "./component/navbar";
import Hero from "./assets/Hero.png";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="app-content flex rounded-4xl gap-48">
        <div className="hero-section flex flex-col items-center justify-center">
          <h1>Kelola Tugas Lebih Fokus & Terstruktur</h1>
          <p>Kelola tugas, tim, dan jadwal kerja Anda dalam satu platform yang ringan, cepat, dan fleksibel.</p>
          <button className="btn-cta">Mulai Sekarang</button>
        </div>
        <div className="hero-image flex items-center justify-center mt-36">
          <img src={Hero} className="w-96 h-96" alt="Hero" />
        </div>
      </div>
      <footer className="footer text-center p-4 bg-blue-800 text-white mt-80">
        <p>&copy; 2023 KerjaWoi. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
