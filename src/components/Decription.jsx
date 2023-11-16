import React from "react";

function Decription() {
  return (
    <div className="h-[80vh] rounded-2xl">
      <div>
        <h3 className="text-lg text-primary py-1 px-2 font-semibold">
          Item List
        </h3>
        <div>
          <ul className="flex">
            <li className="p-4 w-1/2  ">
              <div className="border-2 p-2 rounded-2xl text-center bg-gray-200">
                <div className="text-xl font-medium text-primary text-center">
                  Flat Screen Tv
                </div>
                <div className="">
                  <div>
                    <span>Box Dimension</span>
                    <br></br>
                    <span>1.2m x 0.5</span>
                  </div>

                  <div>
                    <span>Weight</span>
                    <br></br>
                    <span>12kg</span>
                  </div>
                </div>
              </div>
            </li>
            <li className="p-4 w-1/2  ">
              <div className="border-2 p-2 rounded-2xl text-center bg-gray-200">
                <div className="text-xl font-medium text-primary text-center">
                  Decorder
                </div>
                <div className="">
                  <div>
                    <span>Box Dimension</span>
                    <br></br>
                    <span>0.5m x 0.1m</span>
                  </div>

                  <div>
                    <span>Weight</span>
                    <br></br>
                    <span>0.3kg</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <ul className="px-4 bg-white">
          <li className="flex justify-between items-center py-2    my-1 border-b-2 ">
            <div className="text-gray-900 font-medium">Order Code</div>
            <div className="text-gray-500 font-medium">A+0706/123</div>
          </li>
          <li className="flex justify-between items-center py-2    my-1 border-b-2 ">
            <div className="text-gray-900 font-medium">Category</div>
            <div className="text-gray-500 font-medium">Breakable</div>
          </li>
          <li className="flex justify-between items-center py-2    my-1 border-b-2 ">
            <div className="text-gray-900 font-medium">Number of Items</div>
            <div className="text-gray-500 font-medium">5</div>
          </li>
          <li className="flex justify-between items-center py-2    my-1 border-b-2 ">
            <div className="text-gray-900 font-medium">Cost</div>
            <div className="text-gray-500 font-medium">Ghc 100</div>
          </li>
          <li className="flex justify-between items-center py-2    my-1 border-b-2 ">
            <div className="text-gray-900 font-medium">Destination</div>
            <div className="text-gray-500 font-medium">Accra</div>
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <div className="w-full text-white text-base bg-blue-500 text-center  font-medium py-2 ">
          Shipped
        </div>
      </div>
    </div>
  );
}

export default Decription;
