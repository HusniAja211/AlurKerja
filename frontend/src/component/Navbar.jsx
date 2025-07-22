// mengimpor komponen yang diperlukan
import logoWeb from "./../assets/Logo.png";
import { Link } from "react-router-dom";
import "./../output.css";
import "../index.css";

// Komponen Navbar
function Navbar() {
  return (
    <>
      {/* Bagian navbar */}
      <div className="navbar-container flex w-screen h-16 text-white bg-white items-center justify-between px-4 top-0 fixed">
        <div className="navbar-brand flex items-center space-x-2">
          <a href="https://vite.dev" target="_blank">
            <img src={logoWeb} className="logo w-36" alt="Logo" />
          </a>
        </div>
        <div className="navbar-links flex items-center space-x-4 mr-3">
          <ul className="flex space-x-4">
            <li>
              <Link to="/login">
                <button
                  className="text-white hover:text-blue-300 btn-masuk"
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
                  Masuk
                </button>
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                style={{
                  hover: {
                    backgroundColor: "#3164ff",
                    color: "white",
                  },
                }}
              >
                <button
                  className="hover:text-blue-300 btn-daftar rounded-2xl border bg-white"
                  style={{
                    color: "#3164ff",
                    border: "1px solid #3164ff",
                    padding: "0.50rem 1.5rem",
                    borderRadius: "2rem",
                  }}
                >
                  Daftar
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

// Ekspor komponen Navbar untuk digunakan di file lain
export default Navbar;
