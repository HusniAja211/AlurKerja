// mengimpor komponen yang diperlukan
import logoWeb from "./../assets/Logo.png";
import "../output.css";
import "../index.css";
import { Link } from "react-router-dom";

// Komponen Sidebar
function Sidebar() {
  return (
    <>
      {/* Bagian sidebar */}
      <div className="container flex w-1/4 rounded-r-4xl bg-gray-200">
        <div className="sidebar-content flex flex-col items-center h-screen">
          <img src={logoWeb} alt="Logo" className="logo w-40 mt-5" />
          <nav className="nav-links w-full flex flex-col space-y-4 mt-24 text-blue-600" >
            <Link to="/dashboard" className="bg-blue-200 border-l-4 border-l-blue-700 rounded p-2" style={{ fontWeight: 900 }}>Dashboard</Link>
            <Link to="/workspace" className="hover:bg-blue-200 hover:border-l-blue-700 hover:border-l-4 rounded p-2" style={{ fontWeight: 900 }}>Workspace</Link>
            <Link to="/task" className="hover:bg-blue-200 hover:border-l-blue-700 hover:border-l-4 rounded p-2" style={{ fontWeight: 900 }}>Task</Link>
            <Link to="/jadwal" className="hover:bg-blue-200 hover:border-l-blue-700 hover:border-l-4 rounded p-2"style={{ fontWeight: 900 }}>Jadwal</Link>
            <Link to="/members" className="hover:bg-blue-200 hover:border-l-blue-700 hover:border-l-4 rounded p-2"style={{ fontWeight: 900 }}>Members</Link>
            <Link to="/statistik" className="hover:bg-blue-200 hover:border-l-blue-700 hover:border-l-4 rounded p-2" style={{ fontWeight: 900 }}>Statistik</Link>
          </nav>
          <Link to="/" className="mt-auto text-blue-600 border border-blue-600 hover:text-white hover:bg-blue-600 hover:border-white rounded-xl px-4 py-2 mb-5" style={{ fontWeight: 900 }}>Logout</Link>
        </div>
      </div>
    </>
  );
}

// Ekspor komponen Sidebar untuk digunakan di file lain
export default Sidebar;
