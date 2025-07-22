// mengimpor komponen yang diperlukan
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import logoWeb from "./../assets/Logo.png";
import Sidebar from "../component/Sidebar";

// Halaman Dashboard
function Dashboard() {
    return (
        <>
            {/* Bagian utama konten halaman */}
            <div className="container flex w-screen h-screen bg-gray-100">
                <Sidebar />
                <div className="main-content flex bg-red-500 w-full">
                    p
                </div>
                <div className="right-sidebar flex bg-blue-600 w-1/4">
                    p
                </div>
            </div>
        </>
    );
}

export default Dashboard;