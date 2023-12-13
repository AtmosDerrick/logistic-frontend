import {
  faBagShopping,
  faCar,
  faChevronDown,
  faChevronRight,
  faCircle,
  faHouse,
  faUser,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Shipped from "../../components/Shipped";
import { faGetPocket, faRocketchat } from "@fortawesome/free-brands-svg-icons";

function SideBar({ buttonClick, setButtonClick }) {
  const [dashboardIsActive, setDashboardIsActive] = useState(true);
  const [routeIsActive, setRouteIsActive] = useState(false);

  const menuClass =
    "w-3/4 py-2 pl-2 rounded-xl flex gap-2 mb-4 items-center hover:bg-blue-500 hover:text-white hover:shadow-lg";

  const ButtonClickActive = (action) => {
    switch (action) {
      case "home":
        setButtonClick("home");
        break;
      case "orders":
        setButtonClick("orders");
        break;
      case "arrival":
        setButtonClick("arrival");
        break;
      case "shipped":
        setButtonClick("shipped");
        break;
      case "accra":
        setButtonClick("accra");
        break;
      case "capecoast":
        setButtonClick("capecoast");
        break;
      case "kumasi":
        setButtonClick("kumasi");
        break;
      case "takoradi":
        setButtonClick("takoradi");
        break;
      case "tamale":
        setButtonClick("tamale");
        break;
      case "accounts":
        setButtonClick("accounts");
        break;
      case "admin":
        setButtonClick("admin");
        break;
      case "reports":
        setButtonClick("repoorts");
        break;
      default:
        setButtonClick("home");
    }
  };

  return (
    <div className="shadow-md h-[100vh] adminFont ">
      <div className="flex gap-2 pt-12 text-lg ml-8 font-medium">
        <h2 className="w-full text-gray-700">Favorite </h2>
        <h2 className="w-full text-gray-300">Recent</h2>
      </div>

      <div className="ml-8 mt-8">
        <ul>
          <li className="flex gap-2 text-lg items-center font-medium  mb-8">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-sm text-gray-300"
            />
            <h2>Overview</h2>
          </li>
          <li className="flex gap-2 text-lg items-center font-medium ">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-sm text-gray-300"
            />
            <h2>Projects</h2>
          </li>
        </ul>
      </div>

      <div className=" rounded-lg ml-8 mt-8 text-lg hover:cursor-pointer items-center">
        <div
          className="flex gap-2"
          onClick={() => {
            setDashboardIsActive(!dashboardIsActive);
          }}>
          {dashboardIsActive ? (
            <FontAwesomeIcon icon={faChevronDown} />
          ) : (
            <FontAwesomeIcon icon={faChevronRight} />
          )}
          <h2>DashBoard</h2>
        </div>
        {dashboardIsActive && (
          <div className="mt-4 ml-4">
            <ul className="text-lg font-medium">
              <li
                className={menuClass}
                onClick={() => {
                  ButtonClickActive("home");
                }}>
                <FontAwesomeIcon icon={faHouse} />
                <h2>Home</h2>
              </li>
              <li
                className={menuClass}
                onClick={() => {
                  ButtonClickActive("orders");
                }}>
                <FontAwesomeIcon icon={faBagShopping} /> <h2>Orders</h2>
              </li>
              <li
                className={menuClass}
                onClick={() => {
                  ButtonClickActive("arrival");
                }}>
                <FontAwesomeIcon icon={faGetPocket} /> <h2>Arrival</h2>
              </li>
              <li
                className={menuClass}
                onClick={() => {
                  ButtonClickActive("shipped");
                }}>
                <FontAwesomeIcon icon={faHouse} />
                <h2>Shipped</h2>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div>
        <div className="ml-8 mt-8 text-lg hover:cursor-pointer items-center">
          <div
            className="flex gap-2 items-center"
            onClick={() => {
              setRouteIsActive(!routeIsActive);
            }}>
            {routeIsActive ? (
              <FontAwesomeIcon icon={faChevronDown} />
            ) : (
              <FontAwesomeIcon icon={faChevronRight} />
            )}
            <h2>In Route</h2>
          </div>
          {routeIsActive && (
            <div className="mt-4 ml-4">
              <ul className="text-lg font-medium">
                <li
                  className={menuClass}
                  onClick={() => {
                    ButtonClickActive("accra");
                  }}>
                  <h2>Accra Rd</h2>
                </li>
                <li
                  className={menuClass}
                  onClick={() => {
                    ButtonClickActive("takoradi");
                  }}>
                  <h2>Takoradi Rd</h2>
                </li>

                <li
                  className={menuClass}
                  onClick={() => {
                    ButtonClickActive("capecoast");
                  }}>
                  <h2>Cape Coast Rd</h2>
                </li>
                <li
                  className={menuClass}
                  onClick={() => {
                    ButtonClickActive("kumasi");
                  }}>
                  <h2>Kumasi Rd</h2>
                </li>
                <li
                  className={menuClass}
                  onClick={() => {
                    ButtonClickActive("tamale");
                  }}>
                  <h2>Tamale Rd</h2>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="ml-8 mt-8 text-lg hover:cursor-pointer items-center">
        <ul>
          <li
            className="flex gap-2 items-center mb-4 text-lg font-semibold"
            onClick={() => {
              ButtonClickActive("accounts");
            }}>
            <FontAwesomeIcon icon={faUser} />
            <h2>Accounts</h2>
          </li>
          <li
            className="flex gap-2 items-center mb-4 text-lg font-semibold"
            onClick={() => {
              ButtonClickActive("admin");
            }}>
            <FontAwesomeIcon icon={faUserTie} />
            <h2>Admins</h2>
          </li>

          <li
            className="flex gap-2 items-center mb-4 text-lg font-semibold"
            onClick={() => {
              ButtonClickActive("reports");
            }}>
            <FontAwesomeIcon icon={faRocketchat} />
            <h2>Reports</h2>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
