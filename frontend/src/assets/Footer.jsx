// mengimporkomponen yang diperlukan
import logoWeb from "./../assets/Logo-black.png";
import "../output.css";

// Komponen Footer
function Footer() {
  return (
    // Bagian footer
    <footer className="w-full flex flex-col bg-gradient-to-b from-blue-600 to-blue-800 text-white">
      <img src={logoWeb} alt="Logo" className="w-44 ml-10 pt-5" />

      {/* Garis pemisah tipis */}
      <hr className="my-4 border-t border-white/50 w-full" />

      <div className="ml-10 mb-4">
        <h3 className="text-2xl font-bold mb-2">Tim Kami</h3>
        <ul className="space-y-1">
          <li>
            <a
              href="https://www.instagram.com/yolawardani_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yola Wardani - UI/UX Designer
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/satriafarel30/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Satria Farel Cipta Permata - Frontend Developer
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/husniaja211/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Husni Mubarak - Backend Developer
            </a>
          </li>
        </ul>
      </div>

      {/* Garis pemisah tipis kedua */}
      <hr className="border-t border-white/50 w-full" />

      {/* Hak cipta di tengah */}
      <p className="text-center py-4">
        Hak Cipta © 2025 AlurKerja. Semua Hak Dilindungi.
      </p>
    </footer>
  );
}

// Ekspor komponen Footer untuk digunakan di file lain
export default Footer;
