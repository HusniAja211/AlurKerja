import { useState } from "react";
import logoWeb from "./../assets/Logo.png";
import "../output.css";
import "../index.css";

function Navbar() {
  return (
    <>
      <div className="navbar-container flex w-screen h-16 text-white bg-white items-center justify-between px-4 top-0 fixed">
        <div className="navbar-brand flex items-center space-x-2">
          <a href="https://vite.dev" target="_blank">
            <img src={logoWeb} className="logo w-36" alt="Logo" />
          </a>
        </div>
        <div className="navbar-links flex items-center space-x-4 mr-3">
          <ul className="flex space-x-4">
            <li>
              <button className="text-white hover:text-blue-300 btn-masuk">
                Masuk
              </button>
            </li>
            <li>
              <button className="text-white hover:text-blue-300 btn-daftar">
                Daftar
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
