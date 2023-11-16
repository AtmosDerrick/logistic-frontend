import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="flex justify-between h-[10vh] px-2 shadow-md mb-2">
      <Link
        to="/"
        className="text-xl font-bold text-primary flex items-center cursor-pointer">
        A+ Logistic
      </Link>
      <div className="flex gap-4">
        <Link
          to={"/signin"}
          className="flex items-center text-lg font-semibold text-dark bg-transparent">
          Login
        </Link>
        <div className="flex items-center">
          <div className="rounded-full bg-primary p-2 border overflow-hidden w-10 text-white flex justify-center items-center h-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-8 h-8 relative top-1">
              <path
                fill-rule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
