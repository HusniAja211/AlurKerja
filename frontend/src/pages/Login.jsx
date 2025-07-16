import { Link } from "react-router-dom";
import "./../index.css";

function Login() {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center text-black h-screen bg-gradient-to-r from-blue-500 to-blue-800"
        style={{ width: "100%" }}
      >
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="border border-gray-300 p-2 w-full rounded"
                type="email"
                id="email"
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
                required
              />
            </div>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
