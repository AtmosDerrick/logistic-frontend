import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCalendarDays,
  faChevronDown,
  faLocationDot,
  faRightFromBracket,
  faRotateRight,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import admin from "../../images/driver.jpg";

function NavBar() {
  const [buttonClick, setButtonClick] = useState("dashboard");

  return (
    <nav className="h-[10vh] bg-gray-50 flex justify-between items-center  py-4">
      <div className="w-full flex gap-4 items-center px-2">
        <div className="flex justify-start items-center   pr-8">
          <div className="w-24 h-24 bg-orange-500 rounded-2xl">
            <img src={admin} alt="admin" className="w-full h-full rounded-xl" />
          </div>
          <div className="ml-4">
            <h3 className="text-gray-600 text-base ">Super admin</h3>
            <div className="flex justify-between text-lg items-center">
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              <h3 className="text-lg font-semibold hover:cursor-pointer">
                Derrick Boakye{" "}
                <span>
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div className="   border-x-4 pl-4  pr-8">
          <h3 className="text-gray-600 text-base ">Location</h3>
          <div className="flex justify-start text-lg items-center">
            <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
            <h3 className="text-lg font-semibold">Accra, Greater Accra</h3>
          </div>
        </div>
        <div className="">
          <h3 className="text-gray-600 text-base ">Calender</h3>
          <div className="flex justify-between text-lg items-center">
            <FontAwesomeIcon icon={faCalendarDays} className="mr-2" />
            <h3 className="text-lg font-semibold">23 / 11 / 2023</h3>
          </div>
        </div>
      </div>
      <div className="w-full text-xl flex justify-end items-center gap-16 pr-12 ">
        <div title="Refresh" className="p-4">
          <FontAwesomeIcon icon={faRotateRight} />
        </div>
        <div title="Notifications" className="p-4">
          <FontAwesomeIcon icon={faBell} />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
