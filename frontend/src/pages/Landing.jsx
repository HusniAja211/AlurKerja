import Navbar from "./../component/navbar";
import Footer from "./../component/Footer";
import Hero from "./../assets/Hero.png";
import Hero2 from "./../assets/hero2.png";
import Section1 from "./../assets/section1.png";
import { Link } from "react-router-dom";
import "./../index.css";

function App() {
  return (
    <>
      <Navbar />
      <div
        className="app-content flex flex-wrap align-items-center justify-center rounded-4xl gap-48"
        style={{
          width: "95%",
          height: "30rem",
          margin: "2rem auto",
          marginTop: "5rem",
          backgroundImage: "linear-gradient(90deg, #3164ff 0%, #1d3c99 100%)",
        }}
      >
        <div className="hero-section flex flex-col items-center justify-center w-80">
          <h2 className="text-3xl font-bold mb-4">
            Kelola Tugas Lebih Fokus & Terstruktur
          </h2>
          <p className="text-lg mb-4">
            Kelola tugas, tim, dan jadwal kerja Anda dalam satu platform yang
            ringan, cepat, dan fleksibel.
          </p>
          <Link to="/login">
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
          </Link>
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
      <section
        className="information-section flex items-center justify-center my-5"
        style={{ width: "100%", margin: "2rem auto" }}
      >
        <div
          className="info-header flex items-center justify-center text-black"
          style={{ width: "100%", marginLeft: "5rem" }}
        >
          <div
            className="info-title my-2  flex flex-col justify-center"
            style={{ width: "40%" }}
          >
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                backgroundImage:
                  "linear-gradient(0deg, #3164ff 0%, #1d3c99 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Apa itu AlurKerja?
            </h2>
            <p>
              AlurKerja adalah platform digital untuk manajemen tugas dan
              kolaborasi tim. Anda dapat membuat workspace, mengundang anggota
              menggunakan kode unik, lalu mulai mengelola dan menyelesaikan
              tugas bersama.
            </p>
            <ul className="list-disc pl-5 mt-4 text-blue-800">
              <li>
                <strong>~</strong> Tanpa instalasi, langsung pakai.
              </li>
              <li>
                <strong>~</strong> Jadwal bekerja jadi lebih tersusun dan
                selesai
              </li>
              <li>
                <strong>~</strong> Cocok untuk organisasi kecil hingga skala
                komunitas besar
              </li>
            </ul>
          </div>
          <div
            className="info-image flex items-start justify-center"
            style={{ width: "50%" }}
          >
            <img
              src={Hero2}
              className="flex justify-center items-center"
              style={{ width: "65%", height: "500px" }}
              alt=""
            />
          </div>
        </div>
      </section>
      <section
        className="features-section flex items-center text-center justify-center my-5"
        style={{
          width: "100%",
          height: "400px",
          margin: "2rem auto",
          backgroundImage: `url(${Section1})`,
        }}
      >
        <div>
          <h2 className="text-4xl font-bold mb-4">
            Waktunya Bekerja Lebih{" "}
            <span className="text-blue-500">Teratur</span> dan{" "}
            <span className="text-blue-500">Produktif</span>
          </h2>
          <p>
            Buat workspace pertamamu secara gratis dan undang timmu dalam
            hitungan detik.
          </p>
          <Link to="/register">
            <button
              className="text-white hover:text-blue-300 btn-masuk mt-5"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #3164ff 0%, #1d3c99 100%)",
                color: "white",
                padding: "0.50rem 1.5rem",
                borderRadius: "2rem",
                fontWeight: 600,
                transition: "opacity 0.3s ease",
              }}
            >
              Daftar Sekarang
            </button>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
