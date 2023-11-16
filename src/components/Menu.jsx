import React, { useState } from "react";

function Menu({ functionality, setFunctionality }) {
  const viewDetail = (type) => {
    setFunctionality(type);
  };
  return (
    <div className="w-full bg-gradient-to-b from-primary to-darkprimary h-[70vh] p-4 rounded-2xl">
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
        <li className="flex justify-center">
          <div className="text-center">
            <div>UserName</div>
            <div className="text-base font-medium text-gray-700">
              Region - Town
            </div>
          </div>
        </li>
        <li
          className="my-6 cursor-pointer hover:opacity-60"
          onClick={() => {
            viewDetail("view");
          }}>
          View Order
        </li>
        <li
          className="my-6 cursor-pointer hover:opacity-60"
          onClick={() => {
            viewDetail("create");
          }}>
          Create Order
        </li>

        <li
          className="my-6 cursor-pointer hover:opacity-60"
          onClick={() => {
            viewDetail("shipped");
          }}>
          Shipped
        </li>
        <li
          className="my-6 cursor-pointer hover:opacity-60"
          onClick={() => {
            viewDetail("Delivered");
          }}>
          Delivered
        </li>
        <li
          className="my-6 cursor-pointer hover:opacity-60"
          onClick={() => {
            viewDetail("setting");
          }}>
          Settings
        </li>
      </ul>
    </div>
  );
}

export default Menu;
