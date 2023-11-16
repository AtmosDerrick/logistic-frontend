import React from "react";

function ViewOrder() {
  return (
    <div>
      <div className="px-2 text-lg font-semibold text-gray-700 uppercase mt-4">
        Orders
      </div>
      <div>
        <ul className="w-full px-2 flex grid-cols-5 mt-4 ">
          <li className="w-full text-left text-gray-700 text-base">
            Order Code
          </li>
          <li className="w-full text-left text-gray-700 text-base">
            Item Type
          </li>
          <li className="w-full text-left text-gray-700 text-base">Item</li>
          <li className="w-full text-left text-gray-700 text-base">
            Destination
          </li>
          <li className="w-full text-left text-gray-700 text-base">Status</li>
        </ul>
        <ul className="w-full px-2 flex grid-cols-5 mt-4 bg-white py-2 rounded-2xl">
          <li className="w-full text-left text-gray-700 text-base">x12cde</li>
          <li className="w-full text-left text-gray-700 text-base">
            Electronics
          </li>
          <li className="w-full text-left text-gray-700 text-base">Item</li>
          <li className="w-full text-left text-gray-700 text-base">Accra</li>
          <li className="w-full text-white text-base bg-blue-400 text-center rounded-2xl font-medium ">
            Shiped
          </li>
        </ul>
        <ul className="w-full px-2 flex grid-cols-5 mt-4 bg-white py-2 rounded-2xl">
          <li className="w-full text-left text-gray-700 text-base">x12cde</li>
          <li className="w-full text-left text-gray-700 text-base">
            Electronics
          </li>
          <li className="w-full text-left text-gray-700 text-base">Item</li>
          <li className="w-full text-left text-gray-700 text-base">Accra</li>
          <li className="w-full text-white text-base bg-yellow-500 text-center rounded-2xl font-medium ">
            Recieved
          </li>
        </ul>
        <ul className="w-full px-2 flex grid-cols-5 mt-4 bg-white py-2 rounded-2xl">
          <li className="w-full text-left text-gray-700 text-base">x12cde</li>
          <li className="w-full text-left text-gray-700 text-base">
            Electronics
          </li>
          <li className="w-full text-left text-gray-700 text-base">Item</li>
          <li className="w-full text-left text-gray-700 text-base">Accra</li>
          <li className="w-full text-white text-base bg-green-600 text-center rounded-2xl font-medium ">
            Delivered
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  );
}

export default ViewOrder;
