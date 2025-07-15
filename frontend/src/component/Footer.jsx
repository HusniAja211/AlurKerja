import logoWeb from "./../assets/Logo-black.png";
import "../output.css";

function Footer() {
  return (
    <footer
      className="footer"
      style={{
        backgroundImage: "linear-gradient(to bottom, #3164ff 0%, #1d3c99 100%)",
      }}
    >
      <img src={logoWeb} alt="Logo" className="footer-logo w-44 ml-10" />
      <hr className="footer-divider my-5" style={{ borderColor: "#081A50" }} />
      <div className="footer-links-container text-left text-white ml-10">
        <h3 className="footer-title text-2xl font-bold">Tim Kami</h3>
        <ul className="footer-links">
          <li>
            <p className="footer-link cursor-pointer">Yola Wardani - UI/UX Designer</p>
          </li>
          <li>
            <p className="footer-link cursor-pointer">
              Satria Farel Cipta Permata - Frontend Developer
            </p>
          </li>
          <li>
            <p className="footer-link cursor-pointer">Husni Mubarak - Backend Developer</p>
          </li>
        </ul>
      </div>
      <hr className="footer-divider my-5" style={{ borderColor: "#081A50" }} />
      <p className="footer-text text-center" style={{ padding: "1rem", paddingTop: "0" }}>
        Hak Cipta © 2025 AlurKerja. Semua Hak Dilindungi.
      </p>
    </footer>
  );
}

export default Footer;
