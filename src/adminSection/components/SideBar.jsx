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

function SideBar() {
  const [dashboardIsActive, setDashboardIsActive] = useState(true);
  const [routeIsActive, setRouteIsActive] = useState(false);

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

      <div
        className="ml-8 mt-8 text-lg hover:cursor-pointer items-center"
        onClick={() => {
          setDashboardIsActive(!dashboardIsActive);
        }}>
        <div className="flex gap-2">
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
              <li className="flex gap-2 mb-6 items-center">
                <FontAwesomeIcon icon={faHouse} />
                <h2>Home</h2>
              </li>
              <li className="flex gap-2 mb-6 items-center">
                <FontAwesomeIcon icon={faBagShopping} /> <h2>Orders</h2>
              </li>
              <li className="flex gap-2 mb-6 items-center">
                <FontAwesomeIcon icon={faGetPocket} /> <h2>Arrival</h2>
              </li>
              <li className="flex gap-2 mb-6 items-center">
                <FontAwesomeIcon icon={faHouse} />
                <h2>Shipped</h2>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div>
        <div
          className="ml-8 mt-8 text-lg hover:cursor-pointer items-center"
          onClick={() => {
            setRouteIsActive(!routeIsActive);
          }}>
          <div className="flex gap-2 items-center">
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
                <li className="flex gap-2 mb-4 items-center">
                  <h2>Accra Rd</h2>
                </li>
                <li className="flex gap-2 mb-4 items-center">
                  <h2>Takoradi Rd</h2>
                </li>
                <li className="flex gap-2 mb-4 items-center">
                  <h2>Arrival</h2>
                </li>
                <li className="flex gap-2 mb-4 items-center">
                  <h2>Cape Coast Rd</h2>
                </li>
                <li className="flex gap-2 mb-4 items-center">
                  <h2>Kumansi Rd</h2>
                </li>
                <li className="flex gap-2 mb-4 items-center">
                  <h2>Tamale Rd</h2>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="ml-8 mt-8 text-lg hover:cursor-pointer items-center">
        <ul>
          <li className="flex gap-2 items-center mb-4 text-lg font-semibold">
            <FontAwesomeIcon icon={faUser} />
            <h2>Accounts</h2>
          </li>
          <li className="flex gap-2 items-center mb-4 text-lg font-semibold">
            <FontAwesomeIcon icon={faUserTie} />
            <h2>Admins</h2>
          </li>
          <li className="flex gap-2 items-center mb-4 text-lg font-semibold">
            <FontAwesomeIcon icon={faCar} />
            <h2>Drivers</h2>
          </li>
          <li className="flex gap-2 items-center mb-4 text-lg font-semibold">
            <FontAwesomeIcon icon={faRocketchat} />
            <h2>Reports</h2>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
