import { useRef, useState } from "react";
import Navbar from "./../component/Navbar";
import Footer from "./../component/Footer";
import Hero from "./../assets/Hero.png";
import Hero2 from "./../assets/hero2.png";
import Section1 from "./../assets/section1.png";
import { Link } from "react-router-dom";
import "./../index.css";

function Landing() {
  const cards = [
    {
      src: "https://picsum.photos/id/1015/600/300",
      title: "Kolaborasi Tim",
      desc: "Bekerja bersama tim jadi lebih mudah dan cepat.",
    },
    {
      src: "https://picsum.photos/id/1016/600/300",
      title: "Notifikasi Pintar",
      desc: "Dapatkan pengingat otomatis saat tugas mendekati jatuh tempo atau terjadi perubahan.",
    },
    {
      src: "https://picsum.photos/id/1018/600/300",
      title: "Statistik Proyek",
      desc: "Lihat perkembangan tugas dan performa tim.",
    },
    {
      src: "https://picsum.photos/id/1020/600/300",
      title: "Manajemen Tugas",
      desc: "Tambahkan tugas, atur prioritas, tetapkan deadline, dan ubah status (To-Do → Doing → Done).",
    },
    {
      src: "https://picsum.photos/id/1024/600/300",
      title: "Workspace Berbasis Code",
      desc: "Buat ruang kerja khusus dan bagikan dengan tim melalui kode unik. Praktis dan cepat.",
    },
  ];

  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 3;
  const maxIndex = Math.max(cards.length - visibleItems, 0);

  const handleScroll = (dir) => {
    const container = carouselRef.current;
    const item = container.querySelector(".carousel-item");
    if (!container || !item) return;

    const itemWidth = item.offsetWidth + 16; // 16px = gap-4
    let newIndex = currentIndex + dir;

    if (newIndex < 0) newIndex = 0;
    if (newIndex > maxIndex) newIndex = 0;

    container.scrollTo({
      left: newIndex * itemWidth,
      behavior: "smooth",
    });

    setCurrentIndex(newIndex);
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
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
        <div className="hero-section flex flex-col items-center justify-center w-80 text-white">
          <h2 className="text-3xl font-bold mb-4 ">
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

      {/* Info Section */}
      <section className="information-section flex items-center justify-center w-full">
        <div className="info-header flex items-center justify-center text-black w-full ml-20">
          <div className="info-title my-2 flex flex-col justify-center w-2/5">
            <h2
              className="text-transparent bg-clip-text"
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                backgroundImage:
                  "linear-gradient(0deg, #3164ff 0%, #1d3c99 100%)",
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
              <li>~ Tanpa instalasi, langsung pakai.</li>
              <li>~ Jadwal bekerja jadi lebih tersusun dan selesai</li>
              <li>
                ~ Cocok untuk organisasi kecil hingga skala komunitas besar
              </li>
            </ul>
          </div>
          <div className="info-image flex items-start justify-center w-1/2">
            <img src={Hero2} className="w-2/3 h-[500px]" alt="Hero2" />
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="features-header flex items-center justify-center text-black w-full my-5">
        <div
          className="flex flex-col justify-center items-center rounded-4xl w-full"
          style={{
            backgroundImage: "linear-gradient(90deg, #3164ff 0%, #1d3c99 100%)",
          }}
        >
          <h2 className="text-3xl font-bold mb-4 text-white mt-5">
            Fitur Utama AlurKerja
          </h2>

          <div className="max-w-6xl w-full mx-auto px-6 py-6">
            <div className=" w-full flex items-center">
              {/* Carousel */}
              <div
                ref={carouselRef}
                className="flex gap-2 overflow-x-hidden scroll-smooth mx-4"
                style={{ scrollBehavior: "smooth" }}
              >
                {cards.map((item, index) => (
                  <div
                    key={index}
                    className="carousel-item w-[320px] h-auto bg-white rounded-4xl shadow-lg p-4 flex-col flex-shrink-0"
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-48 object-cover rounded-xl mb-4"
                    />
                    <h3 className="text-xl text-center font-bold text-orange-400">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mt-3 text-justify">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-around mt-4">
              <button
                onClick={() => handleScroll(-1)}
                style={{ borderRadius: "50%" }}
                className=" bg-white text-black hover:bg-gray-200 transition"
              >
                &lt;
              </button>

              {/* Dot Indicator */}
              <div className="flex justify-center mt-4 gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                  <span
                    key={i}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      currentIndex === i ? "bg-white" : "bg-gray-400"
                    }`}
                  ></span>
                ))}
              </div>
              {/* Button Kanan */}
              <button
                onClick={() => handleScroll(1)}
                style={{ borderRadius: "50%" }}
                className=" bg-white text-black px-3 py-2 hover:bg-gray-200 transition"
              >
                &gt;
              </button>
            </div>
            {/* Button Kiri */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="features-section flex items-center text-center justify-center"
        style={{
          width: "100%",
          height: "400px",
          margin: "2rem auto",
          backgroundImage: `url(${Section1})`,
        }}
      >
        <div>
          <h2 className="text-4xl font-bold mb-4 text-white">
            Waktunya Bekerja Lebih{" "}
            <span className="text-orange-400">Teratur</span> dan{" "}
            <span className="text-orange-400">Produktif</span>
          </h2>
          <p className="text-white">
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

export default Landing;
