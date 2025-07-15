import Navbar from "./../component/navbar";
import Footer from "./../component/Footer";
import Hero from "./../assets/Hero.png";
import { Link } from 'react-router-dom';
import "./../index.css";

function App() {
  return (
    <>
      <Navbar />
      <div
        className="app-content flex flex-wrap align-items-center justify-center rounded-4xl gap-48"
        style={{
          width: "90%",
          height: "30rem",
          backgroundImage: "linear-gradient(90deg, #3164ff 0%, #1d3c99 100%)",
          margin: "5rem", 
        }}
      >
        <div
          className="hero-section flex flex-col items-center justify-center w-80"
        >
          <h2 className="text-3xl font-bold mb-4">
            Kelola Tugas Lebih Fokus & Terstruktur
          </h2>
          <p className="text-lg mb-4">
            Kelola tugas, tim, dan jadwal kerja Anda dalam satu platform yang
            ringan, cepat, dan fleksibel.
          </p>
          <button
            className="btn-cta text-white py-2 px-6 font-semibold"
            style={{
              borderRadius: "2rem",
              backgroundColor: "#fd9f24",
              transition: "opacity 0.3s ease",
            }}
          >
            Mulai Sekarang
          </button>
        </div>
        <div
          className="hero-image flex items-center justify-center"
          style={{
            width: "30rem",
            marginTop: "1rem",
          }}
        >
          <img
            src={Hero}
            className="w-96 h-96"
            alt="Hero"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "1rem",
            }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
