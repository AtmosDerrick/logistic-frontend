import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";

function Menu({ functionality, setFunctionality }) {
  const { userInfo, setToken } = useContext(UserContext);

  const viewDetail = (type) => {
    setFunctionality(type);
  };

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      const userInfo = await axios.post("/auth/logout/");
      setToken("");

      // setLoggedIn(false);
    } catch (e) {
      // setCatchPage(true);
    }
  };

  const buttonClass =
    "cursor-pointer hover:shadow-lg bg-white text-primary font-medium p-2  mb-8 border-l-4  border-lighter rounded-r-full";

  // const ButtonClickActive = (action) => {
  //   switch (action) {
  //     case "dashboard":
  //       setButtonClick("dashboard");
  //       break;
  //     case "users":
  //       setButtonClick("users");
  //       break;
  //     case "bookings":
  //       setButtonClick("bookings");
  //       break;
  //     case "services":
  //       setButtonClick("services");
  //       break;
  //     case "reports":
  //       setButtonClick("reports");
  //       break;
  //     case "coupons":
  //       setButtonClick("coupons");
  //       break;
  //     case "jobs":
  //       setButtonClick("jobs");
  //       break;
  //     case "ads":
  //       setButtonClick("ads");
  //       break;
  //     default:
  //       setButtonClick("dashboard");
  //   }
  // };
  return (
    <div className="w-full bg-gradient-to-b from-primary to-darkprimary  py-4 px-1 rounded-2xl h-[90vh]">
      <ul className="text-white text-lg font-semibold">
        <li className="flex justify-center">
          <div>
            <div className="rounded-full bg-primary p-2 border-4 border-white overflow-hidden w-18 text-white flex justify-center items-center h-18">
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
        </li>
        <li className="flex justify-center mb-4">
          <div className="text-center">
            <div className="pt-4">
              {userInfo.first_name} {userInfo.last_name}
            </div>
            <div className="text-base font-medium text-gray-100 mb-2">
              {userInfo.location}
            </div>
          </div>
        </li>
        <li
          className={buttonClass}
          onClick={() => {
            viewDetail("view");
          }}>
          Recieved Items
        </li>
        <li
          className={buttonClass}
          onClick={() => {
            viewDetail("create");
          }}>
          Create Order
        </li>

        <li
          className={buttonClass}
          onClick={() => {
            viewDetail("shipped");
          }}>
          Shipped
        </li>
        <li
          className={buttonClass}
          onClick={() => {
            viewDetail("Delivered");
          }}>
          Arrivals
        </li>
        <li
          className={buttonClass}
          onClick={() => {
            viewDetail("setting");
          }}>
          Deliver Item
        </li>

        <button
          className="text-white w-full text-center hover:opacity-50 hover:cursor-pointer mt-12"
          onClick={handleLogout}>
          Logout
        </button>
      </ul>
    </div>
  );
}

export default Menu;
