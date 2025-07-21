// mengimpor komponen yang diperlukan
import { Link } from "react-router-dom";
import "./../index.css";
import { FcGoogle } from "react-icons/fc";
import logoWeb from "./../assets/Logo.png";

// Halaman Register
function Register() {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center text-black h-screen bg-gradient-to-r from-blue-500 to-blue-800"
        style={{ width: "100%" }}
      >
        <div className="bg-white flex p-10 rounded-3xl shadow-md w-5/12">
          <div className="flex flex-col w-full">
            <img src={logoWeb} alt="Logo" className="mb-4 w-32" />
            <h2
              className="font-bold my-5 text-center"
              style={{
                fontSize: "2rem",
                backgroundImage:
                  "linear-gradient(0deg, #3164ff 0%, #1d3c99 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Buat Akun Baru
            </h2>
            <form>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="input input-bordered border-slate-300 bg-white flex items-center gap-2 w-full">
                  <input
                    type="email"
                    placeholder="Masukan email Anda..."
                    id="email"
                    className="grow bg-white"
                    required
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14
               a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="input input-bordered border-slate-300 bg-white flex items-center gap-2 w-full">
                  <input
                    type="password"
                    id="password"
                    placeholder="Masukan password Anda..."
                    className="grow"
                    required
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 11c1.657 0 3-1.343 3-3V7a3 3 0 10-6 0v1
               c0 1.657 1.343 3 3 3zm0 0v4m0 4h.01M5 11h14
               a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6
               a2 2 0 012-2z"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex justify-center flex-col items-center">
                <Link to="/verify-email">
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
                    Daftar
                  </button>
                </Link>

                <p className="text-center mt-2">
                  Sudah punya akun?{" "}
                  <Link to="/login" className="text-blue-900">
                    Masuk disini
                  </Link>
                </p>
                <div className="flex flex-col my-2" style={{ width: "100%" }}>
                  <p className="divider divider-primary">atau</p>
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

// Halaman untuk verifikasi email
function VerifyEmail() {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center text-black h-screen bg-gradient-to-r from-blue-500 to-blue-800"
        style={{ width: "100%" }}
      >
        <div className="bg-white flex p-10 rounded-3xl shadow-md w-5/12">
          <div className="flex flex-col w-full">
            <img src={logoWeb} alt="Logo" className="mb-4 w-32" />
            <h2
              className="font-bold my-5 text-center"
              style={{
                fontSize: "2rem",
                backgroundImage:
                  "linear-gradient(0deg, #3164ff 0%, #1d3c99 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Verifikasi Email
            </h2>
            <p className="text-center my-4">
              Kami telah mengirimkan 4-digit kode ke [email pengguna]. Silakan
              masukkan kode tersebut untuk melanjutkan.
            </p>
            <form>
              <div className="mb-4">
                <div class="flex items-center justify-center gap-3">
                  <input
                    type="text"
                    class="w-14 h-14 text-center text-2xl font-extrabold bg-slate-100 border rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                    maxlength="1"
                    inputmode="numeric"
                    pattern="\d*"
                  />
                  <input
                    type="text"
                    class="w-14 h-14 text-center text-2xl font-extrabold bg-slate-100 border rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                    maxlength="1"
                    inputmode="numeric"
                    pattern="\d*"
                  />
                  <input
                    type="text"
                    class="w-14 h-14 text-center text-2xl font-extrabold bg-slate-100 border rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                    maxlength="1"
                    inputmode="numeric"
                    pattern="\d*"
                  />
                  <input
                    type="text"
                    class="w-14 h-14 text-center text-2xl font-extrabold bg-slate-100 border rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                    maxlength="1"
                    inputmode="numeric"
                    pattern="\d*"
                  />
                </div>
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
                  Verifikasi Email
                </button>
                <div
                  className="flex justify-between items-center my-5"
                  style={{ width: "100%" }}
                >
                  <p>
                    Kirim ulang kode <span className="text-blue-900">1:30</span>
                  </p>
                  <p>
                    Ubah email?{" "}
                    <Link to="/register" className="text-blue-900">
                      Klik disini
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

// Halaman untuk membuat kata sandi
function BuatKataSandi() {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center text-black h-screen bg-gradient-to-r from-blue-500 to-blue-800"
        style={{ width: "100%" }}
      >
        <div className="bg-white flex p-10 rounded-3xl shadow-md w-5/12">
          <div className="flex flex-col w-full">
            <img src={logoWeb} alt="Logo" className="mb-4 w-32" />
            <h2
              className="font-bold my-5 text-center"
              style={{
                fontSize: "2rem",
                backgroundImage:
                  "linear-gradient(0deg, #3164ff 0%, #1d3c99 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Buat Kata Sandi
            </h2>
            <form>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="email"
                >
                  Kata Sandi
                </label>
                <div className="input input-bordered border-slate-300 bg-white flex items-center gap-2 w-full">
                  <input
                    type="password"
                    id="password"
                    placeholder="Masukan password Anda..."
                    className="grow"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="password"
                >
                  Konfirmasi Kata Sandi
                </label>
                <div className="input input-bordered border-slate-300 bg-white flex items-center gap-2 w-full">
                  <input
                    type="password"
                    id="password"
                    placeholder="Masukan password Anda..."
                    className="grow"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-center flex-col items-center">
                <Link to="/verify-email">
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
                    Mulai
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

// Ekspor komponen untuk digunakan di file lain
export { Register, VerifyEmail, BuatKataSandi };
