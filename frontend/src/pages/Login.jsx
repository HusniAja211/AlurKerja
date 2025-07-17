import { Link } from "react-router-dom";
import "./../index.css";
import { FcGoogle } from "react-icons/fc";
import logoWeb from "./../assets/Logo.png";

function Login() {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center text-black h-screen bg-gradient-to-r from-blue-500 to-blue-800"
        style={{ width: "100%" }}
      >
        <div className="bg-white flex p-10 rounded-3xl shadow-md w-1/3">
          <div className="flex flex-col w-full">
            <img src={logoWeb} alt="Logo" className="mb-4 w-32" />
            <h2
              className="font-bold my-5 text-center"
              style={{ fontSize: "2rem" }}
            >
              Masuk Akun Anda
            </h2>
            <form>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="border border-gray-300 p-2 rounded"
                  type="email"
                  id="email"
                  style={{ width: "100%" }}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="border border-gray-300 p-2 w-full rounded"
                  type="password"
                  id="password"
                  style={{ width: "100%" }}
                  required
                />
              </div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <input type="checkbox" id="remember" className="mr-2" />
                  <label htmlFor="remember">Ingat Saya</label>
                </div>
                <Link
                  to="/forgot-password"
                  className="text-blue-500 hover:underline"
                >
                  Lupa Password?
                </Link>
              </div>
              <div className="flex justify-center flex-col items-center">
                <button
                  className="text-white hover:text-blue-300 btn-masuk text-center"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #3164ff 0%, #1d3c99 100%)",
                    color: "white",
                    padding: "0.50rem 2rem",
                    borderRadius: "2rem",
                    fontWeight: 600,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  Masuk
                </button>
                <p className="text-center mt-2">
                  Belum punya akun?{" "}
                  <Link to="/register" className="text-blue-900">
                    Daftar
                  </Link>
                </p>
                <div className="flex text-center flex-col justify-center my-2">
                  <p className="text-center">atau</p>
                </div>
                <button
                  className="flex justify-center items-center gap-2 text-white hover:text-blue-300 btn-daftar text-center mx-auto"
                  style={{
                    backgroundColor: "#f0f0f0",
                    color: "#3164ff",
                    border: "1px solid #3164ff",
                    padding: "0.50rem 2rem",
                    borderRadius: "2rem",
                    transition: "opacity 0.3s ease",
                  }}
                >
                  <FcGoogle size={20} /> Lanjutkan dengan Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
